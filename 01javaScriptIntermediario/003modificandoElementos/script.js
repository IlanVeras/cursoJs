let p = document.getElementById('p1')

let meuAtt = p.getAttribute('meuAtt') //BÔNUS: aqui foi pego um atributo que eu mesmo criei

console.log(meuAtt)

console.log(p.innerText) //Por causa da propriedade CSS display estar setada como 'none' o texto da tag span não aparece ao usuário e por tanto não é vista como texto pelo innerText

console.log('------------------------------')

console.log(p.textContent)//Já com o textContent é possível vermos todos os texto mas sem interpretação de html

p.className = '' //muda a classe do p (#p1)
p.setAttribute('meuAtt', 'outro nome')//Aqui mudo o atributo que criei
 
console.log(p)