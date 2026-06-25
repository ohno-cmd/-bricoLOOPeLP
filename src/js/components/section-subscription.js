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
        this.section.innerHTML = `
            <div class="container">
                <div class="subscription-content">
                    <h2 class="subscription-heading">
                        なぜ、定期便なのか
                    </h2>

                    <p class="subscription-text">
                        天然の鹿は、狩猟の時期と量に大きく左右されます。
                    </p>

                    <p class="subscription-text">
                        大量生産は、この自然の恵みを破壊します。
                    </p>

                    <p class="subscription-text" style="margin-top: var(--space-3xl); font-size: var(--fs-2xl); font-weight: var(--fw-bold);">
                        愛犬の命を支える「毎日の必須栄養源」だからこそ。
                    </p>

                    <p class="subscription-text" style="margin-top: var(--space-2xl);">
                        わたしたちは、<span style="color: var(--color-accent-gold); font-weight: var(--fw-bold);">在庫を最優先で確保し、お届けする定期便</span>という形を選びました。
                    </p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const textElements = this.section.querySelectorAll('.subscription-heading, .subscription-text');
        gsap.fromTo(
            textElements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
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
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionSubscription = new SectionSubscription();
    window.sectionSubscription = sectionSubscription;
    console.log('✓ Section Subscription Rendered');
});
