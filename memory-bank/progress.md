# Progress — TehWiz

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
