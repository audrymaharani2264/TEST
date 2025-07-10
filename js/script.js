document.addEventListener('DOMContentLoaded', () => {
  // toggle menu for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // contact form validation
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formMsg.textContent = 'Please fill in all fields.';
        formMsg.style.color = 'red';
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        formMsg.textContent = 'Please enter a valid email.';
        formMsg.style.color = 'red';
        return;
      }

      formMsg.textContent = 'Message sent successfully!';
      formMsg.style.color = 'green';
      form.reset();
    });
  }
});
