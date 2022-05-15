/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */


var array = [1, 2, 3, 4, 5];

const chave2 = {
    valor: 2
}

const chave3 = {
    valor: 3
}

function multiplica(item){
    return this.valor * item;
}

console.log(array.map(multiplica, chave2));
console.log(array.map(function(item){return item * this.valor}, chave3));

var array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * chave2.valor));
console.log(array.map((item) => item * chave3.valor));

