/*
Reduce executa uma função em um array e retorna um valor unico

const callback = function(acumulador, valorAtual, indice, array){
    script
}

Se não possuírem valores indicados, os parâmetros do acumulador começam com o valor 0 do array e os do valor atual começam no valor 1

array.reduce(callback, initialValue)
*/

array = [1, 2, 3, 4];

console.log(array.reduce(function(value, item){return item + value}));