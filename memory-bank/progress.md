# Progress — TehWiz

- 2026-11-04: Full Static Site Generation (SSG export for GitHub Pages) +
  Localhost CRUD Content Studio.
  - Enabled `output: 'export'` and `images: { unoptimized: true }` in `next.config.ts`.
  - Migrated `/blog` search params handling to client Suspense boundary so it
    prerenders 100% statically alongside dynamic sitemap and feeds.
  - Extracted Vlog, Prompts, Blog, and Portfolio data into clean JSON files
    with zero loss of structure or types, hot-reloading in dev.
  - Created Localhost Content Studio at `/editor` and API at `/api/admin` with
    host/origin guard, allowing full CRUD with direct filesystem persistence.
  - Added build scrubbing (`scripts/clean-export.js`) removing dev editor/admin
    artifacts from `out/`, added `public/.nojekyll`, `public/CNAME`, and
    `.github/workflows/deploy.yml` for automated GitHub Pages deployment.
  - `pnpm build` verified 100% green (40 static pages).

- 2026-10-22: Design audit. Found every anti-pattern: 5+ neon accents,
  3 aurora orbs + grid in Shell, gradient headline text, gradient buttons,
  glass everywhere, rounded-2xl/3xl everywhere, ping/emoji/scale hovers.
- 2026-10-22: Quiet Instrument redesign shipped. Removed aurora orbs,
  glass gradients, neon badges, gradient headlines/buttons, ping/emoji/scale
  hovers across Shell, Header, buttons, cards, home, menu, portfolio, blog,
  vlog, prompts, 404. pnpm build green (33 static pages).
- 2026-10-22: EMFILE fix. Scoped dev watchers in next.config.ts
  (webpack ignored + turbopack root pin); pnpm build green. True cause:
  inotify instances exhausted by other processes (fresh node fs.watch fails
  with EMFILE at ~15 fds). Pending user action: sudo sysctl raise +
  persist, then clean pnpm dev boot.
- Roadmap: consider light editorial alt-theme; audit imagery/cover art next.
- 2026-10-29: Portfolio realigned to 19 properties + sovereign console redesign.
  Removed projects/snowmore-work/pocket-monstars/michael-scott-homes from all
  listings; added bleep, book-purple-canary, fun, isicecakeoisis, kissav,
  raiders, terminally-skilled, tricks-wiki (redirect); Yuli launch fixed to
  yuli.tehwiz.com everywhere (data, menu, llms.txt). Redesigned home
  (hero/featured/grid/about/writing), uniform cards, quiet theme, normal nav,
  one-line footer. pnpm build green (37 static pages).
- 2026-10-29: Project cards switched from generated monograms to each live
  app's own cover art + favicon (Project.coverImage/favicon in portfolioData,
  projectMedia helper, ProjectCover/ProjectFavicon, per-app JSON-LD image and
  per-page OG/Twitter images). Sources verified per origin from live JSON-LD /
  og:image / icon links: 13 apps with real assets; purple-canary + hibiscus
  declare no working assets, fun declares no cover, redirects have no live
  app — all fall back to site-global cover/logo with onError hiding.
  ProjectCard.tsx is now a client component (onError handlers). pnpm build
  green. Unverified flags:
  licenses for book/fun/isicecakeoisis/raiders/terminally-skilled/tricks-wiki;
  tricks-wiki status+category; Yuli hero artifact is a composed panel, not a
  real screenshot.
- 2026-10-29: New blog post why-we-blocked-ovh-kimsufi (created new, no OVH-only
  duplicate existed). Title "Why we blocked OVH, Kimsufi, and M247 — and how
  legitimate visitors can still reach us", date 2026-10-29, author TehWiz
  Productions. Article text published verbatim from brief, no new stats.
  Prepended to BLOG_POSTS so it leads the data-driven /blog listing; sitemap
  and RSS pick it up automatically, no listing/code changes needed.
- 2026-10-29: Click-to-unscramble contact button (RevealEmailButton, wired into
  BlogPostView via marker, stripped from JSON-LD articleBody): address stored
  only as a permuted char-code array, decoded inside the click handler only —
  never on render, mount, hover, or focus. Pre-click DOM has no address and no
  link scheme; post-click renders a working link. Grep clean for address and
  scheme in repo source and .next output; headless-Chrome CDP suite 11/11 green
  (pre-click DOM, mouse click, Enter, Space, single listing copy, slug 200).
  pnpm build green (38 pages).
