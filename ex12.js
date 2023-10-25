let prompt = require('prompt-sync')();

var dayOfTheFirstDate = Number(prompt('Digite o dia da primeira data: '));
var monthOfTheFirstDate = Number(prompt('Digite o mês da primeira data: '));
var yearOfTheFirstDate = Number(prompt('Digite o ano da primeira data: '));

var dayOfTheSecondDate = Number(prompt('Digite o dia da segunda data(maior ou igual que o dia da primeira): '));
var monthOfTheSecondDate = Number(prompt('Digite o mês da segunda data(maior ou igual que o mês da primeira): '));
var yearOfTheSecondDate = Number(prompt('Digite o ano da segunda data(maior ou igual que o ano da primeira): '));

var totalYears = yearOfTheSecondDate - yearOfTheFirstDate;
var monthsApart = monthOfTheSecondDate - monthOfTheFirstDate;
var daysApart = dayOfTheSecondDate - dayOfTheFirstDate;

var totalMonthsInDays = monthsApart * 30;

var totalYearsInMonths = totalYears * 12;

var totalYearsInDays = totalYears * 360;

var totalMonths = totalYearsInMonths + monthsApart;
var totalDays = daysApart + totalMonthsInDays + totalYearsInDays;


console.log(`Anos totais: ${totalYears}`);
console.log(`Meses totais: ${totalMonths}`);
console.log(`Dias totais: ${totalDays}`);







