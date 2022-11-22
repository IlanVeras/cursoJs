/*const texto = 'eu Ilan, prometo ser para sempre ilann, pois Iloi para sempre serei, com prazer ILAN'

const regExp = /ilan/gi*/

//console.log(texto.match(regExp))*/


//EXERCICIO
/*
There’s a string of integer numbers.

Create a regexp that looks for only non-negative ones (zero is allowed).

An example of use:
*/ 
let regexp = /(?<!\-)\d+/g
let str = "0 12 -5 123 -18";
console.log(str.match(regexp))

//we got a good result but a unexpected number got toguether, the 8 of -18

let regexp1 = /(?<!\-)(?<!\d)\d+/g
let str1 = "0 12 -5 123 -18";
console.log(str1.match(regexp1))

//(?<!\d) makes sure that the number we are searching for does not start after another digit