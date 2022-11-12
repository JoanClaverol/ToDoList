//const taskInput = document.querySelector('.input-task-input');
//const clearAll = document.querySelector('.clear-btn');
const taskTemplate = ``

let taskList = [...document.getElementsByClassName('task')].forEach(
    (e, i, a) => {
        console.log(
            e.getElementsByTagName('label')[0].getElementsByTagName('p')[0]);
    }
);