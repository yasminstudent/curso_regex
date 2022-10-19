const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`
/*
    (\(\d{2}\)\s?)? -> captura o ddd (que é opcional)
    \d{4,5} -> captura 4 ou 5 dígitos
    \d{4} -> captura os 4 dígitos restantes
*/
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))