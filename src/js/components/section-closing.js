// Section Component: Closing (⑪ラストメッセージ)

class SectionClosing {
    constructor() {
        this.section = document.getElementById('closing-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const cheerfulDogImage = CONSTANTS.assets.images + 'cheerful dog.jpg';

        this.section.innerHTML = `
            <div class="container">
                <!-- Hero Image -->
                <div style="margin-bottom: var(--space-5xl); text-align: center;">
                    <img src="${cheerfulDogImage}" alt="幸せな愛犬" loading="lazy" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); max-height: 400px; object-fit: cover;">
                </div>

                <div class="closing-content">
                    <h2 class="closing-heading" style="font-size: 1.8rem; line-height: 1.4;">
                        愛犬の笑顔と身体を守れるのは、<br>
                        世界であなただけです。
                    </h2>

                    <p class="closing-text">
                        今日、何を食べさせるか。
                    </p>

                    <p class="closing-text">
                        それは、この瞬間に決められます。
                    </p>

                    <p class="closing-text" style="margin-bottom: var(--space-4xl);">
                        愛犬を幸せにする<span style="color: #E63946; font-weight: bold;">グッドオーナー</span>の皆様に<br>
                        この<span style="color: #E63946; font-weight: bold;">最高級の鹿肉</span>が届きますように
                    </p>

                    <p style="font-size: 20px; font-weight: bold; color: white; letter-spacing: 2px;">マグ</p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const heroImage = this.section.querySelector('[style*="max-height: 400px"]');
        const heading = this.section.querySelector('.closing-heading');
        const texts = this.section.querySelectorAll('.closing-text');
        const emoji = this.section.querySelector('[style*="font-size: 20px"]');

        // Hero image reveal
        if (heroImage) {
            gsap.fromTo(
                heroImage,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: 'back.out',
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

        // Heading entrance animation
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
                        start: 'top 60%',
                        end: 'top 30%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Text elements staggered entrance
        if (texts.length > 0) {
            gsap.fromTo(
                texts,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 55%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Emoji entrance with bounce
        if (emoji) {
            gsap.fromTo(
                emoji,
                { opacity: 0, scale: 0, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 45%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Red text highlights entrance animations
        const redHighlights = this.section.querySelectorAll('[style*="color: #E63946"]');
        if (redHighlights.length > 0) {
            gsap.fromTo(
                redHighlights,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 55%',
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
    const sectionClosing = new SectionClosing();
    window.sectionClosing = sectionClosing;
    console.log('✓ Section Closing Rendered');
});
