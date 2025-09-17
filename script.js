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
document.addEventListener('DOMContentLoaded', function() {
    // Resume file input name display
    const resumeInput = document.getElementById('resume');
    if (resumeInput) {
        resumeInput.addEventListener('change', function(e) {
            const fileNameDisplay = document.getElementById('file-name');
            if (e.target.files.length > 0) {
                fileNameDisplay.textContent = e.target.files[0].name;
            } else {
                fileNameDisplay.textContent = 'No file selected';
            }
        });
    }

    // "Apply Now" button functionality
    const applyButtons = document.querySelectorAll('.apply-now-btn');
    const positionDropdown = document.getElementById('position');
    const applicationForm = document.getElementById('application-form');

    if (applyButtons.length > 0 && positionDropdown && applicationForm) {
        applyButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get the job title from the button's data attribute
                const jobTitle = this.dataset.job;

                // Set the dropdown value to match the job title
                positionDropdown.value = jobTitle;

                // Scroll to the application form
                applicationForm.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});