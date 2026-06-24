import Link from "next/link";
import { team, programStats } from "@/data/team";
import { seasons } from "@/data/seasons";
import { news } from "@/data/news";
import { announcements } from "@/data/extras";
import { Badge, SectionHeading } from "@/components/ui";
import { Logo } from "@/components/Logo";

export default function Home() {
  const latest = seasons.find((s) => !s.needsUpdate) ?? seasons[0];
  const pinned = announcements.filter((a) => a.pinned);
  const topNews = news.slice(0, 3);

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[var(--navy)] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #1d4ed8 0, transparent 40%), radial-gradient(circle at 80% 0%, #2563eb 0, transparent 35%)",
          }}
        />
        <div className="container-page relative py-16 sm:py-24">
          <div className="flex items-center gap-2">
            <Logo size={28} light />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sky)]">
              {team.schoolName} · {team.mascot}
            </span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Frankel Jaguars
            <br />
            <span className="text-[var(--sky)]">Boys Tennis</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">{team.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--navy)] hover:bg-[var(--sky)] transition-colors"
            >
              View Schedule
            </Link>
            <Link
              href="/history"
              className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              History &amp; Stats
            </Link>
            <Link
              href="/roster"
              className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Stat strip ===== */}
      <section className="bg-[var(--sky)] border-y border-[var(--line)]">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {programStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)]">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Announcements ===== */}
      {pinned.length > 0 && (
        <section className="section">
          <div className="container-page">
            {pinned.map((a) => (
              <div
                key={a.title}
                className="card card-hover p-6 sm:p-8 border-l-4 border-l-[var(--royal)]"
              >
                <div className="flex items-center gap-3">
                  <Badge tone="blue">📣 Announcement</Badge>
                  <span className="text-xs text-[var(--muted)]">{a.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold text-[var(--navy)]">{a.title}</h2>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">{a.body}</p>
                <Link href="/announcements" className="mt-4 inline-block text-sm font-bold text-[var(--royal)] hover:underline">
                  All announcements →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== Latest season spotlight ===== */}
      <section className="section bg-slate-50 border-y border-[var(--line)]">
        <div className="container-page">
          <SectionHeading eyebrow="Latest season" title={`${latest.year}: ${latest.headline}`}>
            {latest.dualRecord ? `Dual-match record: ${latest.dualRecord}.` : undefined}
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <ul className="space-y-3">
              {latest.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-[#25303f]">
                  <span className="mt-1 text-[var(--royal)]" aria-hidden>🎾</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="card p-6">
              <h3 className="font-extrabold text-[var(--navy)]">By the numbers</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {latest.league && <Row label="League" value={latest.league} />}
                {latest.regional && <Row label="Regional" value={latest.regional} />}
                {latest.state && <Row label="State Finals" value={latest.state} />}
              </dl>
              <Link
                href="/history"
                className="mt-6 inline-block text-sm font-bold text-[var(--royal)] hover:underline"
              >
                See every season →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick links ===== */}
      <section className="section">
        <div className="container-page">
          <SectionHeading eyebrow="Explore the program" title="Everything in one place" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <QuickCard href="/schedule" title="Schedule" emoji="📅" desc="Matches, practices and key dates for the season." />
            <QuickCard href="/roster" title="Roster & Lineup" emoji="👥" desc="Meet the players and see the flight-by-flight lineup." />
            <QuickCard href="/history" title="History & Stats" emoji="📊" desc="Season-by-season results going back to 2015." />
            <QuickCard href="/opponents" title="Opponents" emoji="🆚" desc="Who we're facing — with links to look up their rosters." />
            <QuickCard href="/news" title="News & Press" emoji="📰" desc="Articles about the team, the coaches and the run to states." />
            <QuickCard href="/about" title="About the Team" emoji="ℹ️" desc="The story, plus Coach Larry & Monica Stark's bios." />
          </div>
        </div>
      </section>

      {/* ===== Latest news ===== */}
      <section className="section bg-slate-50 border-t border-[var(--line)]">
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
                <span className="mt-3 text-xs font-bold text-[var(--royal)]">{n.source} ↗</span>
              </a>
            ))}
          </div>
          <Link href="/news" className="mt-6 inline-block text-sm font-bold text-[var(--royal)] hover:underline">
            All news →
          </Link>
        </div>
      </section>

      {/* ===== Follow & Shop ===== */}
      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <a
            href={team.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-8 flex flex-col items-start gap-3"
          >
            <p className="eyebrow">Follow the Jaguars</p>
            <h2 className="text-2xl font-extrabold text-[var(--navy)]">See more on Instagram</h2>
            <p className="text-[var(--muted)]">
              Team photos, match-day moments and more at {team.instagramHandle}.
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-[var(--navy)] text-white px-5 py-2.5 text-sm font-bold">
              📷 {team.instagramHandle} ↗
            </span>
          </a>

          <a
            href={team.teamStore}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-8 flex flex-col items-start gap-3"
          >
            <p className="eyebrow">Rep the team</p>
            <h2 className="text-2xl font-extrabold text-[var(--navy)]">Official Team Store</h2>
            <p className="text-[var(--muted)]">
              Jaguars hats, hoodies, tees and more — fully customizable, shipped to your door (via BSN Sports).
            </p>
            <span className="mt-2 inline-flex items-center rounded-full bg-[var(--navy)] text-white px-5 py-2.5 text-sm font-bold">
              🛍️ Shop the store ↗
            </span>
          </a>
        </div>
      </section>
    </>
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

function QuickCard({ href, title, desc, emoji }: { href: string; title: string; desc: string; emoji: string }) {
  return (
    <Link href={href} className="card card-hover p-6 block">
      <div className="text-2xl" aria-hidden>{emoji}</div>
      <h3 className="mt-3 font-extrabold text-[var(--navy)]">{title}</h3>
      <p className="mt-1.5 text-sm text-[var(--muted)]">{desc}</p>
      <span className="mt-4 inline-block text-sm font-bold text-[var(--royal)]">Open →</span>
    </Link>
  );
}
