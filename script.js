document.getElementById("submit").addEventListener("click", function () {
	const todoInput = document.getElementById("todo-input");
	const todoText = todoInput.value.trim();

	if (todoText !== "") {
		addTodo(todoText);
		todoInput.value = "";
	}
});

function addTodo(text) {
	const todoList = document.getElementById("todo-list");

	const li = document.createElement("li");
	li.textContent = text;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function () {
		todoList.removeChild(li);
	});

	li.appendChild(deleteButton);
	todoList.appendChild(li);
}

console.log("second commit");
