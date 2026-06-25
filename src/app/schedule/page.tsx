import type { Metadata } from "next";
import { schedule, scheduleSeasonLabel } from "@/data/schedule";
import { team } from "@/data/team";
import { PageHeader } from "@/components/ui";
import { ScheduleList } from "@/components/ScheduleList";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Match schedule, practices, challenge matches and key dates for Frankel Jaguars boys tennis.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Season"
        title="Schedule & Key Dates"
        subtitle={`Every match, tournament, challenge match and practice. ${scheduleSeasonLabel}.`}
      />
      <section className="section">
        <div className="container-page space-y-6">
          {/* TeamSnap callout for players & parents */}
          <div className="rounded-xl bg-[var(--navy)] text-white p-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div>
              <p className="font-extrabold">Players & parents: this schedule also lives in TeamSnap</p>
              <p className="text-sm text-white/80">
                Get live updates, RSVPs and notifications, and home courts at {team.homeCourts}.
              </p>
            </div>
            <a
              href={team.teamSnap}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-[var(--navy)] px-5 py-2.5 text-sm font-bold hover:bg-[var(--sky)] transition-colors whitespace-nowrap"
            >
              Open in TeamSnap ↗
            </a>
          </div>

          <ScheduleList events={schedule} />
        </div>
      </section>
    </>
  );
}
