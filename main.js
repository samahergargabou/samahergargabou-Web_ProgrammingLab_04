let manager = new TaskManager();

const fetchButton = document.getElementById("loadTasksBtn");
const feedbackLabel = document.getElementById("statusMessage");
const containerElement = document.getElementById("taskList");

function renderElements(state) {
  while (containerElement.firstChild) {
    containerElement.removeChild(containerElement.firstChild);
  }

  state.tasks.forEach(record => {
    const card = document.createElement("div");
    card.className = record.completed ? "task completed" : "task";

    const label = document.createElement("span");
    label.textContent = record.title;

    const group = document.createElement("div");
    group.className = "button-group";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = record.completed ? "Mark Pending" : "Toggle";
    toggleBtn.className = "btn-status";
    toggleBtn.addEventListener("click", () => {
      manager = manager.toggleTask(record.id);
      renderElements(manager);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-remove";
    deleteBtn.addEventListener("click", () => {
      manager = manager.removeTask(record.id);
      renderElements(manager);
    });

    group.appendChild(toggleBtn);
    group.appendChild(deleteBtn);

    card.appendChild(label);
    card.appendChild(group);

    containerElement.appendChild(card);
  });
}

fetchButton.addEventListener("click", async () => {
  try {
    feedbackLabel.textContent = "Loading tasks...";
    const rawResult = await fetchTasks();

    // Required JSON transformation cycle
    const stringified = JSON.stringify(rawResult);
    const parsedPayload = JSON.parse(stringified);

    const taskEntities = parsedPayload.map(entry => new Task(entry.id, entry.title, entry.completed));
    manager = manager.setTasks(taskEntities);

    renderElements(manager);
    feedbackLabel.textContent = "";
  } catch (err) {
    feedbackLabel.textContent = `Failed to retrieve data: ${err.message}`;
  }
});