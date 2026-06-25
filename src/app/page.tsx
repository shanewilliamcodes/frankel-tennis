import Link from "next/link";
import Image from "next/image";
import { team, programStats } from "@/data/team";
import { heroPhoto } from "@/data/photos";
import { seasons } from "@/data/seasons";
import type { ScheduleEvent } from "@/data/schedule";
import { news } from "@/data/news";
import { announcements } from "@/data/extras";
import { Badge, SectionHeading } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { getScheduleData } from "@/lib/teamSnapSchedule";

export const revalidate = 900;

export default async function Home() {
  const scheduleData = await getScheduleData();
  const schedule = scheduleData.events;
  const latest = seasons[0];
  const pinned = announcements.filter((a) => a.pinned);
  const topNews = news.slice(0, 3);
  const nextEvent = findNextEvent(schedule);
  const stateFinals = schedule.find((event) => event.title.includes("State Finals"));

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--navy)] text-white">
        <Image
          src={heroPhoto}
          alt="Frankel Jaguars boys tennis team"
          fill
          sizes="100vw"
          className="object-cover object-[center_45%] opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,51,.96)_0%,rgba(6,27,51,.82)_44%,rgba(6,27,51,.36)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--navy)] to-transparent" />

        <div className="container-page relative py-16 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Logo size={34} light />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--sky)]">
                  {team.schoolName} · {team.mascot}
                </span>
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
                Frankel Jaguars
                <span className="block text-[var(--sky)]">Boys Tennis</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/86 leading-relaxed">{team.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/schedule" className="button-primary">
                  View Schedule
                </Link>
                <Link href="/opponents" className="button-secondary">
                  Scout Opponents
                </Link>
                <Link href="/history" className="button-secondary">
                  History &amp; Stats
                </Link>
              </div>
            </div>

            <aside className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--sky)]">
                Season command center
              </p>
              <h2 className="mt-2 text-2xl font-extrabold">{team.tagline}</h2>
              <div className="mt-5 space-y-4">
                {nextEvent && (
                  <CommandRow
                    label="Next team date"
                    value={nextEvent.title}
                    meta={`${formatEventDate(nextEvent.date)}${nextEvent.time ? ` · ${nextEvent.time}` : ""}`}
                  />
                )}
                <CommandRow label="Latest season" value={latest.headline} meta={latest.dualRecord ? `${latest.dualRecord} dual record` : undefined} />
                {stateFinals && (
                  <CommandRow
                    label="Postseason target"
                    value={stateFinals.title}
                    meta={`${formatEventDate(stateFinals.date)} · ${stateFinals.location}`}
                  />
                )}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <a href={team.teamSnap} target="_blank" rel="noopener noreferrer" className="button-primary text-center">
                  TeamSnap
                </a>
                <a href={team.teamStore} target="_blank" rel="noopener noreferrer" className="button-secondary text-center">
                  Team Store
                </a>
              </div>
            </aside>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {programStats.map((s) => (
              <div key={s.label} className="rounded-lg border border-white/20 bg-white/95 p-4 text-[var(--navy)] shadow-xl">
                <div className="text-2xl sm:text-3xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pinned.length > 0 && (
        <section className="section">
          <div className="container-page">
            {pinned.map((a) => (
              <div
                key={a.title}
                className="card card-hover p-6 sm:p-8 border-l-4 border-l-[var(--royal)]"
              >
                <div className="flex items-center gap-3">
                  <Badge tone="blue">Announcement</Badge>
                  <span className="text-xs text-[var(--muted)]">{a.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold text-[var(--navy)]">{a.title}</h2>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">{a.body}</p>
                <Link href="/announcements" className="mt-4 inline-block text-sm font-bold text-[var(--royal)] hover:underline">
                  All announcements
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="section bg-white border-y border-[var(--line)]">
        <div className="container-page">
          <SectionHeading eyebrow="Latest season" title={`${latest.year}: ${latest.headline}`}>
            {latest.dualRecord ? `Dual-match record: ${latest.dualRecord}.` : undefined}
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="card p-6">
              <ul className="space-y-3">
                {latest.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[#25303f]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-extrabold text-[var(--navy)]">Season resume</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {latest.league && <Row label="League" value={latest.league} />}
                {latest.regional && <Row label="Regional" value={latest.regional} />}
                {latest.state && <Row label="State Finals" value={latest.state} />}
              </dl>
              <Link
                href="/history"
                className="mt-6 inline-block text-sm font-bold text-[var(--royal)] hover:underline"
              >
                See the full record book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Explore the program" title="Built for players and parents" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <QuickCard href="/schedule" index="01" title="Schedule" desc="Matches, practices, challenge matches and postseason dates." />
            <QuickCard href="/roster" index="02" title="Roster & Player Profiles" desc="Current players, 2025 stats and career highlights where available." />
            <QuickCard href="/opponents" index="03" title="Opponent Scouting" desc="Rosters, 2025 records and year-by-year results vs. Frankel." />
            <QuickCard href="/history" index="04" title="History & Stats" desc="Season records, lineups, results and the Division 4 picture." />
            <QuickCard href="/rules" index="05" title="Rules & Format" desc="Flights, dual meets, tournaments, regionals and State Finals." />
            <QuickCard href="/photos" index="06" title="Photos" desc="A clean gallery of team photos and match-day moments." />
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-[var(--line)]">
        <div className="container-page">
          <SectionHeading eyebrow="In the press" title="Latest news" />
          <div className="grid gap-5 md:grid-cols-3">
            {topNews.map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-5 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  {n.tag && <Badge tone="gray">{n.tag}</Badge>}
                  <span className="text-xs text-[var(--muted)]">{n.date}</span>
                </div>
                <h3 className="mt-3 font-bold text-[var(--navy)] leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] flex-1">{n.summary}</p>
                <span className="mt-3 text-xs font-bold text-[var(--royal)]">{n.source}</span>
              </a>
            ))}
          </div>
          <Link href="/news" className="mt-6 inline-block text-sm font-bold text-[var(--royal)] hover:underline">
            All news
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <a
            href={team.teamSnap}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-8 flex flex-col items-start gap-3"
          >
            <p className="eyebrow">Players & parents</p>
            <h2 className="text-2xl font-extrabold text-[var(--navy)]">TeamSnap</h2>
            <p className="text-[var(--muted)]">
              Live schedule updates, availability, team messaging and day-to-day logistics live in TeamSnap.
            </p>
            <span className="mt-2 button-dark">Open TeamSnap</span>
          </a>

          <a
            href={team.teamStore}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-8 flex flex-col items-start gap-3"
          >
            <p className="eyebrow">Team gear</p>
            <h2 className="text-2xl font-extrabold text-[var(--navy)]">Official Team Store</h2>
            <p className="text-[var(--muted)]">
              Jaguars hats, hoodies, tees and more through the Frankel BSN Sports storefront.
            </p>
            <span className="mt-2 button-dark">Shop the Store</span>
          </a>
        </div>
      </section>
    </>
  );
}

function formatEventDate(dateString: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (!match) return dateString;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function findNextEvent(events: ScheduleEvent[]) {
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

  return events.find((event) => {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(event.date);
    if (!match) return true;
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime() >= startOfToday;
  }) ?? events[0];
}

function CommandRow({ label, value, meta }: { label: string; value: string; meta?: string }) {
  return (
    <div className="border-t border-white/15 pt-4 first:border-t-0 first:pt-0">
      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-white/55">{label}</p>
      <p className="mt-1 font-bold leading-snug text-white">{value}</p>
      {meta && <p className="mt-1 text-sm text-white/70">{meta}</p>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-2 last:border-0">
      <dt className="text-[var(--muted)] font-semibold">{label}</dt>
      <dd className="text-right text-[var(--navy)] font-semibold">{value}</dd>
    </div>
  );
}

function QuickCard({ href, title, desc, index }: { href: string; title: string; desc: string; index: string }) {
  return (
    <Link href={href} className="card card-hover p-6 block">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[var(--royal)]">{index}</p>
        <span className="text-sm font-bold text-[var(--royal)]">Open</span>
      </div>
      <h3 className="mt-5 font-extrabold text-[var(--navy)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{desc}</p>
    </Link>
  );
}
