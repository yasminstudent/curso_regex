const texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR."

const regex = /casa/gi
console.log(texto.match(regex)) //[ 'Casa', 'casa', 'CASA' ]

const regex2 = /casa bonita/gi
console.log(texto.match(regex2)) //[ 'Casa bonita' ]


console.log(texto.match(/a b/)) 
/*
quando não tem a flag g, ele retorna também o índice em que o elemento foi encontrado:

[
  'a b',
  index: 3,
  input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
  groups: undefined
]
*/
