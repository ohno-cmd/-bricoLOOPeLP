// Section Component: Guarantee (⑩圧倒的な自信の証)

class SectionGuarantee {
    constructor() {
        this.section = document.getElementById('guarantee-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const guaranteeImage = CONSTANTS.assets.images + 'guarantee.jpg';

        this.section.innerHTML = `
            <div class="container">
                <div class="guarantee-content">
                    <div class="guarantee-badge" style="width: 100%; max-width: 400px; margin: 0 auto var(--space-4xl);">
                        <img src="${guaranteeImage}" alt="3ヶ月全額返金保証" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);">
                    </div>

                    <h2 class="guarantee-heading">
                        3ヶ月続けて効果を感じられなかったら、<br>
                        全額返金します。
                    </h2>

                    <p class="guarantee-description">
                        わたしたちは、この商品の効果に絶対的な確信を持っています。
                    </p>

                    <p class="guarantee-description">
                        もし3ヶ月間、毎日与え続けて「効果が全く感じられない」という場合は、
                        理由なく全額返金いたします。
                    </p>

                    <div class="guarantee-period">
                        ✓ 初回～3回目の料金を返金
                    </div>

                    <div style="margin-top: var(--space-3xl); padding: var(--space-2xl); background: rgba(230, 57, 70, 0.05); border-radius: var(--radius-lg); text-align: left;">
                        <p style="font-size: var(--fs-sm); color: var(--color-text-secondary); line-height: var(--lh-relaxed);">
                            <strong>返金条件：</strong><br>
                            ・定期購入を3回お受け取りいただいた後、お申し出ください<br>
                            ・返送の送料はお客様負担となります<br>
                            ・返金理由を教えていただくと、今後の改善の参考になります<br>
                            ・返金処理は申請後10営業日以内に完了いたします
                        </p>
                    </div>

                    <p style="margin-top: var(--space-3xl); font-size: var(--fs-lg); color: var(--color-text-secondary); font-weight: var(--fw-semibold);">
                        つまり、リスクはお客様にはありません。<br>
                        この確信と自信が、証拠です。
                    </p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const badge = this.section.querySelector('.guarantee-badge');
        const heading = this.section.querySelector('.guarantee-heading');
        const description = this.section.querySelectorAll('.guarantee-description');

        if (badge) {
            gsap.fromTo(
                badge,
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

        if (heading) {
            gsap.fromTo(
                heading,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 0.2,
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

        if (description.length > 0) {
            gsap.fromTo(
                description,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
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
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionGuarantee = new SectionGuarantee();
    window.sectionGuarantee = sectionGuarantee;
    console.log('✓ Section Guarantee Rendered');
});
