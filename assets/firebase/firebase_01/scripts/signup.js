import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js"

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const retypePassword = document.getElementById("retype-password")

// sign up via email
form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (password.value === retypePassword.value) {   
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