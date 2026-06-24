import type { Metadata } from "next";
import { rulesSections, rulesLinks } from "@/data/extras";
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
          <div className="space-y-8">
            {rulesSections.map((sec) => (
              <div key={sec.heading} className="card p-6">
                <h2 className="text-lg font-extrabold text-[var(--navy)]">{sec.heading}</h2>
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
