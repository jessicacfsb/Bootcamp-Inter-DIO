function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
    nome: "Jéssica", 
    idade: 25
}

const pessoa2 = {
    nome: "Constantino",
    idade: 27
}

const bixinhoDeEstimacao = {
    nome: "Malú",
    idade: 1
}
console.log(calculaIdade.call(pessoa1, 2))
console.log(calculaIdade.apply(pessoa2, [2]))
console.log(calculaIdade.call(pessoa1, 20))
console.log(calculaIdade.apply(pessoa2, [20]))