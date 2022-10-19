// + -> uma ou mais ocorrências

const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!"
const texto2 = "There is a big fog in NYC"

const regex = /fogo+/gi //procure por fog e a letra o pode se repetir uma ou mais vezes
console.log(texto1.match(regex)) // [ 'fogo', 'FOGOOOOOOOO' ]
console.log(texto2.match(regex)) //null

const texto3 = "Os números: 0123456789."
console.log(texto3.match(/[0-9]/g)) //['0', '1', '2', '3','4', '5', '6', '7','8', '9']
console.log(texto3.match(/[0-9]+/g)) //[ '0123456789' ]
