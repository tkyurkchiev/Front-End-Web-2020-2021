function loginDatabase(email, password) {
    window.auth.login(email.value, password.value, (isValid, errorCode, errorMessage) => {
        if (isValid) {
            location.replace("./posts.html");
        } else {
            alert(errorMessage);
        }
    })
}

function register(username, email, password) {
    window.auth.register(username.value, email.value, password.value, (isValid, errorCode, errorMessage) => {
        if (isValid) {
            location.replace("./posts.html");
        } else {
            alert(errorMessage);
        }
    })
}

function validate() {
    var errors = document.getElementById("errors");
    var email = document.getElementsByName("text")[0];
    var username = document.getElementsByName("username")[0];
    var password = document.getElementsByName("password")[0];

    if (!email.value) {
        errors.textContent = "You need to enter an email address";
        return;
    }

    if (!email.value.includes("@")) {
        errors.textContent = "Email should include @";
        return;
    }

    var lastIndexAt = email.value.lastIndexOf("@");
    var lastIndexDot = email.value.lastIndexOf(".");

    if (lastIndexDot === -1 || lastIndexDot <= lastIndexAt) {
        errors.textContent = "Email should include а .";
                return;
    }

    if (email.value.length < 5) {
        errors.textContent = "Email must be at least 5 characters long";
        return;
    }

    if (password.value.length < 6) {
        errors.textContent = "Password must be at least 6 characters long";
        return;
    }

    if (!password.value.match(/[A-Z]/)) {
        errors.textContent = "Password must contain at least one capital letter";
        return;
    }

    if (!password.value.match(/\d/)) {
        errors.textContent = "Password must contain at least one digit";
        return;
    }

    if (!password.value.match(/[!@#$%^&]/)) {
        errors.textContent = "Password must contain at least one of the characters !@#$%^&";
        return;
    }   

    if (username === null || username === undefined) {
        alert("Successful login");
        loginDatabase(email, password);
    } else {
        alert("Successful registration");
        register(username, email, password);
    }
}

var submitButton = document.getElementById("btn");
submitButton.addEventListener("click", validate);