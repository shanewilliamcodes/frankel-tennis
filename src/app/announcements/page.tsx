import type { Metadata } from "next";
import { announcements } from "@/data/extras";
import { PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Announcements",
  description: "The latest announcements for Frankel Jaguars boys tennis.",
};

export default function AnnouncementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stay in the loop"
        title="Announcements"
        subtitle="Team news, reminders and important updates."
      />
      <section className="section">
        <div className="container-page max-w-3xl space-y-5">
          {announcements.map((a) => (
            <article
              key={a.title}
              className={`card p-6 ${a.pinned ? "border-l-4 border-l-[var(--royal)]" : ""}`}
            >
              <div className="flex items-center gap-3">
                {a.pinned && <Badge tone="blue">📌 Pinned</Badge>}
                <span className="text-xs text-[var(--muted)]">{a.date}</span>
              </div>
              <h2 className="mt-2 text-lg font-extrabold text-[var(--navy)]">{a.title}</h2>
              <p className="mt-2 text-[#25303f] leading-relaxed">{a.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
