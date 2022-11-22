/*function changeh1(){
    let input = document.getElementById("texto")
    let h1 = document.getElementsByTagName('h1')[0]
    console.log(h1)
    h1.innerText = input.value
}

function mudaBack(elemento){
    elemento.style.background = 'red'
}

function voltaBack(elemento){
    elemento.style.background = 'cornflowerblue'
}*/

function interruptor(){
    lampada = document.getElementById('imagem')
    if(lampada.className == 'off'){
        lampada.src="assets/lampada_ligada.png"
        lampada.className='on'
    }else{
        lampada.src="assets/lampada_desligada.png"
        lampada.className='off'
    }
    console.log(lampada)
}

/*
DESCRIÇÃO DO CÓDIGO
1- No arquivo HTML deixo como padrão a imagem de uma lâmpada desligada
2- Coloco uma classe e um id nessa mesma umagem
3- Pego a tag da imagem pelo seu id no JS
4- Faço a seguinte verificação:
    Se: a classe da imagem for off mudasse o seu src e classe para 'on'
    SeNão: Mude o src e classe para o padrão
*/