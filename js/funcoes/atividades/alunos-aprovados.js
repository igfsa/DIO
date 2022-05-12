const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media){
    var aprovados = [];

    for(let i = 0; i < alunos.length; i++){

        let {nota, nome} = alunos[i];

        if(nota >= media){
            aprovados.push(alunos[i].nome)
        };
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));