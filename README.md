# Terminal 2.0

Kirati “Win” Rattanaporn’s keyboard-first interactive portfolio. Terminal 2.0 pairs a functional command line with a responsive, draggable desktop window system and a restrained premium visual language.

Live site: https://dpine8302.github.io/Terminal-2.0/

## Stack

React 18, Vite 5, Zustand, react-draggable, Vitest, Testing Library, and plain CSS. The application is JavaScript—not TypeScript—and has no runtime API or secrets.

## Features

- Typed terminal input, command history, Tab completion, known/unknown command feedback, and clickable command shortcuts
- Focused desktop windows with duplicate prevention, focus/z-index, minimize, close, bounded dragging, and touch-friendly stacked mobile panels
- Centralized portfolio content in `src/data/portfolio.js`
- Dark, accessible light, and optional amber terminal themes with local persistence
- Responsive layouts for desktop, tablet, and phone viewports
- Reduced-motion and increased-contrast preferences
- GitHub Pages metadata, manifest, favicon, social preview, robots, and sitemap

## Setup and scripts

Requires Node.js 20 or later.

```bash
git clone https://github.com/DPINE8302/Terminal-2.0.git
cd Terminal-2.0
npm ci
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start Vite at `http://localhost:3000` |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build at port 4173 |

## Terminal commands

`help`, `home`, `whoami`, `about`, `skills`, `projects`, `achievements`, `creative`, `contact`, `socials`, `clear`, `theme dark|light|amber`, `date`, `github`, `instagram`, and `youtube`.

Use ↑ and ↓ for command history and Tab for completion.

## Project structure

```text
src/
├── data/portfolio.js      # Editable source of truth
├── lib/commands.js        # Pure command parser
├── store/useStore.js      # Persisted theme and window state
├── test/setup.js          # Browser test environment
├── App.jsx                # Product interface
└── index.css              # Design system and responsive layout
public/                    # Static metadata and site assets
.github/workflows/         # CI and GitHub Pages deployment
```

## Testing

Tests cover application rendering, command parsing, known/unknown commands, clear, theme persistence, window opening, duplicate prevention, and closing. Pull requests run install, lint, tests, and build in CI.

## Deployment

`vite.config.js` uses the `/Terminal-2.0/` base path. `.github/workflows/deploy-pages.yml` builds and deploys with the official GitHub Pages actions after a successful push to `main`, or via manual dispatch. Configure repository Pages source as **GitHub Actions**. Pull requests never deploy.

## Accessibility

The interface uses semantic controls, visible keyboard focus, a labelled terminal input, polite live terminal output, safe external links, minimum mobile target sizing, reduced-motion support, and a high-contrast preference override. Dragging is supplemental: mobile panels and all commands work without it.

## Editing content

Update `src/data/portfolio.js`. Keep claims factual and use `null` for unavailable project links; the UI omits unavailable actions. Do not add private contact information or secrets.

## Known limitations

- External profiles can change or become unavailable independently of this static site.
- Window positions are intentionally session-only; theme preference is persisted.
- GitHub Pages must be enabled once in repository settings before the first deployment.

© 2026 Kirati Rattanaporn. Version 2.0.0.
