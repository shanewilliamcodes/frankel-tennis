import { schedule as fallbackSchedule, type EventType, type ScheduleEvent } from "@/data/schedule";
import { opponents } from "@/data/opponents";

const FEED_REVALIDATE_SECONDS = 15 * 60;
const TEAMSNAP_TEAM_NAME = "FJA Boys Tennis";

type IcsEvent = {
  summary?: string;
  location?: string;
  description?: string;
  dtstart?: IcsDate;
  dtend?: IcsDate;
  status?: string;
};

type IcsDate = {
  date: string;
  time?: string;
  sort: number;
};

export type ScheduleSource = "teamsnap" | "fallback";

export type ScheduleData = {
  events: ScheduleEvent[];
  source: ScheduleSource;
  syncedAt?: string;
  error?: string;
};

const opponentAliases = opponents.flatMap((opponent) => [
  { name: opponent.name.toLowerCase(), key: opponent.key, label: opponent.name },
  ...(opponent.aliases ?? []).map((alias) => ({
    name: alias.toLowerCase(),
    key: opponent.key,
    label: opponent.name,
  })),
]);

export async function getScheduleData(): Promise<ScheduleData> {
  const feedUrl = process.env.TEAMSNAP_ICAL_URL;

  if (!feedUrl) {
    return {
      events: fallbackSchedule,
      source: "fallback",
      error: "TeamSnap calendar feed is not configured yet.",
    };
  }

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: FEED_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`TeamSnap calendar returned ${response.status}`);
    }

    const ics = await response.text();
    const events = parseTeamSnapIcs(ics);

    if (events.length === 0) {
      throw new Error("TeamSnap calendar did not include any readable events.");
    }

    return {
      events,
      source: "teamsnap",
      syncedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      events: fallbackSchedule,
      source: "fallback",
      error: error instanceof Error ? error.message : "TeamSnap calendar could not be read.",
    };
  }
}

export function parseTeamSnapIcs(ics: string): ScheduleEvent[] {
  return getIcsEventBlocks(ics)
    .map(parseIcsBlock)
    .filter((event) => event.status?.toUpperCase() !== "CANCELLED")
    .filter(isBoysTennisEvent)
    .map(toScheduleEvent)
    .filter((event): event is ScheduleEvent & { _sort: number } => Boolean(event))
    .sort((a, b) => a._sort - b._sort)
    .map(stripSortKey);
}

function stripSortKey(event: ScheduleEvent & { _sort: number }): ScheduleEvent {
  return {
    date: event.date,
    type: event.type,
    title: event.title,
    opponent: event.opponent,
    opponentKey: event.opponentKey,
    location: event.location,
    address: event.address,
    home: event.home,
    time: event.time,
    result: event.result,
    note: event.note,
  };
}

function getIcsEventBlocks(ics: string) {
  const unfolded = ics.replace(/\r?\n[ \t]/g, "");
  const blocks = unfolded.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) ?? [];
  return blocks.map((block) => block.split(/\r?\n/).filter(Boolean));
}

function parseIcsBlock(lines: string[]): IcsEvent {
  const event: IcsEvent = {};

  for (const line of lines) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const rawKey = line.slice(0, separator);
    const value = decodeIcsText(line.slice(separator + 1));
    const [key, ...params] = rawKey.split(";");
    const upperKey = key.toUpperCase();

    if (upperKey === "SUMMARY") event.summary = value;
    if (upperKey === "LOCATION") event.location = value;
    if (upperKey === "DESCRIPTION") event.description = value;
    if (upperKey === "STATUS") event.status = value;
    if (upperKey === "DTSTART") event.dtstart = parseIcsDate(value, params);
    if (upperKey === "DTEND") event.dtend = parseIcsDate(value, params);
  }

  return event;
}

function toScheduleEvent(event: IcsEvent): (ScheduleEvent & { _sort: number }) | null {
  if (!event.summary || !event.dtstart) return null;

  const title = cleanTitle(event.summary);
  const type = inferEventType(title, event.description);
  const opponent = findOpponent(title);
  const location = getLocation(event);
  const note = event.description ? cleanDescription(event.description) : undefined;
  const time = event.dtstart.time
    ? formatTimeRange(event.dtstart.time, event.dtend?.date === event.dtstart.date ? event.dtend?.time : undefined)
    : undefined;

  return {
    date: event.dtstart.date,
    type,
    title,
    opponent: opponent?.label,
    opponentKey: opponent?.key,
    location: location.name,
    address: location.address,
    time,
    note,
    _sort: event.dtstart.sort,
  };
}

function parseIcsDate(value: string, params: string[]): IcsDate | undefined {
  const valueTypeDate = params.some((param) => param.toUpperCase() === "VALUE=DATE");
  const dateMatch = /^(\d{4})(\d{2})(\d{2})$/.exec(value);
  if (valueTypeDate || dateMatch) {
    const match = dateMatch;
    if (!match) return undefined;
    const date = `${match[1]}-${match[2]}-${match[3]}`;
    return { date, sort: new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime() };
  }

  const dateTimeMatch = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/.exec(value);
  if (!dateTimeMatch) return undefined;

  const [, year, month, day, hour, minute, second, utcMarker] = dateTimeMatch;
  const date =
    utcMarker === "Z"
      ? new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)))
      : new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));

  const localYear = date.getFullYear();
  const localMonth = String(date.getMonth() + 1).padStart(2, "0");
  const localDay = String(date.getDate()).padStart(2, "0");
  const localHour = date.getHours();
  const localMinute = date.getMinutes();

  return {
    date: `${localYear}-${localMonth}-${localDay}`,
    time: formatClock(localHour, localMinute),
    sort: date.getTime(),
  };
}

function formatClock(hour24: number, minute: number) {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour = hour24 % 12 || 12;
  const minutes = String(minute).padStart(2, "0");
  return `${hour}:${minutes} ${period}`;
}

function formatTimeRange(start: string, end?: string) {
  if (!end || end === start) return start;
  const startPeriod = start.endsWith(" AM") ? "AM" : start.endsWith(" PM") ? "PM" : "";
  const endPeriod = end.endsWith(" AM") ? "AM" : end.endsWith(" PM") ? "PM" : "";

  if (startPeriod && startPeriod === endPeriod) {
    return `${start.replace(` ${startPeriod}`, "")} – ${end}`;
  }

  return `${start} – ${end}`;
}

function inferEventType(title: string, description?: string): EventType {
  const haystack = `${title} ${description ?? ""}`.toLowerCase();
  const normalizedTitle = title.trim().toLowerCase();

  if (haystack.includes("inter-team") || haystack.includes("inter- team") || haystack.includes("inter-squad")) {
    return "Practice";
  }

  if (haystack.includes("regional") || haystack.includes("state final") || haystack.includes("tournament") || haystack.includes("invite")) {
    return "Tournament";
  }

  if (haystack.includes("challenge")) return "Challenge Match";
  if (haystack.includes("practice")) return "Practice";
  if (
    haystack.includes("match") ||
    normalizedTitle.startsWith("vs ") ||
    normalizedTitle.startsWith("at ") ||
    normalizedTitle.includes(" vs ") ||
    normalizedTitle.includes(" at ")
  ) {
    return "Match";
  }

  return "Key Date";
}

function findOpponent(title: string) {
  const normalized = title.toLowerCase();
  return opponentAliases
    .filter((opponent) => normalized.includes(opponent.name))
    .sort((a, b) => b.name.length - a.name.length)[0];
}

function cleanTitle(title: string) {
  return title
    .replace(new RegExp(`^${TEAMSNAP_TEAM_NAME}\\s*[-:–—]?\\s*`, "i"), "")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanLocation(location: string) {
  return location.replace(/\s+/g, " ").trim();
}

function getLocation(event: IcsEvent) {
  const rawLocation = event.location ? cleanLocation(event.location) : undefined;
  const describedLocation = event.description ? extractDescribedLocation(event.description) : undefined;

  if (describedLocation && rawLocation && rawLocation !== describedLocation) {
    return { name: describedLocation, address: looksLikeAddress(rawLocation) ? rawLocation : undefined };
  }

  if (rawLocation) {
    return { name: rawLocation, address: undefined };
  }

  return { name: describedLocation, address: undefined };
}

function extractDescribedLocation(description: string) {
  const match = /Location:\s*([^(]+?)(?:\s*\(|$)/i.exec(description);
  return match ? cleanLocation(match[1]) : undefined;
}

function looksLikeAddress(value: string) {
  return /^\d/.test(value) || /\b(MI|Michigan)\b/i.test(value) || /\b(Rd|Road|St|Street|Ave|Drive|Dr|Blvd|Court|Ct)\b/i.test(value);
}

function cleanDescription(description: string) {
  const arrival = /Arrival Time:\s*([0-9]{1,2}:[0-9]{2}\s*[AP]M)/i.exec(description);
  if (arrival) return `Arrive ${arrival[1].replace(/\s+/g, " ")}.`;

  const cleaned = description
    .replace(/https?:\/\/\S+/g, "")
    .replace(/Location:\s*/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  return cleaned.length > 180 ? `${cleaned.slice(0, 177).trim()}...` : cleaned || undefined;
}

function isBoysTennisEvent(event: IcsEvent) {
  return event.summary?.toLowerCase().includes(TEAMSNAP_TEAM_NAME.toLowerCase()) ?? false;
}

function decodeIcsText(value: string) {
  return value
    .replace(/\\n/gi, " ")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}
