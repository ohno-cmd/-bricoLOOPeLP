// Section Component: Subscription Reason (③サブスクの理由)

class SectionSubscription {
    constructor() {
        this.section = document.getElementById('subscription-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const deerImage = CONSTANTS.assets.images + 'trapped-deer.jpg';

        this.section.innerHTML = `
            <div class="container">
                <div class="subscription-grid">
                    <div class="subscription-image">
                        <img src="${deerImage}" alt="天然の鹿" loading="lazy">
                    </div>
                    <div class="subscription-content">
                        <h2 class="subscription-heading">
                            なぜ、定期便なのか
                        </h2>

                        <p class="subscription-text">
                            天然の鹿は、<br>
                            狩猟の時期と量に<br>
                            大きく左右されます。
                        </p>

                        <p class="subscription-text" style="margin-top: var(--space-3xl); font-size: var(--fs-2xl); font-weight: var(--fw-bold);">
                            愛犬の命を支える<br>
                            「毎日の必須栄養源」<br>
                            だからこそ。
                        </p>

                        <p class="subscription-text" style="margin-top: var(--space-2xl);">
                            この内臓の価値を理解している愛犬家の皆様に確実に届けたい。<br>
                            <br>
                            そこで私たちは、<br>
                            <span style="color: var(--color-accent-gold); font-weight: var(--fw-bold);">在庫を最優先で確保し、<br>
                            お届けする定期便</span><br>
                            という形を選びました。
                        </p>
                    </div>
                </div>
            </div>

            <style>
                .subscription-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-4xl);
                    align-items: center;
                }

                .subscription-image {
                    width: 100%;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
                }

                .subscription-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                @media (max-width: 968px) {
                    .subscription-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-3xl);
                    }
                }
            </style>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        // Heading slide up animation
        const heading = this.section.querySelector('.subscription-heading');
        if (heading) {
            gsap.fromTo(
                heading,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 70%',
                        end: 'top 40%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Image fade-in with scale
        const image = this.section.querySelector('.subscription-image');
        if (image) {
            gsap.fromTo(
                image,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 70%',
                        end: 'top 30%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Text elements staggered
        const textElements = this.section.querySelectorAll('.subscription-text');
        if (textElements.length > 0) {
            gsap.fromTo(
                textElements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 65%',
                        end: 'top 25%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionSubscription = new SectionSubscription();
    window.sectionSubscription = sectionSubscription;
    console.log('✓ Section Subscription Rendered');
});
