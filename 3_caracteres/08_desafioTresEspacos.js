//Desafio: encontrar as letras a e b e entre elas 3 espaços
const texto = "a   b"
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a   b/))

// no futuro...
// + -> 1 ou + do caracter anterior (\s, no caso)
// {} -> quantificador de quantas vezes o caracter anterior repete
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s{3}b/))
