let defaultOptions = {
    sensitiveCase: false,
    ignored: '',
    biggerThan: 2
};

const Occurences = function Occurences(text, options) {
    this._options = {};
    this._stats = {}; // Will contains each word and its number of occurrences
    this._lessUsed = null;
    this._mostUsed = null;
    this._longuest = null;
    this._smallest = null;
    this._sortedDesc = null;
    this._sortedAsc = null;

    options = options ? checkOptions(options) : defaultOptions;
    Object.assign(this._options, defaultOptions, options);

    // TODO: use options to allow sensistive case for example or word length restriction or excepted words
    if (typeof text === 'string') {
        this._stats = text
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

const checkOptions = function(options) {
    let opt = {};
    // sensitiveCase
    if( options.sensitiveCase !== null && typeof options.sensitiveCase !== 'undefined' && typeof options.sensitiveCase === 'boolean') {
        opt.sensitiveCase = options.sensitiveCase;
    }
    // ignored
    if(options.ignored !== null && typeof options.ignored !== 'undefined' && (typeof options.ignored === 'string' || options.ignored.constructor === Array)) {
        opt.ignored = options.ignored.constructor === Array ? options.ignored.filter( item => typeof item === 'string') : options.ignored;
    }
    // biggerThan
    if(options.biggerThan !== null && typeof options.biggerThan !== 'undefined' && typeof options.biggerThan === 'number') {
        opt.biggerThan = options.biggerThan;
    }
    return opt;
};

Occurences.prototype = {
    /**
     * Returns instance options
     * @returns {{sensitiveCase: boolean, ignored: string, biggerThan: number}}
     */
    get options() {
        return this._options;
    },

    /**
     * Returns object with each word as key and its occurrence number as value
     * @returns {{}}
     */
    get stats() {
        return this._stats;
    },

    /**
     * Returns the less used word
     * @returns {Array}
     */
    get lessUsed() {
        // Looking for only if it hasn't be done before
        if(this._lessUsed === null) {
            let minCount;
            let lessUsed = [];
            let allValues = [];
            // TODO: refacto to improve perf
            Object.keys(this._stats).forEach(function lessUsedForEach(key) {
                allValues.push(this._stats[key]);
            }.bind(this));
            minCount = Math.min.apply(null, allValues);
            Object.keys(this._stats).forEach(function lessUsedForEach(key) {
                let value = this._stats[key];
                if(value === minCount ) {
                    lessUsed.push(key);
                }
            }.bind(this));
            // if(lessUsed.length === 1 ) {
            //     lessUsed = lessUsed[0];
            // }
            this._lessUsed = lessUsed;
        }
        return this._lessUsed;
    },

    /**
     * Returns the most used word
     * @returns {Array}
     */
    get mostUsed() {
        // Looking for only if it hasn't be done before
        if(this._mostUsed === null) {
            let maxCount = 0;
            let mostUsed = [];
            let allValues = [];
            // TODO: refacto to improve perf
            Object.keys(this._stats).forEach(function mostUsedForEach(key) {
                allValues.push(this._stats[key]);
            }.bind(this));
            maxCount = Math.max.apply(null, allValues);
            Object.keys(this._stats).forEach(function mostUsedForEach(key) {
                let value = this._stats[key];
                if(value === maxCount ) {
                    mostUsed.push(key);
                }
            }.bind(this));
            // if(mostUsed.length === 1 ) {
            //     mostUsed = mostUsed[0];
            // }
            this._mostUsed = mostUsed;
        }
        return this._mostUsed;
    },

    /**
     * Returns the longuest word of the data
     * @returns {String|Array}
     */
    get longest() {
        if(this._longuest === null) {
            let maxLength = 0;
            let longest = [];
            let allLength = [];
            // TODO: refacto to improve perf
            Object.keys(this._stats).forEach(function longestForEach(key) {
                allLength.push(key.length);
            });
            maxLength = Math.max.apply(null, allLength);
            Object.keys(this._stats).forEach(function longestForEach(key) {
                if(key.length === maxLength ) {
                    longest.push(key);
                }
            });
            this._longuest = longest;
        }
        return this._longuest;
    },

    /**
     * Returns the smallest word of the data
     * @returns {String|Array}
     */
    get smallest() {
        if(this._smallest === null) {
            let minLength;
            let smallest = [];
            let allLength = [];
            // TODO: refacto to improve perf
            Object.keys(this._stats).forEach(function smallestForEach(key) {
                allLength.push(key.length);
            });
            minLength = Math.min.apply(null, allLength);
            Object.keys(this._stats).forEach(function smallestForEach(key) {
                if(key.length === minLength ) {
                    smallest.push(key);
                }
            });
            this._smallest = smallest;
        }
        return this._smallest;
    },

    /**
     * Returns words occurrences sorted by ascendant/descendant order
     * @param String: 'asc', 'desc'
     * @returns {{}}
     */
    getSorted: function(order) {

        // If no argument, orders by descendant by default
        order = typeof order === 'undefined' ? 'desc' : order;

        // Be sure the argument is in lowercase
        order = order.toLowerCase();

        // If sorted object already exists, simply returns it
        if(order ==='asc' && this._sortedAsc !== null) {
            return this._sortedAsc;
        }
        if(order ==='desc' && this._sortedDesc !== null) {
            return this._sortedDesc;
        }

        // Sort sorted objects
        this._sortedAsc = this._sort(order, this._stats);
        this._sortedDesc = this._sort(order, this._stats);

        // Returns the requested sorted object
        return (order === 'asc') ? this._sortedAsc : this._sortedAsc;
    },


    _sort:function(order, stats) {
        // TODO: REFACTO
        let keysSorted = Object.keys(stats).sort(function(a,b){
            if(order === 'asc') {
                return stats[a]-stats[b];
            }
            else {
                return stats[b] - stats[a];
            }
        });
        let result = {};
        keysSorted.forEach(function(key) {
            result[key] = stats[key];
        });
        return result;
    }
};




module.exports = Occurences;