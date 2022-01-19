/*const array = [7.0, 5, 4, 10]

function alunos(mediaFinal){
    for (let i = 0; i < mediaFinal.length; i++){
        if (mediaFinal[i] < 7){
            mediaFinal[i] = mediaFinal.splice()
        }
    }
    return mediaFinal
}
console.log(alunos(array))*/

const mediaDosAlunos = [
	{
		nome: 'João',
		nota: 4,
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
]

function alunosAprovados (alunos, media){
	let aprovados = []

    for (let i = 0; i < alunos.length; i++){
		var {nome, nota} = alunos[i]

		if (nota >= media){
			aprovados.push(nome)
		}
        
    }
return aprovados
}


console.log(alunosAprovados(mediaDosAlunos, 5))