let prompt = require('prompt-sync')();

var height = Number(prompt('Digite a altuta da parede(em metros): ')); 
var width = Number(prompt('Digite a largura da parede(em metros): ')); 

var totalMeters = height * width; 

var liters = totalMeters * 300; 

var lataDeTinta = Math.ceil(liters / 2000);

console.log(`Para uma parede de ${height} metros de altura e ${width} metros de largura, precisará de ${lataDeTinta} latas de tinta.`);








