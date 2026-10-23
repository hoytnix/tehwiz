# Active Context — TehWiz

Current focus: Quiet Instrument redesign complete and verified green.
Replacing neon cyber-gamer chrome (aurora orbs, glass gradients, rainbow
accents, pinging dots, emoji badges) with calm editorial dark system.
Touching: globals.css, tailwind.config, Shell, Header, TelemetryFooter,
CyberCard, CyberButton, Breadcrumbs, MarkdownRenderer, HomeHero,
StatsMatrix, CorePillars, TechArsenal, 3 spotlights, MenuView,
ProjectCard, PortfolioCatalog accents.

Current focus: EMFILE dev-server fix in progress. next.config.ts now scopes
watchers (webpack watchOptions.ignored for node_modules/.next/.git,
turbopack.root pinned to project). pnpm build green. Root cause is OS-level:
per-user inotify instances exhausted (~125/128, mostly held by lingering
`agy` agent processes), so no process can create a file watcher; also shell
`ulimit -n` is 1024. Needs user sudo: raise
fs.inotify.max_user_instances to 512 and persist it.
