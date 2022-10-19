
const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`
/*
    \\d{1,2} -> captura números de 0 a 99
    1\\d{2} -> captura números de 100 a 99
    2[0-4]\\d -> captura números de 200 a 249
    25[0-5] -> captura números de 250 a 255
*/
const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])' //como isso é uma string, usamos duas barras
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g') //${n}\\. -> número entre 0 a 255 e o ponto literal
console.log(texto.match(ipv4))