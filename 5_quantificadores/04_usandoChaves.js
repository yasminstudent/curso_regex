const texto = "O João recebeu 120 milhões apostando 6 9 21 23 45 46"

// para definir um quantificador usa {}
console.log(texto.match(/\d{1,2}/g)) //procure por dígitos que tenha 1 ou até 2 dígitos (um do lado do outro)
console.log(texto.match(/[0-9]{2}/g)) //procure por dígitos que tenha somente 2 dígitos (um do lado do outro)
console.log(texto.match(/\d{1,}/g)) //procure por dígitos que tenha 1 ou + dígitos (um do lado do outro)

console.log(texto.match(/\w{7}/g)) //[ 'recebeu', 'apostan' ]
console.log(texto.match(/[\wõ]{7,}/g))  //[ 'recebeu', 'milhões', 'apostando'] -> 7 ou mais caracteres
