let prompt = require('prompt-sync')();

var circleRadius = Number(prompt('Qual o raio de um círculo: '));

var circleArea = 3.14 * (circleRadius * circleRadius);

console.log(`ÁREA: ${circleArea}`);