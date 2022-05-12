//Variaveis ou constantes podem armazenar funcoes

/* 
Função anônima
Funções que representam expressões, não possuem nome 
*/

const soma = function (a, b){
    return a + b;
}

console.log(soma(1, 2));
console.log(soma(3, 5));

/*
Função autoinvocável (IIFE - Immediately Invoked Function Expression)
Função que é chamada após sua implementação
Sua declaração deve ser feita entre parênteses e após a declaração, outro parênteses deve ser colocado com os parâmetros
*/

const sub = (
    function(a, b){
        return console.log (a - b);
    }
)(1, 2);

/* 
Callbacks 
Uma função sendo passada como argumento para outra função 
*/

const calcula = function(operacao, a, b){
    return operacao(a, b);
}

console.log(calcula(soma, 3, 4));

/* 
Valores padrão
para declarar um valor como entrada padrão, basta igualar o parâmetro ao valor desejado na criação da função
Então, caso não seja passado um valor de entrada para aquele parâmetro, o valor padrão será utilizado
*/

function eleva(a, b = 1){
    return a ** b;
}

console.log(eleva(2));
console.log(eleva(3, 2));

/* 
arguments
Quando a função é executada, é criado um array com todos parâmetros passados
*/

function achaMax(){
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(achaMax(0, 40, -37, 47, 2982378, -3247932, 3273));

/* 
Spread é uma técnica de separar arrays em elementos independentes ao inserir '...' antes de chamar o array
No exemplo abaixo, temos uma função que recebe três elementos, porém nosso parâmetro está em um array de 3 elementos
*/

function soma3 (a, b, c){
    return a + b + c;
}

var nums = [5, 5, 3];
console.log(soma3(...nums));

/* 
Rest é uma técnica de juntar varios argumentos em um array ao inserir '...' antes de declarar o argumento na função
No exemplo abaixo, temos uma função que calcula a quantidade de parâmetros passados, os transformando em apenas um array e pegando seu tamanho
*/

function confereTamanho(...args){
    return args.length;
}

console.log(confereTamanho(1, 5, 3, 7, 3, 5, 6, 35, 8, 8, 5));
console.log(confereTamanho(1, 5, 3, 5, 8));

/* 
ATENÇÂO!!!!!
Spread e Rest se assemelham muito visualmente, porém possuem funções diferentes
Spread é declarado ao CHAMAR a função, enquanto Rest é declarado ao CRIAR a função
*/

/* 
Object destructuring
Entre chaves podemos filtrar apenas os dados que nos interessam em um objeto
*/

var login = {
    id: 001,
    nomeCompleto: {
        nome: 'Ícaro',
        sobrenome: 'Sanches'
    },
    email: 'igfsaicaro@gmail.com'
}

function idUsuario ({id}){
    return id;
}

function retornaNomeCompleto({nomeCompleto: {nome: nome, sobrenome: sobrenome}}){
    return `${nome} ${sobrenome}`;
}

console.log(`id: ${idUsuario(login)} nome: ${retornaNomeCompleto(login)}`);


// Estrutura básica switch
function caso(a){
    switch (a){
        case 1:
            return console.log(`1`);
        case 2:
            return console.log(`2`);
        case 3:
            return console.log(`3`);
        case 4:
            return console.log(`4`);
        default:
            return console.log(`Opção inválida`)
        }
}

caso(1);
caso(3);
caso(5);

/* 
For... in
Permite iterar em objetos, acessando cada propriedade
para o exemplo, vamos aproveitar a variavel login
*/

//Exibindo a propriedade
for (prop in login){
    console.log(prop);
}

//Acessando o valor da propriedade
for (prop in login){
    console.log(login[prop]);
}


/* 
For... of
Permite iterar em arrays e strings
*/

var frase = `Uma frase`;

for (letra of frase){
    console.log(letra)
}



/* 
This
A palavra reservada this é uma referência de contexto

Seu valor pode mudar de acordo com o lugar no código onde foi chamada
 ____________________________________________________________
|      Contexto      |               Referência              |
|____________________|_______________________________________|
|Em um objeto(método)|     Próprio objeto dono do método     |
| - - - - - - - - - -|- - - - - - - - - - - - - - - - - - - -|
|       Sozinha      |Objeto global (em navegadores, window) |
| - - - - - - - - - -|- - - - - - - - - - - - - - - - - - - -|
|       Função       |             Objeto global             |
| - - - - - - - - - -|- - - - - - - - - - - - - - - - - - - -|
|       Evento       |     Elemento que recebeu o evento     |
| - - - - - - - - - -|- - - - - - - - - - - - - - - - - - - -|

*/

// No caso abaixo, this se refere ao objeto login
login = {
    id: 001,
    nome: 'Ícaro',
    sobrenome: 'Sanches',
    nomeCompleto: function(){
        return this.nome + ` ` + this.sobrenome
    },
    email: 'igfsaicaro@gmail.com'
}

console.log(login.nomeCompleto());


// no caso abaixo, this irá se referir ao objeto global, o valor passado em call
const pessoa1 = {
    nome: `Ícaro`
}

const pessoa2 = {
    nome:`joão` 
}

function pegaNome(){
    return this.nome;
}

console.log(pegaNome.call(pessoa1));
console.log(pegaNome.call(pessoa2));

//também é possível passar parâmetros pra essa função
nums = {
    num1: 2,
    num2: 5
}

function somaThis(a, b){
    console.log(this.num1 + this.num2 + a + b)
}

somaThis.call(nums, 4, 5);

//a função apply funciona de forma análoga a função call, porém os parâmetros são passados em um vetor

somaThis.apply(nums, [4, 5]);

/* 
O metodo bind cola a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
*/

const retornaNones = function (){
    return this.nome;
}

let icaro = retornaNones.bind({nome: `icaro`});

console.log(icaro());


/* 
Arrow function
Usado para "simplificar" funções anônimas, assim não sendo necessário escrever function, apenas declarar as entradas entre parênteses
No caso de funções de uma linha, não é necessário colocar return, e no caso de funções com um parâmetro, não é necessário colocar parênteses
Restrições: Não faz hoisting, this sempre será o valor global, não existe o objeto arguments o construtor também nao pode ser utilizado
*/

const mostraTexto = texto => `Seu texto é: ${texto}`;

console.log(mostraTexto(`Lorem Ipsum`));

const inverteArray = (array) => {
    var aux =[];
    var iaux = 0;
    for (let i = array.length - 1; i >=0 ; i--){
        aux[iaux] = array[i];
        iaux ++;
    }
    return aux;
}

console.log(inverteArray([1, 2, 3, 4, 5]));
