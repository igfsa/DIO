interface IEstudandte {
    name: string;
    idade: number;
}

interface IEstudandte {
    serie: string;
}

/*
Ao criar duas declarações de interface, elas são somadas. 
Para adicionar funcionalidades a bibliotecas externas, é necessário declarar no artigo .d.ts
*/

import $ from `jquery`;

$.fn.extend({
    novaFuncao(){
        console.log(`Nova Função`);
    }
})

$(`body`).novaFuncao();