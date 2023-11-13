const nameInput = document.getElementById('name');
const firstnameInput = document.getElementById('firstname');
const emailInput = document.getElementById('email');

const name = nameInput.value;
const firstname = firstnameInput.value;
const email = emailInput.value;

const userArray = [];
userArray.push(name);
userArray.push(firstname);
userArray.push(email);

console.log(userArray);
