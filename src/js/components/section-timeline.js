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
        this.section.innerHTML = `
            <div class="timeline-header">
                <h2 class="timeline-heading">
                    飼い主様が目撃する、4つの変化
                </h2>
                <p class="timeline-subheading">愛犬の笑顔の進化を目撃してください</p>
            </div>

            <div class="container">
                <div class="timeline-vertical">
                    <!-- Stage 1 -->
                    <div class="timeline-stage" style="--stage: 1; --delay: 0.1s;">
                        <div class="stage-connector"></div>
                        <div class="timeline-card">
                            <div class="stage-icon">😍</div>
                            <div class="stage-time">食べた瞬間</div>
                            <h3 class="stage-title">目の色が変わる</h3>
                            <div class="stage-metrics">
                                <div class="metric">
                                    <span class="metric-label">食いつき</span>
                                    <div class="metric-bar">
                                        <div class="metric-fill" style="width: 95%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="stage-description">
                                本能的に「本物」だと認識した愛犬。今までとは全く違う熱さと喜びに満ちた反応が。
                            </p>
                        </div>
                    </div>

                    <!-- Stage 2 -->
                    <div class="timeline-stage" style="--stage: 2; --delay: 0.3s;">
                        <div class="stage-connector"></div>
                        <div class="timeline-card">
                            <div class="stage-icon">🦷</div>
                            <div class="stage-time">数日後</div>
                            <h3 class="stage-title">口臭が改善</h3>
                            <div class="stage-metrics">
                                <div class="metric">
                                    <span class="metric-label">口腔内改善</span>
                                    <div class="metric-bar">
                                        <div class="metric-fill" style="width: 85%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="stage-description">
                                内臓の生きた酵素が、口腔内の環境を自然に整える。毎日の付き添いが少し楽に。
                            </p>
                        </div>
                    </div>

                    <!-- Stage 3 -->
                    <div class="timeline-stage" style="--stage: 3; --delay: 0.5s;">
                        <div class="stage-connector"></div>
                        <div class="timeline-card">
                            <div class="stage-icon">✨</div>
                            <div class="stage-time">1ヶ月後</div>
                            <h3 class="stage-title">毛並みがフカフカ</h3>
                            <div class="stage-metrics">
                                <div class="metric">
                                    <span class="metric-label">毛艶品質</span>
                                    <div class="metric-bar">
                                        <div class="metric-fill" style="width: 90%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="stage-description">
                                毛艶が戻り、触れた瞬間にその変化が分かる。「毛並みキレイですね」と声がかかるように。
                            </p>
                        </div>
                    </div>

                    <!-- Stage 4 -->
                    <div class="timeline-stage" style="--stage: 4; --delay: 0.7s;">
                        <div class="stage-connector" style="display: none;"></div>
                        <div class="timeline-card timeline-card-final">
                            <div class="stage-icon">🌟</div>
                            <div class="stage-time">その先へ</div>
                            <h3 class="stage-title">体の芯から元気</h3>
                            <div class="stage-metrics">
                                <div class="metric">
                                    <span class="metric-label">活力指数</span>
                                    <div class="metric-bar">
                                        <div class="metric-fill" style="width: 100%"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="stage-description">
                                イキイキとした笑顔。散歩での反応が変わり、運動量も増える。「こんなに元気だったんだ」という発見が、飼い主さんの人生まで変えます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .timeline-header {
                    text-align: center;
                    margin-bottom: var(--space-5xl);
                    animation: fadeInDown 0.8s ease-out;
                }

                .timeline-subheading {
                    font-size: var(--fs-lg);
                    color: rgba(0, 0, 0, 0.5);
                    margin-top: var(--space-lg);
                }

                .timeline-vertical {
                    position: relative;
                    padding: var(--space-3xl) 0;
                }

                .timeline-vertical::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(180deg, var(--color-primary-red), var(--color-primary-red-light));
                    transform: translateX(-50%);
                    animation: growVertical 1.2s ease-out;
                }

                .timeline-stage {
                    margin-bottom: var(--space-5xl);
                    position: relative;
                    animation: fadeIn 0.6s ease-out;
                    animation-delay: var(--delay);
                    animation-fill-mode: both;
                }

                .stage-connector {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: var(--color-primary-red);
                    top: 60px;
                    left: 0;
                    animation: growHorizontal 0.6s ease-out;
                    animation-delay: calc(var(--delay) + 0.2s);
                    animation-fill-mode: both;
                }

                .timeline-card {
                    max-width: 420px;
                    margin: 0 auto;
                    background: white;
                    padding: var(--space-3xl) var(--space-2xl);
                    border-radius: var(--radius-lg);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                    position: relative;
                    transition: all var(--transition-base);
                    border-left: 4px solid var(--color-primary-red);
                }

                .timeline-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 40px rgba(230, 57, 70, 0.2);
                }

                .timeline-card-final {
                    border-left-color: var(--color-accent-gold);
                    background: linear-gradient(135deg, rgba(230, 57, 70, 0.05), rgba(212, 175, 55, 0.05));
                }

                .stage-icon {
                    font-size: 48px;
                    text-align: center;
                    margin-bottom: var(--space-lg);
                    animation: bounce 2s infinite;
                }

                .stage-time {
                    text-align: center;
                    font-size: var(--fs-sm);
                    color: var(--color-primary-red);
                    font-weight: var(--fw-semibold);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: var(--space-md);
                }

                .stage-title {
                    text-align: center;
                    font-size: var(--fs-2xl);
                    font-weight: var(--fw-bold);
                    color: var(--color-text-primary);
                    margin-bottom: var(--space-2xl);
                }

                .stage-metrics {
                    background: rgba(230, 57, 70, 0.05);
                    padding: var(--space-2xl);
                    border-radius: var(--radius-md);
                    margin-bottom: var(--space-2xl);
                }

                .metric {
                    margin-bottom: var(--space-lg);
                }

                .metric:last-child {
                    margin-bottom: 0;
                }

                .metric-label {
                    display: block;
                    font-size: var(--fs-sm);
                    color: var(--color-text-secondary);
                    margin-bottom: var(--space-md);
                    font-weight: var(--fw-semibold);
                }

                .metric-bar {
                    width: 100%;
                    height: 6px;
                    background: rgba(0, 0, 0, 0.1);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .metric-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--color-primary-red), var(--color-primary-red-light));
                    border-radius: 3px;
                    animation: fillBar 1s ease-out;
                    animation-delay: calc(var(--delay) + 0.4s);
                    animation-fill-mode: both;
                }

                .stage-description {
                    font-size: var(--fs-sm);
                    color: var(--color-text-secondary);
                    line-height: var(--lh-relaxed);
                    text-align: center;
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes growVertical {
                    from {
                        height: 0;
                        opacity: 0;
                    }
                    to {
                        height: 100%;
                        opacity: 1;
                    }
                }

                @keyframes growHorizontal {
                    from {
                        width: 0;
                        opacity: 0;
                    }
                    to {
                        width: 100%;
                        opacity: 1;
                    }
                }

                @keyframes fillBar {
                    from { width: 0; }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @media (max-width: 768px) {
                    .timeline-vertical::before {
                        left: 0;
                    }

                    .timeline-card {
                        margin-left: var(--space-2xl);
                    }

                    .stage-connector {
                        left: 0;
                        width: auto;
                        height: 100%;
                        top: 0;
                        background: var(--color-primary-red);
                    }
                }
            </style>
        `;
                </div>
            </div>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const timelineItems = this.section.querySelectorAll('.timeline-item');

        if (timelineItems.length > 0) {
            gsap.fromTo(
                timelineItems,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 70%',
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
    const sectionTimeline = new SectionTimeline();
    window.sectionTimeline = sectionTimeline;
    console.log('✓ Section Timeline Rendered');
});
