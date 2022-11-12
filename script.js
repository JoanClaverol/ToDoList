//const taskInput = document.querySelector('.input-task-input');
//const clearAll = document.querySelector('.clear-btn');
const generateTask = (taskName, id_n) => {

    return `
    <li class="task">
        <label for="${id_n}">
            <input type="checkbox" id="${id_n}">
            <p>${taskName}</p>
        </label>
        <div class="settings">
            <i class="uil uil-ellipsis-h"></i>
            <ul class="task-menu">
                <li><i class="uil uil-pen"></i>Edit</li>
                <li><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    </li>
    `
};

console.log(generateTask('task1', 5));

// let taskList = [...document.getElementsByClassName('task')].forEach(
//     (e, i, a) => {
//         console.log(
//             e.getElementsByTagName('label')[0]
//                 .getElementsByTagName('p')[0].textContent);
//     }
// );

const updateList = (newTask, tasksLists) => {
    // update the list with the new task
};

const removeTask = (task, tasksLists) => {
    // remove the task from the list
};

const editTask = (task, tasksLists) => {
    // edit the task
};

// const taskList = ['Buy present', 'book dentist', 'send email', 'update ...']

// let newTask = 'go to supermarket';

// taskList.push(newTask);

