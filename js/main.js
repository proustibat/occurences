module.exports = function(text, options) {

    // TODO: use options to allow sensistive case for example or word length restriction or excepted words
    options = options || {};

    // Will contains each word and its number of occurrences
    let result = {};

    if (null !== text) {
        // Remove punctuations
        const punctuationLess = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

        // this can't be like this, because does'nt work with languages like hebrew or arab!
        // const myCleanedText = text.replace(/[^A-Za-z0-9_]/g," ");

        // Split text into an array of words
        const wordsArray = punctuationLess.split(" ");

        // Parse each word of the array
        wordsArray.forEach(function(word){

            // Remove uppercase letters
            word = word.toLowerCase();

            // Check word's length: we don't want to take care of small words
            if(word.length > 2) {

                // The loop checks this word for the first time
                if(!result[word]) {
                    result[word] = 1;
                }
                else {
                    // The word exists in our result object, so we increments its counter
                    result[word]++;
                }
            }
        });
    }

    // Return the object containing each occurrence of word and its counter
    return result;
};

//TODO : add method on instance:
// get number of differents words for example,
// or string length,
// or stats like only the most used word,
// the less used word,
// the longest word,
// the smaller word
// sort result by number ascendant or descendant






