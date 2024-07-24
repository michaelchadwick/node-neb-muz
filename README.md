# node-neb-muz

> Tool for discovering things about the San Diego music legend [Nebyoolae](https://nebyoolae.bandcamp.com)

![Nebyoolae Bandcamp Photo](https://f4.bcbits.com/img/0035896241_100.png)

## Install

- To use locally in a project: `npm install node-neb-muz`
- To use globally on the command line: `npm install -g node-neb-muz`

## Usage

Locally in a project:

```js
import randomSong from "node-neb-muz/random-song";

console.log(await randomSong());
//=> 'My Chamber Life'
```

Globally on the command line (use `npx` if you don't want to install):

```bash
$ (npx) node-neb-muz random-song
Velocity Squared
```

## API

### randomSong()

Type: `string`

Random song name.

## CLI

```bash
$ npx node-neb-muz random-song

  Examples
    $ node-neb-muz random-song
    Leave a Muffin for the Chihuahua
```

```bash
$ npx node-neb-muz --help

  Usage
    $ node-neb-muz <command>

  Examples
    $ node-neb-muz random-song
    Awakening
```
