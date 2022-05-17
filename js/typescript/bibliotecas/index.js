"use strict";
exports.__esModule = true;
/*
Ao criar duas declarações de interface, elas são somadas.
Para adicionar funcionalidades a bibliotecas externas, é necessário declarar no artigo .d.ts
*/
var module_1 = require("jquery");
module_1["default"].fn.extend({
    novaFuncao: function () {
        console.log("Nova Fun\u00E7\u00E3o");
    }
});
(0, module_1["default"])("body").novaFuncao();
