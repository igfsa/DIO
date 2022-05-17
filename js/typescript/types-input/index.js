/*
types - smilares a structs
interfaces - "contrato" para implementar as classes
*/
/*
    Também é possível declarar através de type, porém o mais usado é interface pois nos permite contratos

    type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico',
    executarRugido(altura: number): void;
}
 */
var animal = {
    nome: 'Elefante',
    tipo: "terrestre",
    executarRugido: function (altura) { return ("".concat(altura, "db")); },
    domestico: false
};
animal.executarRugido(30);
var felino = {
    nome: 'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: function (altura) { return ("".concat(altura, "db")); },
    domestico: false
};
var animalEstimacao = {
    domestico: true,
    nome: "C\u00E3o",
    porte: "M\u00E9dio",
    executarRugido: function (altura) { return ("".concat(altura, "db")); },
    tipo: "terrestre"
};
console.log(animalEstimacao);
console.log(animal);
console.log(felino);
