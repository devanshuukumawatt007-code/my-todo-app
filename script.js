const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
  list.innerHTML = localStorage.getItem("tasks") || "";
};

// Add task
addBtn.addEventListener("click", addTask);

function addTask() {

  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";

  delBtn.onclick = function () {
    li.remove();
    save();
  };

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";

  save();
}

// Save to localStorage
function save() {
  localStorage.setItem("tasks", list.innerHTML);
}
