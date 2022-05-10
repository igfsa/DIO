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