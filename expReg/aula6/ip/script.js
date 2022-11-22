
const ip = `
0.0.0.0
192.168.0.25
10.10.5.12
255.255.255.255
256.256.256.256
`

//const ipRegExp = /^(25[0-5])(\.)/g //250 - 255
// ↓
//const ipRegExp = /^(25[0-5]|2[0-4][0-9])(\.)/g // 200 - 249
// ↓
//const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2})(\.)/g // 200 - 249
// ↓
//const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)/g // 10 - 99  [1-9]\d
// ↓
//const ipRegExp = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)/g // 0 - 9 \d
// ↓ JUNTANDO TUDO
//const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)/g
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;



/*for(let i = 0; i <= 300; i++){
    const ip = `${i}.${i}.${i}.${i}`
    //console.log(ip)
    combinado = ip.match(ipRegExp)
    console.log(ip, combinado)
}*/

function ips(){
    console.log(ip.match(ipRegExp))
}










ips()
