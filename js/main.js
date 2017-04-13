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




// SINON JE N'Y AI PAS PENSE AVANT ! 
// C'est en cherchant ma regex pour enlever la ponctuation que j'ai pense a ca
// et du coup pas besoin de verification de ponctuation ni de majuscule minuscule
// Par contre il faut d'abord donc supprimer tous les mots de 2 lettres ou moins
console.log("------------------------");
let occurencesViaRegX = (mystring.match(/power/gmi) || []).length;
console.log("Nombre d'occurences avec une regex " + occurencesViaRegX);
