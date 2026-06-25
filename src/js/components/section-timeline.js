// Section Component: Timeline (⑦飼い主様が目撃する4つの変化)

class SectionTimeline {
    constructor() {
        this.section = document.getElementById('timeline-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const dogVideoPath = CONSTANTS.assets.videos + 'dog.mp4';

        this.section.innerHTML = `
            <h2 class="timeline-heading">
                飼い主様が目撃する、4つの変化
            </h2>

            <div class="container">
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-item-number">1</div>
                        <div class="timeline-item-label">食べた瞬間</div>
                        <div class="timeline-item-description">
                            目の色が変わる。おねだりの顔が変わる。
                            本能的に「本物」だと認識した愛犬の反応は、
                            いままでとは全く違う熱さと喜びに満ちています。
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-item-number">2</div>
                        <div class="timeline-item-label">数日後</div>
                        <div class="timeline-item-description">
                            口臭の改善が顕著。歯石ケアのストレスが軽減。
                            内臓に含まれる生きた酵素が、口腔内の環境を自然に整えます。
                            毎日の付き添いが、少し楽になります。
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-item-number">3</div>
                        <div class="timeline-item-label">1ヶ月後</div>
                        <div class="timeline-item-description">
                            毛並みがフカフカに。毛艶が戻る。
                            皮膚の調子が安定してくるのが、触れた瞬間に分かります。
                            すれ違う人からも「毛並みキレイですね」と声をかけられるように。
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-item-number">4</div>
                        <div class="timeline-item-label">その先へ</div>
                        <div class="timeline-item-description">
                            体の芯から元気がみなぎる。イキイキとした笑顔。
                            散歩での反応が変わり、運動量が増える。
                            「うちの子、本当はこんなに元気だったんだ」という発見が、
                            飼い主さんの人生まで変えます。
                        </div>
                    </div>
                </div>

                <!-- Dog Video Showcase -->
                <div style="margin-top: var(--space-5xl); text-align: center;">
                    <video
                        style="max-width: 100%; max-height: 500px; height: auto; border-radius: var(--radius-lg); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);"
                        autoplay
                        muted
                        playsinline
                        loop
                        preload="metadata"
                    >
                        <source src="${dogVideoPath}" type="video/mp4">
                    </video>
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        // Heading animation
        const heading = this.section.querySelector('.timeline-heading');
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

        // Timeline items with staggered entrance and slide from left
        const timelineItems = this.section.querySelectorAll('.timeline-item');
        if (timelineItems.length > 0) {
            gsap.fromTo(
                timelineItems,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.75,
                    stagger: 0.16,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 70%',
                        end: 'top 15%',
                        scrub: false,
                        markers: false,
                    },
                }
            );

            // Add number reveal animation to each timeline item number
            timelineItems.forEach((item, index) => {
                const numberEl = item.querySelector('.timeline-item-number');
                if (numberEl) {
                    gsap.fromTo(
                        numberEl,
                        { opacity: 0, scale: 0.5 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: 'back.out',
                            delay: 0.1 + index * 0.16,
                            scrollTrigger: {
                                trigger: this.section,
                                start: 'top 70%',
                                end: 'top 15%',
                                scrub: false,
                                markers: false,
                            },
                        }
                    );
                }
            });
        }

        // Dog video animation
        const video = this.section.querySelector('video');
        if (video) {
            gsap.fromTo(
                video,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: 'back.out',
                    scrollTrigger: {
                        trigger: video,
                        start: 'top 70%',
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
    const sectionTimeline = new SectionTimeline();
    window.sectionTimeline = sectionTimeline;
    console.log('✓ Section Timeline Rendered');
});
