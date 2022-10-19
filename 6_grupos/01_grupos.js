/*
    - Parte (parcial ou inteira) da expressão regular
    - Usado para aplicar quantificadores em um grupo de uma só vez
    - Usa-se parênteses para definir
*/

const texto1 = "O José Simão é muito engraçado... hehehehehe"
console.log(texto1.match(/(he)+/g))

//Usando grupos opcionais
const texto2 = "http://www.site.info www.escola.ninja.br google.com.ag"
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w+\.?\w*\.?\w*/g))
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)) //resposta do professor

/*
    Observe que aplicamos o quantificador opcional (?) -> zero ou 1
    Isso: (http:\/\/)?
    Equivale a isso: h?t?t?p?:?\/?\/?   
*/