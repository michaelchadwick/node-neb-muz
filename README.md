# node-neb-muz

> Tool for discovering things about the San Diego music legend [Nebyoolae](https://nebyoolae.bandcamp.com)

![Nebyoolae Bandcamp Photo](https://f4.bcbits.com/img/0035896241_100.png)

## Install

```
$ npm install node-neb-muz
```

## Usage

```js
import randomSong from 'node-neb-muz/random-song';

console.log(await randomSong());
//=> 'My Chamber Life'
```

## API

### randomSong()

Type: `string`

Random song name.

## CLI

```
$ npx node-neb-muz random-song

  Examples
    $ node-neb-muz random-song
    Leave a Muffin for the Chihuahua
```

```
$ npx node-neb-muz --help

  Usage
    $ node-neb-muz <command>

  Examples
    $ node-neb-muz random-song
    Awakening
```
