const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === "") return; 


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

    todoList.appendChild(listItem);

    todoInput.value = "";
}

function editTodo(listItem) {
    const span = listItem.querySelector("span");
    const newText = prompt("Edit your task:", span.textContent);

    if (newText && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}

function deleteTodo(listItem) {
    listItem.remove(); 
}
