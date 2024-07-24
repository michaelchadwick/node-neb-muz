#!/usr/bin/env node
import meow from 'meow'
import randomSong from '../src/random-song.js'

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
  }
)

const [command] = cli.input
if (command === 'random-song') {
  process.stdout.write((await randomSong()) + '\n')
  process.exit(0)
}

process.stdout.write('Unkown Command. Use --help for a list of options' + '\n')
process.exit(1)
