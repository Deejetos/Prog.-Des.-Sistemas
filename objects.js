const gay = {
    nome: "Pyetro",
    idade: 16,
    saudacoes: function () {
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou gay`
    }
}

console.log(gay.saudacoes())