// Section Component: Hero (①ファーストビュー)

class SectionHero {
    constructor() {
        this.section = document.getElementById('hero-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const videoPath = CONSTANTS.assets.videos + 'dog.mp4';

        this.section.innerHTML = `
            <video
                class="hero-video-bg"
                autoplay
                muted
                playsinline
                loop
                preload="metadata"
            >
                <source src="${videoPath}" type="video/mp4">
            </video>

            <div class="hero-content">
                <div class="hero-badge">
                    ${CONSTANTS.copy.badge}
                </div>

                <h1 class="hero-heading">
                    犬の寿命は、<br>飼い主の選択で<br>変わります。
                </h1>

                <p class="hero-subheading">
                    野生の力を秘めた天然鹿内臓が、<br>
                    愛犬の人生を180度変える
                </p>

                <div class="hero-price">
                    初回 5,808円（税込）
                </div>

                <button class="hero-cta" aria-label="今すぐ定期購入を申し込む">
                    ${CONSTANTS.copy.ctaPrimary}
                </button>
            </div>

            <div style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 2; color: white;" data-scroll-indicator>
                <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">下にスクロール</div>
                <div style="font-size: 20px; animation: bounce 2s infinite;">↓</div>
            </div>
        `;

        this.setupEventListeners();
    }

    setupEventListeners() {
        const ctaButton = this.section.querySelector('.hero-cta');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.onCTAClick();
            });
        }
    }

    onCTAClick() {
        // Scroll to offer section with animation
        SCROLL.scrollToElementById('offer-section');
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionHero = new SectionHero();
    window.sectionHero = sectionHero;
    console.log('✓ Section Hero Rendered');
});
