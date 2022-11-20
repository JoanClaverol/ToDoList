
  const form = document.querySelector("form");
  emailField = form.querySelector(".email");
  emailInput = emailField.querySelector("input");
  passwordField = form.querySelector(".password");
  passwordInput = passwordField.querySelector('input');

  form.onsubmit = (e) => {
    e.preventDefault();
    if(emailInput.value == "") {
        alert("Please fill username");
    }
    if(passwordInput.value == "") {
        alert("Please fill password");
  }
  }

  //document.addEventListener("submit", (e) => {
   // e.preventDefault();

  //}
    