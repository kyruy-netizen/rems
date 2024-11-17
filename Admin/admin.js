document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const userProfile = document.querySelector('.user-profile');
    const profileDropdown = document.querySelector('.profile-dropdown');
    const logoutBtn = document.querySelector('.logout');
    
    // Sidebar Toggle
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Profile Dropdown
    if (userProfile && profileDropdown) {
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            profileDropdown.classList.remove('show');
        });
    }

    // Logout Handler
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'login.html';
            }
        });
    }

    // Initialize Section Visibility
    initializeSections();
});

// Section Visibility Handler
function initializeSections() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.sidebar-menu a');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Update active state
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Show dashboard by default
    showSection('dashboard');
} 