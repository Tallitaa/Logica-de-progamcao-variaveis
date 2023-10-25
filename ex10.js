let prompt = require('prompt-sync')();

var hours = Number(prompt('Digite um valor em horas: '));
var minuts = Number(prompt('Digite um valor em minutos: '));
var seconds = Number(prompt('Digite um valor em segundos: '));

var hoursInSeconds = hours * 60 * 60;
var minutsInSeconds = minuts * 60;

var sumOfAllSeconds = seconds + hoursInSeconds + minutsInSeconds;

console.log(`${sumOfAllSeconds} segundos.`);