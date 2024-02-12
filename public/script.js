// app.js (Client-side JavaScript)

const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to register');
        }
        return response.json();
    })
    .then(data => {
        console.log('Registration successful:', data);
        // Optionally, you can redirect the user or perform other actions
    })
    .catch(error => {
        console.error('Registration error:', error.message);
    });
});

const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const containsCapital = /[A-Z]/.test(password);
    const containsNumber = /\d/.test(password);
    const containsSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLengthValid = password.length >= 8;

    if (containsCapital) {
        message.textContent = 'Password is valid';
        message.style.color="green"
        setTimeout(function() {
            message.style.display="none";
        }, 1000);
    } else {
        message.textContent = 'Password must contain at least one capital letter';
        message.style.color="red"
        message.style.display="block";
    }
    if (containsNumber) {
        message1.textContent = 'Password is valid';
        message1.style.color="green"
        setTimeout(function() {
            message1.style.display="none";
        }, 1000);
    } else {
        message1.textContent = 'Password must contain at least one numerical value';
        message1.style.color="red" 
        message1.style.display="block";

    }
    if(containsSpecialCharacter){
      message2.textContent ="password is valid";
      message2.style.color="green";
      setTimeout(function() {
        message2.style.display="none";
    }, 1000);
    }
    else{
      message2.textContent ="Password Contains Atleast one special Characters"
      message2.style.color="red"
      message2.style.display="block";
    }
    if(isLengthValid){
      message3.textContent="password is valid";
      message3.style.color="green"
      setTimeout(function() {
        message3.style.display="none";
    }, 1000);
    }
    else{
      message3.textContent="password contains minimum length of 8"
      message3.style.color="red"
      message3.style.display="block";
    }
});