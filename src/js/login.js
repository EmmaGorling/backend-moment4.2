"use strict"

const errorDiv = document.getElementById('error');
const url = 'https://emad2301-backend-moment4.onrender.com'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Hindrar att formuläret skickas traditionellt
        loginUser();
    })
});

// Function for logging in with fetch-POST
async function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        email: email,
        password: password
    }

    try {
        // Send login prefernces to API
        const response = await fetch(url + '/api/login', {
            method: 'POST',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if(response.ok) {
            // Get token from answer
            const token = data.response.token;
        } 
        
    } catch (error) {
        console.log(error);
        
    }
    
}