//const taskInput = document.querySelector('.input-task-input');
//const clearAll = document.querySelector('.clear-btn');

/*clock*/
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}


/* PUSH FUNCTION: This method adds items to the end of an array and changes the original array. */
let taskList = ['Buy present for Hannah',
 'Book dentist appointment','Send Email to nursery' , 'Update address on driving license' , 'cancel gym membership'];
taskList.push('Soccer practice today at 14:00',);
console.log(taskList); 

 /*splice : it returns the array with the item(s) removed and removes it from the original array. */

 let taskList = ['Buy present for Hannah', 'Book dentist appointment', 'Send Email to nursery' , 'Update address on driving license' , 'cancel gym membership'];
 TaskList.splice(3);
 console.log(TaskList)


 /*    */

 const taskList = ['Buy present for Hannah', 'Book dentist appointment', 'Send Email to nursery' , 'Update address on driving license' , 'cancel gym membership'];

 taskList.forEach((Element)=> console.log(elemts));
