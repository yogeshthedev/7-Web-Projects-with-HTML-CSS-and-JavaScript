document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {
    storedTasks.forEach((task) => tasks.push(task));

    updateTasksList();
    updateStats();
  }
});

let tasks = [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const addTask = () => {
  const taskinput = document.getElementById("taskinput");
  const text = taskinput.value.trim();

  if (text) {
    tasks.push({ text: text, complete: false });
    updateTasksList();
    updateStats();
    saveTasks();
  }
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  console.log(tasks);
  updateStats();
  saveTasks();
  updateTasksList();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
};
const editTask = (index) => {
  const taskInput = document.getElementById("taskinput");
  taskInput.value = tasks[index].text;
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
};

const updateStats = (index) => {
  const completeTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = (completeTasks / totalTasks) * 100;
  const progressBar = document.getElementById("progress");

  if (totalTasks === 0) {
    progressBar.style.width = "0";
  } else {
    progressBar.style.width = `${progress}%`;
  }

  document.getElementById(
    "numbers"
  ).innerText = `${completeTasks} / ${totalTasks}`;
};

const updateTasksList = () => {
  const taskList = document.getElementById("tasklist");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItems = document.createElement("li");

    listItems.innerHTML = `
        <div class="taskItem">
        <div class= "task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class= "checkbox" ${
          task.completed ? "checked" : ""
        }/>
        <p>${task.text}</p>
        <div class="icons">
        <img src="./img/edit.png" onClick="editTask(${index})"/>
        <img src="./img/bin.png" onClick="deleteTask(${index})"/>
        </div>
        `;

    listItems.addEventListener("change", () => toggleTaskComplete(index));
    taskList.append(listItems);
  });
};

document.getElementById("newtask").addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
