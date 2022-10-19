const texto = "João é calmo, mas no trânsito fica nervoso."

console.log(texto.match(/[\wÀ-ú]+/gi)) //seleciona cada palavra

// Positive lookahead -> ?=
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) //procure na frente da palavra que segue o padrão [\wÀ-ú] uma vírgula    
//[ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) //[ 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi)) //[ 'calmo' ]

// Negative lookahead -> ?!
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) //procure por palavras que não tenham uma vírgula na frente
//[ 'João', 'mas', 'no', 'trânsito', 'fica', 'nervoso' ] -> não trouxe todas as palavras, por conta da borda (\b)

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)) //solucionando problema anterior
//[ 'João ', 'é ', 'mas ', 'no ', 'trânsito ', 'fica ', 'nervoso.' ]