// Hero Section Animation

class HeroAnimation {
    constructor() {
        this.heroSection = document.getElementById('hero-section');
        this.init();
    }

    init() {
        if (!this.heroSection) return;
        this.animateHeroEntrance();
        this.setupHeroInteractions();
    }

    animateHeroEntrance() {
        const timeline = gsap.timeline();

        // Badge animation
        const badge = this.heroSection.querySelector('.hero-badge');
        if (badge) {
            timeline.fromTo(
                badge,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: -20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'back.out',
                },
                0
            );
        }

        // Heading animation
        const heading = this.heroSection.querySelector('.hero-heading');
        if (heading) {
            timeline.fromTo(
                heading,
                {
                    opacity: 0,
                    y: 40,
                    clipPath: 'inset(0 0 100% 0)',
                },
                {
                    opacity: 1,
                    y: 0,
                    clipPath: 'inset(0 0 0 0)',
                    duration: 0.8,
                    ease: 'power3.out',
                },
                0.1
            );
        }

        // Subheading animation
        const subheading = this.heroSection.querySelector('.hero-subheading');
        if (subheading) {
            timeline.fromTo(
                subheading,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                },
                0.2
            );
        }

        // Price box animation
        const priceBox = this.heroSection.querySelector('.hero-price');
        if (priceBox) {
            timeline.fromTo(
                priceBox,
                {
                    opacity: 0,
                    scale: 0.9,
                    y: 20,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'back.out',
                },
                0.3
            );

            // Add pulsing animation to price
            gsap.to(priceBox, {
                boxShadow: '0 0 30px rgba(230, 57, 70, 0.4)',
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 1,
            });
        }

        // CTA Button animation
        const ctaButton = this.heroSection.querySelector('.hero-cta');
        if (ctaButton) {
            timeline.fromTo(
                ctaButton,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 30,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.5)',
                },
                0.4
            );
        }

        // Parallax background effect
        gsap.to(this.heroSection, {
            backgroundPosition: 'center 100px',
            ease: 'none',
            scrollTrigger: {
                trigger: this.heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
                markers: false,
            },
        });
    }

    setupHeroInteractions() {
        const ctaButton = this.heroSection.querySelector('.hero-cta');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.onCTAClick();
            });
        }

        // Scroll indicator animation
        const scrollIndicator = this.heroSection.querySelector('[data-scroll-indicator]');
        if (scrollIndicator) {
            gsap.to(scrollIndicator, {
                y: 10,
                opacity: 0.5,
                duration: 1,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });
        }
    }

    onCTAClick() {
        // Ripple effect
        gsap.fromTo(
            '.hero-cta',
            {
                boxShadow: '0 0 0 0 rgba(230, 57, 70, 0.7)',
            },
            {
                boxShadow: '0 0 0 40px rgba(230, 57, 70, 0)',
                duration: 0.8,
                ease: 'power2.out',
            }
        );

        // Scroll to offer section
        setTimeout(() => {
            SCROLL.scrollToElementById('offer-section');
        }, 300);
    }

    // Add text animation with staggered letters
    animateLetterByLetter(element, staggerDelay = 0.05) {
        const text = element.textContent;
        element.innerHTML = text
            .split('')
            .map((letter) => `<span style="display: inline-block;">${letter}</span>`)
            .join('');

        const spans = element.querySelectorAll('span');
        gsap.fromTo(
            spans,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: staggerDelay,
                ease: 'power2.out',
            }
        );
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const heroAnimation = new HeroAnimation();
    window.heroAnimation = heroAnimation;
    console.log('✓ Hero Animation Initialized');
});
