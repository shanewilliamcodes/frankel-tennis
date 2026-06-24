import type { Metadata } from "next";
import { news } from "@/data/news";
import { PageHeader, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "News & Press",
  description: "Articles and press coverage of Frankel Jaguars boys tennis.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="In the press"
        title="News & Press"
        subtitle="Coverage of the team, the coaches and the program's remarkable run — collected from around the web."
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {news.map((n) => (
              <a
                key={n.url}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  {n.tag && <Badge tone="blue">{n.tag}</Badge>}
                  <span className="text-xs text-[var(--muted)]">{n.date}</span>
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-[var(--navy)] leading-snug">{n.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted)] flex-1">{n.summary}</p>
                <span className="mt-4 text-sm font-bold text-[var(--royal)]">{n.source} ↗</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-[var(--muted)]">
            Know of an article we&apos;re missing? Send the link and it&apos;ll be added here.
          </p>
        </div>
      </section>
    </>
  );
}
