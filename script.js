const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const themeToggle = document.getElementById("theme-toggle");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

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
    listItem.classList.add("removing");
    listItem.addEventListener(
      "animationend",
      () => {
        listItem.remove();
      },
      { once: true }
    );
  });

  const actions = document.createElement("div");
  actions.className = "todo-actions";
  actions.appendChild(completeButton);
  actions.appendChild(deleteButton);

  listItem.appendChild(text);
  listItem.appendChild(actions);
  todoList.appendChild(listItem);

  todoInput.value = "";
  todoInput.focus();
});
