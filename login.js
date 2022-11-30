const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector('.password');
const logInButton = document.getElementById('submit-btn');
const signUpButton = document.querySelector('.signUp');

class Users {
  constructor(email, password){
    this.email = email,
    this.password = password
  }
}



let users = [];

logInButton.addEventListener('click', function(e){
  e.preventDefault();
  console.log('radi');
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  users.forEach(user => {
    if(user.email === emailValue && user.password === passwordValue){
      document.location.assign("./index.html");
    }else{
      alert('Please insert correct password and/or email.');
    }
  })
})
signUpButton.addEventListener('click', signUpFunction)
function signUpFunction(){
  let email = prompt('Please type in your e-mail adress');
  let password = prompt('Please set up your password');
  
  alert(email);
  // if(!email.contains('@.com')){
  //   alert('Enter correct form for email');
  //   return alert(email);
  // }
  alert(password);
  // if (password.length < 5) {
  //   alert('Password has to be longer than 4 caracters')
  //   return alert(password);
  // }
  let newUser = {
    email,
    password
  }
  users.push(newUser);
  // localStorage.setItem(JSON.stringify({email}), JSON.stringify({password}));
  // localStorage.clear();
}
