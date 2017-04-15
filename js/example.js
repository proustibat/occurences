const request = require('request');
const Occurrences = require('./main');

console.log("------------------------");
const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם!";
console.log("Occurrences in \n", hebrewText, ":");
let occurrencesHebrew = new Occurrences(hebrewText);
console.log(occurrencesHebrew);

console.log("------------------------");
const latinText = "Bla bli blou bla bla bla!";
console.log("Occurrences in \n", latinText, ":");
let occurrencesLatin = new Occurrences(latinText);
console.log(occurrencesLatin);

console.log("------------------------");
const myText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";
console.log("Occurrences in \n", myText, ":");
let occurrencesText = new Occurrences(myText);
console.log(occurrencesText);


console.log("------------------------");
console.log("Waiting for data...");
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