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

    if( email.value.length > 0 && password.value.length > 0 && firstname.value.length > 0 && lastname.value.length > 0) {
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

            if(response.ok) {
                document.getElementById('message').innerHTML = 'Användare skapad!';
                email.value = '';
                password.value = '';
                firstname.value = '';
                lastname.value = '';
            } else {
                document.getElementById('message').innerHTML = 'Det verkar som att något gick fel...';
            }
        } catch (error) {
            document.getElementById('message').innerHTML = 'Det verkar som att något gick fel...';
        }
    } else {
        document.getElementById('message').innerHTML = 'Vänligen fyll i alla fält.';
    }
}