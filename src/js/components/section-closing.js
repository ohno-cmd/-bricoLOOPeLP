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
                        オファー終了まで<br>
                        <div id="countdown" style="font-size: 24px; font-weight: bold; color: var(--color-primary-red); margin-top: 12px;">
                            カウントダウン中...
                        </div>
                    </div>

                    <p class="closing-text" style="margin-bottom: var(--space-lg);">
                        わたしたちが選んだのは、人間都合の加工しない自然そのものの鹿の内臓を愛犬に届ける。ただそれだけ
                    </p>

                    <p class="closing-text" style="margin-bottom: var(--space-4xl);">
                        愛犬を幸せにするグッドオーナーの皆様に<br>
                        この最高級の鹿肉が届きますように
                    </p>

                    <p style="font-size: 24px; font-weight: bold; color: var(--color-primary-red);">🥤</p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupCountdown() {
        // Set target date: June 30, 2026 10:00 JST
        const targetDate = new Date('2026-06-30T10:00:00+09:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                const countdownEl = document.getElementById('countdown');
                if (countdownEl) countdownEl.textContent = 'オファー終了';
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.textContent = `${days}日${hours}時間${minutes}分${seconds}秒`;
            }
        };

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    setupAnimations() {
        const heroImage = this.section.querySelector('[style*="max-height: 400px"]');
        const heading = this.section.querySelector('.closing-heading');
        const texts = this.section.querySelectorAll('.closing-text');
        const highlight = this.section.querySelector('.closing-highlight');
        const emoji = this.section.querySelector('[style*="font-size: 24px"]');

        this.setupCountdown();

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

        // Countdown highlight box with scale and glow
        if (highlight) {
            gsap.fromTo(
                highlight,
                { opacity: 0, scale: 0.85, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.9,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 50%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );

            // Add subtle pulsing glow effect to highlight
            gsap.to(highlight, {
                boxShadow: '0 0 20px rgba(230, 57, 70, 0.3)',
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 0.5,
            });
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
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionClosing = new SectionClosing();
    window.sectionClosing = sectionClosing;
    console.log('✓ Section Closing Rendered');
});
