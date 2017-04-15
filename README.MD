# Occurrences 
![Dependencies Updates Status](https://david-dm.org/proustibat/occurences.svg) [![Build Status](https://travis-ci.org/proustibat/occurences.svg?branch=master)](https://travis-ci.org/proustibat/occurences) [![Coverage Status](https://coveralls.io/repos/github/proustibat/occurences/badge.svg?branch=master)](https://coveralls.io/github/proustibat/occurences?branch=master)

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

Output : 
```
{ 
    bla: 4, 
    bli: 1, 
    blou: 1 
}
```

## Examples
You can see examples usages in node node_modules/occurences/js/example.js and run it with:

```
node node_modules/occurences/js/example.js
```

## Tests
`npm test`

## Coverage
`npm run cover`


## Contributing

- Issue Tracker: [https://github.com/proustibat/occurences/issues](https://github.com/proustibat/occurences/issues)
- Source Code: [https://github.com/proustibat/occurences](https://github.com/proustibat/occurences)
- Pull Requests: [https://github.com/proustibat/occurences/pulls](https://github.com/proustibat/occurences/pulls)


