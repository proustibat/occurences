// const Occurrences = require('occurences'); // note the lib is named with only one R
const Occurrences = require("./main");

let instance1 = new Occurrences('longword sameword short');
// let instance2 = new Occurrences('two two three three three yoyo yoyo');
// let instance3 = new Occurrences('allo allo allo yoyo two two');
// let instance4 = new Occurrences('allo allo allo yoyo yoyo yoyo two two');

    console.log('------------------------');
    // console.log('less');
    console.log(instance1.smallest);
    // console.log(instance1.lessUsed);
    //
    console.log('------------------------');
    // console.log('less');
    // console.log(instance2.stats);
    // console.log(instance2.lessUsed);
    //
    console.log('------------------------');
    // console.log('most');
    // console.log(instance3.stats);
    // console.log(instance3.mostUsed);
    //
    console.log('------------------------');
    // console.log('most');
    // console.log(instance4.stats);
    // console.log(instance4.mostUsed);
    //
    console.log('------------------------');



// const latinText = "123 §Not ±connected to |power. \\€Power is it good or bad. What is power? Dunno dunno dunno dunno what power is but I know what it's not.";
// let occurrencesLatin = new Occurrences(latinText, {sensitiveCase:true, biggerThan:'three', ignored:[1, 'dskdjksd']});
// console.log(occurrencesLatin.stats);
// console.log("---");
// console.log("longest: ", occurrencesLatin.longest);
// console.log("smallest: ", occurrencesLatin.smallest);
// console.log("---");
// console.log("lessUsed: ", occurrencesLatin.lessUsed);
// console.log("mostUsed: ", occurrencesLatin.mostUsed);
// console.log("lessUsed: ", occurrencesLatin.lessUsed);
// console.log("mostUsed: ", occurrencesLatin.mostUsed);
// console.log("---");
// console.log("getSorted: ", occurrencesLatin.getSorted());

// console.log(occurrencesLatin.prototype);
// console.log(occurrencesLatin instanceof Occurrences);

// const hebrewText = "שלום! חג פסח שמח ו שבת שלום לכולם!";
// let occurrencesHebrew = new Occurrences(hebrewText);
// console.log(occurrencesHebrew.stats);

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
