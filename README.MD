![Dependencies Updates Status](https://david-dm.org/proustibat/occurences.svg)


# Occurrences 
> Calculate the number of occurrences of each word in a text.
> Words smaller than two letters will be ignored.

*The lib removes punctuation characters and ignores uppercase letters.*

## Installation
`npm install @proustibat/occurences`

## Usage

```js
const Occurrences = require('@proustibat/occurrences');

const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם! ";
let occurrencesHebrew = new Occurrences(hebrewText);
console.log(occurrencesHebrew);
```

## Examples
```
node js/example.js
```


## Tests
`npm test`


## Contributing

- Issue Tracker: [https://github.com/proustibat/occurences/issues](https://github.com/proustibat/occurences/issues)
- Source Code: [https://github.com/proustibat/occurences](https://github.com/proustibat/occurences)
- Pull Requests: [https://github.com/proustibat/occurences/pulls](https://github.com/proustibat/occurences/pulls)


