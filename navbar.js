document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const authLinks = document.querySelector('.auth-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authLinks.classList.toggle('active');
    });
}); 