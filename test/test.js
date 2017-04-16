// Import chai.
let chai = require('chai'),
    path = require('path');
let expect = chai.expect;

// Tell chai that we'll be using the "expect" style assertions.
chai.expect();

// Import the Occurences class.
let Occurrences = require(path.join(__dirname, '..', 'main'));

describe('Occurrences', () => {

    it('returns an object', () => {
        let occurrences = new Occurrences('bla bli blou');
        expect(occurrences).to.be.an('object');
    });

    it('works with a number as argument', () => {
        let occurrences = new Occurrences(2901);
        expect(occurrences).to.be.an('object');
    });

    it('works with an object as argument', () => {
        let occurrences = new Occurrences({});
        expect(occurrences).to.be.an('object');
    });

    it('works with an array as argument', () => {
        let occurrences = new Occurrences([]);
        expect(occurrences).to.be.an('object');
    });

    it('works with a null object as argument', () => {
        let occurrences = new Occurrences(null);
        expect(occurrences).to.be.an('object');
    });

    it('works with undefined as argument', () => {
        let occurrences = new Occurrences(undefined);
        expect(occurrences).to.be.an('object');
    });

    it('counts correctly repeats', () => {
        let occurrences = new Occurrences('bla bla bla');
        expect(occurrences).to.have.property('bla').to.equal(3);
    });

});