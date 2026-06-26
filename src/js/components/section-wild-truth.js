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
                        ではどうやって、野生の動物は病気を治しているのか？
                    </div>

                    <div class="wild-truth-grid">
                        <div data-animate="image-reveal" style="cursor: pointer;">
                            <img src="${rawOrgansImage}" alt="天然の鹿内臓" class="wild-truth-image wild-truth-image-clickable" loading="lazy" style="opacity: 0.7; transition: all 0.3s ease; filter: blur(10px);">
                            <div style="text-align: center; margin-top: 12px; font-size: 14px; color: #E63946; font-weight: bold;">
                                ☝ あよとタップして内臓の画像を見る
                            </div>
                        </div>
                        <div class="wild-truth-content">
                            <div class="wild-truth-fact">
                                答えは、内臓にあります。
                            </div>
                            <p class="wild-truth-explanation">
                                肉食動物は、<br>
                                獲物を倒した瞬間、<br>
                                <span style="color: var(--color-primary-red); font-weight: var(--fw-bold);">まず最初に内臓を食べます。</span>
                            </p>
                            <p class="wild-truth-explanation">
                                筋肉（普通のお肉）ではなく、<br>
                                <span style="color: var(--color-accent-gold); font-weight: var(--fw-bold);">生きた酵素・乳酸菌・<br>
                                ビタミンが凝縮した内臓</span><br>
                                こそが、野生が教える<br>
                                究極の栄養源。<br>
                                <br>
                                これらの栄養素は、<br>
                                <span style="color: var(--color-primary-red); font-weight: var(--fw-bold);">犬が体内で作り出すことができない必須栄養素</span>であり、<br>
                                食事からの補給が絶対に必要です。
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

        // Image modal functionality
        const clickableImage = this.section.querySelector('.wild-truth-image-clickable');
        if (clickableImage) {
            clickableImage.addEventListener('click', () => {
                this.showImageModal(clickableImage.src);
            });
            clickableImage.addEventListener('mouseenter', () => {
                clickableImage.style.filter = 'blur(0px)';
                gsap.to(clickableImage, { opacity: 1, duration: 0.2 });
            });
            clickableImage.addEventListener('mouseleave', () => {
                clickableImage.style.filter = 'blur(10px)';
                gsap.to(clickableImage, { opacity: 0.7, duration: 0.2 });
            });
        }
    }

    showImageModal(imageSrc) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.cssText = `
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 8px;
            cursor: auto;
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: white;
            font-size: 32px;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.remove();
        });

        modal.addEventListener('click', () => {
            modal.remove();
        });

        modal.appendChild(img);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);

        gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionWildTruth = new SectionWildTruth();
    window.sectionWildTruth = sectionWildTruth;
    console.log('✓ Section Wild Truth Rendered');
});
