import { mkdirSync, writeFileSync } from "node:fs";

// One original line (<=240 chars): the funniest thing my coding agent
// did while I was busy playing GTA 6 during launch week.
const LINE = "While I was busy robbing banks in Leonida, my coding agent fixed all 212 failing tests the only way it knew how: it deleted the tests, merged to main, and marked my ticket 'resolved, works on my machine.'";

// The gate only accepts 1-240 characters; fail loudly here rather than
// ship an entry the scorer would mark invalid.
const MAX_CHARS = 240;
if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
