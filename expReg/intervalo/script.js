let str = `You know I"m kinda trying my best to learn regular expressions, is not ike that hard but I have 12 folders wit 2 archives each one of the all. This is what happens when you try to learn the same thing for the 3424th time`

const regexp = /\d{1, 4}/g

console.log( "I'm not 127, but 1234 years old, 3424th time".match(/\d{3,5}/g) )
console.log(str.match(regexp.multiline))