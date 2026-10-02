# Milestone 0 — Environment

**Goal:** set up the workshop. At the end there is a real, published web app
that shows a dark screen with the title "Bible Map" and a search bar that does
nothing yet.

## 1. A website is just files

A browser understands three languages:

| Language | Job | Our example |
|---|---|---|
| **HTML** | *What* is on the page | a heading, a search box |
| **CSS** | *How* it looks | charcoal background, gold accent |
| **JavaScript** | *What happens* (behaviour) | dragging the timeline, later |

## 2. We write TypeScript + React, and a tool translates it

- **TypeScript** is JavaScript with **types**, like Java's `int` or `String`.
  If we say a value is a number and then treat it as text, TypeScript
  complains *before* the app runs.
- **React** lets us build the screen from **components**: functions that
  return a piece of the screen. `App` is our first one. Later we will have
  `Timeline`, `SearchBar`, `Drawer`…
- Browsers cannot read TypeScript or React directly. **Vite** translates our
  files into plain HTML, CSS and JavaScript. This translation is called a
  **build**.

## 3. The workshop tools

- **Node** runs JavaScript *outside* a browser, on a computer. Vite is written
  in JavaScript, so it needs Node.
- **npm** (Node Package Manager) downloads libraries other people wrote (React,
  Vite, TypeScript) and runs our commands.
- **`package.json`** is the project's ingredient list and command list:
  - `dependencies`: what the app itself needs while it runs (React).
  - `devDependencies`: tools only needed while building (Vite, TypeScript).
  - `scripts`: named commands. `npm run dev` runs `vite`; `npm run build` runs
    the type checker and then the build.
- **`node_modules/`** is where npm puts the downloaded libraries. It is huge,
  and it is *not* saved in Git, because anyone can recreate it with
  `npm install`. `.gitignore` lists files Git should ignore.
- **`package-lock.json`** records the *exact* version of every library, so
  every computer installs the same thing.

## 4. Dev server vs. built site

| | Dev server (`npm run dev`) | Built site (`npm run build`) |
|---|---|---|
| Used for | working on the app | publishing it |
| Where | the developer's computer | GitHub Pages |
| Behaviour | rebuilds instantly when a file is saved | a fixed folder (`dist/`) of plain files |

## 5. How the page starts (read these files in this order)

1. **`index.html`**: the only HTML page. It contains an empty
   `<div id="root"></div>` and loads `src/main.tsx`.
2. **`src/main.tsx`**: finds that empty `root` box and tells React to draw
   `<App />` inside it. It also loads `index.css`.
3. **`src/App.tsx`**: the `App` component. It returns what looks like HTML but
   is actually **JSX**, React's way of writing screen pieces inside
   TypeScript. Note `className` instead of HTML's `class`, because `class`
   already means something in JavaScript.
4. **`src/index.css`**: the styles. The top block (`:root`) defines **design
   tokens**: named colours like `--color-accent`. Everything else refers to
   those names, so the whole palette can be changed in one place.

## 6. Git and GitHub

| Term | Meaning |
|---|---|
| **Repository** | the project folder plus its complete history |
| **Commit** | a saved snapshot with a message describing the change |
| **Branch** | a separate line of work; `main` is the working version |
| **Push** | upload commits to GitHub |
| **Pull request** | a page proposing to merge a branch into `main`, showing every changed line |

**Rolling back:** because every commit is a snapshot, a bad change can always
be undone. On GitHub, a merged pull request has a **Revert** button that
creates a new commit undoing it.

## 7. Automatic publishing

`.github/workflows/deploy.yml` is a recipe GitHub follows by itself:

- On every **pull request**: install, check (`lint`), and build. If any step
  fails, the pull request shows a red ✗, a warning *before* merging.
- On every change to **`main`**: do the same, then publish `dist/` to GitHub
  Pages.

`vite.config.ts` sets `base: '/Bible-Explorer-Application/'` because GitHub
Pages serves the site under that path, not at the root of the address.

## Checkpoint — can you answer these?

1. Which file is the first one the browser loads?
2. If you wanted the gold accent to be blue, which single line would you change?
3. Why is `node_modules/` not saved in Git?
4. What is the difference between `npm run dev` and `npm run build`?
5. **Predict:** in `App.tsx`, what would happen if you changed the text
   `Bible Map` to `Bible Explorer`?
