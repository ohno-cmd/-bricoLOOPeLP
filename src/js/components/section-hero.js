// Section Component: Hero (①ファーストビュー)

class SectionHero {
    constructor() {
        this.section = document.getElementById('hero-section');
        this.init();
    }

    init() {
        this.render();
        this.setupAnimations();
    }

    render() {
        const mountainImagePath = CONSTANTS.assets.images + 'mountain.jpg';
        const logoImagePath = CONSTANTS.assets.images + 'logo.png';

        this.section.innerHTML = `
            <img
                class="hero-video-bg"
                src="${mountainImagePath}"
                alt="Mountain background"
                loading="lazy"
            />

            <div class="hero-content">
                <div class="hero-badge">
                    <img src="${logoImagePath}" alt="bricoLOOPe logo" loading="lazy" style="max-width: 200px; height: auto; display: block;">
                </div>

                <h1 class="hero-heading" style="font-size: 2.4rem; font-weight: 900; line-height: 1.3;">
                    1日約210円で<br>
                    愛犬の健康を守る
                </h1>

                <p class="hero-subheading">
                    犬の寿命は、飼い主の選択で変わります。
                </p>

                <div class="hero-promo-box" style="
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
                    <div style="font-size: 20px; color: white; margin-bottom: 8px; font-weight: bold;">常識が覆される</div>
                    <div>内臓3種セットのご案内</div>
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

    setupAnimations() {
        // Logo entrance animation
        const badge = this.section.querySelector('.hero-badge');
        if (badge) {
            gsap.fromTo(
                badge,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 0.3,
                }
            );
        }

        // Promo box glow animation
        const promoBox = this.section.querySelector('.hero-promo-box');
        if (promoBox) {
            gsap.to(
                promoBox,
                {
                    boxShadow: '0 0 25px rgba(230, 57, 70, 0.5)',
                    duration: 2,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                }
            );
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionHero = new SectionHero();
    window.sectionHero = sectionHero;
    console.log('✓ Section Hero Rendered');
});
