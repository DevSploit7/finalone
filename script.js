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
        location: "Panchkula Extension",
        beds: 4,
        baths: "4 + Servant Room",
        sqft: 3207,
        description: "Experience luxury living where the hills meet high-end design. These premium builder floors are crafted for families that seek privacy, space, and access to nature — without compromising on urban convenience.",
        image: "public/images/tridenthills/township from above.jpeg",
        highlights: [
            "Spacious 4 BHK Residences + Servant Room with Separate Entry",
            "3207 sq. ft. Super Area with Grand Layouts & Premium Interiors",
            "5-Star Clubhouse Facilities with Resort-Style Swimming Pools",
            "Fully Gated Township with 24x7 Security, CCTV & Manned Entry Points",
            "Surrounded by Nature – Lush Green Trails, Water Bodies & a Nearby Dam",
        ],
        amenities: [
            "Designer Modular Kitchen",
            "Wide Balconies with Green Views",
            "Air-Conditioned Lobbies",
            "Private Parking",
            "Power Backup",
            "Landscaped Parks & Jogging Tracks",
        ]
    },
    {
        id: 2,
        title: "DLF Valley Garden",
        type: "For Sale",
        price: "Call for price",
        location: "Panchkula Extension",
        beds: 4,
        baths: "4 + Servant Room",
        sqft: 3207,
        description: "Whether it’s a morning walk by the nearby dam and water body, or a weekend drive to Kasauli, this is the perfect home for elevated lifestyles.",
        image: "public/images/dlfvalleygardens/Dlf complex.webp",
        highlights: [
            "Ideal for Kids & Families: Walking Trails, Cycling Paths, & Nature Parks",
            "Located in the Foothills of the Shivalik Range, Minutes from Kasauli",
            "Part of Integrated Smart Townships – DLF & Trident Hills",
            "Near Kasauli, Morni Hills, and other hill stations",
            "Easy access to Chandigarh, Zirakpur, & NH-22",
        ],
        amenities: [
            "Designer Modular Kitchen",
            "Wide Balconies with Green Views",
            "Air-Conditioned Lobbies",
            "Private Parking",
            "Power Backup",
            "Landscaped Parks & Jogging Tracks",
        ]
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
