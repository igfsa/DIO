interface IUsuario {
    id: string, 
    email: string,
}

interface IAdmin extends IUsuario{
    cargo: `gerente` | `coordenador` | `supervisor`;
}

function redireciona(usuario: IUsuario | IAdmin){
    if ( `cargo` in usuario){
    // pela nossa entrada poder ser uma interface que pode ou não conter o atributo cargo, não é possível realizar uma operação de usuario.cargo
    // e necessário verificar se cargo está dentro de usuario
        return usuario.cargo
        // note que a validação já permite o uso de usuário.cargo
    }else{
        return `Não é admin`
    }
}

const pessoa1: IAdmin = {
    id: `pessoa1`,
    email: `pessoa@email.com`,
    cargo: `gerente`
}

console.log(redireciona(pessoa1));