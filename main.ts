// Entry program for the make.fun video-on-X bounty
// "The agent builds a game from one prompt" (Node 22, standard library only).
//
// The entry is the X post itself: an AI agent built a tiny browser game
// (game.html, in this repo) from one prompt, filmed the whole thing as a
// 50-second vertical video, and posted it natively on X. This program does
// the one thing the gate needs: it copies POST.json — the post's address —
// from the repository into the output directory, where the house reads it
// and then reads the post's public counts through FxTwitter.
//
// POST.json still holds the placeholder address until the video is posted;
// the real post URL replaces it before submission.
//
// Grader-sim, run from the repo root:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');

let post;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  console.error('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"} (an object with a string "url")');
  process.exit(1);
}

if (!/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json "url" is not an X/Twitter status URL: ${post.url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  writeFileSync(target, JSON.stringify(post));
} catch (err) {
  console.error(`cannot write ${target}: ${(err as Error).message}`);
  process.exit(1);
}
