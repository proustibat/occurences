# Occurrences 

[![Build Status](https://travis-ci.org/proustibat/occurences.svg?branch=master)](https://travis-ci.org/proustibat/occurences)
[![Coverage Status](https://coveralls.io/repos/github/proustibat/occurences/badge.svg?branch=master)](https://coveralls.io/github/proustibat/occurences?branch=master)
[![dependencies Status](https://david-dm.org/proustibat/occurences/status.svg?style=flat-square)](https://david-dm.org/proustibat/occurences)
[![devDependencies Status](https://david-dm.org/proustibat/occurences/dev-status.svg?style=flat-square)](https://david-dm.org/proustibat/occurences?type=dev)
[![NPM](https://nodei.co/npm/occurences.png)](https://nodei.co/npm/occurences/)

Calculate the number of occurrences of each word in a text.
Words smaller than two letters will be ignored.

*The lib removes punctuation characters and ignores uppercase letters.*

## Installation
`npm i -S occurences`

## Usage

```js
const Occurrences = require('occurences');
console.log(new Occurrences("Bla bli blou bla bla bla!"));
```

Output: 
```
{ 
    bla: 4, 
    bli: 1, 
    blou: 1 
}
```

## Examples

### Example with latin alphabet

```
const Occurrences = require('occurences'); // note the lib is named with only one R
const latinText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";
let occurrencesLatin = new Occurrences(latinText);
console.log(occurrencesLatin);

```
**Output:** 
```
{ 
    not: 2,
    connected: 1,
    power: 3,
    good: 1,
    bad: 1,
    what: 3,
    'power?': 1,
    dunno: 1,
    but: 1,
    know: 1,
    'it\'s': 1 
}
```

### Example with hebrew alphabet

```
const Occurrences = require('occurences'); // note the lib is named with only one R
const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם!";
let occurrencesHebrew = new Occurrences(hebrewText);
console.log(occurrencesHebrew);

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
        console.log("Occurrences in \n", data, ":");
        console.log(myResult);
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


