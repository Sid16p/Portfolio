// Simple contact form validation (front-end only)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    });
  }
});