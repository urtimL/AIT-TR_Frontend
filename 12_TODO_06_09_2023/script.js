const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListU1 = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

taskListU1.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        //console.log("yes");
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        console.log(e);
        e.target.previousElementSibling.style.textDecoration = 'line-through';
    } else {
        e.target.previousElementSibling.style.textDecoration = 'none';
    }
});

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskName}</span>
                        <input type='checkbox'>
                        <button>Delete</button>`;
        taskListU1.appendChild(li);
    }
    task.value = "";
}
