const texto = "Romário era um excelente jogador\n, mas hoje é um político questionador"

console.log(texto.match(/r/gi)) //[ 'R', 'r', 'r', 'r', 'r' ]

//^ indica início de uma string
console.log(texto.match(/^r/gi)) //[ 'R' ]

//$ indica fim de uma string
console.log(texto.match(/r$/gi)) //[ 'r' ]

console.log(texto.match(/^r.*r$/gi)) //null
//idéia: capturar string que começa e termina com r
//mas retorna null pq ponto não representa \n