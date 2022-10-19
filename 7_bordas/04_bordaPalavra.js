//Bordas de palavras
const texto1 = "dia diatomico diafragma media wikipedia bom_dia melodia radial"

//OBS: quantificador: + -> uma ou mais ocorrências

console.log(texto1.match(/\bdia\w+/gi)) //captura palavras que começa com dia
//[ 'diatomico', 'diafragma' ]

//OBS: não capturou a palavra dia pois o + indica 1 ou + e espaço não faz parte do shorthands \w

console.log(texto1.match(/\w+dia\b/gi)) //captura palavras que termina com dia
//[ 'media', 'wikipedia', 'bom_dia', 'melodia' ]

console.log(texto1.match(/\w+dia\w+/gi)) //captura palavras que tenha dia no meio
//[ 'radial' ]

console.log(texto1.match(/\bdia\b/gi)) // [ 'dia' ]

//borda é tudo que não entra no \w
// ou seja espaço, acentos...
// e isso gera um problema:

const texto2 = "dia diatômico diafragma, média wikipédia bom-dia melodia radial"
console.log(texto2.match(/\bdia\b/gi)) //[ 'dia', 'dia', 'dia', 'dia' ]
// a expressão trouxe o dia das seguintes palavras: dia, média, wikipédia e bom-dia

/*
    lembretes:
    \S -> não espaços
    * -> zero ou mais
    ? -> zero ou uma (opcional)
*/
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) //traz todas as palavras, mas diafragma vem com a vírgula
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) //traz todas as palavras e sem a vírgula