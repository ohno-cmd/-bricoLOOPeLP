// Section Component: Modern Food Issues (⑤現代フードへの問題提起)

class SectionFoodIssues {
    constructor() {
        this.section = document.getElementById('food-issues-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const dryfoodImage = CONSTANTS.assets.images + 'dryfood.jpg';

        this.section.innerHTML = `
            <div class="container">
                <div class="food-issues-container">
                    <h2 class="food-issues-heading" style="font-size: 1.8rem;">
                        なんとなく体調が悪いその本当の原因
                    </h2>

                    <!-- Problem Food Image -->
                    <div style="margin: var(--space-4xl) 0; text-align: center;">
                        <img src="${dryfoodImage}" alt="一般的なドライフード" loading="lazy" style="max-width: 100%; max-height: 300px; height: auto; border-radius: var(--radius-lg); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                    </div>

                    <div class="food-issues-problem">
                        <div class="food-issues-problem-title">
                            ドライフード + お肉だけ = 栄養不足
                        </div>
                        <div class="food-issues-problem-text">
                            人間に例えるなら、毎日「カロリーメイトとお肉だけで生きている」ようなもの。
                            十分なカロリーはあるかもしれませんが、本当に必要な微量栄養素が圧倒的に不足しています。
                        </div>
                    </div>

                    <div class="food-issues-problem">
                        <div class="food-issues-problem-title">
                            人間都合の添加物フード
                        </div>
                        <div class="food-issues-problem-text">
                            長期保存のための化学薬品、流通管理のための着色料や香料。
                            犬の本能は、これらを「本物の食べもの」として認識していません。
                        </div>
                    </div>

                    <div class="food-issues-problem">
                        <div class="food-issues-problem-title">
                            腸内環境の悪化
                        </div>
                        <div class="food-issues-problem-text">
                            野生の食べもの（内臓に含まれる生きた乳酸菌や酵素）がないと、
                            腸内の善玉菌が減少。免疫低下、皮膚トラブル、歯周病...が増える。
                        </div>
                    </div>

                    <div style="margin-top: var(--space-4xl); padding: var(--space-3xl); background: white; border-radius: var(--radius-lg); text-align: center; border-left: 6px solid var(--color-accent-gold);">
                        <p style="font-size: var(--fs-lg); color: var(--color-text-secondary); line-height: var(--lh-relaxed);">
                            犬は飼い主の皆さんが与えるものしか食べることができません。<br>
                            <span style="color: var(--color-primary-red); font-weight: var(--fw-bold);">1日約194円で愛犬の健康を守ってあげませんか？</span>
                        </p>
                    </div>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const heading = this.section.querySelector('.food-issues-heading');
        const image = this.section.querySelector('img[alt*="ドライフード"]');
        const problems = this.section.querySelectorAll('.food-issues-problem');

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
                        start: 'top 70%',
                        end: 'top 40%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Image reveal with scale
        if (image) {
            gsap.fromTo(
                image,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 65%',
                        end: 'top 35%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Problem cards with staggered entrance
        if (problems.length > 0) {
            gsap.fromTo(
                problems,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.13,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 60%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );

            // Add subtle border highlight glow animation to each card on scroll
            problems.forEach((card, index) => {
                gsap.to(
                    card,
                    {
                        boxShadow: '0 0 1px rgba(230, 57, 70, 0.3), 0 0 25px rgba(230, 57, 70, 0.2)',
                        duration: 1.5,
                        ease: 'sine.inOut',
                        yoyo: true,
                        repeat: -1,
                        delay: 0.2 + index * 0.15,
                        scrollTrigger: {
                            trigger: this.section,
                            start: 'top 60%',
                            end: 'bottom 20%',
                            onEnter: () => {
                                gsap.to(card, {
                                    boxShadow: '0 0 1px rgba(230, 57, 70, 0.3), 0 0 25px rgba(230, 57, 70, 0.2)',
                                    duration: 1.5,
                                    ease: 'sine.inOut',
                                    yoyo: true,
                                    repeat: -1,
                                    delay: 0.2 + index * 0.15,
                                });
                            },
                        },
                    }
                );
            });
        }

        // Info box at bottom with fade and slide
        const infoBox = this.section.querySelector('[style*="border-left"]');
        if (infoBox) {
            gsap.fromTo(
                infoBox,
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
    const sectionFoodIssues = new SectionFoodIssues();
    window.sectionFoodIssues = sectionFoodIssues;
    console.log('✓ Section Food Issues Rendered');
});
