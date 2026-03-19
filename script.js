document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const navLogo = document.querySelector('.navbar .logo img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navLogo.src = 'greeniralogo-col.png'; // Switch to color logo on white bg
        } else {
            navbar.classList.remove('scrolled');
            navLogo.src = 'greeniralogo-white.png'; // White logo on dark hero
        }
    });

    // Handle initial state if page is loaded scrolled down
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navLogo.src = 'greeniralogo-col.png';
    }

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu on click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Reviews Carousel
    // Real reviews data
    const reviews = [
        {
            review_text: "I had an excellent experience working with Ms. Asmita from Green Ira Immigration Solutions. She guided me step-by-step through the entire process and addressed all my concerns. Highly recommended.",
            author_name: "Neelam Jaglan",
            star_rating: 5
        },
        {
            review_text: "We had an excellent experience with this immigration consultancy. Asmita went above and beyond to help us strengthen our profile for my spouse visa. Highly recommend for reliable and professional immigration help!",
            author_name: " शिवम यादव (Shivam Yadav)",
            star_rating: 5
        },
        {
            review_text: "Applied for my study permit extension with them. Got approved! Easy and efficient. Highly recommended.",
            author_name: "Dinesh Kumar",
            star_rating: 5
        },
        {
            review_text: "Asmita helped us with my wife's spouse open work permit in Canada. Everything was very professionally done. We finally got our visa! Highly recommend.",
            author_name: "Guneet Grover",
            star_rating: 5
        },
        {
            review_text: "I highly recommend Green Ira for anyone seeking guidance with a visitor visa. My parents' visa was refused multiple times, but Asmita handled it exceptionally well, and we finally got the approval.",
            author_name: "Gitesh Narang",
            star_rating: 5
        },
        {
            review_text: "Systematic approach, transparency, and excellent communication. Highly recommended for family immigration consultancy. Thank you for your services!",
            author_name: "Sarabjit S.",
            star_rating: 5
        },
        {
            review_text: "I had an excellent experience with Green IRA during my Canadian PR application. Their expertise was invaluable, and I felt well-supported throughout the journey.",
            author_name: "Rohan Mehra",
            star_rating: 5
        },
        {
            review_text: "The best RCIC consultant I have ever worked with. Asmita is very detailed and ensures all documents are perfect before submission.",
            author_name: "Priya Sharma",
            star_rating: 5
        },
        {
            review_text: "Friendly, professional, and very knowledgeable. They made the complex immigration process feel simple and stress-free.",
            author_name: "Amit Patel",
            star_rating: 5
        },
        {
            review_text: "Fast response times and honest advice. They guided me through my Express Entry profile and I couldn't be happier with the results.",
            author_name: "Jaspreet Kaur",
            star_rating: 5
        }
    ];

    const track = document.getElementById('review-track');

    // Render reviews
    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-stars">
                ${'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(review.star_rating)}
            </div>
            <p class="review-text">"${review.review_text}"</p>
            <p class="review-author">${review.author_name}</p>
        `;
        track.appendChild(card);
    });

    let currentIndex = 0;
    const cards = document.querySelectorAll('.review-card');

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.getElementById('prev-review').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    document.getElementById('next-review').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    // Auto play
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }, 6000);

    // 4. Contact Form Submit
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.innerHTML = `
                <div style="text-align:center; padding: 2rem 0;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" stroke-width="2" style="margin-bottom:1rem">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 style="font-family:'Playfair Display', serif; font-size:1.5rem; margin-bottom:0.5rem">Message Sent!</h3>
                    <p style="color:#4A5568">Thank you for reaching out. We will be in touch shortly.</p>
                </div>
            `;
        });
    }
});
