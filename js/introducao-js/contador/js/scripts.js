/* Neste projeto, iremos fazer a nossa primeira integração de um código Javascript com uma página HTML.

Dicas
Caso você queira ir além, aqui estão algumas dicas de coisas para tentar:

Tente implementar os eventos usando o método addEventListener.
Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo. */


var currentNumberWrapper = document.getElementById('currentNumber');
// pegando o conteudo do HTML
var currentNumber = 0;

var msg = document.getElementById('mensagem');

function decrement(){
    if (currentNumber <= -10){
        msg.innerHTML = "O numero não pode ser menor que -10"
    // passando para o HTML (innerHTML)
    }else{
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        // passando para o HTML (innerHTML)
        msg.innerHTML = "Tudo certo!"
    }
    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }
}

function increment(){
    if (currentNumber >= 10){
        msg.innerHTML = "O numero não pode ser maior que 10"
    }else{
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        msg.innerHTML = "Tudo certo!"
    }
    if (currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }
}

var adc = document.getElementById('adicionar');
adc.addEventListener('click', increment);
var sbtr = document.getElementById('subtrair')
sbtr.addEventListener('click', decrement);