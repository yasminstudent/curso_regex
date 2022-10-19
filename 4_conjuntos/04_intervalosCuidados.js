const texto = "ABC [abc] a-c 1234"

console.log("de a a c:")
console.log(texto.match(/[a-c]/g))
console.log("a-c fora do conjunto")
console.log(texto.match(/a-c/g)) //não define um intervalo (range)
console.log("de A a Z minúsculo e maiúsculo errado:")
console.log(texto.match(/[A-z]/g)) //intervalos usam a ordem da tabela UNICODE ou ASCII, portanto o retorno disso será:
//['A', 'B', 'C', '[', 'a', 'b', 'c', ']','a', 'c'] -> observe que ele pegou os colchetes também

//para resolver o problema:
console.log("de A a Z minúsculo e maiúsculo certo:")
console.log(texto.match(/[a-zA-Z]/g))
console.log(texto.match(/[a-z]/gi))

//Não se deve inverter a ordem
console.log("ordem errada:")
console.log(texto.match(/[z-a]/g)) //essa linha gera um erro
