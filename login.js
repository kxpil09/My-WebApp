document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;

    // Retrieve stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && email === storedUserData.email && password === storedUserData.password) {
      alert(`Welcome back, ${storedUserData.name}!`);
      window.location.href = 'subscription.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
});
