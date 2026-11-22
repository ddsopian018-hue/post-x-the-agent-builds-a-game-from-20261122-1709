# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ddsopian018-hue/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ddsopian018-hue/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game — **NEON DODGE** — from a single prompt, filmed the whole thing, and turned it into a 50-second vertical video for X: the prompt, the agent working in a terminal, the game opening in a browser, and the game actually running (score climbing, speed rising, one hit ends it), ending on make.fun's referral card. The video is at `~/workspace/makefun/videos/post-x-the-agent-builds-a-game-from-20261122-1709.mp4` (kept out of this repo: entry size cap) — post it natively on X from @FathanRA12 and this entry's `POST.json` names the post.

## Run it

```sh
open game.html
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Play NEON DODGE: open `game.html` in any browser, move with ← → (or drag / touch), dodge the falling meteors. Score +1 per second survived; every 10 seconds the meteors fall faster. One hit ends the run — press R to play again.

---

<sub>Entered on [make.fun](https://make.fun/?ref=15w4cn26&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
