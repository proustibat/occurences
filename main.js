let _options = {};
let _stats = {};

const Occurences = function Occurences(text, options) {
    // TODO: use options to allow sensistive case for example or word length restriction or excepted words
    _options = options || {};
    _stats = {}; // Will contains each word and its number of occurrences
    if (typeof text === 'string') {
        _stats = text
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")  // Remove punctuations
            .split(" ")                                  // Split text into an array of words
            .map( word => word.toLowerCase() )           // Remove uppercase letters
            .filter( word => word.length>2 )             // filter small words
            .reduce(( reduced, word ) => {
                // If word exist in our reduced: increments it, else creates it with value 1
                reduced[word] = reduced[word] ? reduced[word]+1 : 1;
                return reduced;
            }, {});
    }
    return this;
};

Occurences.prototype = {
    /**
     * Returns object with each word as key and its occurrence number as value
     * @returns {{}}
     */
    get stats() {
        return _stats;
    },

    /**
     * Returns the less used word
     * @returns {String|Array}
     */
    get lessUsed() {
        return 'less';
    },

    /**
     * Returns the most used word
     * @returns {String|Array}
     */
    get mostUsed() {
        return 'most';
    },

    /**
     * Returns the longuest word of the data
     * @returns {String|Array}
     */
    get longest() {
        return 'longest';
    },

    /**
     * Returns the smallest word of the data
     * @returns {String|Array}
     */
    get smallest() {
        return 'smallest';
    },

    /**
     * Returns words occurrences sorted by ascendant/descendant order
     * @param String: 'asc', 'desc'
     * @returns {{}}
     */
    getSorted: function(order) {
        return {};
    }
};

module.exports = Occurences;
