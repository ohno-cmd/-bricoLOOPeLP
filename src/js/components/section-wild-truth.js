// Section Component: Wild Truth (④野生の真実 - キラーセクション)

class SectionWildTruth {
    constructor() {
        this.section = document.getElementById('wild-truth-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const rawOrgansImage = CONSTANTS.assets.images + 'raw-organs.jpg';
        const deerImage = CONSTANTS.assets.images + 'trapped-deer.jpg';

        this.section.innerHTML = `
            <div class="container">
                <div class="wild-truth-container">
                    <div class="wild-truth-question" data-animate="text-reveal">
                        森の中に、動物病院はありません。<br>
                        ではなぜ、野生の動物は病気にならないのか？
                    </div>

                    <div class="wild-truth-grid">
                        <div data-animate="image-reveal">
                            <img src="${rawOrgansImage}" alt="天然の鹿内臓" class="wild-truth-image" loading="lazy">
                        </div>
                        <div class="wild-truth-content">
                            <div class="wild-truth-fact">
                                答えは、内臓にあります。
                            </div>
                            <p class="wild-truth-explanation">
                                肉食動物は、獲物を倒した瞬間、<span style="color: var(--color-primary-red); font-weight: var(--fw-bold);">まず最初に内臓を食べます。</span>
                            </p>
                            <p class="wild-truth-explanation">
                                筋肉（普通のお肉）ではなく、<span style="color: var(--color-accent-gold); font-weight: var(--fw-bold);">生きた酵素・乳酸菌・ビタミンが凝縮した内臓</span>こそが、
                                野生が教える究極の栄養源。
                            </p>

                            <div class="wild-truth-benefits">
                                <div class="benefit-item">
                                    ✓ 生きた酵素 → 消化吸収力が圧倒的
                                </div>
                                <div class="benefit-item">
                                    ✓ 天然のビタミン・ミネラル → 自然のバランスのまま
                                </div>
                                <div class="benefit-item">
                                    ✓ 必須アミノ酸 → 毛艶・肌・筋肉の源
                                </div>
                                <div class="benefit-item">
                                    ✓ 本能を揺さぶる香り → 袋を開けた瞬間に目の色が変わる
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: var(--space-5xl); padding: var(--space-3xl); background: rgba(230, 57, 70, 0.05); border-radius: var(--radius-lg); text-align: center;">
                        <p style="font-size: var(--fs-2xl); font-weight: var(--fw-bold); color: white; line-height: var(--lh-relaxed);">
                            愛犬の本能が求める、<br>
                            <span style="color: var(--color-accent-gold);">本当の食べもの</span>がここにある。
                        </p>
                    </div>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const grid = this.section.querySelector('.wild-truth-grid');
        const elements = this.section.querySelectorAll('.wild-truth-grid > div');

        if (grid && elements.length > 0) {
            gsap.fromTo(
                elements,
                { opacity: 0, x: (i) => (i === 0 ? -100 : 100) },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 60%',
                        end: 'top 20%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Animate benefits
        const benefits = this.section.querySelectorAll('.benefit-item');
        if (benefits.length > 0) {
            gsap.fromTo(
                benefits,
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
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionWildTruth = new SectionWildTruth();
    window.sectionWildTruth = sectionWildTruth;
    console.log('✓ Section Wild Truth Rendered');
});
