// scripts.js

// Create an Intersection Observer to detect when each section is in view
const sections = document.querySelectorAll('.fade-scroll');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class to trigger fade-in and slide-up
            entry.target.classList.add('fade-in-view');
            observer.unobserve(entry.target); // Stop observing after it's animated
        }
    });
}, {
    threshold: 0.5  // Trigger the animation when 50% of the section is in view
});

// Observe all sections with the fade-scroll class
sections.forEach(section => {
    observer.observe(section);
});
