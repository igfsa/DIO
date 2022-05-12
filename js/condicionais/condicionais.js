function numeroIgualSoma(a, b){
    const p1 = numeroIgual(a, b);
    const p2 = numeroSoma(a, b);

    return (p1 + p2);
} 

function numeroIgual(a, b){
    let frase;
    if (a === b){
        frase = `Os numeros ${a} e ${b} são iguais. `;
    }else{
        frase = `Os numeros ${a} e ${b} são diferentes. `;
    }

    return frase;
}

function numeroSoma(a, b){
    let frase1;
    let frase2;
    if (a + b > 10){
        frase1 = `Sua soma é ${a + b} que é maior que 10`;
    }else if(a + b == 10){
        frase1 = `Sua soma é ${a + b} que é igual a 10`;
    }else{
        frase1 = `Sua soma é ${a + b} que é menor que 10`;
    }
    if (a + b > 20){
        frase2 = ` e maior que 20.`;
    }else if(a + b == 20){
        frase2 = ` e igual a 20`;
    }else{
        frase2 = ` e menor que 20.`;
    }
    return (frase1 + frase2);
}

console.log(numeroIgualSoma(3, 8)); 
