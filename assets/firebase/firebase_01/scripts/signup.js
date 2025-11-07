import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js"

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

// sign up via email
form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (password.value === confirmPassword.value) {   
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location = "./../pages/signIn.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
    } else {
        alert("Password and confirm password should be same")
    }
})

const showPassword = document.getElementById("show-password")

showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
        showPassword.innerText = "🙈"
    }
    else {
        password.type = "password"
        showPassword.innerText = "🙉"

    }
})