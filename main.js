function calculerPrix(quantite) {
  // Si la quantité est inférieure ou égale à 10,
  // la chocolatine coûte 1,40 € l'unité.
  if (quantite <= 10) {
    return quantite * 1.4;
  }

  // Si la quantité est comprise entre 11 et 20,
  // la chocolatine coûte 1,30 € l'unité.
  else if (quantite <= 20) {
    return 10 * 1.3 + (quantite - 10) * 1.2;
  }

  // Sinon, la chocolatine coûte 1,20 € l'unité.
  else {
    return quantite * 1.2;
  }
}

// Demander la quantité de chocolatines
const quantite = prompt("Combien de chocolatines souhaitez-vous acheter ?");

// Calculer le prix
const prix = calculerPrix(quantite);

// Afficher le prix
console.log("Le prix est de " + prix + " €.");
