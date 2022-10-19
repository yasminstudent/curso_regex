// ? -> zero ou uma ocorrência (nome: opcional)

const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!"
const texto2 = "There is a big fog in NYC"

const regex = /fogo?/gi //procure por fog e a letra o é opcional (pois ela esta do lado do interrogação)
console.log(texto1.match(regex)) // [ 'fogo', 'FOGO' ]
console.log(texto2.match(regex)) //[ 'fog' ]
