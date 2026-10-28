# Humanoid from Cold

Learning notes for building a humanoid from cold start — multi-rate cyber-physical framing, frames/units contracts, joint FOC, body/contact sensing, bus & time sync, power domain & BMS, contact-rich estimation, whole-body balance control, stepping & locomotion, push recovery & disturbance rejection, upper-body manipulation on shared balance ceilings, hand-as-support / loco-manipulation on the same ceilings, multi-contact transitions / object-as-support / loco-manip scheduling, perception-driven support affordances / contact discovery feeding schedules, learned residuals / richer scene graphs on the affordance→schedule stack, closed-loop learned policies under measured ceilings / sim-to-real residual validation, teleop / shared-autonomy arbitration under the same measured ceilings, runtime safety supervisor / monitors / kill-chain for shared autonomy, teleop+policy logging / replay / dataset hygiene under the same soft-vs-hard split and supervisor-armed kill-chain, offline evaluation / shadow mode / canary deploy of policies under supervisor + logging gates, fleet multi-robot shared-autonomy logging / ticket-log sync / online continual learning under supervisor + logging + canary + HIL gates, fleet canary orchestration / multi-site sim-to-real ranking under supervisor + logging + canary + HIL + fleet gates, fleet incident response / coordinated rollback / multi-robot kill coordination under supervisor + logging + canary + HIL + fleet + fleet-canary gates, post-incident forensics / fleet postmortem bags / reopen canary under supervisor + logging + canary + HIL + fleet + fleet-canary + incident gates, fleet change management / staged policy promotion / cross-site config honesty, actuator wear / calibration drift / predictive maintenance, thermal budgets / duty-cycle scheduling, energy budgets / battery mission planning, human-proximity safety / SSM + PFL as measured constraints under the full gate chain, collaborative workspace zoning / safeguarded-space attestation, shared-control / teleop arbitration under attested zones, multi-operator / fleet shared-control coordination, remote / multi-site teleop under latency, immersive telepresence / haptic force-reflection honesty, dexterous skill capture / learning from demonstration under honest labels, and paired physical/digital interfaces.

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
| `content/lessons/day-15-closed-loop-learned-policies.mdx` | Closed-loop learned policies under measured ceilings / sim-to-real residual validation |
| `content/lessons/day-16-teleop-shared-autonomy.mdx` | Teleop / shared-autonomy arbitration under the same measured ceilings |
| `content/lessons/day-17-runtime-safety-supervisor.mdx` | Runtime safety supervisor / monitors / kill-chain for shared autonomy |
| `content/lessons/day-18-teleop-policy-logging-replay.mdx` | Teleop+policy logging / replay / dataset hygiene under soft-vs-hard + supervisor kill-chain |
| `content/lessons/day-19-offline-eval-shadow-canary.mdx` | Offline eval / shadow mode / canary under supervisor + logging gates |
| `content/lessons/day-20-hil-regression-farm.mdx` | HIL regression farm under supervisor + logging + canary gates |
| `content/lessons/day-21-fleet-continual-learning.mdx` | Fleet multi-robot logging / ticket-log sync / online continual learning |
| `content/lessons/day-22-fleet-canary-orchestration.mdx` | Fleet canary orchestration / multi-site sim-to-real ranking |
| `content/lessons/day-23-fleet-incident-response.mdx` | Fleet incident response / coordinated rollback / multi-robot kill |
| `content/lessons/day-24-post-incident-forensics.mdx` | Post-incident forensics / fleet postmortem bags / reopen canary |
| `content/lessons/day-25-fleet-change-management.mdx` | Fleet change management / staged policy promotion / cross-site config honesty |
| `content/lessons/day-26-actuator-wear-predictive-maintenance.mdx` | Actuator wear / calibration drift / predictive maintenance |
| `content/lessons/day-27-thermal-budgets-duty-cycle.mdx` | Thermal budgets / duty-cycle scheduling |
| `content/lessons/day-28-energy-budgets-mission-planning.mdx` | Energy budgets / battery mission planning |
| `content/lessons/day-29-human-proximity-safety.mdx` | Human-proximity safety / SSM + PFL |
| `content/lessons/day-30-collaborative-workspace-zoning.mdx` | Collaborative workspace zoning / safeguarded-space attestation |
| `content/lessons/day-31-shared-control-teleop-arbitration.mdx` | Shared-control / teleop arbitration under attested zones |
| `content/lessons/day-32-multi-operator-fleet-shared-control.mdx` | Multi-operator / fleet shared-control coordination |
| `content/lessons/day-33-remote-multisite-teleop-latency.mdx` | Remote / multi-site teleop under latency |
| `content/lessons/day-34-telepresence-haptic-force-honesty.mdx` | Immersive telepresence / haptic force-reflection honesty |
| `content/lessons/day-35-dexterous-skill-capture-lfd.mdx` | Dexterous skill capture / learning from demonstration under honest labels |
| `content/lessons/day-36-cross-embodiment-skill-transfer.mdx` | Cross-embodiment skill transfer / sim-to-real under honest contact labels |
| `content/lessons/day-37-fleet-skill-library.mdx` | Fleet skill library / multi-unit skill catalog under embodiment-honest admission |
| `content/lessons/day-38-task-composition-catalog-skills.mdx` | Task composition over catalog skills under per-skill admission |
| `content/lessons/day-39-multi-unit-cooperative-tasks.mdx` | Multi-unit cooperative tasks (unit-to-unit handoff, two-robot carry) under per-unit admission |
| `content/lessons/day-40-human-robot-handover-co-carry.mdx` | Human–robot object handover and co-carry under PFL (release on measured pull, robot as force-capped follower, walk-away invariant) |
| `content/lessons/day-41-whole-body-tactile-skin-touch.mdx` | Whole-body tactile skin and intentional touch vs collision (momentum residual owns reaction, honest skin coverage, handle-enabled lead-by-hand) |
| `content/lessons/day-42-deliberate-whole-body-contact.mdx` | Deliberate whole-body contact, environment contact, and self-collision (subtract only measured in-band wrench at a confirmed site, hole sites need pads, out-of-band is a collision again) |
| `content/lessons/day-43-falls-fall-safe-contact.mdx` | Falls and fall-safe contact (commit only on measured capture exhaustion, steer inside the feasible cone away from people, land on measured pads within regen and derate budgets, measure before getting up) |
| `content/lessons/day-44-stairs-ramps-uneven-terrain.mdx` | Stairs, ramps, and uneven terrain (measured height map with honest σ, touchdown checks over the map, usable tread strips, stair mode only where the stair-sit fall is admitted, rails as recipes, descent speed bounded by capture and fall cone) |
| `content/lessons/day-45-outdoor-deformable-ground.mdx` | Outdoor and deformable ground (stiffness, sinkage, and friction measured by the feet, never a label; slips only lower admitted friction; depth σ degrades openly in weather; conditions from own sensors with the forecast lower-only; smaller CoP authority on soft ground) |
| `content/lessons/day-46-carrying-payloads-walking.mdx` | Carrying payloads while walking (mass, CoM, and inertia measured by the robot's own wrist F/T, never the manifest; combined model only from measurement; loaded bounds re-earned per mass band; slosh and shift from the wrench residual; release only into a cleared drop zone) |
| `content/lessons/day-47-pushing-pulling-heavy-objects.mdx` | Pushing, pulling, and moving heavy objects (hand wrench measured by wrist F/T and momentum balance, never the label; CoM kept inside the polygon with a brake reserve; friction cap from the robot's own weight; stalls back off, tips remove force; stop budget from the object's leading edge; release at rest with a hold test or into a cleared run-out) |
| `content/lessons/day-48-powered-hand-tools-process-forces.mdx` | Powered hand tools and sustained process forces (tool torque measured on a bench and cross-checked live by wrist F/T and motor current, at most half the wrist's hold; thrust balanced like a push with a feed cap for breakthrough; every bind cuts the tool and never adds force; spinning edge is SSM-only, separated by its measured run-down time; off only when measured stopped, battery out for handover) |
