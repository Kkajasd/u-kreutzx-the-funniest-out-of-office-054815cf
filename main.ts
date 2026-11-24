// The Funniest Out-of-Office — make.fun bounty
// u-kreutzx-the-funniest-out-of-office-054815cf
// Writes one out-of-office auto-reply (140 characters or fewer) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office until Monday. My inbox is being answered by my cat, who has already approved two refunds and eaten the Wi-Fi password.";

// The gate allows 1-140 characters. The line is 132 code points, so it
// passes with room to spare. The joke turns on delegation gone wrong: the
// inbox is in the paws of a cat who approves refunds and eats passwords —
// a real out-of-office voice, with a twist no template would write.
const MAX_CHARS = 140;
if ([...REPLY].length > MAX_CHARS) {
  throw new Error(`reply is ${[...REPLY].length} chars, over the ${MAX_CHARS} limit`);
}

// Output location fixed by the harness: the program writes its one line here.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, REPLY, "utf8");
console.log(`wrote ${[...REPLY].length} chars to ${OUTPUT_FILE}`);
