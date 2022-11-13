const breakTask = document.getElementById("break");
const gymTask = document.getElementById("gym");
const studyTask = document.getElementById("study");
const pcTask = document.getElementById("pc");
const friendsTask = document.getElementById("friends");
const workTask = document.getElementById("work");
const deselectTasks = document.getElementById("deselect");
const taskContainer = document.querySelector(".task__container");
const scheduleContainer = document.querySelector(".schedule__container");
const deleteTasks = document.querySelector(".deleteBtn");
const popUpContainer = document.querySelector(".pop-up__container");
const noBtn = document.getElementById("btn__answer-no");
const yesBtn = document.getElementById("btn__answer-yes");

let selectedColor;
let active;

taskContainer.addEventListener("click", selectTasks);
scheduleContainer.addEventListener("click", setColor);
deselectTasks.addEventListener("click", resetTasks);
deleteTasks.addEventListener("click", openPopup);
yesBtn.addEventListener("click", deleteTasksFunction);
noBtn.addEventListener("click", closePopup);

function selectTasks(e) {
  resetTasks();
  taskColor = e.target.style.backgroundColor;
  switch (e.target.id) {
    case "break":
      activeTask(breakTask, taskColor);
      icon = `<i class="fas fa-couch"></i>`;
      break;
    case "gym":
      activeTask(gymTask, taskColor);
      icon = `<i class="fas fa-dumbbell"></i>`;
      break;
    case "study":
      activeTask(studyTask, taskColor);
      icon = `<i class="fas fa-book"></i>`;
      break;
    case "pc":
      activeTask(pcTask, taskColor);
      icon = `<i class="fas fa-tv"></i>`;
      break;
    case "friends":
      activeTask(friendsTask, taskColor);
      icon = `<i class="fas fa-users"></i>`;
      break;
    case "work":
      activeTask(workTask, taskColor);
      icon = `<i class="fas fa-briefcase"></i>`;
      break;
  }
}

function activeTask(task, color) {
  task.classList.toggle("selected");

  if (task.classList.contains("selected")) {
    active = true;
    selectedColor = color;
    return selectedColor;
  } else {
    active = false;
  }
}

function setColor(e) {
  if (e.target.classList.contains("task") && active) {
    e.target.style.backgroundColor = selectedColor;
    e.target.innerHTML = icon;
  } else if (e.target.classList.contains("fas") && active) {
    e.target.parentElement.style.backgroundColor = selectedColor;
    e.target.parentElement.innerHTML = icon;
  }
}

function resetTasks() {
  const allTasks = document.querySelectorAll(".task__name");

  allTasks.forEach((task) => {
    task.className = "task__name";
  });
}

function deleteTasksFunction() {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.innerHTML = "";
    task.style.backgroundColor = "#fff";
  });
  closePopup();
}

function openPopup() {
  popUpContainer.style.display = "flex";
}

function closePopup() {
  popUpContainer.style.display = "none";
}
