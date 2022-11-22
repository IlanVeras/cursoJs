const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Hello</div>'
const texto = '0a0 0b0 0c0 0abc0'

console.log(html.match(/<.+>.+<\/.+>/g)) //greedy
//na expressão acima existe um agrupamento das duas expressões

console.log(html.match(/<.+?>.+?<\/.+?>/g))// non-greedy
//Já nessa expressão possuimos um fechamento da expressão e sua abertura novamente

console.log(texto.match(/0.+0/g))

