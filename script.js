let draggedTask = null;

function createTaskElement(text) {
  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.textContent = text;

  task.addEventListener("dragstart", () => {
    draggedTask = task;
  });

  return task;
}

function addTask(columnId) {
  const text = prompt("Enter task:");
  if (!text) return;

  const task = createTaskElement(text);
  document.getElementById(columnId).appendChild(task);
}

document.querySelectorAll(".task-list").forEach(list => {
  list.addEventListener("dragover", e => {
    e.preventDefault();
  });

  list.addEventListener("drop", () => {
    if (draggedTask) {
      list.appendChild(draggedTask);
      draggedTask = null;
    }
  });
});
