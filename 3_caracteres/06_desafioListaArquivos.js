// Desafio: encontrar quantidade de arquivos com .mp3
const texto = "Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3"
console.log(texto.match(/\.mp3/g)) //[ '.mp3', '.mp3', '.mp3', '.mp3' ]

// no futuro...
// \w -> representa caractere
// + -> representa 1 ou +
console.log(texto.match(/\w+\.mp3/g)) //[ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]