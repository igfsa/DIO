var array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function arrayValorUnico(array){
    var aux = [];
    let j = 0;
    const meuSet = new Set(array);
    for(let i of meuSet){
        aux[j] = i;
        j++;
    }
    return aux;
}

console.log(arrayValorUnico(array));