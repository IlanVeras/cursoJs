//^ começa com
// [^] conjunto negado
// $ termina com 
// m multiline

const cpfs = `
345.908.465-22
228.087.121-90
045.876.907-01
773.484.876-02
987.578.907-33
9874.578444.90744-3344
`

const cpf = `345.908.465-22`

const cpfReg = /^(\d{3}\.){2}\d{3}-\d{2}$/gm
console.log(cpf.match(cpfReg))
console.log(cpfs.match(cpfReg))