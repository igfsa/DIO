/* 
Document Object Model (DOM) é um padrão de como acessar e identificar os elementos HTML de uma página

Browser Object Model (BOM) tudo que está dentro do window
O DOM está dentro do BOM
*/

//SELECIONANDO ELEMENTOS


const id = document.getElementById('titulo');
// Retorna um objeto vinculado a seção com o id

const tag = document.getElementsByTagName('li');
// Retorna um objeto com todos elementos com a tag

const classe = document.getElementsByClassName('texto');
// Retorna um objeto com todos elementos com a classe

const query = document.querySelectorAll('section #lista');
// faz uma busca avançada e retorna um objeto com os elementos que cumprem os parâmetros

/* 
document.createElement(element)
Cria um elemento

document.removeChild(element)
Remove um elemento

document.appendChild(element)
Adiciona um elemento

document.replaceChild(element)
Substitui um elemento

*/



// TRABALHANDO COM ESTILOS


id.classList.add("novo-estilo");
//adiciona uma classe

id.classList.remove("novo-estilo");
// remove uma classe

id.classList.toggle("dark-mode");
// caso não exista a classe, adiciona, caso exista, remove

// para alterar diretamente o css, usa-se a propriedade style
document.getElementById(`lista`).style.color = `white`;
document.getElementById(`lista`).style.backgroundColor = `red`;




// EVENTOS


/* 
Ações que os usuários fazem na página

Eventos de mouse: mousehover, mouseleave
Eventos de clique: click, dblclick
Eventos de atualização: change, load

*/

const btn = document.getElementById(`btn`);

function trocacorred(){
    btn.style.backgroundColor = 'red';
}

function trocacorblue(){
    btn.style.backgroundColor = 'blue';
}

btn.addEventListener('click', trocacorred);
btn.addEventListener('dblclick', trocacorblue);