import { validate } from "./function.js";

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repassword = document.getElementById('repassword');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validate(username, password, email, repassword)){
        const user = {
            username: username.value,
            password: password.value,
            email: email.value,
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
})