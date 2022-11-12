const tasksList = ['Buy present for Hannah', 'Book dentist appointment', 'Send email to nursery', 'Update address on driving license', 'Cancel gym membership']
const addNewTaskInput = document.getElementById("input-task-input");
const deleteTask = document.querySelectorAll(".delete-li");
const editTaskButton = document.querySelectorAll(".edit-li");
const checkBoxDone = document.querySelectorAll(".checkboxes");
const taskLi = document.querySelectorAll(".task");
const paragraphEdit = document.querySelectorAll(".paragraph-edit");

// adding tasks to the list
const updateList = () => {
    let colectedValue = addNewTaskInput.value;
    tasksList.push(colectedValue)
};
addNewTaskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        console.log('CLICK OK');
        updateList(e);
    }
  });

// removing tasks form the list with delete button
const removeTask = (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
};
for (let index = 0; index < deleteTask.length; index++) {
    const element = deleteTask[index];
    element.addEventListener("click", (e) => {
        removeTask(e);
    })
}

// editing tasks
const editTask = (e) => {
    console.log("edit task click working");
    const parentElement = e.target.parentNode.parentNode.parentNode;
     console.log(parentElement.querySelector("p"));
};
for (let index = 0; index < editTaskButton.length; index++) {
    const element = editTaskButton[index];
    element.addEventListener("click", (e) => {
        editTask(e);
    })
}
