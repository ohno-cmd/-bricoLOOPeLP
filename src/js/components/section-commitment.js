// Section Component: Commitment (⑧bricoの圧倒的なこだわり)

class SectionCommitment {
    constructor() {
        this.section = document.getElementById('commitment-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const processingImage = CONSTANTS.assets.images + 'processing within 24 hours.jpg';
        const driedVenisonImage = CONSTANTS.assets.images + 'dried venison.jpg';
        const productImage = CONSTANTS.assets.images + 'product.jpg';

        this.section.innerHTML = `
            <h2 class="commitment-heading">
                bricoのこだわり
            </h2>

            <div class="container">
                <div class="commitment-grid">
                    <div class="commitment-item">
                        <div class="commitment-image">
                            <img src="${processingImage}" alt="24時間以内の処理" loading="lazy">
                        </div>
                        <h3 class="commitment-title">
                            狩猟から24時間以内
                        </h3>
                        <p class="commitment-description">
                            鮮度が命。狩猟から加工まで、
                            圧倒的な速度で処理。
                            生きた酵素が最大限に保たれます。
                        </p>
                    </div>

                    <div class="commitment-item">
                        <div class="commitment-image">
                            <img src="${driedVenisonImage}" alt="最適温度で乾燥した内臓" loading="lazy">
                        </div>
                        <h3 class="commitment-title">
                            部位ごとの最適温度乾燥
                        </h3>
                        <p class="commitment-description">
                            心臓・肺・肝臓は、それぞれ異なる。
                            科学的に証明された最適温度で、
                            栄養価を逃さない乾燥を実現。
                        </p>
                    </div>

                    <div class="commitment-item">
                        <div class="commitment-image">
                            <img src="${productImage}" alt="完全無添加の3種セット" loading="lazy">
                        </div>
                        <h3 class="commitment-title">
                            完全無添加
                        </h3>
                        <p class="commitment-description">
                            化学薬品・着色料・香料・保存料。
                            一切加えない。
                            鹿の内臓そのものの力が全てです。
                        </p>
                    </div>
                </div>
            </div>

            <div style="margin-top: var(--space-5xl); padding: var(--space-3xl); background: var(--color-light-gray); border-radius: var(--radius-lg); text-align: center; border-top: 4px solid var(--color-primary-red);">
                <p style="font-size: var(--fs-lg); color: var(--color-text-secondary); line-height: var(--lh-relaxed);">
                    わたしたちが選んだのは、<br>
                    <span style="color: var(--color-text-primary); font-weight: var(--fw-bold);">最短距離で、愛犬の元へ届ける</span><br>
                    ただそれだけ。
                </p>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const items = this.section.querySelectorAll('.commitment-item');

        if (items.length > 0) {
            gsap.fromTo(
                items,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 70%',
                        end: 'top 30%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Image reveal animation
        const images = this.section.querySelectorAll('.commitment-image img');
        gsap.fromTo(
            images,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: this.section,
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: false,
                    markers: false,
                },
            }
        );
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionCommitment = new SectionCommitment();
    window.sectionCommitment = sectionCommitment;
    console.log('✓ Section Commitment Rendered');
});
