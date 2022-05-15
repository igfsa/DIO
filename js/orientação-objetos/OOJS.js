/* 
Todos objetos Javascript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo dessa cadeia.

JavaScript não possui classes, a palavra reservada classes é apenas um syntatic sugar
Todas as "classes" são objetos e a herança se dá por protótipos
*/

class carne {
    constructor (comida){
        this.comida = comida
    }

    eat(){
        return `Delicia`
    }
}

