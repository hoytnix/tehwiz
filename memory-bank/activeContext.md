# Active Context — TehWiz

Current focus: 100% Static HTML Export (GitHub Pages ready) + Localhost CRUD Studio.
The entire TehWiz app now compiles to a purely static directory (`out/`) via `output: 'export'`, capable of being hosted completely free on GitHub Pages (with `.nojekyll`, `CNAME`, unoptimized images, and automated GitHub Actions workflow `.github/workflows/deploy.yml`).
Content for Blog, Vlog, Portfolio Projects, and Prompts is stored in clean JSON files (`blogData.json`, `vlogData.json`, `portfolioData.json`, `promptsData.json`), maintaining typed parity with TypeScript modules.
When running locally via `pnpm dev`, a localhost-only CRUD Content Studio is available at `/editor` (with a discrete dev badge in the Header) backed by a local Node.js API (`/api/admin`) allowing full Create, Read, Update, Delete with real-time disk persistence and instant Fast Refresh. During static export (`pnpm build`), all editor and admin routes are scrubbed so the public bundle contains zero dev artifacts. Verified green with `pnpm build` generating 40 static pages.

Current focus: Quiet Instrument redesign complete and verified green.
Replacing neon cyber-gamer chrome (aurora orbs, glass gradients, rainbow
accents, pinging dots, emoji badges) with calm editorial dark system.
Touching: globals.css, tailwind.config, Shell, Header, TelemetryFooter,
CyberCard, CyberButton, Breadcrumbs, MarkdownRenderer, HomeHero,
StatsMatrix, CorePillars, TechArsenal, 3 spotlights, MenuView,
ProjectCard, PortfolioCatalog accents.

Current focus: Portfolio realignment + sovereign console redesign shipped.
Portfolio is now 19 entries: removed Projects, SnowMore Work, Pocket
Mon$tar$$$, Michael Scott Homes; added bleep, book.purplecanarylab.com,
fun, isicecakeoisis (Corporate), kissav, raiders, terminallyskilled.rest,
tricks.wiki (redirect); Yuli canonical launch is yuli.tehwiz.com.

Current focus: OVH/Kimsufi/M247 block post live at /blog/why-we-blocked-ovh-kimsufi (created new 2026-10-29, leads data-driven listing) with click-to-reveal contact button (permuted char codes, click-handler-only decode). Verified green: pnpm build 38 pages, repo + .next grep clean, headless-Chrome CDP suite 11/11 (pre-click DOM, click, Enter, Space, single copy, slug 200).
Project cards now show each live app's own cover art + favicon (from the
app's JSON-LD image/logo and og:image / icon links, verified per origin;
redirects and asset-less apps fall back to site-global cover/logo; failed
remote assets hide gracefully).
Theme: ink #0A0B10, card #12141C, violet #8B7CFF accent, amber Live-only,
Fraunces display + Inter body, uniform cards with generated violet covers,
single-dot statuses, simplified filters. pnpm build green (37 pages).
