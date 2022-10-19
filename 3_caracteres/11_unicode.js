// https://unicode-table.com/pt/

const texto = "a☆c걛d"
// \u -> indica que é um código da tabela unicode
console.log(texto.match(/\u2606|\uAC5B/g))
