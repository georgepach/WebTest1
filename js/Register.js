const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    resetErrors();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const age = document.querySelector('input[type="number"]').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;

    if (username === "") {
        showError("username", "Username cannot be empty");
        isValid = false;
    } else if (username.length < 5) {
        showError("username", "Username must be at least 5 characters");
        isValid = false;
    } else if (!isAlphaNum(username)) {
        showError("username", "Username must contain both letters and numbers");
        isValid = false;
    }

    if (email === "") {
        showError("email", "Email cannot be empty");
        isValid = false;
    } else if (!email.endsWith('@gmail.com')) {
        showError("email", "Email must end with @gmail.com");
        isValid = false;
    }


    if (password.length < 6) {
        showError("password", "Password must be at least 6 characters");
        isValid = false;
    }





    if (age === "") {
        showError("Age", "Age cannot be empty");
        isValid = false;
    } else if (isNaN(age) || age <= 0) {
        showError("Age", "Age must be a positive number");
        isValid = false;
    }


    if (!gender) {
        showError("gender", "Please select a gender");
        isValid = false;
    }


    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        form.reset();
    }
});


function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}


function resetErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(el => {
        el.textContent = "";
        el.style.display = "none";
    });
    document.getElementById("successMessage").style.display = 'none';
}

function isAlphaNum(str) {
    let hasLetter = /[a-zA-Z]/.test(str);
    let hasNumber = /[0-9]/.test(str);
    return hasLetter && hasNumber;
}
