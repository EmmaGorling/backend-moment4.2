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
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');

    // Remove tags if there are any
    const email = emailInput.value.replace(/(<([^>]+)>)/ig, '');
    const password = passwordInput.value.replace(/(<([^>]+)>)/ig, '');
    const firstname = firstnameInput.value.replace(/(<([^>]+)>)/ig, '');
    const lastname = lastnameInput.value.replace(/(<([^>]+)>)/ig, '');

    const user = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
    }

    if( email.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0) {
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
                emailInput.value = '';
                passwordInput.value = '';
                firstnameInput.value = '';
                lastnameInput.value = '';
            }
            console.log(response + data);
        } catch (error) {
            console.log(error);
            document.getElementById('message').innerHTML = 'Det verkar som att något gick fel...';
        }
    } else {
        document.getElementById('message').innerHTML = 'Vänligen fyll i alla fält.';
    }
}