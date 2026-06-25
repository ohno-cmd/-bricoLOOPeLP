// Section Component: Special Offer (⑨特別オファー)

class SectionOffer {
    constructor() {
        this.section = document.getElementById('offer-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.section.innerHTML = `
            <div class="container">
                <div class="offer-content">
                    <h2 class="offer-heading">
                        クラファン支援者様・リピーター様 限定オファー
                    </h2>

                    <div class="offer-price-box">
                        <div class="offer-price-label">
                            初回価格
                        </div>
                        <div class="offer-price">
                            ¥5,808
                        </div>
                        <div class="offer-price-note">
                            税込 / 送料無料
                        </div>
                        <div class="offer-price-details">
                            <p style="margin-bottom: var(--space-lg); color: #D4AF37; font-weight: bold; font-size: 16px;">
                                1日あたり約194円
                            </p>
                            <p style="margin-bottom: var(--space-lg);">
                                <strong>2回目以降：¥6,534（税込）/ 1日約218円</strong>
                            </p>
                            <p style="background: rgba(255,255,255,0.1); padding: var(--space-lg); border-radius: var(--radius-md); border-left: 3px solid #D4AF37;">
                                <strong>コーヒー1杯分の価格で、<br>愛犬の人生が変わります。</strong>
                            </p>
                        </div>
                    </div>

                    <div class="offer-features">
                        <div class="feature-item">
                            毎月自動配送（定期便）
                        </div>
                        <div class="feature-item">
                            いつでも休止・解約可能
                        </div>
                        <div class="feature-item">
                            送料・手数料無料
                        </div>
                        <div class="feature-item">
                            初回限定特典：専用スコップ付属
                        </div>
                        <div class="feature-item">
                            3ヶ月返金保証付き
                        </div>
                    </div>

                    <p style="margin-top: var(--space-3xl); font-size: var(--fs-sm); color: rgba(255, 255, 255, 0.7); text-align: center;">
                        ※ クレジットカード、銀行振込に対応しています
                    </p>
                </div>
            </div>
        `;

        this.setupEventListeners();
        this.setupAnimations();
    }

    setupEventListeners() {
        const ctaButton = this.section.querySelector('.offer-cta');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.onCTAClick();
            });
        }
    }

    onCTAClick() {
        // Track conversion
        if (window.gtag) {
            window.gtag('event', 'purchase_attempt', {
                value: 5808,
                currency: 'JPY',
            });
        }

        // Show modal or redirect
        alert('お申し込みありがとうございます。\nクレジットカード決済ページへ進みます。');
    }

    setupAnimations() {
        const heading = this.section.querySelector('.offer-heading');
        const priceBox = this.section.querySelector('.offer-price-box');
        const features = this.section.querySelector('.offer-features');
        const ctaButton = this.section.querySelector('.offer-cta');

        if (heading) {
            gsap.fromTo(
                heading,
                { opacity: 0, y: 30 },
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

        if (priceBox) {
            gsap.fromTo(
                priceBox,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out',
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

        if (features) {
            const featureItems = features.querySelectorAll('.feature-item');
            gsap.fromTo(
                featureItems,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
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

        if (ctaButton) {
            gsap.fromTo(
                ctaButton,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 40%',
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
    const sectionOffer = new SectionOffer();
    window.sectionOffer = sectionOffer;
    console.log('✓ Section Offer Rendered');
});
