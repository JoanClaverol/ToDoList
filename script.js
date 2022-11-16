const editTaskButton = document.querySelectorAll(".edit-li");
const checkBoxDone = document.querySelectorAll(".checkboxes");
const taskLi = document.querySelectorAll(".task");
const paragraphEdit = document.querySelectorAll(".paragraph-edit");
const taskInput = document.querySelector('.input-task-input');

// removing tasks form the list with delete button
const removeTask = (el) => {
    el.target.parentNode.parentNode.parentNode.remove();
};
function addingEventListenerToDeleteButton(){
    
}

// editing tasks
const editTask = (e) => {
    console.log("edit task click working");
    const parentElement = e.target.parentNode.parentNode.parentNode;
     console.log(parentElement.querySelector("p"));
};


taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (taskInput.value) {
            console.log('ok');
            updateTasks();
            taskInput.value = '';
            const deleteTask = document.querySelectorAll(".delete-li");
            for (let index = 0; index < deleteTask.length; index++) {
                const element = deleteTask[index];
                element.addEventListener("click", (el) => {
                removeTask(el);
        })
    }
        }
    }
});

const generateTask = (taskName) => {
    const task = document.createElement('li');

    task.innerHTML = `
        <label>
            <input type="checkbox">
            <p>${taskName}</p>
        </label>
        <div class="settings">
            <i class="uil uil-ellipsis-h"></i>
            <ul class="task-menu">
                <li class=""><i class="uil uil-pen"></i>Edit</li>
                <li class="delete-li"><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    `;
    task.className = 'task';
    return task;
};


const updateTasks = () => {
    const taskInput = document.querySelector('.input-task-input');

    if (taskInput.value) {
        const task = generateTask(taskInput.value);
        const taskList = document.querySelector('.task-box');
        taskList.appendChild(task);
        taskInput.value = '';
    }
};

