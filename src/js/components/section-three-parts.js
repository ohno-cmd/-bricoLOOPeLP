// Section Component: Three Parts (⑥3種の部位)

class SectionThreeParts {
    constructor() {
        this.section = document.getElementById('three-parts-section');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const heartImage = CONSTANTS.assets.images + 'heart.jpg';
        const lungImage = CONSTANTS.assets.images + 'lung.jpg';
        const liverImage = CONSTANTS.assets.images + 'liver.jpg';

        this.section.innerHTML = `
            <div class="three-parts-header">
                <h2 class="three-parts-heading">
                    なぜ「鹿の内臓3種」なのか
                </h2>
                <p class="three-parts-subheading">3つの部位が揃う時、初めて野生のチカラが解き放たれる</p>
            </div>

            <div class="container">
                <div class="parts-grid">
                    <!-- Heart Card -->
                    <div class="part-card part-card-heart">
                        <div class="part-card-header">
                            <img src="${heartImage}" alt="心臓（ハツ）" class="part-card-image" loading="lazy">
                        </div>
                        <div class="part-card-content">
                            <div class="part-icon">♥</div>
                            <div class="part-card-title">心臓（ハツ）</div>
                            <div class="part-card-subtitle">毎日を元気に走り回る</div>

                            <div class="part-benefits">
                                <div class="benefit">
                                    <span class="benefit-icon">⚡</span>
                                    <span>タウリン</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">💪</span>
                                    <span>CoQ10</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">🫀</span>
                                    <span>心臓強化</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lung Card -->
                    <div class="part-card part-card-lung">
                        <div class="part-card-header">
                            <img src="${lungImage}" alt="肺（ラング）" class="part-card-image" loading="lazy">
                        </div>
                        <div class="part-card-content">
                            <div class="part-icon">💨</div>
                            <div class="part-card-title">肺（ラング）</div>
                            <div class="part-card-subtitle">食いつきと健康サポート</div>

                            <div class="part-benefits">
                                <div class="benefit">
                                    <span class="benefit-icon">😋</span>
                                    <span>食いつき最高</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">🦴</span>
                                    <span>低カロリー</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">✨</span>
                                    <span>ヘルシー</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Liver Card -->
                    <div class="part-card part-card-liver">
                        <div class="part-card-header">
                            <img src="${liverImage}" alt="肝臓（レバー）" class="part-card-image" loading="lazy">
                        </div>
                        <div class="part-card-content">
                            <div class="part-icon">🌟</div>
                            <div class="part-card-title">肝臓（レバー）</div>
                            <div class="part-card-subtitle">毛艶と皮膚の輝き</div>

                            <div class="part-benefits">
                                <div class="benefit">
                                    <span class="benefit-icon">🎨</span>
                                    <span>ビタミンA</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">🔴</span>
                                    <span>鉄分豊富</span>
                                </div>
                                <div class="benefit">
                                    <span class="benefit-icon">✨</span>
                                    <span>毛艶UP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Synergy Message -->
                <div class="parts-synergy">
                    <div class="synergy-animation">
                        <div class="synergy-pulse"></div>
                    </div>
                    <p class="synergy-text">
                        この3つが揃うことで、初めて<br>
                        <span class="highlight">野生のチカラ</span>が解き放たれる。
                    </p>
                </div>
            </div>

            <style>
                .three-parts-header {
                    text-align: center;
                    margin-bottom: var(--space-5xl);
                    animation: fadeInDown 0.8s ease-out;
                }

                .three-parts-subheading {
                    font-size: var(--fs-lg);
                    color: rgba(0, 0, 0, 0.5);
                    margin-top: var(--space-lg);
                }

                .parts-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: var(--space-3xl);
                    margin-bottom: var(--space-5xl);
                }

                .part-card {
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    background: white;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                    transition: all var(--transition-base);
                    cursor: pointer;
                    transform-origin: center;
                }

                .part-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
                }

                .part-card-header {
                    width: 100%;
                    height: 240px;
                    overflow: hidden;
                    background: linear-gradient(135deg, #f5f5f5, #efefef);
                }

                .part-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease-out;
                }

                .part-card:hover .part-card-image {
                    transform: scale(1.08);
                }

                .part-card-content {
                    padding: var(--space-2xl);
                    text-align: center;
                }

                .part-icon {
                    font-size: 40px;
                    margin-bottom: var(--space-lg);
                    display: inline-block;
                    animation: bounce 2s infinite;
                }

                .part-card-title {
                    font-size: var(--fs-2xl);
                    font-weight: var(--fw-bold);
                    color: var(--color-text-primary);
                    margin-bottom: var(--space-md);
                }

                .part-card-subtitle {
                    font-size: var(--fs-md);
                    color: var(--color-primary-red);
                    font-weight: var(--fw-semibold);
                    margin-bottom: var(--space-2xl);
                }

                .part-benefits {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }

                .benefit {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-md);
                    padding: var(--space-md);
                    background: rgba(230, 57, 70, 0.05);
                    border-radius: var(--radius-md);
                    font-size: var(--fs-sm);
                    color: var(--color-text-secondary);
                    transition: all var(--transition-fast);
                }

                .benefit:hover {
                    background: rgba(230, 57, 70, 0.12);
                    color: var(--color-primary-red);
                }

                .benefit-icon {
                    font-size: 18px;
                }

                .parts-synergy {
                    background: linear-gradient(135deg, var(--color-primary-red), var(--color-primary-red-dark));
                    color: white;
                    padding: var(--space-4xl) var(--space-3xl);
                    border-radius: var(--radius-lg);
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    animation: fadeInUp 0.8s ease-out;
                }

                .synergy-animation {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                }

                .synergy-pulse {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    animation: pulse-ring 2s ease-out infinite;
                }

                .synergy-text {
                    position: relative;
                    z-index: 1;
                    font-size: var(--fs-2xl);
                    line-height: var(--lh-relaxed);
                    font-weight: var(--fw-semibold);
                }

                .synergy-text .highlight {
                    font-size: var(--fs-3xl);
                    font-weight: var(--fw-extrabold);
                    display: inline-block;
                    animation: pulse-text 1.2s ease-in-out infinite;
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                @keyframes pulse-ring {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 40px rgba(255, 255, 255, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
                    }
                }

                @keyframes pulse-text {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @media (max-width: 768px) {
                    .parts-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-2xl);
                    }

                    .synergy-text {
                        font-size: var(--fs-lg);
                    }

                    .synergy-text .highlight {
                        font-size: var(--fs-2xl);
                    }
                }
            </style>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const cards = this.section.querySelectorAll('.part-card');

        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
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

            // Add hover micro-interactions
            cards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -8,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionThreeParts = new SectionThreeParts();
    window.sectionThreeParts = sectionThreeParts;
    console.log('✓ Section Three Parts Rendered');
});
