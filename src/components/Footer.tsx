import Link from "next/link";
import { team } from "@/data/team";
import { navItems } from "@/data/nav";
import { Logo } from "./Logo";

export function Footer() {
  const { address } = team;
  return (
    <footer className="mt-16 bg-[var(--navy)] text-white">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-extrabold">
            <Logo size={32} light />
            <span>Frankel Jaguars Tennis</span>
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            {team.programName}. {team.colors}. {team.division}.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--sky)]">Explore</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--sky)]">School</h3>
          <address className="mt-3 not-italic text-sm text-white/80 leading-relaxed">
            {team.schoolName}
            <br />
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
          </address>
          <div className="mt-3 flex flex-col gap-1 text-sm">
            <a href={team.teamStore} target="_blank" rel="noopener noreferrer" className="text-[var(--sky)] hover:text-white transition-colors">
              🛍️ Team Store (BSN Sports) ↗
            </a>
            <a href={team.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--sky)] hover:text-white transition-colors">
              📷 Instagram {team.instagramHandle} ↗
            </a>
            <a href={team.schoolWebsite} target="_blank" rel="noopener noreferrer" className="text-[var(--sky)] hover:text-white transition-colors">
              frankelja.org ↗
            </a>
            <a href={team.athleticsWebsite} target="_blank" rel="noopener noreferrer" className="text-[var(--sky)] hover:text-white transition-colors">
              Frankel Athletics ↗
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/55 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {team.schoolName} Boys Tennis. Go Jaguars!</span>
          <span>Unofficial team site · built for the players, families &amp; fans.</span>
        </div>
      </div>
    </footer>
  );
}
