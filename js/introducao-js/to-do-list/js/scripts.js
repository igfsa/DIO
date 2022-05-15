/* Crie um campo de input de texto e um botão para adicionar a tarefa à lista;
Quando o botão for pressionado, o texto deve aparecer na lista com um checkbox ao lado;
Quando o usuário selecionar o checkbox, o item correspondente deve ficar com o texto riscado. (ex.: tarefa completa. dica: você pode resolver isso facilmente com CSS) */

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e){
    e.preventDefault();
    const inputField = document.getElementById('novo-item');
    addTask(inputField.value);
    form.reset();
}

function addTask(description){
    const taskContainer = document.createElement('li');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('class', 'checkmark');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);

}
