function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    let isValid = true;
  
    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';
  
    // Validate username
    if (username.length < 3) {
      usernameError.textContent = 'Username must be at least 3 characters long.';
      isValid = false;
    }
  
    // Validate password
    if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      isValid = false;
    }
  
    // If valid, store username and redirect to main page
    if (isValid) {
      localStorage.setItem('username', username); // Store username in localStorage
      localStorage.setItem('password', password); // Store password in localStorage
      window.location.href = 'main.html';
    }
  
    return isValid;
  }
  