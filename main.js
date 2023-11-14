// Initialisation du tableau d'utilisateurs
let users = [];

// Boucle pour ajouter 5 utilisateurs
for (let i = 0; i < 5; i++) {
  // Saisie des informations utilisateur
  let nom = prompt(`Saisir le nom de l'utilisateur ${i + 1}`);
  let prenom = prompt(`Saisir le prénom de l'utilisateur ${i + 1}`);
  let age = prompt(`Saisir l'âge de l'utilisateur ${i + 1}`);

  // Création d'un objet utilisateur
  let user = {
    nom: nom,
    prenom: prenom,
    age: parseInt(age), // Conversion de l'âge en nombre
  };

  // Ajout de l'utilisateur au tableau
  users.push(user);
}

// Recherche de l'utilisateur le plus jeune
let utilisateurPlusJeune = users.reduce((plusJeune, utilisateur) => {
  return utilisateur.age < plusJeune.age ? utilisateur : plusJeune;
}, users[0]);

// Affichage dans la console de l'utilisateur le plus jeune
console.log(
  `L'utilisateur le plus jeune est : ${utilisateurPlusJeune.prenom} ${utilisateurPlusJeune.nom}, âgé de ${utilisateurPlusJeune.age} ans.`
);
