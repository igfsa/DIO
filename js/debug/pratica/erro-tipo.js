

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