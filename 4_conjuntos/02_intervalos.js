const texto = "1,2,3,4,5,6,a.b c!d?e[f"

//pega valores entre o intervalo de a a z (inclui o próprio z e o a)
console.log(texto.match(/[a-z]/g))
//pega valores entre o intervalo de b a d (inclui o próprio b e o d)
console.log(texto.match(/[b-d]/g))
//pega valores entre o intervalo de 2 a 4 (inclui o próprio 2 e o 4)
console.log(texto.match(/[2-4]/g))
//pega valores entre o intervalo de A a Z e entre o intervalo de 1 a 3
console.log(texto.match(/[A-Z1-3]/gi))
