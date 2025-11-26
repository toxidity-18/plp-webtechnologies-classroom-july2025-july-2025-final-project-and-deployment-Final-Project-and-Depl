// js/app.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Open/Closed Status Checker
    // Shop Hours: 7am (7) to 6pm (18)
    const statusText = document.getElementById('shop-status');
    
    if (statusText) {
        const hour = new Date().getHours();
        
        if (hour >= 7 && hour < 18) {
            statusText.textContent = "We are currently OPEN ☕";
            statusText.style.color = "green";
        } else {
            statusText.textContent = "We are currently CLOSED 🌙";
            statusText.style.color = "red";
        }
    }

    // 3. Loyalty Form Handler
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            alert(`Welcome to the club, ${email}! Your first coffee is on us.`);
            joinForm.reset();
        });
    }
});