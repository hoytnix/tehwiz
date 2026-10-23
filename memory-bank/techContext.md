# Tech Context — TehWiz

Next.js 15 App Router, React 19, Tailwind CSS 3, TypeScript ~5.8.
Fonts: Plus Jakarta Sans (sans), JetBrains Mono (mono) via next/font.
Package manager: pnpm exclusively. Checks: pnpm build (no test/lint scripts).
Legacy utility classes (glass-panel, glass-card, cyber-grid, specular-border,
animate-slow-glow, animate-float-gentle, animate-gradient) are redefined as
quiet flat styles in globals.css — do not reintroduce glow/gradient behavior.
