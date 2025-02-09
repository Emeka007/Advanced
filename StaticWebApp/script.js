// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return;
    }

    if (!email.value.trim() || !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }

    if (!message.value.trim()) {
        alert('Please enter a message.');
        message.focus();
        return;
    }

    alert(`Thank you, ${name.value}! I'll get back to you at ${email.value}.`);
    this.reset();
});


// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
});
// Mobile navigation toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});


// Active link highlighting in navigation
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
