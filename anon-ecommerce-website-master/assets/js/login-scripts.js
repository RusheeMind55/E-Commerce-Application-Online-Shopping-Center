document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    // Store details in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('address', address);
    localStorage.setItem('password', password);

    // Redirect to profile page or index.html
    window.location.href = 'index.html';
});