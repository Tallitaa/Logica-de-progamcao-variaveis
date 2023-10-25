let prompt = require('prompt-sync')();

var userName = prompt('Digite o seu nome: ');
var ageName = Number(prompt('Digite sua idade:'));

var ageInDays = ageName * 365;

console.log(`${userName}, você tem aproximadamente ${ageInDays} dias de vida.`);