//Validando senhas
const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`

/*
    Regras:
    - ter letra minúscula
    - ter letra maiúscula
    - ter número
    - ter simbolo
    - ter no mínimo 6 caracteres
    - ter no máximo 20 caracteres
*/

console.log(texto.match(/^.{6,20}$/gm)) //captura senhas de 6 a 20 caracteres
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)) //captura senhas que tenha letra maiúscula, qualquer caracetere e de 6 a 20 caracteres
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))

/*
    Lembretes:
    ^ -> início de linha
    $ -> fim de linha
    . -> qualquer caractere
    {n,m} -> de n a m
    () -> grupo
    ?= -> Positive lookahead
*/