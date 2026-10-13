class Task {
  constructor(id, title, completed = false) {
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
    this.title = title;
    this.completed = Boolean(completed);
  }

  toggle() {
    return new Task(this.id, this.title, !this.completed);
  }
}

class TaskManager {
  constructor(initialTasks = []) {
    this.tasks = Array.isArray(initialTasks) ? [...initialTasks] : [];
  }

  setTasks(taskList) {
    const updated = Array.isArray(taskList) ? [...taskList] : [];
    return new TaskManager(updated);
  }

  addTask(newTask) {
    return new TaskManager([...this.tasks, newTask]);
  }

  removeTask(targetId) {
    return new TaskManager(this.tasks.filter(item => item.id !== targetId));
  }

  toggleTask(targetId) {
    const toggled = this.tasks.map(item => {
      return item.id === targetId ? item.toggle() : item;
    });
    return new TaskManager(toggled);
  }
}