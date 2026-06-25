// Micro Interactions - Button Effects & Hover States

class MicroInteractions {
    constructor() {
        this.ctaButtons = [];
        this.init();
    }

    init() {
        this.bindCTAButtons();
        this.setupButtonAnimations();
    }

    bindCTAButtons() {
        const buttons = document.querySelectorAll('.hero-cta, .offer-cta, .closing-cta, button[data-cta]');
        buttons.forEach((btn) => {
            this.ctaButtons.push(btn);
            this.setupButtonHover(btn);
            this.setupButtonClick(btn);
        });
    }

    setupButtonHover(button) {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out',
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'elastic.out(1, 0.5)',
            });
        });
    }

    setupButtonClick(button) {
        button.addEventListener('click', () => {
            // Ripple effect
            gsap.fromTo(
                button,
                {
                    boxShadow: '0 0 0 0 rgba(230, 57, 70, 0.5)',
                },
                {
                    boxShadow: '0 0 0 20px rgba(230, 57, 70, 0)',
                    duration: 0.6,
                    ease: 'power2.out',
                }
            );

            // Pulse effect
            gsap.to(button, {
                scale: 0.98,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
            });
        });
    }

    addPulseAnimation(element, duration = 1.3) {
        gsap.fromTo(
            element,
            { scale: 1 },
            {
                scale: 1.02,
                duration: duration,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            }
        );
    }

    addFloatAnimation(element, distance = 10, duration = 3) {
        gsap.fromTo(
            element,
            { y: 0 },
            {
                y: -distance,
                duration: duration,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            }
        );
    }

    addGlowEffect(element, duration = 2) {
        gsap.fromTo(
            element,
            { boxShadow: `0 0 5px rgba(230, 57, 70, 0.5)` },
            {
                boxShadow: `0 0 20px rgba(230, 57, 70, 0.8)`,
                duration: duration,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            }
        );
    }

    addShimmerEffect(element, duration = 2) {
        gsap.to(element, {
            backgroundPosition: '1000px 0',
            duration: duration,
            repeat: -1,
            ease: 'none',
        });
    }

    // Card hover effect
    setupCardHover(card) {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out',
            });
        });
    }

    // Text reveal animation
    revealText(element, delay = 0) {
        gsap.fromTo(
            element,
            {
                clipPath: 'inset(0 100% 0 0)',
                opacity: 0,
            },
            {
                clipPath: 'inset(0 0 0 0)',
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
                delay: delay,
            }
        );
    }

    // Number animation (counter)
    animateNumber(element, startValue, endValue, duration = 1.5) {
        const obj = { value: startValue };
        gsap.to(obj, {
            value: endValue,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
                element.textContent = Math.floor(obj.value).toLocaleString();
            },
        });
    }

    // Stagger animation for multiple elements
    staggerAnimation(elements, delay = 0.1, duration = 0.5) {
        gsap.fromTo(
            elements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: 'power2.out',
                stagger: delay,
            }
        );
    }

    // Parallax on scroll
    addParallax(element, speed = 0.5, options = {}) {
        ScrollTrigger.create({
            trigger: element,
            onUpdate: (self) => {
                gsap.to(element, {
                    y: self.getVelocity() * speed * -0.1,
                    overwrite: 'auto',
                    duration: 0.5,
                });
            },
            ...options,
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const microInteractions = new MicroInteractions();
    window.microInteractions = microInteractions;
    console.log('✓ Micro Interactions Initialized');
});
