/* 
A chamada do arquivo deve ser na forma "./<nome do arquivo>"
Para importar named exports, os itens devem ser colocados entre chaves, já para default exports, o valor vai sem chave
É possível usar apelidos para os imports através de 'as'
Podemos importar todos arquivos através de '*', e podemos definir um apelido geral, onde os itens serão acessador por apelido.item()
*/
import { multiplica2 as vezes2, multiplica3, multiplica4, multiplica5} from "./modulo.mjs";
import valorDefault from "./modulo.mjs";

console.log(vezes2(5));
console.log(multiplica3(5));
console.log(multiplica4(5));
console.log(multiplica5(5));
console.log(valorDefault(5));
