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