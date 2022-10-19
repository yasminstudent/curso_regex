const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

const regexNove = RegExp("9")
console.log("-----Métodos da RegExp-----")

//retorna um booleano se existe ou não o padrão procurado dentro da string
console.log(regexNove.test(texto))
//executa a expressão regular
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log("-----Métodos da String-----")

//retorna os elementos que foram encontrados dentro do padrão passado
console.log(texto.match(regexLetras))
//retorna o índice em que o padrão se inicia
console.log(texto.search(regexLetras))
//substitui os elementos encontrados pelo segundo parâmetro. Ex: 0,1,2,3,4,5,6,7,8,9,achei,achei,achei,achei,achei,achei
console.log(texto.replace(regexLetras, "achei"))
//retorna um array usando os elementos procurados como separador
console.log(texto.split(regexLetras))
