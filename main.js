module.exports = function(text, options) {

    // TODO: use options to allow sensistive case for example or word length restriction or excepted words
    options = options || {};

    // Will contains each word and its number of occurrences
    let result = {};

    if (null !== text) {

        // this can't be like this, because does'nt work with languages like hebrew or arab!
        // const myCleanedText = text.replace(/[^A-Za-z0-9_]/g," ");

        result = text
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")  // Remove punctuations
            .split(" ")                                  // Split text into an array of words
            .map( word => word.toLowerCase() )           // Remove uppercase letters
            .filter( word => word.length>2 )             // filter small words
            .reduce(( reduced, word ) => {
                // If word exist in our reduced: increments it, else create it with value 1
                reduced[word] = reduced[word] ? reduced[word]+1 : 1;
                return reduced;
            }, {});
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