const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  
  taskList.appendChild(listItem);

  
  taskInput.value = "";
}

function deleteTask(button) {
  const listItem = button.parentElement;
  taskList.removeChild(listItem);
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
