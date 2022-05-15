/* Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original */


const body = document.getElementsByTagName(`body`);
const bodyarray = Array.from(body);

const btn = document.getElementById(`mode-selector`);
const ttl = document.getElementById(`page-title`);
const footer = document.getElementsByTagName(`footer`)[0];


function darkMode(){
//    body.classList.toggle(`dark-mode`);
    btn.classList.toggle(`dark-mode`);
    ttl.classList.toggle(`dark-mode`);
    footer.classList.toggle(`dark-mode`);

    if (body[0].classList.contains(`dark-mode`)){
        btn.innerHTML = `Modo claro`
        ttl.innerHTML = `Modo Escuro Ligado`
    }else {
        btn.innerHTML = `Modo escuro`
        ttl.innerHTML = `Modo Claro Ligado`
    }
}

function darkModeBody(){
    bodyarray.map((item) => {item.classList.toggle(`dark-mode`)})
}

btn.addEventListener(`click`, darkMode);

btn.addEventListener(`click`, darkModeBody);

