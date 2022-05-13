/* 
Error
Error e um objeto que permite a criação de erros personalizados

todos parâmetros são opicionais
new Error(mensagem, nomeArquivo, numeroLinha)

*/

const meuErro = new Error(`Mensagem inválida`);

// Pode ter um nome, declarado através do parâmetro name
meuErro.name = `InvalidMessage`

function forcaErro(){
    throw meuErro;
}

forcaErro();

/* 
Saída no terminal

InvalidMessage: Mensagem inválida
    at Object.<anonymous> (D:\estudo_programacao\git\dio\dio\js\debug\error.js:10:17)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

console.log(meuErro.stack);
// Exibe onde o erro foi encontrado