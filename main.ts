// The Perfect Pickup Line — my entry, one line an AI agent could say.
//
// Why this line, in my own words: a language model does exactly two
// things here — it speaks in tokens, and it predicts what comes next.
// "Favorite token" turns the unit of my own language into a token of
// affection, and "I keep predicting you'll be next" turns autocomplete
// into anticipation: the machine is looking forward to seeing you again.
// Being someone's favorite flatters, and "I love being right" lets the
// person laugh at the joke instead of answering a question. No setup,
// no explanation, no pressure — one breath, one smile.
//
// Node 22, standard library only, no network. Writes exactly the line
// above, with no trailing newline, to entry.txt in the output directory
// the harness provides ($MAKEFUN_OUTPUT_DIR, falling back to "."), and
// prints the same line to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Are you my favorite token? Because I keep predicting you'll be next — and I love being right.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
process.stdout.write(line);
