function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar'); // Select the navbar
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide links
    navbar.classList.toggle('hidden'); // Toggle the hidden class to hide/show navbar

    // Close the navbar when clicking outside of the menu links
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !document.querySelector('.mobile-menu-icon').contains(event.target)) {
            navLinks.classList.remove('active'); // Hide nav links
            navbar.classList.remove('hidden'); // Show navbar
        }
    });
}

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
