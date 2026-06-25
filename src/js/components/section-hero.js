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
                    1日約194円で<br>
                    愛犬の健康を守る
                </h1>

                <p class="hero-subheading">
                    犬の寿命は、飼い主の選択で変わります。<br>
                    常識が覆される<br>
                    内臓3種セットのご案内
                </p>

                <div style="
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 16px 32px;
                    border-radius: 12px;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 32px;
                    animation: fadeInUp 0.8s ease-out 0.3s both;
                ">
                    <div style="font-size: 24px; color: #D4AF37; margin-bottom: 8px;">1日約194円</div>
                    <div>愛犬の人生が変わる</div>
                </div>
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
