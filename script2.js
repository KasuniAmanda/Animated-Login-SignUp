const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelectorAll('input[type="password"]')[0];
const confirmPassword = document.querySelectorAll('input[type="password"]')[1];

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting

  // email validation
  if (!isValidEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check password is at least 8 characters long
  if (password.value.length < 8) {
    alert('Please enter a password that is at least 8 characters long.');
    return;
  }

  // Check matching password and confirm password 
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match. Please re-enter your password.');
    return;
  }

  form.submit();
});

function isValidEmail(email) {
  // simple email validation using regex method
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}