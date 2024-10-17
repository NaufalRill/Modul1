const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

document.addEventListener("DOMContentLoaded", loadTodos);
addButton.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") return;

    const listItem = createListItem(todoText);

    todoList.appendChild(listItem);

    saveTodos();
    todoInput.value = "";
}

function createListItem(todoText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${todoText}</span>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const editButton = listItem.querySelector(".edit-btn");
    editButton.addEventListener("click", () => editTodo(listItem));

    const deleteButton = listItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => deleteTodo(listItem));

    return listItem;
}

function editTodo(listItem) {
    const span = listItem.querySelector("span");
    const newText = prompt("Edit your task:", span.textContent);

    if (newText && newText.trim() !== "") {
        span.textContent = newText.trim();
        saveTodos();
    }
}

function deleteTodo(listItem) {
    listItem.remove();
    saveTodos();
}

function saveTodos() {
    const todos = [];
    todoList.querySelectorAll("li").forEach((item) => {
        const text = item.querySelector("span").textContent;
        todos.push(text);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
        storedTodos.forEach((todoText) => {
            const listItem = createListItem(todoText);
            todoList.appendChild(listItem);
        });
    }
}
