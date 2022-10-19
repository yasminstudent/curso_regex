const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
//note que cada linha termina com a mesma letra que se iniciou

console.log(texto.match(/\n/g)) //[ '\n', '\n', '\n', '\n' ]

// \w está dentro de um grupo p/ ser capturado e usarmos o retrovisor
console.log(texto.match(/^(\w).+\1$/gi)) //null
// como o . não interpreta o \n
// e sem a flag m ele lê a string toda como se fosse uma linha
// o match acaba não acontecendo

console.log(texto.match(/^(\w).+\1$/gim))
// a flag m indica para a expressão lê linha por linha
/*
[
  'Leo é muito legal',
  'Emanuel foi jogar em Sergipe',
  'Bianca é casada com Habib'
]
*/