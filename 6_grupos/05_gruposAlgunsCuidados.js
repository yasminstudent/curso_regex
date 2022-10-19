const texto = "Pedrinho (filho do Pedro Silva) é doutor do ABC!"

//dentro de um conjunto não existe grupo, pois o parênteses funciona como caractere / valor literal
console.log(texto.match(/[(abc)]/gi)) //não é um grupo -> [ '(', 'a', ')', 'A', 'B', 'C' ]

//mas dentro de um grupo pode existir um conjunto
console.log(texto.match(/([abc])/gi)) //é um grupo -> [ 'a', 'A', 'B', 'C' ]

console.log(texto.match(/(abc)/gi)) //[ 'ABC' ] -> esse grupo não é aconselhável (é inútil)
// a expressão poderia ser assim: /abc/gi