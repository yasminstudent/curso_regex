const texto = "Romário era um excelente jogador\n, mas hoje é um político questionador"

//idéia: capturar string que começa e termina com r

//retorna null pq ponto não representa \n (problema do dotall)
console.log(texto.match(/^r.*r$/gi))

// para ver mais detalhes sobre \s e \S consultar módulo 4 aula 5
console.log(texto.match(/^r[\s\S]*r$/gi)) //essa regex traz o resultado esperado