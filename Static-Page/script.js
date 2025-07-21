console.log("started");

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Toggle theme (light/dark)
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
    });
  }

  // Change button text when clicked
  const actionBtn = document.getElementById('actionBtn');
  if (actionBtn) {
    actionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      actionBtn.textContent =
        actionBtn.textContent === 'Click Me' ? 'Clicked!' : 'Click Me';
    });
  }

  // Shrink navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.padding = window.scrollY > 50 ? '0.5rem 2rem' : '1rem 2rem';
    });
  }

  // Glass Button Background Toggle
  const glassBtn = document.getElementById('glassToggle');
  if (glassBtn) {
    glassBtn.addEventListener('click', () => {
      body.classList.toggle('bg-alt');
    });
  }
});

console.log("ended");
