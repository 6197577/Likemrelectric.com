document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        mainNav.classList.toggle('active');

        // Toggle ARIA expanded attribute for accessibility
        const isExpanded = mainNav.classList.contains('active');
        mobileNavToggle.setAttribute('aria-expanded', isExpanded);
    });
});