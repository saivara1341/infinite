document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggle.innerHTML = '&#9788;';
    } else {
        themeToggle.innerHTML = '&#9728;';
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeToggle.innerHTML = '&#9788;';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '&#9728;';
            localStorage.setItem('theme', 'dark');
        }
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'sahiti' && password === '6301240468') {
                window.location.href = 'landing.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
});
