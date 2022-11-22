const html2 = `<p>Olá mundo</p> <p class="teste teste" data-teste='teste'>Olá mundo</p> <div>Sou a div</div> <h1>Eu sou h1</h1> <p
class="teste teste"
data-teste='teste'>Olá mundo</p>`
console.log(html2)
console.log(html2.match(/<.+?>.+?<\/.+?>/g))

//EXPRESSÃO MELHORADA
console.log(html2.match(/<\w+?>.+?<\/\w+?>/g)) //muito longo
console.log(html2.match(/<(\w+)>.+<\/\1>/g)) //porém ele confunde duas tags por serem iguais
console.log(html2.match(/<(\w+)>.+?<\/\1>/g)) //porém não identifica as class e data
console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g)) //dot-all (".*") não representa quebra de linha
console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g)) //resolve bem

//EXPRESSÃO COM replace()
/* (<(\w+)[\s\S]*?>) = <p> $1
   (\w+) = p $2
   ([\s\S]*?) = Olá mundo $3
   (<\/1>) = </p> $4
   */


   // $1 $2 $3 <- Retrovisores \1
   
   //  p Olá mundo
   // <p>Olá mundo</p>
   
   // console.log(html2);
   // console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
   console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));