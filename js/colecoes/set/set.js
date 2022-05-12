/* 
Sets são estruturas com valores únicos 

set X array
-> possui valores únicos
-> em vez da propriedade length, consulta-se o número de registros pela propriedade size
-> não possui os métodos map, reduce, filter...
*/

const meuSet = new Set([1, 2, 3, 4, 5]);

console.log(meuSet);

meuSet.add(3);
console.log(meuSet);
// não irá existir diferença entre os dois últimos console.log pois a implementação do 2o 3 não terá efeito, pelo set ja possuir um 3 

console.log(meuSet.has(6));

meuSet.delete(5);
console.log(meuSet);
