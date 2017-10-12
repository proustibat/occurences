# Occurrences 

Calculate the number of occurrences of each word in a text.
Words smaller than two letters will be ignored.
*The lib removes punctuation characters and ignores uppercase letters.*

[![Build Status](https://travis-ci.org/proustibat/occurences.svg?branch=master)](https://travis-ci.org/proustibat/occurences)
[![Code Climate](https://codeclimate.com/github/proustibat/occurences/badges/gpa.svg)](https://codeclimate.com/github/proustibat/occurences)
[![Coverage Status](https://coveralls.io/repos/github/proustibat/occurences/badge.svg?branch=master)](https://coveralls.io/github/proustibat/occurences?branch=master)
[![BCH compliance](https://bettercodehub.com/edge/badge/proustibat/occurences?branch=master)](https://bettercodehub.com/)
[![dependencies Status](https://david-dm.org/proustibat/occurences/status.svg)](https://david-dm.org/proustibat/occurences)
[![devDependencies Status](https://david-dm.org/proustibat/occurences/dev-status.svg)](https://david-dm.org/proustibat/occurences?type=dev)
[![npm](https://img.shields.io/npm/dt/occurences.svg)](https://www.npmjs.com/package/occurences)


[![NPM](https://nodei.co/npm/occurences.png)](https://nodei.co/npm/occurences/)

## Installation
`npm i -S occurences`

## Usage

```js
const Occurrences = require('occurences');
let occ = new Occurrences(data, [options])
```
Where data is a string. Options object isn't required.

Running example on Runkit.com: [https://runkit.com/proustibat/occurences-example](https://runkit.com/proustibat/occurences-example)

### Options 

Option | Type | Default | Description
------ | ---- | ------- | -----------
sensitiveCase | Boolean | false | If defined to true, counts as 2 different words same word with uppercases
ignored | String or Array | - | One or several words to ignore when counting occurrences
biggerThan | int | 2 | Considers only words larger than this number of letters


## Properties 

Property | Type  | Description
-------- | ----  | -----------
stats | Object | Each words occurrences: word as key, occurence number as value (read-only)
lessUsed | Array | The less used word of the data (read-only)
mostUsed | Array | The most used word of the data (read-only)
smallest | Array | The smallest used word (read-only)
longest | Array | The longest used word (read-only)
options | Object | Settings of the instance (read-only)


## Methods 

Property | Parameters | Default | Description
-------- | ---------- | ------- | -----------
getSorted | String: '*desc*', '*asc*' | 'desc' | Returns stats sorted by order descendant or ascendant

## Examples

### Example with latin alphabet

#### Simple stats
```
const Occurrences = require('occurences'); // note the lib is named with only one R
const latinText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";
let occurrencesLatin = new Occurrences(latinText);
console.log(occurrencesLatin.stats);
```
**Output:** 
```
{ 
    not: 2,
    connected: 1,
    power: 4,
    good: 1,
    bad: 1,
    what: 3,
    dunno: 1,
    but: 1,
    know: 1,
    'it\'s': 1 
}
```

### Other properties

```
console.log("longest: ", occurrencesLatin.longest);
console.log("smallest: ", occurrencesLatin.smallest);
console.log("lessUsed: ", occurrencesLatin.lessUsed);
console.log("mostUsed: ", occurrencesLatin.mostUsed);
console.log("getSorted: ", occurrencesLatin.getSorted());
```
**Output:** 
```
longest:  ['connected']
smallest:  [ 'not', 'bad', 'but' ]
lessUsed:  [ 'connected', 'good', 'bad', 'dunno', 'but', 'know', 'it\'s' ]
mostUsed:  ['power']
getSorted:  { power: 4,
  what: 3,
  not: 2,
  connected: 1,
  good: 1,
  bad: 1,
  dunno: 1,
  but: 1,
  know: 1,
  'it\'s': 1 }
```

### Example with hebrew alphabet

```
const Occurrences = require('occurences'); // note the lib is named with only one R
const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם!";
let occurrencesHebrew = new Occurrences(hebrewText);
console.log(occurrencesHebrew.stats);

```
**Output:** 
```
{ 
	'שלום': 2, 
	'פסח': 1, 
	'שמח': 1, 
	'שבת': 1, 
	'לכולם': 1 
}
```
*Note that text editor don't outputs from left to right but the object is ok in real life*


### Example with async data

```
const Occurrences = require('occurences');  // note the lib is named with only one R
const request = require('request');         // note you have to install request lib
const url = "http://faker.hook.io/?property=lorem.sentences";
request({
    url: url,
    json: true
}, function (error, response, data) {
    if (!error && response.statusCode === 200) {
        let myResult = new Occurrences(data);
        console.log(myResult.stats);
    }
    else {
        console.log("It seems an error occured when requesting ", url);
    }
});

```

**Output:** 
```
{ 
    nobis: 1,
    quam: 1,
    sapiente: 1,
    fugiat: 1,
    cumque: 2,
    nisi: 1,
    voluptatem: 1,
    sint: 1,
    quibusdam: 1,
    impedit: 1,
    modi: 2,
    expedita: 1,
    deserunt: 1,
    non: 1 
}
```

## Tests
`npm test`

## Coverage
`npm run cover`


## Contributing

- Issue Tracker: [https://github.com/proustibat/occurences/issues](https://github.com/proustibat/occurences/issues)
- Source Code: [https://github.com/proustibat/occurences](https://github.com/proustibat/occurences)
- Pull Requests: [https://github.com/proustibat/occurences/pulls](https://github.com/proustibat/occurences/pulls)





