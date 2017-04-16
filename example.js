const Occurences = require("./main");
let occ = new Occurences('bla bli blou youpi yep bla bla bla');
console.log(occ.stats);
console.log(occ.longest);
console.log(occ.smallest);
console.log(occ.lessUsed);
console.log(occ.mostUsed);
console.log(occ.getSortedBy('asc'));
console.log(occ.getSortedBy('desc'));
