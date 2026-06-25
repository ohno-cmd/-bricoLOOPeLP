// Section Component: Introduction (②先行案内)

class SectionIntroduction {
    constructor() {
        this.section = document.getElementById('introduction-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.section.innerHTML = `
            <div class="container">
                <div class="intro-content">
                    <h2 class="intro-heading">
                        あなただけに<br>
                        最初に届けたい
                    </h2>

                    <p class="intro-text">
                        クラウドファンディングの支援者の皆様、そして愛犬たちの素晴らしい変化を知っているリピーターの皆様へ。
                    </p>

                    <p class="intro-text">
                        いつもbricoをご愛顧いただき誠にありがとうございます。
                    </p>

                    <p class="intro-text">
                        世界で一番大切な「愛犬」の為に、<span class="intro-highlight">完全無添加の鹿の内臓</span>を在庫最優先でお届けする定期便が遂に完成しました。
                    </p>

                    <p class="intro-text" style="font-size: var(--fs-lg); margin-top: var(--space-3xl); color: var(--color-primary-red);">
                        限りのある自然の食べ物なので、<br>
                        まずは皆様と皆様の愛犬に<br>
                        しっかりとお届けすることを約束します。
                    </p>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const elements = this.section.querySelectorAll('.intro-heading, .intro-text');
        gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
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
    const sectionIntroduction = new SectionIntroduction();
    window.sectionIntroduction = sectionIntroduction;
    console.log('✓ Section Introduction Rendered');
});
