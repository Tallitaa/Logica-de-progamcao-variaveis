let prompt = require('prompt-sync')();

var totalOfSeconds = Number(prompt('Digite o valor total de segundos: '));

var hours = Math.floor(totalOfSeconds / 3600);
totalOfSeconds = totalOfSeconds % 3600;
var minuts = Math.floor(totalOfSeconds / 60);
totalOfSeconds = totalOfSeconds % 60;


console.log(`${hours} hora(s), ${minuts} minuto(s) e ${totalOfSeconds} segundo(s)`);


