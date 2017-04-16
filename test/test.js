// Import chai.
let chai = require('chai'),
    path = require('path');
// let expect = chai.expect;

// Tell chai that we'll be using the "expect" style assertions.
// chai.expect();

// Import the Occurences class.
let Occurrences = require(path.join(__dirname, '..', 'main'));

describe('Stats', () => {

    it('Returns an instance', () => {
        let occurrences = new Occurrences('bla bli blou');
        chai.assert.instanceOf(occurrences, Occurrences);

    });

    it('works with a number as argument', () => {
        let occurrences = new Occurrences(2901);
        chai.expect(occurrences.stats).to.be.an('object');
    });

    it('works with an object as argument', () => {
        let occurrences = new Occurrences({});
        chai.expect(occurrences.stats).to.be.an('object');
    });

    it('works with an array as argument', () => {
        let occurrences = new Occurrences([]);
        chai.expect(occurrences.stats).to.be.an('object');
    });

    it('works with a null object as argument', () => {
        let occurrences = new Occurrences(null);
        chai.expect(occurrences.stats).to.be.an('object');
    });

    it('works with undefined as argument', () => {
        let occurrences = new Occurrences(undefined);
        chai.expect(occurrences.stats).to.be.an('object');
    });

    it('counts correctly repeats', () => {
        let occurrences = new Occurrences('bla bla bla');
        chai.assert.propertyVal(occurrences.stats, 'bla', 3);
    });

});


describe('Options', () => {
    it('creates default options correctly', () => {
        let occurrences = new Occurrences('bla bli blou');
        chai.assert.isObject(occurrences.options);
        chai.expect(occurrences.options).to.contain.all.keys({
            'sensitiveCase': false,
            'ignored': '',
            'biggerThan': 2
        });
    });

    it('merges options correctly even if arguments options are incomplete', () => {
        let occurrences = new Occurrences('bla bli blou', {sensitiveCase: false});
        chai.assert.isObject(occurrences.options);
        chai.expect(occurrences.options).to.contain.all.keys(['sensitiveCase', 'ignored', 'biggerThan']);
    });

    it('merges options with arguments as priorities', () => {
        let occurrences = new Occurrences('bla bli blou', {sensitiveCase: true, ignored:'ignoredWord', biggerThan:3});
        chai.assert.isObject(occurrences.options);
        chai.assert.propertyVal(occurrences.options, 'sensitiveCase', true);
        chai.assert.propertyVal(occurrences.options, 'ignored', 'ignoredWord');
        chai.assert.propertyVal(occurrences.options, 'biggerThan', 3);
    });

    it('merges options correctly even if arguments options types are wrong', () => {
        let testDifferentCases = function (instance) {
            chai.assert.isObject(instance.options);
            chai.assert.isBoolean(instance.options.sensitiveCase);
            chai.expect(instance.options.ignored).to.satisfy(function(ignore){
                return (typeof ignore === 'string' || ignore.constructor === Array);
            });
            if(instance.options.ignored.constructor === Array) {
                chai.expect(instance.options.ignored).to.satisfy(function ItemsAreString(ignoredList) {
                    return ignoredList.every(function(ignored) {
                        return typeof ignored === 'string';
                    });
                });
            }
            chai.assert.isNumber(instance.options.biggerThan);
        };

        testDifferentCases(new Occurrences('bla bli blou', {sensitiveCase: 'must be a boolean', ignored:false, biggerThan: 'must be a number'}))
        testDifferentCases(new Occurrences('bla bli blou', {sensitiveCase: false, ignored:[3], biggerThan:3}))
    });

    //TODO : check if options are used
});


describe('lessUsed', () => {
    it('returns the less used words in an array', () => {
        let instance = new Occurrences('two two three three three yoyo yoyo');
        chai.assert.isArray(instance.lessUsed);
        chai.expect(instance.lessUsed).to.eql(['two', 'yoyo']);
    });
});

describe('mostUsed', () => {
    it('returns the most used words in an array', () => {
        let instance = new Occurrences('allo allo allo yoyo yoyo yoyo two two');
        chai.assert.isArray(instance.mostUsed);
        chai.expect(instance.mostUsed).to.eql(['allo', 'yoyo']);
    });
});

describe('longest', () => {
    it('returns the longest used words in an array', () => {
        let instance = new Occurrences('longword sameword short');
        chai.assert.isArray(instance.longest);
        chai.expect(instance.longest).to.eql(['longword', 'sameword']);
    });
});

describe('smallest', () => {
    it('returns the smallest used words in an array', () => {
        let instance = new Occurrences('longword short small');
        chai.assert.isArray(instance.smallest);
        chai.expect(instance.smallest).to.eql(['short', 'small']);
    });
});

describe('getSorted', () => {
    let instance = new Occurrences("Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.");

    // TODO: check if results are ok

    it('works with no argument', () => {
        let sorted = instance.getSorted();
        chai.expect(sorted).to.be.an('object');
    });

    it('works with asc argument', () => {
        let sorted = instance.getSorted('asc');
        chai.expect(sorted).to.be.an('object');
    });

    it('works with desc argument', () => {
        let sorted = instance.getSorted('desc');
        chai.expect(sorted).to.be.an('object');
    });
});

