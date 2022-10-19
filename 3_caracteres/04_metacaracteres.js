const texto = "1,2,3,4,5,6,a.b c!d?e"

// \ -> escape, significa que o que vem a seguir deve ser usado como literal
const regexPonto = /\./g
console.log(texto.split(regexPonto)) //[ '1,2,3,4,5,6,a', 'b c!d?e' ]

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos)) 
/*
[
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e'
]
*/