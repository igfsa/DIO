/* 
Filter possui sintaxe parecida com map e forEach, porém retorna um novo array com os elementos filtrados dentro de uma comparação lógica
ao passar uma função, não é necessário passar o item como argumento

var.filter(callback, thisArg);
*/

var frutas = [`maçã fuji`, `maçã verde`, `abacaxi`, `laranja`];

console.log(frutas.filter((fruta) => fruta.includes(`maçã`)));