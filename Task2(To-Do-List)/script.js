document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        // Add event listener to edit task
        const editButton = li.querySelector(".edit");
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", taskText);
            if (newText !== null) {
                const taskTextElement = li.querySelector(".task-text");
                taskTextElement.textContent = newText;
            }
        });

        // Add event listener to delete task
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });
    }

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
        }
    });

    // Handle Enter key press
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
