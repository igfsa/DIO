/* Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores. */


const mapa = new Map();

mapa.set(`icaro`, `ADMIN`);
mapa.set(`joao`, `ADMIN`);
mapa.set(`pedro`, `User`);
mapa.set(`maria`, `User`);
mapa.set(`rosa`, `ADMIN`);

function getAdmins(mapa){
    var admins = [];
    for (var [nome, funcao] of mapa){
        if (funcao == `ADMIN`){
            admins.push(nome);
        }
    }
    return admins;
}

console.log(getAdmins(mapa));