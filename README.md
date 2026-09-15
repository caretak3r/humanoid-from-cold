# Humanoid from Cold

Learning notes for building a humanoid from cold start — multi-rate cyber-physical framing, frames/units contracts, joint FOC, body/contact sensing, bus & time sync, power domain & BMS, and paired physical/digital interfaces.

**Docs site (Nextra):** https://silent.engineer/humanoid-from-cold/

## Local development

```bash
npm ci
npm run dev
```

Static export (mirrors GitHub Pages build):

```bash
npm run build
# output in out/
```

## Stack

- [Nextra 4](https://nextra.site/) + Next.js App Router
- Mermaid diagrams, KaTeX math
- Deployed to GitHub Pages via Actions (`output: 'export'`, `basePath: /humanoid-from-cold`)

## Content

| Path | Topic |
|------|--------|
| `content/index.mdx` | Home |
| `content/curriculum.mdx` | Roadmap |
| `content/frames.mdx` | Frames & units contract |
| `content/lessons/day-01-cold-start.mdx` | Cold-start framing |
| `content/lessons/day-02-joint-foc.mdx` | Joint FOC & current as muscle |
| `content/lessons/day-03-sensing-beyond-joint.mdx` | IMU, contact/force, estimation rates |
| `content/lessons/day-04-bus-time-sync.mdx` | Bus topology & time sync |
| `content/lessons/day-05-power-bms.mdx` | Power domain & BMS |
