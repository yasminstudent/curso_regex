/*
    Caractere simples:
    a a z
    A a Z
    0 a 9
    textos, ex: palavra1 palavra2
    entre outros
*/

const texto = "1,2,3,4,5,6,a.b c!d?e"

/*
    A virgula é um literal
    Devemos tomar cuidado com alguns literais
    Pois alguns não podemos simplesmente coloca-los soltos, pois são metacaracteres reservados
*/
const regexVirgula = /,/
console.log(texto.split(regexVirgula)) //[ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.match(regexVirgula)) //[ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]

console.log(texto.match(/,/g)) //[ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/g)) //null
console.log(texto.match(/A/gi)) //[ 'a' ]
console.log(texto.match(/2/g)) //[ '2' ]
console.log(texto.match(/b c!d/g)) //[ 'b c!d' ]