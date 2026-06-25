// ============================================
// GLOBAL CONFIG
// ============================================

const APP = {
    reviewImages: [
        'S__10477571_0.jpg', 'S__10477572_0.jpg', 'S__10477573_0.jpg', 'S__10477574_0.jpg', 'S__10477575_0.jpg',
        'S__10477576_0.jpg', 'S__10477577_0.jpg', 'S__10477578_0.jpg', 'S__10477579_0.jpg', 'S__10477580_0.jpg',
        'S__10477582_0.jpg', 'S__10477583_0.jpg', 'S__10477584_0.jpg', 'S__10477585_0.jpg', 'S__10477586_0.jpg',
        'S__10477587_0.jpg', 'S__10477588_0.jpg', 'S__10477589_0.jpg', 'S__10477590_0.jpg', 'S__10477591_0.jpg',
        'S__10477593_0.jpg', 'S__10477594_0.jpg', 'S__10477595_0.jpg', 'S__10477596_0.jpg', 'S__10477597_0.jpg',
        'S__10477598_0.jpg', 'S__10477599_0.jpg', 'S__10477600_0.jpg', 'S__10477601_0.jpg', 'S__10477602_0.jpg',
        'S__10477604_0.jpg', 'S__10477605_0.jpg', 'S__10477606_0.jpg', 'S__10477607_0.jpg', 'S__10477608_0.jpg',
        'S__10477609_0.jpg', 'S__10477610_0.jpg', 'S__10477611_0.jpg'
    ],
    reviewsPath: './review/',
    currentReviewIndex: 0,
};

// ============================================
// INITIALIZATION
// ============================================

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initReviewsCarousel();
    initScrollAnimations();
    initCTAButtons();
    initScrollIndicator();
    initParallaxEffects();
    initMouseEffects();
    initCardAnimations();
});

// ============================================
// REVIEWS CAROUSEL
// ============================================

function initReviewsCarousel() {
    const wrapper = document.querySelector('.reviews-carousel__wrapper');
    const pagination = document.querySelector('.reviews-carousel__pagination');

    if (!wrapper || !pagination) return;

    // Load review images
    APP.reviewImages.forEach((filename, index) => {
        const slide = document.createElement('div');
        slide.className = 'reviews-carousel__slide' + (index === 0 ? ' active' : '');

        const img = document.createElement('img');
        img.src = `${APP.reviewsPath}${filename}`;
        img.alt = `お客様の声 ${index + 1}`;
        img.loading = 'lazy';

        slide.appendChild(img);
        wrapper.appendChild(slide);

        // Create pagination dot
        const dot = document.createElement('button');
        dot.className = 'reviews-carousel__dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => scrollToSlide(index));
        pagination.appendChild(dot);
    });

    // Handle scroll with intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const slides = wrapper.querySelectorAll('.reviews-carousel__slide');
                const index = Array.from(slides).indexOf(entry.target);

                document.querySelectorAll('.reviews-carousel__dot').forEach((dot) => {
                    dot.classList.remove('active');
                });
                document.querySelectorAll('.reviews-carousel__slide').forEach((slide) => {
                    slide.classList.remove('active');
                });

                if (index >= 0) {
                    document.querySelector(`[data-index="${index}"]`)?.classList.add('active');
                    entry.target.classList.add('active');
                }
            }
        });
    }, { threshold: 0.6 });

    wrapper.querySelectorAll('.reviews-carousel__slide').forEach((slide) => {
        observer.observe(slide);
    });
}

function scrollToSlide(index) {
    const wrapper = document.querySelector('.reviews-carousel__wrapper');
    const slide = wrapper.children[index];
    slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    // Philosophy section
    const philosophyQuestion = document.querySelector('.philosophy__question');
    const philosophyVisual = document.querySelector('.philosophy__visual');
    const philosophyText = document.querySelector('.philosophy__text');

    if (philosophyQuestion) {
        gsap.from(philosophyQuestion, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: philosophyQuestion,
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
        });
    }

    if (philosophyVisual) {
        gsap.from(philosophyVisual, {
            opacity: 0,
            scale: 0.9,
            y: 40,
            duration: 1,
            scrollTrigger: {
                trigger: philosophyVisual,
                start: 'top 65%',
                toggleActions: 'play none none none',
            },
        });
    }

    if (philosophyText) {
        gsap.from(philosophyText, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: philosophyText,
                start: 'top 60%',
                toggleActions: 'play none none none',
            },
        });
    }

    // Why cards
    const whyCards = document.querySelectorAll('.why__card');
    whyCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none none',
            },
        });

        const number = card.querySelector('.why__card-number');
        if (number) {
            gsap.from(number, {
                opacity: 0,
                y: 10,
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            });
        }
    });

    // Organ cards
    const organCards = document.querySelectorAll('.organ-card');
    organCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none none',
            },
        });
    });

    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach((item) => {
        gsap.from(item, {
            opacity: 0,
            x: -30,
            duration: 0.6,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    });

    // Guarantee
    const guarantee = document.querySelector('.guarantee');
    if (guarantee) {
        gsap.from(guarantee, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: guarantee,
                start: 'top 70%',
                toggleActions: 'play none none none',
            },
        });
    }
}

// ============================================
// CTA BUTTONS
// ============================================

function initCTAButtons() {
    const buttons = document.querySelectorAll('[data-section]');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = button.getAttribute('data-section');
            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: section,
                            offsetY: 60,
                        },
                        ease: 'power3.inOut',
                    });
                }
            }
        });

        // Add ripple effect
        button.addEventListener('mousedown', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.position = 'absolute';
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.transform = 'scale(0)';

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.6,
                scale: 1,
                opacity: 0,
                onComplete: () => ripple.remove(),
            });
        });
    });
}

// ============================================
// SCROLL INDICATOR
// ============================================

function initScrollIndicator() {
    const hint = document.querySelector('.scroll-hint');
    if (!hint) return;

    window.addEventListener('scroll', () => {
        gsap.to(hint, {
            duration: 0.3,
            opacity: window.scrollY > 100 ? 0 : 1,
            pointerEvents: window.scrollY > 100 ? 'none' : 'auto',
        });
    });
}

// ============================================
// PARALLAX EFFECTS
// ============================================

function initParallaxEffects() {
    // Hero overlay parallax
    gsap.to('.hero__overlay', {
        opacity: 0.8,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            markers: false,
        },
    });

    // Background color parallax sections
    gsap.utils.toArray('.section').forEach((section) => {
        gsap.to(section, {
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: 0.5,
            },
        });
    });
}

// ============================================
// MOUSE EFFECTS
// ============================================

function initMouseEffects() {
    document.addEventListener('mousemove', (e) => {
        const buttons = document.querySelectorAll('.button--primary');

        buttons.forEach((button) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--x', x + 'px');
            button.style.setProperty('--y', y + 'px');
        });
    });
}

// ============================================
// CARD ANIMATIONS
// ============================================

function initCardAnimations() {
    // Add scroll-triggered animations to cards
    const cards = document.querySelectorAll('.organ-card, .why__card');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -8,
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            });
        });
    });

    // Timeline items hover
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const content = item.querySelector('.timeline__content');
            gsap.to(content, {
                duration: 0.3,
                x: 4,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
            });
        });

        item.addEventListener('mouseleave', () => {
            const content = item.querySelector('.timeline__content');
            gsap.to(content, {
                duration: 0.3,
                x: 0,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0)',
            });
        });
    });
}

// ============================================
// PERFORMANCE
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
    });
}

console.log('✅ bricoLOOPe - Premium Experience Ready');
