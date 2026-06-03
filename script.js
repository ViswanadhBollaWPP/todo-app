const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoText = todoInput.value.trim();
  if (!todoText) {
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const text = document.createElement("span");
  text.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "complete-btn";
  completeButton.textContent = "Complete";

  completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed");
    completeButton.textContent = listItem.classList.contains("completed")
      ? "Undo"
      : "Complete";
  });

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(text);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  todoInput.value = "";
  todoInput.focus();
});
