import type { Metadata } from "next";
import { rulesSections, rulesGlossary, rulesLinks } from "@/data/extras";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Rules & Format",
  description:
    "A plain-language guide to how high school tennis matches and the MHSAA Division 4 state series work.",
};

export default function RulesPage() {
  return (
    <>
      <PageHeader
        eyebrow="New to high school tennis?"
        title="Rules & Format"
        subtitle="A quick, plain-language guide for players, parents and fans — how matches are scored and how a team gets to the State Finals."
      />
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="mb-8 text-[15px] leading-relaxed text-[#25303f]">
            Never watched a tennis match before? No problem. This walks through it from the very beginning — the
            quirky scoring, what those &quot;No. 1 singles&quot; labels mean, and how a team actually wins — in order,
            so each part builds on the last.
          </p>
          <div className="space-y-8">
            {rulesSections.map((sec) => (
              <div key={sec.heading} className="card p-6">
                <h2 className="text-lg font-extrabold text-[var(--navy)]">{sec.heading}</h2>
                {sec.intro && <p className="mt-2 text-[15px] leading-relaxed text-[#25303f]">{sec.intro}</p>}
                <ul className="mt-4 space-y-2.5">
                  {sec.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-[15px] text-[#25303f]">
                      <span aria-hidden className="mt-1 text-[var(--royal)]">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 card p-6">
            <h2 className="text-lg font-extrabold text-[var(--navy)]">Quick glossary</h2>
            <dl className="mt-4 divide-y divide-[var(--line)]">
              {rulesGlossary.map((g) => (
                <div key={g.term} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:gap-4">
                  <dt className="font-bold text-[var(--navy)] sm:w-40 sm:shrink-0">{g.term}</dt>
                  <dd className="text-[15px] text-[#25303f]">{g.definition}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 rounded-xl bg-[var(--navy)] text-white p-6">
            <h2 className="font-extrabold">Official sources</h2>
            <p className="mt-1 text-sm text-white/80">
              For the complete, authoritative rules and the current season&apos;s regulations:
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {rulesLinks.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-sm font-semibold transition-colors"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
