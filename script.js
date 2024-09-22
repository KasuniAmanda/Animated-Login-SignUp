const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting

  // email validation
  if (!isValidEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if password is at least 8 characters long
  if (password.value.length < 8) {
    alert('Please enter a password that is at least 8 characters long.');
    return;
  }

  // If everything is valid, submit the form
  form.submit();
});

function isValidEmail(email) {
  // This is a email validation using regex methode
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
