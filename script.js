// Toggle mobile navigation menu visibility
const navToggle = document.querySelector('#nav-toggle'); // Assuming you add a button with id 'nav-toggle'
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });
}

// Example of an alert on button click
const contactButton = document.querySelector('#contact-button'); // Assuming you add a button with id 'contact-button'

if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert('Thank you for contacting us!');
    });
}

// Smooth scrolling effect for internal links
const scrollLinks = document.querySelectorAll('a[href^="#"]'); // Select all links that start with a '#'

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        const targetId = link.getAttribute('href').substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
