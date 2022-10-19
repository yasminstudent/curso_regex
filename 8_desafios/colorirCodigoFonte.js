// coloca o conteúdo capturado dentro da tag span e aplica a cor que foi passada
const aplicarCor = (txt, regex, cor) => txt.replace(regex, `<span style="color: #${cor}"><b>$1<b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html') //captura o html inteiro

//capturando o que se encontra na tag code
const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0] 
//como não estamos usando a flag global, ele retorna o match, o índice e a string inteira
//estamos pegando o índice 0 que é o match

// string
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

// comentários de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentários de uma linha
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)