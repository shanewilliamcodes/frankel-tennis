# Frankel Jaguars Boys Tennis

Website for the **Frankel Jewish Academy** (West Bloomfield, MI) boys tennis team — the Jaguars.
Built with **Next.js + TypeScript + Tailwind CSS**, deployed on **Vercel**.

## How to update content (no coding required for most edits)

All content lives in plain, well-commented files under **`src/data/`**. Edit a file, save, commit, and the
live site updates automatically.

| What you want to change | Edit this file |
| --- | --- |
| Schedule, practices, key dates | `src/data/schedule.ts` |
| Roster & player profiles | `src/data/roster.ts` (each player gets a page at `/roster/<slug>`) |
| Season records / history / lineups | `src/data/seasons.ts` |
| News & press links | `src/data/news.ts` |
| Announcements | `src/data/extras.ts` (`announcements`) |
| Awards, championships, rules | `src/data/extras.ts` |
| Opponent scouting pages | `src/data/opponents.ts` |
| Coach bios | `src/data/coaches.ts` |
| School info, address, stats | `src/data/team.ts` |
| Nav menu links | `src/data/nav.ts` |

### Current data status
- **Schedule** is the real Fall 2026 TeamSnap schedule, including each challenge-match date as its own entry.
- **Roster** is the coach-provided 2026 roster, with returning-player details from the 2025 TennisReporting data where available.
- **History & opponents** include season results, lineups, opponent rosters, 2025 opponent records and recorded head-to-head history from TennisReporting/MHSAA sources.

When new information comes in, update the matching file under `src/data/` and the site will rebuild automatically after the next GitHub push.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Connected to Vercel — every push to `main` on GitHub auto-deploys to production.
