const taskLi = document.querySelectorAll(".task");
const paragraphEdit = document.querySelectorAll(".paragraph-edit");
const taskInput = document.querySelector('.input-task-input');

// FUNCTIONS TO DELETE THE TASKS START
const removeTask = (el) => {
    el.target.parentNode.parentNode.parentNode.remove();
};
function deletTaskEvent() {
    const deleteTask = document.querySelectorAll(".delete-li");
    deleteTask.forEach(deleteButton => {
        deleteButton.addEventListener("click", (el) => {
            removeTask(el);
        })
    })
};
// FUNCTIONS TO DELETE THE TASKS END

// FUNCTIONS TO EDIT THE TASKS START
const editTask = (edit) => {
    console.log("edit task click working");
    const parentElement = edit.target.parentNode.parentNode.parentNode;
    const valueInput = parentElement.querySelector('p').innerText;
    console.log(valueInput);
    parentElement.innerHTML = `
        <label>
            <input class="checkbox" type="checkbox">
            <input id="newInputValue" type='text' value='${valueInput}'>
        </label>
        <div class="settings">
            <i class="uil uil-ellipsis-h"></i>
            <ul class="task-menu">
                <li class="edit-li"><i class="uil uil-pen"></i>Edit</li>
                <li class="delete-li"><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    `;
    localStorage.removeItem('task');
    parentElement.addEventListener('keypress', (edit) => {
        const newValue = parentElement.querySelector('#newInputValue').value;
        if (edit.key === 'Enter') {
            parentElement.innerHTML = `
                <label>
                    <input class="checkbox" type="checkbox">
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
            movingCompletedTaskToCompletedUl();
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
// FUNCTIONS TO EDIT THE TASKS END

// FUNCTIONS FOR CREATING THE TASK START
taskInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (taskInput.value) {
                updateTasks();
                taskInput.value = '';
                // DELETE FUNCTION LISTENER
                deletTaskEvent();
                // EDIT FUNCTION LISTENER
                editTaskEvent();
                // CHECKED FUNCTION
                movingCompletedTaskToCompletedUl();
                // LISTS
                selectingTheList();
                // CLEAR BUTTONS
                //clearAllTasksButton();
            }
        }
    }
);
const generateTask = (taskName) => {
    const task = document.createElement('li');

    task.innerHTML = `
        <label>
            <input class="checkbox" type="checkbox">
            <p>${taskName}</p>
            <div id="status" style="display: none;">Pending</div>
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
    taskParagraph = task.querySelector('p');
    return task;
};
const updateTasks = () => {

    const task = generateTask(taskInput.value);
    const taskList = document.querySelector('.task-box');
    taskList.appendChild(task);

};
// FUNCTIONS FOR CREATING THE TASK END

// FUNCTION TO CHECK THE TASK AS DONE START
function movingCompletedTaskToCompletedUl(){
    const checkboxes = document.querySelectorAll('.checkbox');
    const pendingUl = document.querySelector('.pending')
    const completedUl = document.querySelector('.completed');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (checkbox.checked) {
            //   console.log("Checkbox is checked..");
                completedUl.appendChild(event.target.parentNode.parentNode);
            } else {
            //   console.log("Checkbox is not checked..");
              pendingUl.appendChild(event.target.parentNode.parentNode);
            }
          });
    })
    
}
// FUNCTION TO CHECK THE TASK AS DONE END

//ADDING FUNCTIONALITY TO PENDING/COMPLETED BUTTONS START
function selectingTheList() {
    const pendingList = document.querySelector('.pending');
    const pendingFilter = document.querySelector('#pending');
    const completedList = document.querySelector('.completed');
    const completedFilter = document.querySelector('#completed');
    const allFilter = document.querySelector('#all'); 
    const buttonClearTasks = document.querySelector('.clear-tasks');

    pendingFilter.addEventListener('click', () => {
        completedList.style.display = 'none';
        pendingList.style.display = 'block';
    });

    completedFilter.addEventListener('click', () => {
        console.log('Filter completed works');
        pendingList.style.display = 'none';
        completedList.style.display = 'block';
    });

    allFilter.addEventListener('click', () => {
        console.log('Filter all works');
        completedList.style.display = 'block';
        pendingList.style.display = 'block';
    });
};

// ADDING FUNCTIONALITY TO PENDING/COMPLETED BUTTONS END

//SELECTED STYLE FOR ACTIVE TABS - start
function activeTab() {

    const tabButton = document.querySelectorAll('.filters span');
    
    function siblings(elem) {
        const nodes = [...elem.parentNode.children];
        return nodes.filter(node => node !== elem)
    }

    tabButton.forEach(el => {
        el.addEventListener('click', function() {
            this.classList.add('active');
            siblings(this).forEach(node => {
                node.classList.remove('active')
            
            })  
        })
    })
}

activeTab();
//SELECTED STYLE FOR ACTIVE TABS - finish

//CLEAR BUTTON FUNCTION - start
function deleteTasks(){
    const deleteButton = document.querySelector('.clear-btn');
    const all = document.querySelector('#all');
    const pending = document.querySelector('#pending');
    const completed = document.querySelector('#completed');

    deleteButton.addEventListener('click', function() {

        if (all.classList.contains("active")) {
            const allTasks = document.querySelectorAll('.task');
            allTasks.forEach(task => {
                task.remove();
            })
        }

        if (pending.classList.contains("active")) {
            const pendingTasks = document.querySelector('.pending').querySelectorAll('.task');
            pendingTasks.forEach(task => {
                task.remove();
            })
        }

        if (completed.classList.contains("active")) {
            const completedTasks = document.querySelector('.completed').querySelectorAll('.task');
            completedTasks.forEach(task => {
                task.remove();
            })

        }
    });
}

deleteTasks();
//CLEAR BUTTON FUNCTION - finish
