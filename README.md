# Bible Map

A navigable digital map of biblical history. Search for a person, place, year,
event, kingdom, book or verse and be transported to that point in history.

> The Bible is the primary text. History is the environment around it. Time is the map.

**Live site:** https://bam899.github.io/Bible-Explorer-Application/

## Status

Milestone 0 (Environment) — an empty dark shell with a title and an
unconnected search bar. No historical data yet.

## Project layout

| Path | What it is |
|---|---|
| `index.html` | The single web page. React fills in its `<div id="root">`. |
| `src/main.tsx` | Starting point of the code: attaches the React app to the page. |
| `src/App.tsx` | The top-level screen component. |
| `src/index.css` | All styles, with colour and font tokens at the top. |
| `public/` | Files copied to the site unchanged (the tab icon). |
| `package.json` | The project's dependencies and commands. |
| `vite.config.ts` | Settings for Vite, the tool that builds the site. |
| `tsconfig*.json` | Settings for TypeScript's type checking. |
| `.github/workflows/deploy.yml` | Instructions for GitHub to build and publish the site. |
| `docs/learning/` | Plain-English notes explaining each milestone. |
| `CLAUDE.md` | Standing instructions for Claude sessions working on this project. |

## Milestones

| # | Milestone | Learning goal |
|---|---|---|
| 0 | Environment | Files, Node/npm, `package.json`, dev server, Git basics |
| 1 | Historical axis | Year-to-screen mapping, functions, TypeScript types |
| 2 | Dragging | React state, pointer events, the render cycle |
| 3 | Zoom | Scales, transforms, clamping, derived state |
| 4 | First entities | Objects, arrays, interfaces, IDs, data vs presentation |
| 5 | Search | Filtering, parsing, normalization |
| 6 | Animated travel | Interpolation, easing, animation lifecycle |
| 7 | Historical anchor | Separating current year from current anchor |
| 8 | Information drawer | Components, props, conditional rendering |
| 9 | Historical tracks | Layout of kingdoms, rulers, prophets, events |
| 10 | Explore This Moment | Range-overlap logic, selectors |
| 11 | Bible reader | Data modelling, references, module boundaries |
| 12 | Map proof | Coordinates, layers, projections |
| 13 | Database migration | Tables, keys, SQL — only when needed |

## Decisions

- **Vite + React + TypeScript instead of Next.js (departs from the charter).**
  Everything runs in the browser, so there is one place to look when something
  happens and no server/client split to learn yet. React components carry over
  to Next.js if a server is ever needed (Milestone 13 at the earliest).
- **Plain CSS instead of Tailwind** for now, so styling stays separate from
  structure and is easier to read.

## Running it on your own computer (optional)

1. Install [Node.js](https://nodejs.org) (LTS version) and [Git](https://git-scm.com).
2. `git clone https://github.com/bam899/Bible-Explorer-Application.git`
3. `cd Bible-Explorer-Application`
4. `npm install`
5. `npm run dev`, then open the address it prints.
