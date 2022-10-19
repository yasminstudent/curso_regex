const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>"

/*
    pelo fato de \w+ estar em um grupo
    as palavras b, strong e div foram armazenadas
*/
console.log(texto1.match(/<(\w+)>/g)) //[ '<b>', '<strong>', '<div>' ]

/*
    usa-se o retrovisor para se referenciar a algo armazenado

    para se referenciar a algo armazenado no primeiro grupo, usa-se: \1
    segundo grupo (caso tenha): /2 e etc
*/
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) //[ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]


const texto2 = "Lentamente é mente muito lenta."
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi)) //[ 'Lentamente é mente muito lenta' ]
// \2 -> se referencia ao segundo grupo: (mente)
// \1 -> se referencia ao primeiro grupo: (lenta)

/*
    Nesse caso o grupo 1 se torna o (mente)
    ?: -> indica que é um grupo que não captura a informação
*/
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) //[ 'Lentamente é mente' ]

console.log(texto2.match(/(lenta)(mente)/gi)) //[ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)?/gi)) //[ 'Lentamente', 'lenta' ]

console.log(texto2.replace(/(lenta)(mente)/gi, "$2")) //substitui o q ele encontra pelo segundo grupo (mente)
//mente é mente muito lenta.

console.log(texto2.replace(/(lenta)(mente)/gi, "Ab $2 Cd")) //Ab mente Cd é mente muito lenta.
