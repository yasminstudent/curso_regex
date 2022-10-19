
const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// números entre 0-255
/*
    \d{1,2} -> captura números de 0 a 99
    1\d{2} -> captura números de 100 a 99
    2[0-4]\d -> captura números de 200 a 249
    25[0-5] -> captura números de 250 a 255
*/
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))