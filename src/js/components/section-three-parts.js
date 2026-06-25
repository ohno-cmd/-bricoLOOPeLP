// Section Component: Three Parts (⑥3種の部位)

class SectionThreeParts {
    constructor() {
        this.section = document.getElementById('three-parts-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const productImage = CONSTANTS.assets.images + 'product.jpg';
        const heartImage = CONSTANTS.assets.images + 'heart.jpg';
        const lungImage = CONSTANTS.assets.images + 'lung.jpg';
        const liverImage = CONSTANTS.assets.images + 'liver.jpg';

        this.section.innerHTML = `
            <h2 class="three-parts-heading">
                なぜ「鹿の内臓3種」なのか
            </h2>

            <div class="container">
                <!-- Product Showcase -->
                <div class="product-showcase" style="margin-bottom: var(--space-5xl); text-align: center;">
                    <img src="${productImage}" alt="bricoLOOPe 3種セットパッケージ" loading="lazy" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);">
                </div>

                <div class="parts-grid">
                    <div class="part-card">
                        <img src="${heartImage}" alt="心臓（ハツ）" class="part-card-image" loading="lazy">
                        <div class="part-card-content">
                            <div class="part-card-title">心臓（ハツ）</div>
                            <div class="part-card-subtitle">毎日を元気に走り回る</div>
                            <p class="part-card-description">
                                タウリンやコエンザイムQ10の宝庫。心臓の強さと、全身への酸素供給を支える最高の栄養源。
                                愛犬のエネルギッシュな毎日を支えます。
                            </p>
                        </div>
                    </div>

                    <div class="part-card">
                        <img src="${lungImage}" alt="肺（ラング）" class="part-card-image" loading="lazy">
                        <div class="part-card-content">
                            <div class="part-card-title">肺（ラング）</div>
                            <div class="part-card-subtitle">食いつきと健康サポート</div>
                            <p class="part-card-description">
                                抜群の食いつきと、サクサクとした心地よい噛み応え。
                                低カロリーでヘルシーなので、毎日のご褒美として最適です。
                            </p>
                        </div>
                    </div>

                    <div class="part-card">
                        <img src="${liverImage}" alt="肝臓（レバー）" class="part-card-image" loading="lazy">
                        <div class="part-card-content">
                            <div class="part-card-title">肝臓（レバー）</div>
                            <div class="part-card-subtitle">毛艶と皮膚の輝き</div>
                            <p class="part-card-description">
                                天然のビタミンAや鉄分の塊。毛艶や皮膚の健康維持をサポート。
                                本能を揺さぶる最高のご褒美です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: var(--space-5xl); padding: var(--space-3xl); background: var(--color-primary-red); color: white; border-radius: var(--radius-lg); text-align: center; margin-left: var(--space-lg); margin-right: var(--space-lg);">
                <p style="font-size: var(--fs-lg); line-height: var(--lh-relaxed);">
                    この3つが揃うことで、初めて<br>
                    <span style="font-size: var(--fs-2xl); font-weight: var(--fw-bold);">野生のチカラ</span>が解き放たれる。
                </p>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        // Heading entrance animation
        const heading = this.section.querySelector('.three-parts-heading');
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
                        start: 'top 75%',
                        end: 'top 45%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Product showcase image with scale reveal
        const productShowcase = this.section.querySelector('.product-showcase');
        if (productShowcase) {
            gsap.fromTo(
                productShowcase,
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

        // Part cards with staggered entrance
        const cards = this.section.querySelectorAll('.part-card');
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.14,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false,
                    },
                }
            );

            // Add hover micro-interactions
            cards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -8,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }

        // Red callout box animation
        const calloutBox = this.section.querySelector('[style*="background: var(--color-primary-red)"]');
        if (calloutBox) {
            gsap.fromTo(
                calloutBox,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
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
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionThreeParts = new SectionThreeParts();
    window.sectionThreeParts = sectionThreeParts;
    console.log('✓ Section Three Parts Rendered');
});
