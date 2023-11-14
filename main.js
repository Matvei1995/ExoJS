const item = [];

const nameitem = prompt("Entrez le nom de l'article : ");
const priceHT = parseFloat(prompt("Entrez le prix HT de l'article : "));
const quantity = parseInt(prompt("Entrez la quantité de l'article : "));

item.push(nameitem);
item.push(priceHT);
item.push(quantity);

// Calculez le prix TTC
const priceTTC = priceHT * 1.2 * quantity;

// Afficher le prix TTC
console.log("Le prix TTC de l'article", nameitem, "est de", priceTTC, "euros.");
