const texto = `
ca	r
r	o s!
`
// \t -> representa um tab
// \n -> representa quebra de linha
// \s -> representa um espaço
console.log(texto.match(/ca\tr\nr\to\ss!/))