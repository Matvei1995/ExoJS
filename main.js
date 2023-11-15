/*Exercice 11 Boucles :
Nous avons un jeu de dés que nous souhaitons automatiser.
Les règles de ce jeu de dès sont les suivantes :
-Il y à 2 participants : la banque et le joueur.
-Le jeu dure 5 tours.
-A chaque tour :
    --La banque lance un dès de 6 faces (score 1 à 6).
    --Le joueur lance un dès de 6 faces (score 1 à 6).
    --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
    --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
-> Afficher le gagnant et son score (nbr de pts).*/

// Définir les variables
let gagnant;

// Définir les fonctions nécessaires
function lancerDe(nombreFaces) {
  return Math.floor(Math.random() * nombreFaces) + 1;
}

function jouerUnTour(banque, joueur) {
  // Lancer les dés
  scoreBanque = lancerDe(6);
  scoreJoueur = lancerDe(6);

  // Calculer le score du joueur
  if (scoreJoueur > scoreBanque) {
    joueur++;
  } else if (scoreJoueur == scoreBanque) {
    joueur += 2;
  } else {
    banque++;
  }

  return joueur;
}

function jouerLaPartie(banque, joueur) {
  // Lancer la partie
  for (let i = 0; i < 5; i++) {
    joueur = jouerUnTour(banque, joueur);
  }

  // Déterminer le gagnant
  if (joueur > banque) {
    gagnant = "joueur";
  } else {
    gagnant = "banque";
  }
  
  // Retourner le gagnant et le score
  return gagnant, joueur;
  
}

// Lancer la partie
gagnant, score = jouerLaPartie(0, 0);

// Afficher le résultat
console.log(`Le gagnant est ${gagnant} avec un score de ${score}.`);
