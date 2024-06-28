// Display welcome message with username
window.onload = function () {
    
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username} | ${password}`;
    } else {
        // If no username found, redirect back to login
        window.location.href = 'index.html';
    }
};

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', function () {
    // Perform logout logic here if necessary (e.g., clearing session data)
    localStorage.removeItem('username'); // Remove username from localStorage
    window.location.href = 'index.html';  // Redirect back to the login form
});
