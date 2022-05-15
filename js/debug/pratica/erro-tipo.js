/* O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/


function verificaArray(array, num){
    try {
        if (!array || !num){
            throw new ReferenceError('Entre com os parâmetros');
        }
        if (typeof array != 'object'){
            throw new TypeError(`Entre com um objeto em array`);
        }
        if (typeof num != 'number'){
            throw new TypeError(`Entre com um número em num`);
        }
        if (array.length != num){
            throw new RangeError(`Entre com um array com o tamanho de num`);
        }

        return array;
    }
    catch (e){
        if (e instanceof ReferenceError){
            console.log(`ReferenceError \n`, e.stack);
        } else if (e instanceof TypeError){
            console.log(`TypeError \n`, e.stack);
        } else if (e instanceof RangeError){
            console.log(`RangeError \n`, e.stack);
        }
    }
}

verificaArray([1, 2], 3)