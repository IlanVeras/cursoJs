//() agrupador. Ex: (jpeg|jpg) encontre jpeg ou jpg
//[] conjunto
// * (opcional) 0 ou n vezes
// + (obrigatorio) 1 ou n vezes
// ? (opcional) 0 ou 1 vez
// \ caractere de escape
// {n vezes, maximo de vezes} {10,} no mínimo 10
// ^ quando como em /^A/ corresponde como em 'Alvo encontrado/ não como 'O Alvo'//
// [^] quando dentro de um conjunto significa negação
// [-] ranges [0-9] de 0 a 9
// [-] ranges MISTOS [min-maxQUAQUEROUTRA COISA(S)] Ex: [a-zçãõ]
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ atenção  abcdefghijklmnopqrstuvwxyz ®; 0123 456789 37|'


console.log(alfabeto)
console.log(alfabeto.match(/[^abc123]/g))
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))//não encontra letras acentoadas
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9çã]+/g))//encontra ç e ã
console.log(alfabeto.match(/^[a-záàâãéèêíïóôõöúçñ]+$/ig))
console.log(alfabeto.match(/[\wçã]+/g))//encontra ç e ã da mesma maneira que o penúltimo porém com o \w como short-hand (LEIA A DOCUMENTAÇÃO)
console.log(alfabeto.match(/\W/g))//Encontra tudo MENOS de A-Z ou a-z e 0-9
console.log(alfabeto.match(/\d+/g))//encontra todos os caractéres uméricos
console.log(alfabeto.match(/\D+/g))//encontra tudo MENOS caractéres numéricos
console.log(alfabeto.match(/\s+/g))//encontra qualquer espaço vazio
console.log(alfabeto.match(/\S+/g))//encontra tudo MENOS os espaços
/*
let vazio = alfabeto.replace(/\s/g, 'VAZIO')
console.log(vazio)
*/
const texto = 'Meu Beijo'
console.log(texto.match(/[^a-c]+/ig))