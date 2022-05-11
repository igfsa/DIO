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