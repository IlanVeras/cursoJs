//const { texto } = require('./base') COMO USAR
const texto = `
João trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.

Não canso de ouvir a Maria 2c:

"Joooooooooão000000, o café tá prontinho aqui. Veeemm"!`
const regExp1 = /(2)(c)/g

const found = regExp1.exec(texto)

/*if(found){
    console.log(found[0])
    console.log(found[1])
    console.log(found[2])
    console.log(found)
}*/





















function stringSearch() {
    var str = "Expressões regulares em JavaScript na DevMedia!";
    var n = str.search(/[j+]/i);
    alert(n);
    //Exibirá o índice da primeira ocorrência de 'j' ou 'J'
}

function regexpExec() {
    var str = "Expressões regulares 2C em JavaScript na DevMedia! 2C";
    var regexp = new RegExp(/2c/ig);
    //Cria-se um objeto de expressão regular
    var n = regexp.exec(str);
    var m = str.match(regexp)
    //e compara-o com a string
    alert(n);
    //Retornando o valor encontrado, que é '2C'
}

function stringReplace() {
    var str = "JExpressões regulares em JavaScript na DevMedia!";
    var n = str.replace(/[j]/ig, "TROCADO");
    //Sem considerar capitalização (i), troque todas as ocorrências (g) da variável str que contenham 'j' por 'TROCADO'
    alert(n);
}

function stringSplit() {
    var str = "Expressões regulares em JavaScript na DevMedia!";
    var n = str.split(/[\t\s\n]/i);
    //Na várialvel str, separe qualquer tab (/t) ou qualquer espaço em branco (s) ou qualquer quebra de linha (\n), desconsiderando capitalização
    alert(n);
}

function regexpTest() {
    var str = "Expressões regulares em JavaScript na DevMedia!";
    var regexp = new RegExp(/[j]/i);
    var n = regexp.test(str);
    //na variável regep faz-se a verificação de se há a letra 'j', e na variável n temos uma comparação
    alert(n);
}


function stringMatch(){
    const str = '<p>Olá mundo</p> <p>Olá de novo</p> <div>Hello</div>'
    var regexp = new RegExp(/<.+?>.+?<\/.+>/g)
    var n = str.match(regexp)
    //Deve retornar um array caso a expressão regular conseguir ser comparada com a string, ou retornará null caso não
    alert(n)
}



//stringSearch()
regexpExec()
//stringReplace()
//stringSplit()
//regexpTest()
//stringMatch()
