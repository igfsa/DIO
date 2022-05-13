// retornando a soma de todos valores de um array

array = [1, 2, 3, 4];

console.log(array.reduce(function(value, item){return item + value}));




/* 
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

function calculaValor(saldoDisponivel, lista){
    return lista.reduce(function(saldoTotal, item){
        return saldoTotal - item.preco;
    }, saldoDisponivel);
}

console.log(calculaValor(saldo, lista));