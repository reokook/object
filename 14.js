class ToDo {
  constructor() {
    // References to the DOM elements
    this.todoList = document.getElementById("todoList");
    this.todoInput = document.getElementById("todoInput");
    this.addButton = document.getElementById("addButton");

    // Event listener for the "Add Task" button
    this.addButton.addEventListener("click", () => this.addTask());
  }

  // Method to add a new task
  addTask() {
    const taskText = this.todoInput.value.trim();
    if (taskText === "") return; // Ensure the input is not empty

    const task = document.createElement("li");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    task.textContent = taskText;
    completeButton.textContent = "Complete";
    deleteButton.textContent = "Delete";

    // Apply CSS classes to buttons
    completeButton.classList.add("complete-button");
    deleteButton.classList.add("delete-button");

    // Event listeners for the buttons
    completeButton.addEventListener("click", () => this.toggleComplete(task));
    deleteButton.addEventListener("click", () => this.deleteTask(task));

    // Append buttons to the task item
    task.appendChild(completeButton);
    task.appendChild(deleteButton);

    // Add the task to the list
    this.todoList.appendChild(task);

    // Clear the input field
    this.todoInput.value = "";
  }

  // Method to toggle the completion state of a task
  toggleComplete(task) {
    task.classList.toggle("completed");
  }

  // Method to delete a task
  deleteTask(task) {
    this.todoList.removeChild(task);
  }
}

// Initialize the ToDo class when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ToDo();
});
