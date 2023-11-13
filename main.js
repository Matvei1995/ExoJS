let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));

//afficher dans la console si le produit est négatif
 function test(nmbr1,nmbr2) {
    if (nmbr1 > 0 && nmbr2 > 0 || nmbr1 < 0 && nmbr2 < 0 ){
     
        console.log("Le nombre est positif");        
    }else if( nmbr1 == 0 || nmbr2 == 0 ){
        console.log("Le nombre vaut zéro");
    }
    else {
    
        console.log("Le nombre est négatif");
    }
    
 }

 test(nombre1,nombre2);


 /*if (nmbr1 < 0 || nmbr2 < 0 , "négatif")*/