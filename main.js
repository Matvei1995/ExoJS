/*let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));*/

//afficher dans la console si le produit est négatif
let age = parseInt(prompt("Saisir l'âge de l'enfant"));
 function ageCategory(n) {
    if (n >12 ){
     
        console.log("La catégorie de l'enfant est Cadet"  );        
    }else if( n >= 10 && n <= 12 ){
        console.log("La catégorie de l'enfant est Minime");
    }
    else if( n >= 8 && n <= 9 ){
        console.log("La catégorie de l'enfant est Pupille");
    }
    else if( n >= 6 && n <= 8 ){
        console.log("La catégorie de l'enfant est Poussin");
    }else{
        n<6
        return console.log("Hors catégorie ou trop jeune")
    }
 
    
 }

 ageCategory(age);


 /*i
            "Poussin" de 6 à 7 ans
           -"Pupille" de 8 à 9 ans
           -"Minime" de 10 à 11 ans
           -"Cadet" après 12 ans
           -"Hors catégorie ou trop jeune" si inférieur à 6 ans*/