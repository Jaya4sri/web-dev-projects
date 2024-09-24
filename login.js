function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation (you can expand this)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return false;
    }

    // Simulating a login (replace this with actual authentication logic)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!'); // Simulate successful login
        return true; // Replace with actual redirection
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        return false;
    }
}
