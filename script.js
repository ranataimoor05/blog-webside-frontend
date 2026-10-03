// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle Newsletter Subscription Form
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You are now in the loop.`);
            this.reset();
        });
    }

    // Handle Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            alert("Thank you for reaching out! Your message has been sent successfully.");
            this.reset();
        });
    }
});