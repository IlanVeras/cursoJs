//Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g
//====================================

//Não números
naoNumerosRegEx = /\D/g //utilizado principalmente para subtistuir
let str1 = 'O CPF do Fulano é: 124.567.981.10 (ok?)'
numerostxt = str1.replace(naoNumerosRegEx, "")//numeros com texto
numbers = parseFloat(numerostxt)
console.log(numbers)
//====================================

//valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

/*Um texto que tem palavras acentuadas e quebras de linhas
Atenção este é um tlexto para capturar todas as palavras
Mesmo que não forem match de \ w
Vamos ver se seremos bem sucedidos*/
//====================================

//valida CPF
const cpfRegExp = /(\d{3}\.){2}\d{3}-\d{2}/g
//====================================

//Valida sequencia de oito números (telefones)
const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})([-|\s])?(\d{4})$/g
/*(35) 9 9999-5555
(35)9 9999-5555
9 9999-5555
99999-4444
9999-9999
99995555
999995555*/
//====================================

//Valida senhas fortes
const senhasRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=[0-9])(?=.*[!@=\)\(\]\[\}\{%]).{8,}$/
/*
]DCIXt8r
N-#7H8{V
4SNsn0)V
4a4a@Av1

Inválidas
12345678
abc12345
1a2b3cab
IA2a3b4C*/ 
//====================================

//Valida e-mails [PERMISSIVA]
const emailRegExp = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g
//PESQUISE NA INTERNET QUE É MAIS FÁCIL
/*
email@example.com
firstname.lastname@example.com
email@subdomain.example.com
firstname+lastname@example.com
email@23.123.123.123
email@[123.123.123.123]
ilanbarrosveras123@gmail.com
"email"@example.com
Inválidos:
.email@example@example.com.
.email@example.com
email.@example.com
email..email@example.com
*/





//====================================

//FONTE DO CÓDIGO A SEGUIR: https://www.stefanjudis.com/today-i-learned/non-capturing-groups-in-regular-expressions/

/*const regex = /(?:Jane|John|Alison)\s(.*?)\s(?:Smith|Smuth)/;
const result = regex.exec('Jane Isabell Smith');
const anotherResult = regex.exec('John Jefrey Alfred Smuth')
//console.log(result[0]); // 'Jane Isabell Smith'
//console.log(result[1]); // 'Isabell'
//console.log(anotherResult[1])

const notMatchingResult = regex.exec('nope');
//console.log(notMatchingResult); // null*/
//====================================


//Non-capturing groups
let data = '2020-12-07'
let dataRegExp = /^(\d{4})(?:[\-])(?:\d{1,2})(?:[\-])(?:\d{1,2})$/
// que pode virar /^(\d{4})([-\/.])(\d{1,2})\2(\d{1,2})$/gm com \2 significando o grupo 2 ([-\/.])
//console.log(dataRegExp.exec(data)[1])
//onsole.log(data.match(dataRegExp)[1])

cpf = '057.908.234-22'
var respostaNonCapturingGroup = /(?:\d{3}\.){2}\d{3}-\d{2}/.exec(cpf)
console.log(respostaNonCapturingGroup)

//====================================

