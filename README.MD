# Occurrences  [![Twitter Follow](https://img.shields.io/twitter/follow/proustibat.svg?style=social&label=Follow)](https://twitter.com/proustibat)

Calculate the number of occurrences of each word in a text.
Words smaller than two letters will be ignored.
*The lib removes punctuation characters and ignores uppercase letters.*

<table>
	<tr>
		<td>
			<a href='https://travis-ci.org/proustibat/occurences'><img src='https://travis-ci.org/proustibat/occurences.svg?branch=master' alt='Build Status'/></a><br/>
			<a href='https://www.npmjs.com/package/occurences'><img src='https://img.shields.io/npm/dt/occurences.svg' alt='npm'/></a><br/>
		</td>
		<td>
			<a href='https://sonarcloud.io/dashboard?id=proustibat_occurences'><img src='https://sonarcloud.io/api/badges/gate?key=proustibat_occurences' alt='Sonar quality gate'/></a><br/>
			<a href='https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=alert_status'><img src='https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=alert_status' alt='Quality Gate Status'/></a>
		</td>
		<td>
			<a href='https://codeclimate.com/github/proustibat/occurences'><img src='https://codeclimate.com/github/proustibat/occurences/badges/gpa.svg' alt='Code Climate'/></a><br/>
			<a href='https://coveralls.io/github/proustibat/occurences?branch=master'><img src='https://coveralls.io/repos/github/proustibat/occurences/badge.svg?branch=master' alt='Coverage Status'/></a><br/>
		</td>
		<td>
			<a href='https://david-dm.org/proustibat/occurences'><img src='https://david-dm.org/proustibat/occurences/status.svg' alt='dependencies Status'/></a><br/>
			<a href='https://david-dm.org/proustibat/occurences?type=dev'><img src='https://david-dm.org/proustibat/occurences/dev-status.svg' alt='devDependencies Status'/></a><br/>
		</td>
	</tr>
</table>

## Installation
`npm i -S occurences`

## Usage

### Javascript

```js
const Occurrences = require('occurences');
let occ = new Occurrences(data, [options])
```
Where data is a string. Options object isn't required.

Running example on Runkit.com: [https://runkit.com/proustibat/occurences-example-request](https://runkit.com/proustibat/occurences-example-request)


### Typescript
Wanna use it with Angular 2? For example in an Ionic application. Import as follows:

```typescript
import * as Occurences from 'Occurences';
```

Note that `stats` of an instance is an object. So to list the words in an ionic template with `*ngFor`, proceed as follows to transform it in an array: 

*Typescript file:* 

```typescript
    this.textOccurrences = new Occurences(this.text);
    this.statsArray = Object.keys(this.textOccurrences.stats).map( key => {
        return { word: key, number: this.textOccurrences.stats[key] };
    });
```
*HTML :*
```html
<table>
    <tr *ngFor="let item of statsArray">
        <td>{{ item.word }}</td>
        <td>{{ item.number }}</td>
    </tr>
</table>
```


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
meta | Object | Global stats about the data: total number of words, number of different words, total number of characters with spaces (`charsWS`) or no (`charsNS`)  Returns an object as follows: `{totalWords:int, differentWords:int, charsWS:int, charsNS:int}`
lessUsed | Array | The less used word of the data (read-only)
mostUsed | Array | The most used word of the data (read-only)
smallest | Array | The smallest used word (read-only)
longest | Array | The longest used word (read-only)
options | Object | Settings of the instance (read-only)


## Methods 

Property | Parameters | Default | Description
-------- | ---------- | ------- | -----------
getSorted | String: '*desc*', '*asc*' | 'desc' | Returns an array with objects sorted by order descendant or ascendant, each index of the array is an object as follows : `{word:'three', number: '3'}`

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
getSorted:  [ { value: 'power', number: 4 },
  { value: 'what', number: 3 },
  { value: 'not', number: 2 },
  { value: 'connected', number: 1 },
  { value: 'good', number: 1 },
  { value: 'bad', number: 1 },
  { value: 'dunno', number: 1 },
  { value: 'but', number: 1 },
  { value: 'know', number: 1 },
  { value: 'it\'s', number: 1 } ]
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

## Continuous Code Quality
I use [Sonarqube](https://www.sonarqube.org/) on [Sonarcloud.io](https://sonarcloud.io/) to maintain clean code.
Public dashboard is here: [https://sonarcloud.io/dashboard?id=proustibat_occurences](https://sonarcloud.io/dashboard?id=proustibat_occurences)

### Some results:
[![Comments (%)](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=comment_lines_density)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=comment_lines_density)
[![Open issues](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=open_issues)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=open_issues)
[![Code smells](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=code_smells)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=code_smells)
[![Technical debt](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=sqale_index)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=sqale_index)
[![Bugs](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=bugs)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=bugs)
[![Reliability remediation effort](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=reliability_remediation_effort)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=reliability_remediation_effort)
[![Coverage](https://sonarcloud.io/api/badges/measure?key=proustibat_occurences&metric=coverage)](https://sonarcloud.io/component_measures?id=proustibat_occurences&metric=coverage)

### Using Sonar Scanner
Be sure you have downloaded and installed the [Sonarqube Scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner).
You need to add sonar-project.properties to the root of the project as folllows:

```
sonar.projectName=Occurences
sonar.projectKey=proustibat_occurences
sonar.host.url=https://sonarcloud.io
sonar.organization=proustibat-github
sonar.login=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
sonar.sources=.
sonar.exclusions=node_modules/**/*,coverage/**/*,example.js,test/**/*
sonar.javascript.lcov.reportPath=coverage/lcov.info
sonar.java.source=1.8
sonar.java.binaries=.

```

And then run sonar scanner as follows:

```
sonar-scanner -X -Dsonar.projectVersion=x.x.x
```

More information on [Sonarcloud.io](https://about.sonarcloud.io/get-started/)


## Contributing

- Issue Tracker: [https://github.com/proustibat/occurences/issues](https://github.com/proustibat/occurences/issues)
- Source Code: [https://github.com/proustibat/occurences](https://github.com/proustibat/occurences)
- Pull Requests: [https://github.com/proustibat/occurences/pulls](https://github.com/proustibat/occurences/pulls)

