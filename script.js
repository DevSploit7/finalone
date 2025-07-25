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
        title: "Trident Hills",
        type: "For Sale",
        price: "Call for price",
        location: "Panchkula, Haryana",
        beds: 3,
        baths: 3,
        sqft: 1750,
        description: "A beautiful home in a serene location with modern amenities.",
        image: "public/images/tridenthills/township from above.jpeg"
    },
    {
        id: 2,
        title: "DLF Valley Gardens",
        type: "For Sale",
        price: "Call for price",
        location: "Panchkula, Haryana",
        beds: 3,
        baths: 3,
        sqft: 1600,
        description: "A luxurious apartment with stunning views and world-class facilities.",
        image: "public/images/dlfvalleygardens/Dlf complex.webp"
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
