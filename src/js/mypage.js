"use strict"

const url = 'https://emad2301-backend-moment4.onrender.com';

window.onload = init;

function init() {
    if(!localStorage.getItem('token')) {
        window.location.href = 'login.html';
    }

    contactApi();
}

async function contactApi() {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Fetch to protected route
    try {
        const response = await fetch(url + '/api/protected', {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        });
        const data = await response.json();

        document.getElementById('message').innerHTML = data.message;
    } catch (error) {
        console.log(error);
    }
}