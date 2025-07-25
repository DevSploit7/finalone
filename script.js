// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Lead Capture Modal
const leadModal = document.getElementById('lead-modal');
const closeModalBtn = document.getElementById('close-modal');
const leadForm = document.getElementById('lead-form');

// Show modal on page load
window.addEventListener('load', () => {
    if (!sessionStorage.getItem('modalShown')) {
        setTimeout(() => {
            leadModal.classList.remove('hidden');
        }, 2000);
    }
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    leadModal.classList.add('hidden');
    sessionStorage.setItem('modalShown', 'true');
});

leadModal.addEventListener('click', (e) => {
    if (e.target === leadModal) {
        leadModal.classList.add('hidden');
        sessionStorage.setItem('modalShown', 'true');
    }
});

// Handle lead form submission
leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    leadModal.classList.add('hidden');
    sessionStorage.setItem('modalShown', 'true');
    leadForm.reset();
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Sample property data (would normally come from an API)
const properties = [
    {
        id: 1,
        title: "Property",
        type: "For Sale",
        price: "INR450,000",
        location: "123 Park Ave, Springfield",
        beds: 4,
        baths: 3,
        sqft: 2400,
        description: "Beautiful modern home with open floor plan, gourmet kitchen, and spacious backyard.",
        image: "https://picsum.photos/600/400?random=3"
    },
    {
        id: 2,
        title: "Property ",
        type: "For Rent",
        price: "$2,800/mo",
        location: "456 Main St, Springfield",
        beds: 2,
        baths: 2,
        sqft: 1200,
        description: "Stunning downtown condo with panoramic city views and premium amenities.",
        image: "https://picsum.photos/600/400?random=4"
    },
    {
        id: 3,
        title: "Property",
        type: "For Sale",
        price: "$325,000",
        location: "789 Oak Lane, Springfield",
        beds: 3,
        baths: 2.5,
        sqft: 1800,
        description: "Charming townhouse in family-friendly neighborhood with community pool.",
        image: "https://picsum.photos/600/400?random=5"
    }
];

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        name: "Client 1",
        role: "Home Buyer",
        rating: 5,
        content: "Sarah made the home buying process so easy. She was patient, knowledgeable, and always available to answer our questions. We found our dream home thanks to her!",
        image: "https://picsum.photos/100?random=6"
    },
    {
        id: 2,
        name: "client 2",
        role: "Home Seller",
        rating: 5,
        content: "We got multiple offers above asking price within days of listing our home with Sarah. Her marketing strategy and negotiation skills are top-notch!",
        image: "https://picsum.photos/100?random=7"
    },
    {
        id: 3,
        name: "Client 3",
        role: "First-Time Buyers",
        rating: 5,
        content: "As first-time home buyers, we were nervous about the process. Sarah guided us every step of the way and found us a perfect starter home in our budget.",
        image: "https://picsum.photos/100?random=8"
    }
];
