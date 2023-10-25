let prompt = require('prompt-sync')();

var a = Number(prompt('Digite o valor de A: '));
var b = Number(prompt('Digtie o valor de B: ')); 
var c = Number(prompt('Digite o valor de C: ')); 

var delta = (b * b) - (4 * a * c);

var bhaskaraPositive = (-b + Math.sqrt(delta)) / (2 * a);
var bhaskaraNegative = (-b - Math.sqrt(delta)) / (2 * a);


console.log(`${bhaskaraPositive}, ${bhaskaraNegative}`);

