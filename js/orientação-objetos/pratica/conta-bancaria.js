/* Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */


class contaBancaria{
    constructor(agencia, numero, tipo, saldo = 0){
    // os parâmetros a resem recebidos pela classe
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
        // o underline é inserido para diferenciar a propriedade da função getter/setter
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar (valor){
        if (valor > this._saldo){
            return `Operação negada`
        }
        this._saldo -= valor;
    }

    depositar (valor){
        this._saldo += valor;
    }

}

class contaCorrente extends contaBancaria{
    // extends serve para uso do super
    constructor(agencia, numero, cartaoCredito, saldo){
        super (agencia, numero, saldo);
        // super faz com que a classe atual herde os parâmetros da classe pai
        this.tipo = `corrente`;
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero, saldo){
        super (agencia, numero, saldo);
        this.tipo = `poupança`;
    }

}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero, saldo){
        super (agencia, numero, saldo);
        this.tipo = `unversitária`;
    }
    sacar (valor){
        // sobrescrevendo a função sacar. Como a função é sobrescrita, caso seja necessário aproveitar a função sobrescrita, é necessário reescrever
        if (valor > 500 || valor > this._saldo){
            return `Operação negada`
        }
        this._saldo -= valor;
    }
}