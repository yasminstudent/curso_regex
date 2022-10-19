const texto = `Os e-mails dos convidados são:
                - fulano@cod3r.com.br
                - xico@gmail.com
                - rafa.sampaio@yahoo.com`

const regexEmail = /\w+\.?\w{0,}@\w+\.\w+\.?\w{0,}/g
const regexProfessor = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g
const regexProfessor2 = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g

console.log(texto.match(regexEmail))
console.log(texto.match(regexProfessor2))