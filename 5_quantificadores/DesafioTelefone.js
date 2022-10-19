const texto = `Lista telefônica
    -(11) 98756-1212
    -98765-4321
    -90319-8121
    -(11) 2589-5591`

const regexTelefone = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regexTelefone))