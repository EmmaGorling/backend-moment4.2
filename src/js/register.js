"use strict"

const url = 'https://emad2301-backend-moment4.onrender.com';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        registerUser();
    });
});

async function registerUser() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');

    const user = {
        email: email.value,
        password: password.value,
        firstname: firstname.value,
        lastname: lastname.value
    }

    try {
        // Send register prefences to API
        const response = await fetch(url + '/api/register', {
            method: 'POST',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}