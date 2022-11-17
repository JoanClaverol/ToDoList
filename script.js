const checkBoxDone = document.querySelectorAll(".checkboxes");
const taskLi = document.querySelectorAll(".task");
const paragraphEdit = document.querySelectorAll(".paragraph-edit");
const taskInput = document.querySelector('.input-task-input');


// removing tasks form the list with delete button
const removeTask = (el) => {
    el.target.parentNode.parentNode.parentNode.remove();
};
function deletTaskEvent (){
    const deleteTask = document.querySelectorAll(".delete-li");
    deleteTask.forEach(deleteButton => {
        deleteButton.addEventListener("click", (el) => {
            removeTask(el);
        })
    } )
};
// editing tasks
const editTask = (edit, el) => {
    console.log("edit task click working");
    const parentElement = edit.target.parentNode.parentNode.parentNode;
    const valueInput = parentElement.querySelector('p').innerHTML;
    parentElement.innerHTML = `
        <label>
            <input type="checkbox">
            <input id="newInputValue" type='text' value= ${valueInput}>
        </label>
        <div class="settings">
            <i class="uil uil-ellipsis-h"></i>
            <ul class="task-menu">
                <li class="edit-li"><i class="uil uil-pen"></i>Edit</li>
                <li class="delete-li"><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    `;
    parentElement.addEventListener('keypress', (edit) => {
        let newValue = parentElement.querySelector('#newInputValue').value;
            if (edit.key === 'Enter') {
                parentElement.innerHTML = `
                <label>
                    <input type="checkbox">
                    <p>${newValue}</p>
                </label>
                <div class="settings">
                    <i class="uil uil-ellipsis-h"></i>
                    <ul class="task-menu">
                        <li class="edit-li"><i class="uil uil-pen"></i>Edit</li>
                        <li class="delete-li"><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>`;
            }
            deletTaskEvent ();
            editTaskEvent ();
        })

    };
function editTaskEvent() {
    const editTaskButton = document.querySelectorAll(".edit-li");
    editTaskButton.forEach(editButton => {
        editButton.addEventListener("click", (edit) => {
            editTask(edit);
        })
    });
};


taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (taskInput.value) {
                console.log('ok');
                updateTasks();
                taskInput.value = '';
                // DELETE FUNCTION LISTENER
                deletTaskEvent();
                // EDIT FUNCTION LISTENER
                editTaskEvent();
            }
        }
    }
);

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
                <li class="edit-li"><i class="uil uil-pen"></i>Edit</li>
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

