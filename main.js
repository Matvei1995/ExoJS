/*Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
-Si il réussit à découvrir le nombre en moins de 10 essais 
            -> afficher : son entrainement acharné a payé, 
-Sinon 
           -> afficher : il est un mauvais mentaliste et il va devoir changer de métier.
Il souhaite savoir en cas de réussite (nombre trouvé en moins de 10 essais) 
           -> afficher : le nombre d'essai qu'il a effectué pour trouver le nombre.*/

function guessNumeber(min, max) {
  // Génération d'un nombre aléatoire entre min et max
  const mysteryNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Initialisation des variables
  let compteur = 0;
  let nombreSaisi;

  // Boucle de jeu
  while (compteur < 10) {
    // Demande au joueur de saisir un nombre
    nombreSaisi = prompt("Quel est le nombre ?");

    // Conversion du nombre saisi en nombre entier
    nombreSaisi = parseInt(nombreSaisi);

    // Mise à jour du compteur
    compteur++;

    // Comparaison du nombre saisi avec le nombre mystère
    if (isNaN(nombreSaisi)) {
      return console.log("Veuillez saisir un nombre");
    }
    if (nombreSaisi < mysteryNumber) {
      console.log("Plus grand");
    } else if (nombreSaisi > mysteryNumber) {
      console.log("Plus petit");
    } else {
      // Le nombre a été trouvé
      break;
    }
  }

  // Affichage du résultat
  if (compteur < 10) {
    console.log(
      "Son entrainement acharné a payé ! Il a trouvé le nombre en " +
        compteur +
        " essais."
    );
  } else {
    console.log(
      "Il est un mauvais mentaliste et il va devoir changer de métier."
    );
  }
}

// Appel de la fonction
guessNumeber(1, 100);
