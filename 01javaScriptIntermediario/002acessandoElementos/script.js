
let paragrafoPorId = document.getElementById('p1')
console.log(paragrafoPorId)

console.log("----------------------")

let paragrafosPorClasse = document.getElementsByClassName("paragrafos")
for(e of paragrafosPorClasse){
    console.log(e)
}

console.log("----------------------")

let paragrafosPorTag = document.getElementsByTagName('p')
for(p of paragrafosPorTag){
    console.log(p)
}