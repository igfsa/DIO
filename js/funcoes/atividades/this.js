/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
} */


var pessoa1 = {
    nome: `Ícaro`,
    idade: 21
}

var pessoa2 = {
    nome: `joao`,
    idade: 35
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.apply(pessoa2, [10]));