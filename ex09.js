let prompt = require('prompt-sync')();

var totalValue = Number(prompt('Digite o valor total de dinheiro: '));


var quantityOfOneHundredReaisNotes = Math.floor(totalValue / 100);
totalValue = totalValue % 100;
var quantityOfFiftyReaisNotes = Math.floor(totalValue / 50);
totalValue = totalValue % 50;
var quantityOfTenReaisNotes = Math.floor(totalValue / 10);
totalValue = totalValue % 10;
var quantityOfFiveReaisNotes = Math.floor(totalValue / 5 );
totalValue = totalValue % 5;
var quantityOfOneRealNotes = Math.floor(totalValue / 1 );
totalValue = totalValue % 1;



console.log(`Há ${quantityOfOneHundredReaisNotes} nota(s) de R$100,00 reais, ${quantityOfFiftyReaisNotes} nota(s) de R$50,00 reais, ${quantityOfTenReaisNotes} nota(s) de R$10,00 reais, ${quantityOfFiveReaisNotes} nota(s) de R$5,00 reais e ${quantityOfOneRealNotes} nota(s) de R$1,00 real.`);
