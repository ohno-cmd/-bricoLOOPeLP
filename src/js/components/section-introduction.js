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
        const magImage = CONSTANTS.assets.images + 'mag.jpg';

        this.section.innerHTML = `
            <div class="container">
                <div class="intro-content">
                    <h2 class="intro-heading">
                        素晴らしい愛犬家の皆様へ
                    </h2>

                    <p class="intro-text">
                        LOOPeに興味を持っていただき、誠にありがとうございます。
                    </p>

                    <p class="intro-text">
                        この商品は「<span style="color: #E63946; font-weight: bold;">brico代表：マグ</span>」が監修している最高級の鹿肉です。
                    </p>

                    <!-- Mag Image -->
                    <div style="margin: var(--space-4xl) 0; text-align: center;">
                        <img src="${magImage}" alt="brico代表マグ" loading="lazy" style="max-width: 100%; height: auto; border-radius: var(--radius-lg); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); max-height: 350px; object-fit: cover;">
                    </div>

                    <p class="intro-text">
                        17年間犬の事業をしてきた中で、<br>
                        数万人のお客様から何度も「涙やけ」や「毛のパサつき」や「口臭」などのお悩みをいただきました。
                    </p>

                    <p class="intro-text" style="margin-bottom: var(--space-3xl);">
                        <span class="intro-highlight" style="font-size: 1.1em; display: inline-block; margin: 8px 0; padding: 8px 16px; background: rgba(230, 57, 70, 0.08); border-radius: 8px; color: #E63946; font-weight: bold;">正直に言います。</span><br>
                        そのお悩みの原因の大部分は添加物がたっぷり入ったフードによるものです。
                    </p>

                    <p class="intro-text">
                        本来森の中で過ごす犬のような野生動物は、<br>
                        栄養たっぷりの草食動物の内臓を喰らい、自ら病気もケガも治す強い力を持っています。
                    </p>

                    <p class="intro-text" style="margin-bottom: var(--space-3xl);">
                        しかし現在の犬は飼い主が与えるものしか食べることができません。<br>
                        <span class="intro-highlight" style="font-size: 1.1em; display: inline-block; margin: 8px 0; padding: 8px 16px; background: rgba(230, 57, 70, 0.08); border-radius: 8px; color: #E63946; font-weight: bold;">飼い主の選択が、愛犬の健康と寿命を決めます。</span>
                    </p>

                    <p class="intro-text" style="font-size: var(--fs-lg); margin-top: var(--space-3xl); color: var(--color-primary-red);">
                        LOOPeの鹿肉を食べて愛犬が変わっていく様子をご自身の目でご体験してください。<br>
                        <span style="font-weight: bold;">1日210円で愛犬の笑顔を守りましょう。</span>
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

        // Highlight text entrance animation
        const highlightSpan = this.section.querySelector('.intro-highlight');
        if (highlightSpan) {
            gsap.fromTo(
                highlightSpan,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: highlightSpan,
                        start: 'top 65%',
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
