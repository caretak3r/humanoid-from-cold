# Humanoid from Cold

Learning notes for building a humanoid from cold start — multi-rate cyber-physical framing, frames/units contracts, joint FOC, body/contact sensing, bus & time sync, power domain & BMS, contact-rich estimation, whole-body balance control, stepping & locomotion, push recovery & disturbance rejection, upper-body manipulation on shared balance ceilings, hand-as-support / loco-manipulation on the same ceilings, multi-contact transitions / object-as-support / loco-manip scheduling, perception-driven support affordances / contact discovery feeding schedules, learned residuals / richer scene graphs on the affordance→schedule stack, and paired physical/digital interfaces.

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
| `content/lessons/day-06-estimation-balance.mdx` | Estimation & contact-rich balance |
| `content/lessons/day-07-wbc-balance.mdx` | WBC & contact-rich balance policies |
| `content/lessons/day-08-stepping-locomotion.mdx` | Stepping & locomotion on WBC ceilings |
| `content/lessons/day-09-push-recovery.mdx` | Push recovery & disturbance rejection |
| `content/lessons/day-10-upper-body-manipulation.mdx` | Upper-body / manipulation on shared ceilings |
| `content/lessons/day-11-hand-support-loco-manipulation.mdx` | Hand-as-support / loco-manipulation on shared ceilings |
| `content/lessons/day-12-multicontact-transitions.mdx` | Multi-contact transitions / object-as-support / loco-manip scheduling |
| `content/lessons/day-13-support-affordances.mdx` | Perception-driven support affordances / contact discovery feeding schedules |
| `content/lessons/day-14-learned-residuals-scene-graphs.mdx` | Learned residuals / richer scene graphs on the affordance→schedule stack |