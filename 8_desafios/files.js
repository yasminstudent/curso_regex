const fs = require("fs")

//lendo os arquivos da pasta originais
const read = nomeArquivo => {
    return fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: "utf8" })
}

const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`

    //caso a pasta ainda não exista
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname)
    }

    //criando arquivo com o seu conteúdo
    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: "utf8" })
}

module.exports = { read, write }