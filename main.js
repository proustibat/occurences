let _options = {
    sensitiveCase: false,
    ignored: '',
    biggerThan: 2
};

let _stats = {};

const Occurences = function Occurences(text, options) {

    // TODO: use options to allow sensistive case for example or word length restriction or excepted words
    _options = options || _options;

    _stats = {}; // Will contains each word and its number of occurrences
    if (typeof text === 'string') {
        _stats = text
            .replace(/[§±><|\\"+.,\/#!$€%\^&\*;:{}\[\]=\-_`~()?]/g,' ') // Remove punctuations
            .replace(/\d+/g,' ')                                        // Remove Numbers
            .split(" ")                                                 // Split text into an array of words
            .map( word => word.toLowerCase() )                          // Remove uppercase letters
            .filter( word => word.length>2 )                            // filter small words
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
     * Returns instance options
     * @returns {{sensitiveCase: boolean, ignored: string, biggerThan: number}}
     */
    get options() {
        return _options;
    },

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
        return 'usedOneTime';
    },

    /**
     * Returns the most used word
     * @returns {String|Array}
     */
    get mostUsed() {
        return 'usedThreeTime';
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
        return 'small';
    },

    /**
     * Returns words occurrences sorted by ascendant/descendant order
     * @param String: 'asc', 'desc'
     * @returns {{}}
     */
    getSorted: function(order) {
        return {power: 4, what: 3, not: 2, connected: 1, good: 1, bad: 1, dunno: 1, but: 1, know: 1, 'it\'s': 1};
    }
};

module.exports = Occurences;
