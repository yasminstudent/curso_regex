// Testando se o limite do retrovisor no JS é 9
const texto = "abcdefghijkll"

console.log(texto.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g)) //[ 'abcdefghijkll' ]
//OBS: \12 -> se referencia ao retrovisor 12 (l)
//Conslusão: o limite não é 9