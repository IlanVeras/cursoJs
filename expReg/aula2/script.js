//const { texto } = require('./base') COMO USAR
const texto = `
João trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.

Não canso de ouvir a Maria 2c:

"Joooooooooão000000, o café tá prontinho aqui. Veeemm"!`
//() agrupador. Ex: (jpeg|jpg) encontre jpeg ou jpg
// * (opcional) 0 ou n vezes
// + (obrigatorio) 1 ou n vezes
// ? (opcional) 0 ou 1 vez
// \ caractere de escape
// {n vezes, maximo de vezes} {10,} no mínimo 10

const regExp1 = /Jo+ão/ig

console.log(texto.match(regExp1))
//retornará: ['João', 'joão', 'Joooooooooão']

console.log('')


const regExp2 = /\.jpe?g/ig
//Emcontre todos os aquivos que comecem com '.' e contenham ou 'jpg ou 'jpeg' dispensando a captalização e globalmente
const arquivos = [

    'Atenção.jpg',
    
    'FOTO.jpeg',
    
    'Meg gatinho.jpg', 
    
    'Meu gatinho.JPG',
    
    'Meu gatinho.JPEG',
    
    'Marido.png',
    
    'lista de compras.txt',

]

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2)
    
    if(!valido) continue;

    console.log(arquivo, valido)
}
    