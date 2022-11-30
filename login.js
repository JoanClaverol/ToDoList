const myInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  const numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//LOGIN Button
const inputEmail = document.getElementById('#email');
const inputPassword = document.getElementById('#password');
const button = document.getElementById('#submit-btn');
const regEx = /\S+@\S+\.\S+/; // string, white-space, @ , white-space, dot, white-space, value, string //
const form = document.getElementById('#form');

function validateForm(){
    if (regEx.test(inputEmail.value) !== "" && inputPassword.value !== ""){
       button.style.backgroundColor = '4b8aa7';
       button.disabled = false;
    } else {
       button.style.backgroundColor = '#c5dce7';
       button.disabled = true;
    }
}
button.addEventListener('click', function(event){
    //event.preventDefault();
    function(event) {
        window.location.pathname="login.html";
     }
})