let teste = `

77284380934
11122233396
`
/*
DESEJOS DA PROXIMA MODIFICAÇÃO
1- quando o cpf for inválido mudar a cor do container para veremelho
*/
const field = document.querySelector('.cpftxt-field')
const campos = document.querySelector('.require')
const cpfRegEx = /(\d{3}\.){2}\d{3}\-\d{2}/gm

function cpfValidate(){
    let cond = teste.match(cpfRegEx)
    console.log(cond)
}
cpfValidate()

let cpftxt = document.querySelector('.cpftxt')

cpftxt.addEventListener('keypress', () =>{
    let cpf$length = cpftxt.value.length
    function addSing(n, s){
        if(cpf$length === n){
            cpftxt.value += s
        }
    }
    addSing(3, '.')
    addSing(7, '.')
    addSing(11, '-')
})
function verificaCpf() {
    let cpftxt2 = cpftxt.value
    //let cpftxt2 = '11122233397'
    var cpftxt3 = cpftxt2.replace(/[\.|\-]/ig, '')//retira ponto e traço
    var cpfArr = cpftxt3.split('')//transforma tudo em um array
    console.log(cpfArr)
    var soma;
    var firstArray = []
    var secondArray = []
    var thirdArray = []
    var finalArray = []
    soma = 0

    for(i=0; i<9; i++){
        novoEle = cpfArr[i] * (10-i)
        //console.log(`${cpfArr[i]} X ${10-i} = ${novoEle}`)
        firstArray.push(novoEle)
    }//faz o primeiro array da multiplicação dos 9 primeiros números E.M.T(entender mais tarde)

    //console.log(firstArray)
    let tot1 = firstArray.reduce((anterior, total) => {
        return anterior + total
    })//SOMA O ARRAY DE MULTIPLICAÇÕES DOS PRIMEIROS 9 NÚMEROS
    var resto1 = tot1%11

    if(resto1<2){
        let digito$final1 = 0
        finalArray.push(digito$final1)
    }else{
        let digito$final1 = 11 - resto1
        finalArray.push(digito$final1)
    }//ADICIONA O PRIMEIRO NÚMERO FINAL
    for(i=0; i<10; i++){
        novoEle = cpfArr[i] * (11-i)
        secondArray.push(novoEle)
    }//FAZ O ARRAY DE MULTIPLICAÇÃO DOS 10 PRIMEIROS NÚMEROS
    //console.log(secondArray)
    let tot2 = secondArray.reduce((anterior, total) => {
        return anterior+total
    })//SOMA AS MULTIPLICAÇÕES DO ARRAY DAS 10 PRIMEIRAS MULTIPLICAAÇÕES
    var resto2 = tot2%11
    if(resto2<2){
        let digito$final2 = 0
        finalArray.push(digito$final2)
    }else{
        let digito$final2 = 11 - resto2
        finalArray.push(digito$final2)
    }//ADICIONA O ÚLTIMO NÚMERO FINAL
    thirdArray = cpfArr.map(element => {
        return Number(element)
    })//FAZ UM ARRAY DE NÚMEROS AO INVÉS DE STRINGS DA VALUE
    const all$ok = finalArray[0] == thirdArray[9] && finalArray[1] == thirdArray[10]
    if(all$ok){
        console.log('cpf válido')
    }else{
        console.log('cpf inválido')
    }//VERIFICA SE É VÁLIDO OU NÃO
}

function stringReplace() {
    var str = "JExpressões regulares em JavaScript na DevMedia!";
    var n = str.replace(/[j]/ig, "TROCADO");
    //Sem considerar capitalização (i), troque todas as ocorrências (g) da variável str que contenham 'j' por 'TROCADO'
    alert(n);
}


/*function sumMix() {
    let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
    console.log(x.reduce((acc, value) => acc + Number(value), 0))
  }
  

sumMix()*/
