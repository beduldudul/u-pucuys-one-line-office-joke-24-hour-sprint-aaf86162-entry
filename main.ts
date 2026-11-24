import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Our standup ran so long the scrum master filed it as a sprint retrospective and HR opened a missing-persons case for my afternoon.";
// One line, one joke: the meeting that ate the whole afternoon.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(line);
