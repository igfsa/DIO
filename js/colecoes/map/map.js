/* 
Map
Map é uma coleção de arrays no formato [chave, valor]
Pode ser iterado com for... of

map X objeto
-> maps podem ter chaves de qualquer tipo
-> maps possuem a propriedade length
-> maps são mais fáceis de iterar
-> utilizado quando o valor das chaves é desconhecido
-> os valores tem o mesmo tipo
*/
const mapa = new Map();

mapa.set(`chave`, `valor`);
console.log(mapa);

console.log(mapa.get(`chave`));

mapa.delete(`chave`);

console.log(mapa);
console.log(mapa.get(`chave`));

