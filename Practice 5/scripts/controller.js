function loginDatabase(email, password) {
    window.auth.login(email.value, password.value, (isValid, error, erroralert) => {
        if (isValid) {
            location.replace("./posts.html");
        } else {
            alert(erroralert);
        }
    })
}

function register(username, email, password) {
    window.auth.register(username.value, email.value, password.value, (isValid, error, erroralert) => {
        if (isValid) {
            location.replace("./posts.html");
        } else {
            alert(errorallert);
        }
    })
}

function validate() {
    var errors = document.getElementById("errors");
    var email = document.getElementsByName("email")[0];
    var username = document.getElementsByName("username")[0];
    var password = document.getElementsByName("password")[0];
	var at = email.value.lastIndexOf("@");
    var dot = email.value.lastIndexOf(".");

    if (!email.value) {
        errors.textContent = "You need to enter an email address";
        return;
    }

    if (!email.value.includes("@")) {
        errors.textContent = "Email should include @";
        return;
    }

    if (dot === -1 || dot <= at) {
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

    if (username === undefined || username === null) {
        alert("Successful login");
        loginDatabase(email, password);
    } else {
        alert("Successful registration");
        register(username, email, password);
    }
}

var submitButton = document.getElementById("button");
submitButton.addEventListener("click", validate);