import Pessoa from './pessoa'

const pessoa = new Pessoa('Claudio Eden Jr.')
console.log(pessoa.toString())

const idade = pessoa.setIdade(29)
console.log(pessoa.getIdade())