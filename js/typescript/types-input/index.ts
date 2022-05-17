/* 
types - smilares a structs
interfaces - "contrato" para implementar as classes
*/



interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquatico',
    executarRugido(altura: number): void,
    domestico: boolean,
    corOlho?: string,
    //Ao usar o caractere "?", criamos uma variável opcional, não sendo obrigatório seu uso
}
export default IAnimal;

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

/* 
    Também é possível declarar através de type, porém o mais usado é interface pois nos permite contratos

    type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico',
    executarRugido(altura: number): void;
}
 */

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "terrestre",
    executarRugido: (altura) => (`${altura}db`),
    domestico: false
}
animal.executarRugido(30);

const felino: IFelino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (altura) => (`${altura}db`),
    domestico: false,
}

interface ICanino extends IAnimal {
    porte: `Pequeno` | `Médio` | `Grande`,
}

type IDomestico = ICanino | IFelino;

const animalEstimacao: IDomestico = {
    domestico: true,
    nome: `Cão`,
    porte: `Médio`,
    executarRugido: (altura) => (`${altura}db`),
    tipo: `terrestre`,
    corOlho: `marrom`
}

console.log(animalEstimacao);
console.log(animal);
console.log(felino);





/* 
Tratando inputs
*/

const input = document.getElementById(`input`) as HTMLInputElement;
const p = document.getElementById(`p`);

input.addEventListener(`input`, (event) => {
    const i = event.currentTarget as HTMLInputElement;
    p.innerHTML = i.value;
})


/* 
Generic types
*/

function addLista<T>(array: T[], valor: T) {
    // usando inferência de tipos: <valor a ser inferido>
    return array.map(item => (item + valor));
}

console.log(addLista([1, 2, 3, 4], 4));

/* 
ReadOnly e Private
As propriedades readonly e private são usadas para declarar um atributo em modo de leitura e privado, respectivamente
O modo de leitura não permite edição após sua implementação e o modo privado permite edição e acesso dentro da classe
*/

class pessoa {
    readonly nome: string;
    readonly sobrenome: string;
    private _idade: number;

    get retornaIdade() {
        // Apenas assim é possível retornar idade
        return this._idade;
    }

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this._idade = idade;
    }

    informa() {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e idade ${this._idade}`);
    }

    mudaIdade(idade: number) {
        this._idade = idade;
    }

}

const pessoa1 = new pessoa(`Ícaro`, `Sanches`, 21);

/*
console.log(pessoa1._idade);
pessoa1._idade = 22;

error TS2341: Property '_idade' is private and only accessible within class 'pessoa'.
*/

console.log(pessoa1.retornaIdade);
pessoa1.mudaIdade(22);
console.log(pessoa1.retornaIdade);

/*
pessoa1.nome = `João`;
pessoa1.sobrenome = `Silva`;

error TS2540: Cannot assign to 'nome' because it is a read-only property.
error TS2540: Cannot assign to 'sobrenome' because it is a read-only property.
*/
pessoa1.informa();



// ao extender uma interface, também podemos ocultar uma propriedade

interface pessoaNome extends Omit<pessoa, '_idade'>{}

const semIdade: pessoaNome = {
    nome: `pedro`,
    sobrenome: `silva`,
    retornaIdade: 0,
    informa: function (): void {
        throw new Error("Function not implemented.");
    },
    mudaIdade: function (idade: number): void {
        throw new Error("Function not implemented.");
    }
}

console.log(semIdade);