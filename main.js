
/*Version button submit Si  partie html <input type="submit" id="bt" value="ajouter" click= "ajouter">
                AU LIEU DE type="button"


document.getElementById('form').onsubmit = (ev) => {
    //evite de rafraichir la page
    ev.preventDefault();
    const nameInput = document.getElementById('name').value;
    console.log(nameInput);
    const firstnameInput = document.getElementById('firstname').value;
    console.log(firstnameInput);
    const emailInput = document.getElementById('email').value;
    console.log(emailInput);

    let utili =[];
    utili.push(nameInput);
    utili.push(firstnameInput);
    utili.push(emailInput);
    console.log(utili);
    
}

*/


/*function ajouter() {


    const nameInput = document.getElementById('name').value;
    const firstnameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;


    let userArray = [];
    userArray.push(nameInput);
    userArray.push(firstnameInput);
    userArray.push(emailInput);
    
    console.log(userArray);
  }
ajouter();*/

document.getElementById('bt').addEventListener('click', () =>{

    let nom = document.getElementById('name').value;
    let prenom = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;

    let utili = [];

    utili.push(nom,prenom,email)
    console.log(utili);
 

})
