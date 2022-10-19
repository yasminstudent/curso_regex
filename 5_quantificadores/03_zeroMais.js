// * -> zero ou mais ocorrências

const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!"
const texto2 = "There is a big fog in NYC"

const regex = /fogo*/gi //procure por fog e a letra o pode não existir ou se repetir 1 ou + vezes
console.log(texto1.match(regex)) // [ 'fogo', 'FOGOOOOOOOO' ]
console.log(texto2.match(regex)) //[ 'fog' ]
