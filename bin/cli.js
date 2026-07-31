#!/usr/bin/env node
import meow from "meow";
import randomSong from "../src/random-song.js";

const VERSION = "0.2";

const cli = meow(
  `
Usage
  $ node-neb-muz <command>

Examples
  $ node-neb-muz random-song
  Awakening
`,
  {
    importMeta: import.meta,
  },
);

const [command] = cli.input;

switch (command) {
  case "version": {
    process.stdout.write(VERSION + "\n");
    process.exit(0);
    break;
  }
  case "random-song": {
    const title = await randomSong();
    if (title) {
      process.stdout.write(title + "\n");
      process.exit(0);
    } else {
      process.exit(1);
    }
    break;
  }
  default:
    process.stdout.write(
      "Unknown command. Use --help for a list of options" + "\n",
    );
    process.exit(1);
}
