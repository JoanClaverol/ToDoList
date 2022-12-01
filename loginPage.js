const myInput = document.getElementById("password-signup");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const signUp = document.querySelector('.signUp');
const modal = document.querySelector('.modal');
const logInButton = document.querySelector('.log-in-button');

// USERS OBJECTS ARRAY
const users = [];

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

myInput.onkeyup = function () {

  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  }

  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  const numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  }

  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  }

  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
// PASSWORD VALIDATION MESSAGE - FINISH

// SIGN UP BUTTON AND ADDING NEW USER START
const validationArray = [letter, capital, number, length]
// 
signUp.addEventListener('click', () => {
  modal.style.display = 'flex';
});
const addUser = modal.querySelector('.submit-button');
addUser.addEventListener('click', (e) => {
  e.preventDefault();
  let modalEmail = modal.querySelector('.email-modal').value;
  let modalPassword = modal.querySelector('.password-modal').value;
  modal.style.display = 'none';
  let newUser = {
    email: modalEmail,
    password: modalPassword
  }
  users.push(newUser);
  console.log(users)
})
// SIGN UP BUTTON AND ADDING NEW USER - FINISH

// LOG IN BUTTON START
logInButton.addEventListener('click', function (e) {
  e.preventDefault();
  let emailLoginInput = document.querySelector('.email-login');
  let passwordLoginInput = document.querySelector('.password-login');
  let emailValue = emailLoginInput.value;
  let passwordValue = passwordLoginInput.value;
  users.forEach(user => {
    if (user.email === emailValue && user.password === passwordValue) {
      document.location.assign("./todolist.html");
      emailLoginInput.value = '';
    } else {
      alert('Please insert correct password and/or email.');
    }
  })
})
// LOG IN BUTTON - FINISH


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGIN BUTTON - START - !!NOT WORKING!!

// const inputEmail = document.getElementById('#email');
// const inputPassword = document.getElementById('#password');
// const buttonLogin = document.getElementById('submit-btn');
// const regEx = /\S+@\S+\.\S+/; // string, white-space, @ , white-space, dot, white-space, value, string //
// const form = document.getElementById('#form');

// function validateForm(){
//     if (regEx.test(inputEmail.value) !== "" && inputPassword.value !== ""){
//        button.style.backgroundColor = '4b8aa7';
//        button.disabled = false;
//        console.log('email ok');
//     } else {
//        button.style.backgroundColor = '#c5dce7';
//        button.disabled = true;
//        console.log('NOT okay');
//     }
// }

// buttonLogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     // function(e) {
//     //     window.location.pathname="login.html";
//     //  }

// })

// LOGIN BUTTON - FINISH

// class Users {
//   constructor(email, password) {
//     this.email = email,
//       this.password = password
//   }
// }

// signUpButton.addEventListener('click', signUpFunction)
// function signUpFunction() {
//   let email = prompt('Please type in your e-mail adress');
//   let password = prompt('Please set up your password');

//   alert(email);
//   // if(!email.contains('@.com')){
//   //   alert('Enter correct form for email');
//   //   return alert(email);
//   // }
//   alert(password);
//   // if (password.length < 5) {
//   //   alert('Password has to be longer than 4 caracters')
//   //   return alert(password);
//   // }
//   let newUser = {
//     email,
//     password
//   }
//   users.push(newUser);
//   // localStorage.setItem(JSON.stringify({email}), JSON.stringify({password}));
//   // localStorage.clear();
// }


//NO LONGER NEEDED
// When the user clicks outside of the password field, hide the message box
// myInput.onblur = function () {
//   document.getElementById("message").style.display = "none";
// }

// PASSWORD VALIDATION MESSAGE - START
// When the user starts to type something inside the password field