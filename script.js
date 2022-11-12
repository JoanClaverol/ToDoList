//const taskInput = document.querySelector('.input-task-input');
//const clearAll = document.querySelector('.clear-btn');

/*clock*/
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}