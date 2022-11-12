const taskInput = document.querySelector('.input-task-input');
taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (taskInput.value) {
            console.log('ok');
            updateTasks();
            taskInput.value = '';
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
                <li><i class="uil uil-pen"></i>Edit</li>
                <li><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    `
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