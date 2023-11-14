// Fonction pour récupérer un nombre entier depuis l'utilisateur
function saisirNombre() {
  return parseFloat(prompt("Saisissez un nombre :"));
}

// Fonction principale
function main() {
  let nombreDeValeurs = parseInt(prompt("Saisissez le nombre de valeurs :"));
  let array = [];

  // Saisie des valeurs dans le tableau
  for (let i = 0; i < nombreDeValeurs; i++) {
    let valeur = saisirNombre();
    array.push(valeur);
  }

  // Affichage du tableau dans la console
  console.log("Tableau saisi :", array);

  // Calcul du nombre de valeurs positives et négatives
  let nombrePositives = 0;
  let nombreNegatives = 0;

  // Initialisation de la valeur absolue maximale
  let absMax = Math.abs(array[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      nombrePositives++;
    } else if (array[i] < 0) {
      nombreNegatives++;
    }

    // Mise à jour de la valeur absolue maximale
    absMax = Math.max(absMax, Math.abs(array[i]));
  }

  // Affichage des résultats dans la console
  console.log("Nombre de valeurs positives :", nombrePositives);
  console.log("Nombre de valeurs négatives :", nombreNegatives);
  console.log("Valeur absolue maximale :", absMax);
}

// Appel de la fonction principale
main();
