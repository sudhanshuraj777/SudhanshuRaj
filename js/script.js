// script.js

// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form Validation for the contact form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (!name || !email || !message) {
    alert("All fields are required!");
  } else {
    alert("Message Sent! Thank you for reaching out.");
    form.reset();
  }
});

// Simple Animation on page load (Fade in)
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1s';
  document.body.style.opacity = 1;
});
