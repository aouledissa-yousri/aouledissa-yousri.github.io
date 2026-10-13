# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Yousri Aouledissa's personal portfolio, a Create React App (react-scripts 5) single-page site forked from the `hashirshoaeb/home` template. It is a static site served by GitHub Pages at `https://aouledissa-yousri.github.io` (a user site, so served from the domain root). The README is still the upstream template's and describes the original author's repo; trust this file and `package.json` over it.

## Commands

Requires Node/npm matching `engines` (`.npmrc` sets `engine-strict=true`, so `npm install` fails on a mismatch). `.nvmrc` says `22`, but `package.json` engines require node `^24.3.0` and npm `^11.4.2`. Those conflict, and `engines` is what is enforced, so use Node 24.

```bash
npm install
npm start            # dev server (CRA)
npm run build        # production build -> ./build (gitignored)
npm test             # jest via react-scripts (watch mode); only src/App.test.js exists
npm test -- --watchAll=false -t "name"   # single run / single test by name
```

There is no separate lint script; ESLint runs through CRA (`eslintConfig` extends `react-app`).

## Deploying

Source lives on `master`. The site is published by pushing the built `./build` folder to a separate branch with the `gh-pages` package. Pushing `master` does NOT deploy anything: there are no GitHub Actions workflows (no `.github/`). Deploy is a manual step run locally after pushing source:

```bash
git push origin master
npm run build
npm run custom-deploy    # node pages.js -> publishes ./build to branch "deploy"
```

Two deploy paths exist and they target different branches:

- `npm run deploy` (`predeploy` builds first, then `gh-pages -d build`) publishes to the default **`gh-pages`** branch.
- `npm run custom-deploy` (`pages.js`) publishes to the **`deploy`** branch of the hardcoded `repoURL`. This is the path documented in `READMEdocs/custom-deployment.md` for `<username>.github.io` repos. Note it does not run `predeploy`, so run `npm run build` first or you will publish a stale or missing `build`.

Both branches exist on the remote (`deploy`, `gh-pages`, `master`). I could not verify from the repo which branch GitHub Pages is set to serve; check repo Settings -> Pages (Source) before relying on either one. Deploying needs push access to the repo (git credentials or token configured locally).

`homepage` in `package.json` is `https://aouledissa-yousri.github.io`. CRA turns it into `process.env.PUBLIC_URL`, which `App.js` uses as the `BrowserRouter` basename. Changing the repo name or hosting path means updating `homepage` and `repoURL` in `pages.js`. `/public/CNAME` is gitignored (custom domain is not configured in the repo).

## Architecture

All site content is data-driven from one file: `src/editable-stuff/config.js`. It exports section objects (`navBar`, `mainBody`, `about`, `repos`, `leadership`, `skills`, `getInTouch`, `experiences`, `education`), each with a `show` flag. `src/App.js` imports them and renders the matching component from `src/components/home/` only when `show` is true, passing the fields as props. To change copy, links, skills or experience, edit `config.js`, not the components.

Notes that span files:

- `App.js` has a single route (`/`, the `Home` component). The blog route and `src/components/blog/*` and `src/editable-stuff/blog.jsx` exist but are commented out and unused.
- `repos` drives the Projects section: `Project.jsx` fetches from the GitHub API at runtime (axios) using `gitHubUsername`, and either the N most recently updated repos (`reposLength`) or the named `specificRepos`.
- Images and skill logos are bundled assets in `src/editable-stuff/` (logos grouped by category under `logos/`), imported via `require(...)` in `config.js`. The resume is an external Google Drive link in `about.resume`.
- Styling is Bootstrap 5 / react-bootstrap plus SCSS in `src/scss/` (entry `custom.scss`, imported in `index.js`).
- `public/index.html` holds the page title and meta description, and `public/social-image.png` is the share thumbnail.
