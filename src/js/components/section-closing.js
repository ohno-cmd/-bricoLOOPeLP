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
                    <h2 class="closing-heading">
                        愛犬の笑顔と身体を守れるのは、<br>
                        世界であなただけです。
                    </h2>

                    <p class="closing-text">
                        今日、何を食べさせるか。
                    </p>

                    <p class="closing-text">
                        それは、この瞬間に決められます。
                    </p>

                    <div class="closing-highlight">
                        5年後、10年後に<br>
                        「あの時始めてよかった」<br>
                        そう思える選択を。
                    </div>

                    <p class="closing-text" style="margin-bottom: var(--space-4xl);">
                        野生の力を秘めた天然鹿内臓が、<br>
                        これからあなたの愛犬の人生の一部になります。
                    </p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const heading = this.section.querySelector('.closing-heading');
        const texts = this.section.querySelectorAll('.closing-text');
        const highlight = this.section.querySelector('.closing-highlight');

        if (heading) {
            gsap.fromTo(
                heading,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
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

        if (texts.length > 0) {
            gsap.fromTo(
                texts,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
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

        if (highlight) {
            gsap.fromTo(
                highlight,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 50%',
                        end: 'top 20%',
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
