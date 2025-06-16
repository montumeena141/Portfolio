// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger toggle
    const navToggle = document.querySelector('.nav-toggle');
    const secondNav = document.querySelector('.secondNav');
    navToggle.addEventListener('click', function() {
        secondNav.classList.toggle('open');
    });
});