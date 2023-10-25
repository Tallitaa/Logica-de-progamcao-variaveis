let prompt = require('prompt-sync')();

var quantityOfOneRealNotes = Number(prompt('Digite a quantidade de notas de 1 real: '));
var quantityOfFiveReaisNotes = Number(prompt('Digite a quantidade de notas de 5 reais: '));
var quantityOfTenReaisNotes = Number(prompt('Digite a quantidade de notas de 10 reais: '));
var quantityOfFiftyReaisNotes = Number(prompt('Digite a quantidade de notas de 50 reais: '));
var quantityOfOneHundredReaisNotes = Number(prompt('Digite a quantidade de notas de 100 reais: '));

var totalValueOfFiveReaisNotes = quantityOfFiveReaisNotes * 5;
var totalValueOfTenReaisNotes = quantityOfTenReaisNotes * 10;
var totalValueOfFiftyReaisNotes = quantityOfFiftyReaisNotes * 50;
var totalValueOfOneHundredReaisNotes = quantityOfOneHundredReaisNotes * 100;

var sumOfAllNotes = quantityOfOneRealNotes + totalValueOfFiveReaisNotes + totalValueOfTenReaisNotes + totalValueOfFiftyReaisNotes + totalValueOfOneHundredReaisNotes;

console.log(`Há, no total, R$ ${sumOfAllNotes},00 reais`);



