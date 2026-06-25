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
                        世界で一番大切な「愛犬」の為に、<span class="intro-highlight" style="color: #E63946; font-weight: bold;">完全無添加の鹿の内臓</span>を在庫最優先でお届けする定期便が遂に完成しました。
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
        // Heading animation - slide up
        const heading = this.section.querySelector('.intro-heading');
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

        // Paragraphs with staggered fade-in
        const texts = this.section.querySelectorAll('.intro-text');
        if (texts.length > 0) {
            gsap.fromTo(
                texts,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 65%',
                        end: 'top 25%',
                        scrub: false,
                        markers: false,
                    },
                }
            );
        }

        // Highlight text underline slide animation on scroll
        const highlightSpan = this.section.querySelector('.intro-highlight');
        if (highlightSpan) {
            // Create an underline element
            const underline = document.createElement('span');
            underline.style.cssText = `
                display: block;
                height: 3px;
                background: #E63946;
                width: 100%;
                margin-top: 4px;
                transform-origin: left;
                scaleX: 0;
            `;
            highlightSpan.appendChild(underline);

            // Animate underline on scroll
            gsap.to(
                underline,
                {
                    scaleX: 1,
                    transformOrigin: 'left center',
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: highlightSpan,
                        start: 'top 60%',
                        end: 'top 40%',
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
    const sectionIntroduction = new SectionIntroduction();
    window.sectionIntroduction = sectionIntroduction;
    console.log('✓ Section Introduction Rendered');
});
