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
            <HonorStat value="4" label="Larry Stark Regional Coach of the Year honors" />
          </div>

          <div className="mt-8 rounded-lg border border-[var(--line)] bg-white p-6 shadow-sm">
            <p className="eyebrow">Coach recognition</p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[var(--navy)]">
                  Larry Stark has been named Regional Coach of the Year at both Frankel and West Bloomfield.
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-[var(--muted)]">
                  MHSTeCA records list Stark as a Regional Coach of the Year at Frankel in 2016, 2022 and 2025,
                  plus an earlier West Bloomfield honor in 2011. That recognition matches the program&apos;s arc:
                  Frankel&apos;s first state appearances, two regional championships and a steady run of Division 4
                  postseason qualification.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm font-extrabold text-[var(--navy)]">
                {["2011", "2016", "2022", "2025"].map((year) => (
                  <div key={year} className="rounded-lg bg-[var(--sky)] px-4 py-3 text-center">
                    {year}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
