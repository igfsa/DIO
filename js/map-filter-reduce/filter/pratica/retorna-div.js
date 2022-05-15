/* Filtre e retorne todos os números pares de um array. */


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 14, 15, 16, 17, 18, 19, 20];

console.log(array.filter((num) => num % 2 === 0));


/* 
this não está funcionando

var div ={
    divisor: 3,
    resto: 2
}

console.log(array.filter(((num) => num % this.divisor === this.resto), div));
// 5, 8, 11, 14, 17, 20 */