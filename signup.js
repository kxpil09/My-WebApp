document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = signupForm.querySelector('#name').value;
      const email = signupForm.querySelector('#email').value;
      const password = signupForm.querySelector('#password').value;
  
      // Store user data in local storage
      const userData = {
        name,
        email,
        password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Account created successfully! You can now log in.');
      window.location.href = 'index.html';
    });
  });
  