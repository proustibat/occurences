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
        chai.expect(occurrences.options).to.eql({
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
        let testDifferentCases = (instance)=>{
            chai.assert.isObject(instance.options);
            chai.assert.isBoolean(instance.options.sensitiveCase);
            chai.expect(instance.options.ignored).to.satisfy((ignore)=>{
                return (typeof ignore === 'string' || ignore.constructor === Array);
            });
            if(instance.options.ignored.constructor === Array) {
                chai.expect(instance.options.ignored).to.satisfy((ignoredList)=>{
                    return ignoredList.every((ignored)=>{
                        return typeof ignored === 'string';
                    });
                });
            }
            chai.assert.isNumber(instance.options.biggerThan);
        };

        testDifferentCases(new Occurrences('bla bli blou', {sensitiveCase: 'must be a boolean', ignored:false, biggerThan: 'must be a number'}))
        testDifferentCases(new Occurrences('bla bli blou', {sensitiveCase: false, ignored:[3], biggerThan:3}))
    });


    it('works with biggerThan option set to another value than the default', () => {
        let occurrences = new Occurrences('bla bli blou, youpi', { biggerThan: 3 });
        chai.expect(occurrences.stats).to.eql({
            'blou': 1,
            'youpi': 1
        });
    });

    it('works with sensitiveCase option set to true', () => {
        let occurrences = new Occurrences('bla Bla', { sensitiveCase: true });
        chai.expect(occurrences.stats).to.eql({
            'bla': 1,
            'Bla': 1
        });
    });

    it('works with one word as ignored option', () => {
        let occurrences = new Occurrences('bla bli blou youpi yep', { ignored: 'bli' });
        chai.expect(occurrences.stats).to.eql({
            'bla': 1,
            'blou': 1,
            'youpi': 1,
            'yep': 1
        });
    });

    it('works with one word in an array as ignored option', () => {
        let occurrences = new Occurrences('bla bli blou youpi yep', { ignored: ['bli'] });
        chai.expect(occurrences.stats).to.eql({
            'bla': 1,
            'blou': 1,
            'youpi': 1,
            'yep': 1
        });
    });

    it('works with several words in an array as ignored option', () => {
        let occurrences = new Occurrences('bla bli blou youpi yep', { ignored: ['bli', 'blou'] });
        chai.expect(occurrences.stats).to.eql({
            'bla': 1,
            'youpi': 1,
            'yep': 1
        });
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
    // TODO: check if results are ok

    it('works with no argument', () => {
        let instance = new Occurrences("Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.");
        let sorted = instance.getSorted();
        chai.expect(sorted).to.be.an('array');
    });

    it('works with asc argument', () => {
        let instance = new Occurrences("Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.");
        let sorted = instance.getSorted('asc');
        let sorted2 = instance.getSorted('asc');
        chai.expect(sorted).to.be.an('array');
        chai.expect(sorted2).to.be.an('array');
    });

    it('works with desc argument', () => {
        let instance = new Occurrences("Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.");
        let sorted = instance.getSorted('desc');
        let sorted2 = instance.getSorted('desc');
        chai.expect(sorted).to.be.an('array');
        chai.expect(sorted2).to.be.an('array');
    });

    it('returns an array correctly sorted by ascending', () => {
        let instance = new Occurrences("three three four four one two two three four four");
        let sorted = instance.getSorted('asc');
        let sorted2 = instance.getSorted('asc');
        chai.expect(sorted).to.eql([{value:'one', number:1}, {value:'two', number:2}, {value:'three', number:3}, {value:'four', number:4}]);
        chai.expect(sorted2).to.eql([{value:'one', number:1}, {value:'two', number:2}, {value:'three', number:3}, {value:'four', number:4}]);
    });

    it('returns an array correctly sorted by descending', () => {
        let instance = new Occurrences("three three four four one two two three four four");
        let sorted = instance.getSorted('desc');
        let sorted2 = instance.getSorted('desc');
        chai.expect(sorted).to.eql([{value:'four', number:4}, {value:'three', number:3}, {value:'two', number:2}, {value:'one', number:1}]);
        chai.expect(sorted2).to.eql([{value:'four', number:4}, {value:'three', number:3}, {value:'two', number:2}, {value:'one', number:1}]);
    });
});


describe('meta', () => {
    let instance = new Occurrences("Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.");
    let instanceBiggerThan0 = new Occurrences("one two two three three three", {
        biggerThan: 0
    });
    let instanceSensistive = new Occurrences("one Two two three three three", {
        sensitiveCase: true
    });
    let instanceIgnore = new Occurrences("one Two two three three three", {
        ignored: 'three'
    });
    let instanceIgnoreSensitive = new Occurrences("one Two two three three three", {
        ignored: 'three',
        sensitiveCase: true
    });

    it('returns an object with all the properties as keys', () => {
        chai.expect(instance.meta).to.be.an('object').that.has.all.deep.keys('totalWords', 'differentWords', 'charsWS', 'charsNS');
    });

    it('returns the right type of value for each properties', () => {
        Object.keys(instance.meta).forEach((property)=>{
            chai.assert.isNumber(instance.meta[property]);
        });
    });

    it('counts the total number of words with default options (words bigger than 2)', () => {
        chai.expect(instance.meta.totalWords).to.equal(16);
    });

    it('counts the total number of words with "biggerThan" option equal to 0', () => {
        chai.expect(instanceBiggerThan0.meta.totalWords).to.equal(6);
    });

    it('counts the number of words that are different with default options', () => {
        chai.expect(instance.meta.differentWords).to.equal(10);
    });
    it('counts the number of words that are different with "biggerThan" option equal to 0', () => {
        chai.expect(instanceBiggerThan0.meta.differentWords).to.equal(3);
    });
    it('counts the number of words that are different with "sensitiveCase" option equal to true', () => {
        chai.expect(instanceSensistive.meta.differentWords).to.equal(4);
    });
    it('counts the number of words that are different with a word in the "ignored" option', () => {
        chai.expect(instanceIgnore.meta.differentWords).to.equal(2);
    });
    it('counts the number of words that are different with a word in the "ignored" option and the "sensitiveCase" option equal to true', () => {
        chai.expect(instanceIgnoreSensitive.meta.differentWords).to.equal(3);
    });

    it('counts the characters number including spaces', () => {
        chai.expect(instance.meta.charsWS).to.equal(109);
    });

    it('counts the characters number excluding spaces', () => {
        chai.expect(instance.meta.charsNS).to.equal(87);
    });
});

