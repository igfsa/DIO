/* Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar) */


function invertePalavra(palavra){
    let aux = '';
    for (let i = (palavra.length - 1); i >= 0; i--){
        aux += palavra[i];
    }
    return aux;
}

function verificaPalindromo(palavra){
    if (!palavra || !palavra.length){
        return `entrada inválida`
    }
    let frase = `Sua palavra invertida é: ${invertePalavra(palavra)}. `;
    if(invertePalavra(palavra) == palavra){
        frase += `E ela é um palíndromo`;
    }else{
        frase += `E ela não é um palíndromo`;
    }

    return frase;
}

function verificaPalindromo2(palavra){
    if (!palavra || !palavra.length){
        return `entrada inválida`
    }
    let aux = palavra.split('').reverse().join('')
    let frase = `Sua palavra invertida é: ${aux}. `;
    if(aux == palavra){
        frase += `E ela é um palíndromo`;
    }else{
        frase += `E ela não é um palíndromo`;
    }

    return frase;

}


console.log(verificaPalindromo(`rato`));
console.log(verificaPalindromo2(`rato`));