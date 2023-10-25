let prompt = require('prompt-sync')();

var firstNumber = Number(prompt('Digite um número: '));
var secondNumber = Number(prompt('Digite outro número: '));
var thirdNumber = Number(prompt('Digite outro número: '));

console.log(`${thirdNumber}, ${secondNumber}, ${firstNumber}.`);