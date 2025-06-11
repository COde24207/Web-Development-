const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const humanCheck = document.getElementById('human-check').checked;

    if (username === '' || password === '') {
        alert('Please fill in both username and password');
        return;
    }

    if (!humanCheck) {
        alert('Please check the I\'m human checkbox');
        return;
    }

    // Send a POST request to your server to verify the credentials
    // For demonstration purposes, we'll just alert the username and password
    alert(`Username: ${username}, Password: ${password}`);
});