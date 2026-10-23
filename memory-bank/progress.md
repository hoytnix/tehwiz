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
