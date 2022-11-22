/*function changeh1(){
    let input = document.getElementById("texto")
    let h1 = document.getElementsByTagName('h1')[0]
    console.log(h1)
    h1.innerText = input.value
}*/

function changeh1(i){
    let h1 = document.getElementsByTagName('h1')[0]
    console.log(h1)
    h1.innerText = i.value
}
