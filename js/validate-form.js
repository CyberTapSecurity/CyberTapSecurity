// CyberTapSecurity - validate-form.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Function to validate email using a simple regex pattern
    const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    };
  
    // Function to validate the form inputs
    const validateForm = () => {
      const emailInput = form.querySelector('input[type="email"]');
      const messageInput = form.querySelector('textarea');
  
      let valid = true;
      // Check if email is valid
      if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        valid = false;
      } else {
        emailInput.classList.remove('error');
      }
  
      // Check if message input is empty
      if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        valid = false;
      } else {
        messageInput.classList.remove('error');
      }
  
      return valid;
    };
  
    // On form submission, validate inputs
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (validateForm()) {
        form.submit(); // Submit the form if validation passes
      } else {
        alert('Please fill out all fields correctly.');
      }
    });
  });