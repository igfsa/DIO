
/*
Primeira função criada em JS

Função básica para trocar a cor do texto a cada segundo.
Criada com a intenção de demonstrar como funciona ferramentas de tempo e DOM

DOM: https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039
Ferramentas de tempo: https://www.devmedia.com.br/date-javascript-trabalhando-com-data-e-hora-em-js/37222
*/


function trocaCorSegundo(){
    data = new Date();    // Criando uma variável com a data e momentos atuais
    s = data.getSeconds();    //buscando os segundos atuais na nossa variável data
    setTimeout('trocaCorSegundo()', 1000);    // definindo que a função ira rodar a cada segundo
    if (s % 2 == 1){
        for(let i = 0; i <= document.getElementsByTagName('h1').length; i++){
            // documents.getElementsBy<tipo de elemento> retorna uma estrutura com todos elementos daquele tipo na página
            document.getElementsByTagName('h1')[i].style.color = 'red';
        }
    }else{
        for(let i = 0; i <= document.getElementsByTagName('h1').length; i++){
            document.getElementsByTagName('h1')[i].style.color = 'gray';
        }
    }
}

trocaCorSegundo();