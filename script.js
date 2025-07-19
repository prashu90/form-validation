const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    let valid = true;

    
    if (username.value.trim() === '') {
        setError(username, 'usernameerror', 'Username is required');
        valid = false;
    } else {
        setSuccess('usernameerror');
    }

    
    if (email.value.trim() === '') {
        setError(email, 'mailerror', 'Email is required');
        valid = false;
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, 'mailerror', 'Enter a valid email');
        valid = false;
    } else {
        setSuccess('mailerror');
    }

    
    if (password1.value === '') {
        setError(password1, 'pass1error', 'Password is required');
        valid = false;
    } else if (password1.value.length < 6) {
        setError(password1, 'pass1error', 'Password must be at least 6 characters');
        valid = false;
    } else {
        setSuccess('pass1error');
    }

    
    if (password2.value === '') {
        setError(password2, 'pass2error', 'Please confirm your password');
        valid = false;
    } else if (password2.value !== password1.value) {
        setError(password2, 'pass2error', 'Passwords do not match');
        valid = false;
    } else {
        setSuccess('pass2error');
    }

    
    e.preventDefault();
    if (valid) {
        
        const details = `Registration Successful!\n\nUsername: ${username.value}\nEmail: ${email.value}`;
        alert(details);
        form.reset();
        setSuccess('usernameerror');
        setSuccess('mailerror');
        setSuccess('pass1error');
        setSuccess('pass2error');
    }
    }
);


function setError(input, errorClass, message) {
    const errorDiv = input.parentElement.querySelector('.' + errorClass);
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    input.classList.remove('success');
    input.classList.add('error');
}

function setSuccess(errorClass) {
    
    let input;
    if (errorClass === 'usernameerror') input = document.getElementById('username');
    else if (errorClass === 'mailerror') input = document.getElementById('email');
    else if (errorClass === 'pass1error') input = document.getElementById('password1');
    else if (errorClass === 'pass2error') input = document.getElementById('password2');
    const errorDiv = document.querySelector('.' + errorClass);
    if (errorDiv) errorDiv.textContent = '';
    if (input) {
        input.classList.remove('error');
        input.classList.add('success');
    }
}

function isValidEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}