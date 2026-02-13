const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  const btn = document.createElement("button");
  btn.textContent = "❌";

  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
}
