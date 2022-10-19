/*
    Flags:
    g - global: procura todos os trechos com o mesmo padrão, 
            se não passar essa flag, a expressão irá pegar apenas 
            o 1º registro do primeiro argumento da expressão
    i - pega letras maiúsculas e minúsculas (ignora o case)

    Exemplos:
    texto.match(/C|ab/) -> Ele encontra o C maiúsculo e para a execução
    texto.match(/c|ab/i) -> Ele encontra o C maiúsculo e para a execução
    texto.match(/c|ab/) -> Ele encontra o ab minúsculo e para a execução
    texto.match(/c|ab/gi) -> Ele encontra tanto o C quanto o ab
    texto.match(/ab|c/gi) -> Ele encontra tanto o C quanto o ab
*/
const texto = "Carlos assinou o abaixo-assinado."
console.log(texto.match(/ab|c/gi));
