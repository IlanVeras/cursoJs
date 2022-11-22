const cpf = `
345.908.465-22
228.087.121-90
045.876.907-01
773.484.876-02
987.578.907-33
9874.578444.90744-3344
`

const ip = `
0.0.0.0
192.168.0.25
10.10.5.12
255.255.255.255
256.256.256.256
`


const teste = `
999999999999.99
99999999.999
1234584.58
1.99
1000000000000
`



function cpfs(){
    //var resposta = cpf.match(/[0-9]+\.[0-9]+\.[0-9]+-[0-9]+/g)
    // ↓
    //var resposta = cpf.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g)
    // ↓
    var resposta = cpf.match(/(\d{3}\.){2}\d{3}-\d{2}/g) // o sinal '-' atrapalha no quantificador {}
    console.log(resposta)   
    
}


function ips(){
    //var resposta = ip.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/g) // verifica-se o i
    // ↓
    //var resposta = ip.match(/(\d{1}|\d{2}|\d{3})\.(\d{1}|\d{2}|\d{3})\.(\d{1}|\d{2}|\d{3})\.(\d{1}|\d{2}|\d{3})/g) // verifica-se o ip corresponde ao formato
    // ↓
    //var resposta = ip.match(/(\d{3}\.){3}\d{3}/g)
    var resposta = ip.match(/([0-9]+\.){3}[0-9]+/g)
    console.log(resposta)
}


function testando(){
    var resposta = teste.match(/^[0-9]{1,12}\.[0-9]{2}$/g)
    console.log(resposta)
}


function ca(){
    var str = '123'
    var resposta = str.match(/\d{3}/g)
    console.log(resposta)
}

function regexpExec() {
    var str = "Expressões regulares 2C em JavaScript na DevMedia! 2C";
    var regexp = new RegExp(/2c/ig);
    //Cria-se um objeto de expressão regular
    var n = regexp.exec(str);
    var m = str.match(regexp)
    //e compara-o com a string
    console.log(n);
    console.log(m)
    //Retornando o valor encontrado, que é '2C'
}



function stringReplace() {
    var str = "JExpressões regulares em JavaScript na DevMedia!";
    var n = str.replace(/[j]/ig, "TROCADO");
    //Sem considerar capitalização (i), troque todas as ocorrências (g) da variável str que contenham 'j' por 'TROCADO'
    console.log(n);
}


function str(){
    var group1 = []
    var palavra = 'il2a8n7'
    var array = palavra.match(/\d/g)
    console.log(array)
    for(let elemento of array){
        let valorOfElemento = parseInt(elemento)
        group1.push(valorOfElemento)
    }
    var soma = group1.reduce(function(soma, i){
        return soma + i
    })
    console.log(group1)
    console.log(soma)
}

cpfs()
//ips()



