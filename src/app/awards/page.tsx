import type { Metadata } from "next";
import { awards, championships } from "@/data/extras";
import { PageHeader, Badge, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Awards & Honors",
  description: "Championships, coaching honors and individual achievements for Frankel Jaguars boys tennis.",
};

const boysTennisTitles = championships.filter((c) => c.highlight);

export default function AwardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trophy case"
        title="Awards & Honors"
        subtitle="A concise record of the program's championships, coach recognition and standout player achievements."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-4">
            <HonorStat value="11" label="MHSAA State Finals appearances" />
            <HonorStat value="2" label="MHSAA Regional championships" />
            <HonorStat value="7th" label="Best state finish, 2023" />
            <HonorStat value="4" label="Boys tennis school titles listed" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {awards.map((cat) => (
              <section key={cat.title} className="card p-6">
                <p className="eyebrow">{cat.title}</p>
                <ul className="mt-5 space-y-4 text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[#25303f]">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--royal)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-[var(--line)]">
        <div className="container-page">
          <SectionHeading eyebrow="Boys tennis titles" title="Program milestones">
            The boys tennis entries from Frankel&apos;s school-wide championship history.
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {boysTennisTitles.map((title) => (
              <article key={`${title.year}-${title.title}`} className="card p-5">
                <p className="text-3xl font-extrabold text-[var(--navy)]">{title.year}</p>
                <h2 className="mt-3 font-extrabold leading-snug text-[#25303f]">{title.title}</h2>
                <div className="mt-4">
                  <Badge tone="blue">Boys Tennis</Badge>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="School-wide championship history" title="Frankel title archive">
            School-wide MHSAA and Catholic League titles compiled by Athletic Director Robert Walker. Boys tennis
            titles are highlighted for quick scanning.
          </SectionHeading>
          <div className="overflow-x-auto rounded-lg border border-[var(--line)] bg-white">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-[var(--line)] bg-slate-50 text-left text-[var(--muted)]">
                  <th className="px-4 py-3 font-semibold">Year</th>
                  <th className="px-4 py-3 font-semibold">Title</th>
                  <th className="px-4 py-3 font-semibold">Sport</th>
                </tr>
              </thead>
              <tbody>
                {championships.map((c) => (
                  <tr
                    key={`${c.year}-${c.title}`}
                    className={`border-b border-[var(--line)] last:border-0 ${c.highlight ? "bg-[var(--sky)]/55" : ""}`}
                  >
                    <td className="px-4 py-3 font-extrabold text-[var(--navy)]">{c.year}</td>
                    <td className="px-4 py-3 text-[#25303f]">{c.title}</td>
                    <td className="px-4 py-3">
                      {c.highlight ? <Badge tone="blue">{c.sport}</Badge> : <span className="text-[var(--muted)]">{c.sport}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function HonorStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card p-5">
      <p className="text-3xl font-extrabold text-[var(--navy)]">{value}</p>
      <p className="mt-2 stat-label">{label}</p>
    </div>
  );
}
