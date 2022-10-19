const texto = ".$+*?-"

//dentro de um conjunto não é necessário colocar o escape p/ indicar que é para pegar o valor literal
console.log(texto.match(/[+.?*$-]/g)) //[ '.', '$', '+', '*', '?' ]
console.log(texto.match(/[+.?*$]./g)) //[ '.$', '+*', '?-' ] (pega um dos valores do conjunto + qualquer coisa que venha em seguida)
console.log(texto.match(/[$-?]/g)) //isso é um intervalo

console.log(texto.match(/[$\-?]/g)) //isso NÃO é um intervalo pois antes do hifen tem o escape

// elementos que podem precisar do escape dentro do conjunto dependendo da situação: - [] ^