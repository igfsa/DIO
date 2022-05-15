/* 
Módulos são arquivos JavaScript com a capacidade de importar e exportar informações de outros arquivos

Para ver como importar, acessar o arquivo teste-modulo
*/


// named exports: quando há a exportação de varios arquivos, indicados individualmente 
export function multiplica2(num){
    return 2 * num;
}

export function multiplica3(num){
    return 3 * num;
}

function multiplica4(num){
    return 4 * num;
}

function multiplica5(num){
    return 5 * num;
}

export {
    multiplica4,
    multiplica5
}


// default exports: só pode existir um por arquivo e será o retorno padrão do arquivo
export default function multiplica6(num){
    return 6 * num;
}