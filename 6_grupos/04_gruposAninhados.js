//Grupos Aninhados: um grupo dentro de outro
const texto = "supermercado hipermercado minimercado mercado"

console.log(texto.match(/(super|hiper|mini)?mercado/g)) //[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
//OBS: | dentro de um grupo representa o operador OU

//isso é um grupo aninhado
console.log(texto.match(/((su|hi)per|mini)?mercado/g)) //[ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
/*
    su OU hi + per
        OU mini
    + mercado

    ou o apenas mercado
*/