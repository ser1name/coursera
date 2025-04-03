// Tableau de noms à traiter
var names = ["John", "Paul", "George", "Ringo", "james", "Jade", "claire", "jack"];

// Boucle à travers les noms
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  
  // Si le nom commence par 'J' ou 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);  // Affiche "Goodbye" pour les noms commençant par 'J'
  } else {
    console.log("Hello " + name);  // Affiche "Hello" pour les autres noms
  }
}
