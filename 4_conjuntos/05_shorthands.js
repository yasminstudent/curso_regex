/*
    Shorthands -> atalhos para pegar determinados conjuntos

    \w -> conjuntos: a-z A-Z 0-9 e o _
    \d -> 0-9
	\D -> ^0-9
*/

const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) //números [0-9]
console.log(texto.match(/\D/g)) //não números [^0-9]

console.log(texto.match(/\w/g)) //caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) //espaço [ \t\n\r\f]
console.log(texto.match(/\S/g)) //não espaço [^ \t\n\r\f]