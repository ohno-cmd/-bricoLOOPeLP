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
                        あなただけに、最初に届けたい
                    </h2>

                    <p class="intro-text">
                        クラウドファンディングの支援者様、<br>
                        そして素晴らしい愛犬たちの変化を<br>
                        知っているリピーター様へ。
                    </p>

                    <p class="intro-text">
                        世界で一番大切な「その子」のために、<br>
                        <span class="intro-highlight">完全無添加の天然鹿内臓</span>を、<br>
                        在庫最優先でお届けする<br>
                        定期便がついに誕生しました。
                    </p>

                    <p class="intro-text" style="font-size: var(--fs-lg); margin-top: var(--space-3xl); color: var(--color-primary-red);">
                        ここは、あなたの愛犬の<br>
                        人生が変わる、<br>
                        きっかけの場所です。
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
