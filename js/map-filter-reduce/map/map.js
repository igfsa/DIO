/* 
Map/mapping function (ou função de mapeamento) é uma função que cria um novo array a partir de um grupo inicial e operação em uma callback function
ao passar uma função, não é necessário passar o item como argumento

var.map(callback, thisArg);
*/

var array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

/* 
forEach possui papel semelhante a Map, porém a forEach não retorna um novo array. Para operar com a mesma, é necessário coloca-lá em uma const ou var

var.forEach(callback, thisArg);
*/

console.log(array.forEach((item) => item * 2));


