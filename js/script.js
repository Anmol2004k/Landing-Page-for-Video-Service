// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// File Upload Preview
const fileUpload = document.querySelector('#file-upload');
const fileUploadLabel = document.querySelector('.file-upload');

fileUpload.addEventListener('change', (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        fileUploadLabel.innerHTML = `<i class="fas fa-check"></i> ${files.length} file(s) selected`;
    } else {
        fileUploadLabel.innerHTML = `<i class="fas fa-cloud-upload-alt"></i> Upload Files (Optional)`;
    }
});

// Portfolio Item Click Handler
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        // Here you would typically open a modal or navigate to a project page
        console.log('Portfolio item clicked:', item.querySelector('h3').textContent);
    });
});

// Testimonial Slider (Simple Version)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize testimonial display
showTestimonial(currentTestimonial);

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('btn-schedule')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            // Simulate loading (remove in production)
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 1000);
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}); 