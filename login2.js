
document.querySelector('#button').addEventListener('click', (e) => { window.location.href = 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjdwti9kMT7AhVeQfEDHVhLB_4QPAg';
});



const button = document.getElementById('button')

console.log(button);

button.addEventListener('click', (e) => {
   // e.preventDefault()
    const userEmail = document.getElementById('email').value
    const password = document.getElementById('pass').value
    console.log(userEmail);
    console.log(password);

    const user = {
        email: userEmail,
        password: password,
    }
    console.log(user);
});

// function myFunction(){
// getElementById("email").required; 
// document.getElementById().innerHTML = x;
// }



