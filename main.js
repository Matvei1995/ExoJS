let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}




    function calculSum(notes) {
        let somme = 0;
        let nmbrDeNotes = notes.length;

        // Somme des notes
        for (let i = 0; i < nmbrDeNotes; i++) {
            somme += notes[i];
            
        }

        // Calcul de la moyenne
        let moyenne = somme / nmbrDeNotes;

        return moyenne;
    }

 

    // Appel de la fonction pour calculer la moyenne
    let moyenneDesNotes = calculSum(notes);

    // Affichage de la moyenne dans la console
    console.log("Moyenne des notes : " + moyenneDesNotes);
