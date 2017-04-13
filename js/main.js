/*
const mystring = "Not connected to power. Power—is it good or bad";
const lookingFor = "power";
let occurences = 0;
let myStrToArr = mystring.split(" ");
myStrToArr.forEach(function(word) {
  if(word.length > 2 && lookingFor === word) {
    occurences++;
  }
});

// TODO : gestion ponctuation (surtout pour l'anglais où il n'y a pas d'espace avant les deux points par exemple)
// TODO : gestion majuscule/minuscule
// TODO : dynamisation du texte de base et dynamisation du texte a chercher
// TODO : voir si avec la methode replace on peut pas avoir le nombre d'occurences directements


console.log("------------------------");
console.log("Le texte de base : ");
console.log(mystring);
console.log("------------");
console.log("Le mot recherché : ");
console.log(lookingFor);
console.log("------------");
console.log("Nombre d'occurences: ", occurences);
console.log("------------------------");
*/


/*
// COMPTER LE NOMBRE D'OCCURENCES D'UN MOT DANS UNE STRING : REGEX METHOD
console.log("------------------------");
const mystring = "Not connected to power. Power—is it good or bad";
const lookingFor = "power";
let occurences = (mystring.match(new RegExp(lookingFor, "gmi")) || []);
let nbOccurences = occurences.length;
console.log("Nombre d'occurences avec une regex " + nbOccurences);
console.log("------------------------");
*/

/**
 * COMPTER LE NOMBRE D'OCCURENCES DE CHAQUE MOT DANS UN TEXTE
 */

const myText = "Not connected to power. Power is it good or bad. What is power? Dunno what power is but I know what it's not.";

// Retire les ponctuations
const myCleanedText = myText.replace(/[^A-Za-z0-9_]/g," ");

// Split le texte en un tableau de mots
const wordsArray = myCleanedText.split(" ");

// Contiendra chaque mot et son nombre d'occurences
let result = {};

// Parse chaque item du tableau
wordsArray.forEach(function(word){

    // Supprime le cas de majuscule
    word = word.toLowerCase();

    // Verifie longueur du mot
    if(word.length > 2) {

      // premiere fois qu'on rencontre le mot
      if(!result[word]) {
          result[word] = 1;
      }
      else {
          // mot deja rencontre, on incremente son nombre
          result[word]++;
      }
    }
});
console.log("------------------------");
console.log("Nombre d'occurences de chaque mot:");
console.log(result);
console.log("------------------------");