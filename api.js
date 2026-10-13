function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const records = [
        { id: 101, title: "Prepare architecture documentation", completed: false },
        { id: 102, title: "Test asynchronous task fetching logic", completed: false },
        { id: 103, title: "Validate object immutability and defineProperty", completed: true },
        { id: 104, title: "Submit GitHub repository link before deadline", completed: false }
      ];
      resolve(records);
    }, 1500);
  });
}