/* 
Throw 

A palavra reservada throw trata o que é passado como um erro
Finaliza a função
*/


function numeroPar(num){
    if (num % 2 !== 0) throw `Número ímpar`;

    return console.log(`Seu número é par`);
}


// numeroPar(5);


/*
Saída no terminal:


D:\estudo_programacao\git\dio\dio\js\debug\tratando-erros.js:8
    if (num % 2 !== 0) throw `Número ímpar`;
                       ^
Número ímpar
(Use `node --trace-uncaught ...` to show where the exception was thrown)

*/

/* 
Try... catch

Dentro do bloco try, executa o código e, caso resulte em algum erro, vai para o bloco catch

Finally
O finally é executado de qualquer maneira após o try... catch
*/

function tryCatch(num){
    try {
        numeroPar(num);
    }
    catch (erro) {
        console.log(erro);
    }
    finally {
        console.log(`Fim da função`)
    }
}

tryCatch(3);

/* 
Saída no terminal:

Número ímpar
Fim da função
*/

