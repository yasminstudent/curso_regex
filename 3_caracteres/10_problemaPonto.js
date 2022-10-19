const texto = "Bom\ndia"

// o coringa . não serve para \n

console.log(texto.match(/./gi)) //[ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(texto.match(/..../gi)) //null (não existe 4 caracteres seguidos que o . interprete)

//dotall - algumas linguagens tem um flag p/ sanar esse problema, mas o JS não tem!
