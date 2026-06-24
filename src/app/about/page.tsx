import type { Metadata } from "next";
import { team } from "@/data/team";
import { coaches } from "@/data/coaches";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Frankel Jewish Academy boys tennis and its coaches, Larry and Monica Stark.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="About the Team"
        subtitle={`${team.schoolName} · ${team.mascot} · ${team.division}`}
      />

      <section className="section">
        <div className="container-page max-w-3xl prose-page">
          <p>
            {team.schoolName} is a small Jewish high school in {team.address.city}, Michigan, with roughly 145
            students. Sports are central to the school&apos;s culture — about 70% of students play at least one —
            and few programs capture the school&apos;s spirit like boys tennis.
          </p>
          <p>
            Before head coach Larry Stark arrived, Frankel had never reached the state tournament in boys
            tennis. Since then the Jaguars have qualified for the MHSAA Division 4 State Finals 11 times in 13
            years, won two regional championships (2022, 2024) and a Catholic League title (2023), and posted a
            best-ever 7th-place state finish in 2023.
          </p>
          <p>
            Remarkably, the team does it while honoring Shabbat and the Jewish holidays — which often means less
            practice and match time than opponents get. The MHSAA makes scheduling accommodations each year so
            the Jaguars can compete while keeping their commitments. Many players never picked up a racket
            competitively until they arrived at Frankel as freshmen; the program&apos;s &quot;no-cut&quot; ethos
            means anyone who wants to play, plays.
          </p>
          <p>
            What makes it work, in the coaches&apos; words, is a family atmosphere, an underdog mentality, and a
            belief that effort and determination can close the gap on talent and experience.
          </p>
        </div>
      </section>

      <section className="section bg-slate-50 border-y border-[var(--line)]">
        <div className="container-page">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)]">Coaching Staff</h2>
          <div className="mt-8 space-y-10">
            {coaches.map((c) => (
              <article key={c.name} className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[var(--navy)]">{c.name}</h3>
                  <p className="text-[var(--royal)] font-bold">{c.role}</p>
                  {c.honors && (
                    <ul className="mt-4 space-y-2 text-sm">
                      {c.honors.map((h, i) => (
                        <li key={i} className="flex gap-2 text-[var(--muted)]">
                          <span aria-hidden className="text-[var(--gold)]">★</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="md:col-span-2">
                  <div className="prose-page">
                    {c.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {c.quote && (
                    <blockquote className="mt-4 border-l-4 border-[var(--royal)] bg-white rounded-r-lg px-5 py-4 italic text-[#25303f]">
                      “{c.quote.text}”
                      {c.quote.by && (
                        <footer className="mt-2 not-italic text-sm font-bold text-[var(--muted)]">
                          — {c.quote.by}
                        </footer>
                      )}
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
