const texto = "<div>Conteudo 01</div><div>Conteudo 02</div>"

// quantificadores SÃO gulosos (greedy) (pega o máximo que puder))
// lembrete:  + -> um ou mais
console.log(texto.match(/<div>.+<\/div>/g))
// lembrete:  * -> zero ou mais
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

//resultado dos três acima: [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

// quantificadores NÃO gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
//resultado dos três acima: [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]