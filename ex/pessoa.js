export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa é: ${this.nome}`
    }

    setIdade(idade) {
        this.idade = idade
    }

    getIdade() {
        return `Idade é: ${this.idade}`
    }
}