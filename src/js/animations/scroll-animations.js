// Scroll Animations - ScrollTrigger Integration

class ScrollAnimations {
    constructor() {
        this.triggers = [];
        this.init();
    }

    init() {
        this.setupSectionAnimations();
        this.setupTextReveal();
        this.setupImageReveal();
        this.setupCounterAnimations();
        this.setupParallaxElements();
    }

    setupSectionAnimations() {
        // Introduction Section
        const introSection = document.getElementById('introduction-section');
        if (introSection) {
            gsap.fromTo(
                introSection,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: introSection,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Subscription Section
        const subscriptionSection = document.getElementById('subscription-section');
        if (subscriptionSection) {
            gsap.to(subscriptionSection, {
                backgroundPosition: 'center bottom',
                ease: 'none',
                scrollTrigger: {
                    trigger: subscriptionSection,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 1,
                    markers: false,
                },
            });
        }

        // Wild Truth Section (Killer Section)
        const wildTruthSection = document.getElementById('wild-truth-section');
        if (wildTruthSection) {
            const wildTruthElements = wildTruthSection.querySelectorAll('.wild-truth-image, .wild-truth-content');
            wildTruthElements.forEach((element, index) => {
                gsap.fromTo(
                    element,
                    {
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: wildTruthSection,
                            start: 'top 60%',
                            end: 'top 20%',
                            scrub: false,
                            markers: false,
                        },
                        stagger: 0.2,
                    }
                );
            });
        }

        // Three Parts Section
        const threePartsSection = document.getElementById('three-parts-section');
        if (threePartsSection) {
            const cards = threePartsSection.querySelectorAll('.part-card');
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: threePartsSection,
                        start: 'top 70%',
                        end: 'top 30%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Commitment Section
        const commitmentSection = document.getElementById('commitment-section');
        if (commitmentSection) {
            const items = commitmentSection.querySelectorAll('.commitment-item');
            gsap.fromTo(
                items,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: commitmentSection,
                        start: 'top 70%',
                        end: 'top 30%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }
    }

    setupTextReveal() {
        const textElements = document.querySelectorAll('[data-animate="text-reveal"]');
        textElements.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    clipPath: 'inset(0 100% 0 0)',
                    opacity: 0,
                },
                {
                    clipPath: 'inset(0 0 0 0)',
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        });
    }

    setupImageReveal() {
        const images = document.querySelectorAll('[data-animate="image-reveal"]');
        images.forEach((image) => {
            gsap.fromTo(
                image,
                {
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: image,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-counter]');
        counters.forEach((counter) => {
            const endValue = parseInt(counter.getAttribute('data-counter')) || 0;
            const startValue = 0;

            ScrollTrigger.create({
                trigger: counter,
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: endValue,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerHTML: 1 },
                        onUpdate: () => {
                            counter.innerHTML = Math.floor(gsap.getProperty(counter, 'innerHTML'));
                        },
                    });
                },
            });
        });
    }

    setupParallaxElements() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;

            gsap.to(element, {
                y: (i, target) => {
                    return ScrollTrigger.getVelocity(target) * speed * -1;
                },
                scrollTrigger: {
                    trigger: element,
                    start: 'center center',
                    end: 'center top',
                    onUpdate: (self) => {
                        gsap.to(element, {
                            y: self.getVelocity() * speed * -0.1,
                            overwrite: 'auto',
                            duration: 0.5,
                        });
                    },
                },
            });
        });
    }

    // Pin element while scrolling
    pinElement(element, duration = '100vh') {
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: `+=${duration}`,
            pin: true,
            markers: false,
        });
    }

    // Horizontal scroll animation
    horizontalScroll(container, animationDuration = 1) {
        const proxy = { skew: 0, skewSetter(v) { this.skew = v; }, get skew() { return Math.min(Math.max(this.skew, -20), 20); }, },
            skewSetter = gsap.quickSetter(container, 'skewY', 'deg'),
            clamp = gsap.utils.clamp(-20, 20);

        gsap.set(container, { transformOrigin: '100% 50%', force3D: true });

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / 300);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                }
                gsap.to(proxy, {
                    skew: 0,
                    duration: 0.8,
                    ease: 'power3',
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
            },
        });

        gsap.set(container, { skewY: 0, force3D: true });
    }

    // Refresh all triggers
    refresh() {
        ScrollTrigger.refresh();
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const scrollAnimations = new ScrollAnimations();
    window.scrollAnimations = scrollAnimations;
    console.log('✓ Scroll Animations Initialized');
});
