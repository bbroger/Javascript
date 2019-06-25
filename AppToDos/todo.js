var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);
    linkElement.setAttribute("href", "#");

    var position = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + position + ")");

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;
  if (todoText === "") {
    alert("Digite algum todo");
  } else {
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  }
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}