/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */


function substituiNumerosPares(array){
    if (!array.length){
        return -1;
    }else{
        for (let i = 0; i < array.length; i++){
            if ((array[i] % 2) == 0){
                if (array[i] == 0){
                    console.log('O valor já é 0');
                }else{
                    array[i] = 0;
                }
            }
        }
    }
    return array;
}

console.log(substituiNumerosPares([1, 3, 4, 6, 80, 33, 23, 90]));