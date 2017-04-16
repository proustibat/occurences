// const Occurrences = require('occurences'); // note the lib is named with only one R
const Occurrences = require("./main");


const latinText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";
let occurrencesLatin = new Occurrences(latinText);
console.log(occurrencesLatin.stats);
console.log("---");
console.log("longest: ", occurrencesLatin.longest);
console.log("smallest: ", occurrencesLatin.smallest);
console.log("lessUsed: ", occurrencesLatin.lessUsed);
console.log("mostUsed: ", occurrencesLatin.mostUsed);
console.log("getSorted: ", occurrencesLatin.getSorted());


const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם!";
let occurrencesHebrew = new Occurrences(hebrewText);
console.log(occurrencesHebrew.stats);

//
// const request = require('request');         // note you have to install request lib
// const url = "http://faker.hook.io/?property=lorem.sentences";
// request({
//     url: url,
//     json: true
// }, function (error, response, data) {
//     if (!error && response.statusCode === 200) {
//         let myResult = new Occurrences(data);
//         console.log(myResult.stats);
//     }
//     else {
//         console.log("It seems an error occured when requesting ", url);
//     }
// });



// console.log(occ.stats);
// console.log(occ.longest);
// console.log(occ.smallest);
// console.log(occ.lessUsed);
// console.log(occ.mostUsed);
// console.log(occ.getSortedBy('asc'));
// console.log(occ.getSortedBy('desc'));
