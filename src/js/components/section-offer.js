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
                    <h2 class="offer-heading" style="white-space: nowrap;">
                        期間限定特別オファー
                    </h2>

                    <div class="offer-price-box">
                        <div class="offer-price-label">
                            初回価格 (通常7,260円から 10% OFF)
                        </div>
                        <div class="offer-price" style="color: #E63946; font-weight: bold; letter-spacing: 2px; display: flex; align-items: baseline; justify-content: center; gap: 4px;">
                            <span style="font-size: 1.75rem; line-height: 1;">¥</span><span style="font-size: 3.5rem; line-height: 1;">6,534</span><span style="font-size: 1.2rem; line-height: 1; margin-left: 8px;">(税込)</span>
                        </div>
                        <div class="offer-price-note">
                            通常送料880円が<br><span style="color: #D4AF37; font-weight: bold;">送料無料</span>
                        </div>
                        <div class="offer-price-details">
                            <p style="margin-bottom: var(--space-lg); color: #D4AF37; font-weight: bold; font-size: 16px;">
                                1日あたり約210円
                            </p>
                            <p style="margin-bottom: var(--space-lg);">
                                <strong>2回目以降：¥6,534（税込）<br>1日約210円</strong>
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
                            <span style="color: #D4AF37; font-weight: bold;">送料無料</span>・手数料無料
                        </div>
                        <div class="feature-item guarantee-highlight-box">
                            3ヶ月返金保証付き
                        </div>
                    </div>

                    <div class="offer-special-bonus" style="margin-top: var(--space-3xl); padding: var(--space-2xl); background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(230, 57, 70, 0.1)); border-radius: var(--radius-lg); border: 2px solid #D4AF37; text-align: center;">
                        <div style="margin-bottom: var(--space-lg);">
                            <span style="background: #D4AF37; color: #1a1a1a; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; letter-spacing: 1px;">期間限定特典</span>
                        </div>
                        <h3 style="font-size: 1.5rem; margin-bottom: var(--space-lg); font-weight: bold;">
                            <span style="color: #FFD700;">8月末までのご購入で</span><br><span style="color: #FFD700;">LOOPeジャーキーを</span><br><span style="color: #FFD700;">無料プレゼント！</span>
                        </h3>
                        <div style="display: flex; justify-content: center; margin-bottom: var(--space-lg);">
                            <img src="/image/2.png" alt="LOOPeジャーキー" style="max-width: 200px; height: auto;">
                        </div>
                        <div style="font-size: 14px; color: rgba(255, 255, 255, 0.9); margin-bottom: var(--space-md);">
                            通常価格 2,000円相当のLOOPeジャーキー
                        </div>
                        <p style="font-size: 13px; color: rgba(255, 255, 255, 0.8); margin: 0; border-top: 1px solid rgba(212, 175, 55, 0.3); padding-top: var(--space-md); margin-top: var(--space-md);">
                            ※ 定期便初回注文の方限定<br>※ 毎月先着100名様
                        </p>
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
        // Add styles for guarantee highlight box
        const style = document.createElement('style');
        style.textContent = `
            .guarantee-highlight-box {
                background: rgba(230, 57, 70, 0.15) !important;
                border-left: 4px solid #D4AF37 !important;
                border-radius: 6px;
                padding: var(--space-lg) !important;
                margin: var(--space-lg) 0 !important;
                box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
            }
        `;
        document.head.appendChild(style);

        // Heading slide-in animation
        const heading = this.section.querySelector('.offer-heading');
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

        // Price box scale and fade-in
        const priceBox = this.section.querySelector('.offer-price-box');
        if (priceBox) {
            gsap.fromTo(
                priceBox,
                { opacity: 0, scale: 0.85, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.9,
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

            // Price glow animation
            const priceDisplay = priceBox.querySelector('.offer-price');
            if (priceDisplay) {
                gsap.to(
                    priceDisplay,
                    {
                        textShadow: '0 0 20px rgba(230, 57, 70, 0.6)',
                        duration: 2,
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: -1,
                        delay: 0.5,
                    }
                );
            }
        }

        // Feature items staggered reveal
        const features = this.section.querySelector('.offer-features');
        if (features) {
            const featureItems = features.querySelectorAll('.feature-item');
            gsap.fromTo(
                featureItems,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.11,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 50%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // CTA button entrance
        const ctaButton = this.section.querySelector('.offer-cta');
        if (ctaButton) {
            gsap.fromTo(
                ctaButton,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
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

        // Note text entrance
        const noteText = this.section.querySelector('[style*="font-size: var(--fs-sm)"]');
        if (noteText) {
            gsap.fromTo(
                noteText,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 35%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Guarantee highlight box pulse animation
        const guaranteeBox = this.section.querySelector('.guarantee-highlight-box');
        if (guaranteeBox) {
            gsap.to(
                guaranteeBox,
                {
                    boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                    duration: 1.5,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                    delay: 0.4,
                }
            );
        }

        // Special bonus section entrance
        const specialBonus = this.section.querySelector('.offer-special-bonus');
        if (specialBonus) {
            gsap.fromTo(
                specialBonus,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 45%',
                        end: 'top 25%',
                        scrub: false,
                        markers: false,
                    },
                }
            );

            // Bonus box glow animation
            gsap.to(
                specialBonus,
                {
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(212, 175, 55, 0.1)',
                    duration: 2,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                    delay: 0.6,
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
