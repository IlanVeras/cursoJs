/*let text = 'Mr Blue has a blue house and blue car'

let result = text.replace(/blue/, 'red')*/

/*var testes = [
    '111',
    '123',
    '222',
    '334'
];
var regex = /^(\d)\1+$/;
var resultado = testes.map(function (str) {
    return regex.test(str);
});
alert(resultado); // true, false, true, false*/


const text2 = `Jack Sprat
Lucy Frost
Jannet Sprat
Viver Frost
Lucas Frost
lau45 Sprat`
//const positiveLookahead = /.+(?=Sprat|Frost)/gim //retorna 'Jack ', 'Lucy ' com espaços
const positiveLookahead = /[A-Za-z]+(?=\s(Sprat|Frost))/gim// Retorna sem espaços
console.log(text2.match(positiveLookahead))

let str1 = '1 turkey costs 30€'
console.log(str1.match(/\d+(?=€)/g))
console.log(str1.match(/\d+(?=\s)(?=.*30)/g))

let str2 = '2 turkeys cost 60€'
console.log(str2.match(/\d\b(?!€)/g))

let str3 = 'I went to the store and bought 5 apples, 4 oranges, and 15 plums'
console.log(str3.match(/\bt/g))

let str4 = '1 turkey costs $30'
console.log(str4.match(/(?<=\$)\d+/g))

let str5 = "1 turkey costs 30€";
let regexp = /\d+(?=(€))/; // extra parentheses around €|kr

console.log( str5.match(regexp) ); // 30, €

let str6 = "1 turkey costs $30";
let regexp2 = /(?<=(\$))\d+/; // extra parentheses around €|kr

console.log( str6.match(regexp2) ); // 30, $