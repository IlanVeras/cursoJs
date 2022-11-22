const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;


const cpfs = `
215.978.456-12
111.111.111-11
999.999.999-99
777.777.777-77
963.987.326-00`;



const positiveLookAhead = /.+ (?=active)/gim
const negativeLookAhead = /^(?!.+[^in]active).+$/gim
const positiveLookBehind = /(?<=ONLINE\s+)\S.*/gim
const negativeLookBehind = /^.+(?<!ONLINE.+)$/gim

//Positive lookahead {frases que tem "active"}
console.log(lookahead.match(positiveLookAhead))

//Negative lookahead {frases que tem "inactive"}
console.log(lookahead.match(negativeLookAhead))

//Positive lookbehind {frases que começam com "ONLINE"}
console.log(lookahead.match(positiveLookBehind))

//Negative lookbehind {frases que Não começam com "ONLINE"}
console.log(lookahead.match(negativeLookBehind))

//=========================================================

//negative lookahead que elimina qualquer sequencia. Ex: 333.333.333-33
console.log(cpfs.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))

text = 'Tenho 1 carro que foi 2000$'
const regText = /\d+(?=\$)/
console.log(text.match(regText))