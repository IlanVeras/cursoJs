let teste = `
111.222.333-96
77284380934
11122233396
`
let t = '111.222.333-96'

/*
DESEJOS DA PROXIMA MODIFICAÇÃO
1- quando o cpf for inválido mudar a cor do container para veremelho
*/
let cpftxt = document.querySelector('.cpftxt')
let btn = document.querySelector('.btn')
let resp = document.querySelector('.resp')
const field = document.querySelector('.cpftxt-field')
const campos = document.querySelector('.require')
const warn = document.querySelector('.avisos')
const campos$valores = campos.value
const cpfRegEx = /(\d{3}\.){2}\d{3}\-\d{2}/gm

function showLine(){
    campos.style.borderBottom = '2px solid #e63636'
    campos.style.boxShadow = '0 1px 0 0 #e63636'
    warn.style.display = 'block'
}//CRIA UMA LINHA VERMELHA LOGO ABAIXO DO INPUT

function cpfErros(){
    let cpftxt2 = cpftxt.value
    var cpfarr1 = cpftxt2.split("")
    if(/[a-zA-Z\\ \/ \!\@\#\$\%\¨\&\*\ \` \" \+\_]/.test(campos.value)){
        showLine()
        warn.innerHTML = '<span>Não digite letras ou sinais</span>'
    }
    else if(cpfarr1.length < 14 && cpfarr1.length >= 1){
        showLine()
        warn.innerHTML = '<span>Um cpf tem no mínimo 11 números</span>'
    }
    else{
        campos.style.borderBottom = ''
        campos.style.boxShadow = ''
        warn.style.display = 'none'
    }
}//Verificação puramente visual

function resposta$final(msg, color){
    resp.innerHTML = `<p>${msg}<\p>`
    resp.style.background = `${color}`
    resp.style.display = 'block'
}

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
    var cpfarr1 = cpftxt2.split("")
    //console.log(cpfarr1)
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
        resposta$final('CPF VÁLIDO', '#00ad00')
    }else{
        console.log('cpf inválido')
        //btn.style.background = '#e63636'
        if(cpfArr.length == 0){
            resposta$final('CPF VAZIO', '#669397')
        }
        else{
            resposta$final('CPF INVÁLIDO', '#e63636')
        }
    }//VERIFICA SE É VÁLIDO OU NÃO
}



/*function sumMix() {
    let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
    console.log(x.reduce((acc, value) => acc + Number(value), 0))
  }
  

sumMix()*/

