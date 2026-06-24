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

### Things currently marked "to update"
- **Schedule** (`scheduleIsPlaceholder = true`) — sample entries; replace with the real fall schedule.
- **Roster** (`rosterIsProvisional = true`) — shows the most recent published (2024) lineup as a starting point.
- **2025 season** (`needsUpdate: true` in `seasons.ts`) — add final fall 2025 results.

Flip the `*IsPlaceholder` / `needsUpdate` flags to `false` (or remove them) once real data is in, and the
on-page "update" banners disappear.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deployment

Connected to Vercel — every push to `main` on GitHub auto-deploys to production.
