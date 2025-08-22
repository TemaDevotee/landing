
# Trickster Landing — Merged (Dual Themes + Glow)

**What you get**
- Vue 3 + Vite + Tailwind
- Dual-accent themes: `theme-ocean`, `theme-vio-pink`, `theme-mint-lime`, `theme-amber-orange`, `theme-gray-graphite`
- Glow & hover effects; subtle noise overlay
- Fixed hero spacing so the headline doesn't get clipped
- Theme switcher persists in localStorage

**Run**
```bash
npm i
npm run dev
# npm run preview after build
```

**Where to tweak**
- `src/styles.css`: tokens per theme (`--accent`, `--accent-2`, `--text`, etc.), background gradients.
- `src/components/ThemeSwitch.vue`: order of themes.
- `src/components/Hero.vue`: headline copy & spacing.
