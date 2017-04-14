// Import chai.
let chai = require('chai'),
    path = require('path');
let expect = chai.expect;

// Tell chai that we'll be using the "expect" style assertions.
chai.expect();

// Import the Occurences class.
let Occurrences = require(path.join(__dirname, '..', 'js', 'main'));

describe('Occurrences', () => {
    let occurrences;

    beforeEach(() => {
        // Create a new instance object before every test.
        occurrences = new Occurrences('bla bli blou');
    });

    it('returns an object', () => {
        expect(occurrences).to.be.an('object');
    });
});