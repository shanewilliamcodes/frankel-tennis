# Frankel Jaguars Boys Tennis

Website for the **Frankel Jewish Academy** (West Bloomfield, MI) boys tennis team — the Jaguars.
Built with **Next.js + TypeScript + Tailwind CSS**, deployed on **Vercel**.

## How to update content (no coding required for most edits)

All content lives in plain, well-commented files under **`src/data/`**. Edit a file, save, commit, and the
live site updates automatically.

| What you want to change | Edit this file |
| --- | --- |
| Backup schedule, practices, key dates | `src/data/schedule.ts` |
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
- **Schedule** can sync from TeamSnap automatically when `TEAMSNAP_ICAL_URL` is configured. The saved schedule in `src/data/schedule.ts` is the fallback if the TeamSnap feed is unavailable.
- **Roster** is the coach-provided 2026 roster, with returning-player details from the 2025 TennisReporting data where available.
- **History & opponents** include season results, lineups, opponent rosters, 2025 opponent records and recorded head-to-head history from TennisReporting/MHSAA sources.

When new information comes in, update the matching file under `src/data/` and the site will rebuild automatically after the next GitHub push.

## TeamSnap schedule sync

The schedule page and homepage can read TeamSnap's private iCal calendar feed. Coaches keep updating TeamSnap, and the website refreshes from that feed about every 15 minutes on Vercel.

To connect it:

1. Log into TeamSnap on the web.
2. Open the team schedule.
3. Use **Settings → Sync Calendar / Export**.
4. Copy the full-calendar iCal link.
5. Add it to Vercel as `TEAMSNAP_ICAL_URL` for Production, Preview and Development.

Do not commit the real TeamSnap calendar URL to GitHub. Use `.env.local` locally if needed.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Connected to Vercel — every push to `main` on GitHub auto-deploys to production.
