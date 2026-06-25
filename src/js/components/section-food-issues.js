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
        this.section.innerHTML = `
            <div class="container">
                <div class="food-issues-container">
                    <h2 class="food-issues-heading">
                        なんとなく体調が悪い、その本当の原因
                    </h2>

                    <!-- Visual Problem Cards -->
                    <div class="food-issues-grid">
                        <div class="food-issue-card" data-issue="nutrition">
                            <div class="issue-icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="28" stroke="currentColor" stroke-width="2"/>
                                    <path d="M30 10 L40 30 L30 50 L20 30 Z" fill="currentColor" opacity="0.3"/>
                                    <text x="30" y="35" text-anchor="middle" font-size="24" fill="currentColor">⚠️</text>
                                </svg>
                            </div>
                            <h3>栄養不足</h3>
                            <p>ドライフード＋お肉だけ<br>= カロリーメイト生活</p>
                            <div class="issue-detail">微量栄養素が圧倒的に不足</div>
                        </div>

                        <div class="food-issue-card" data-issue="additives">
                            <div class="issue-icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="28" stroke="currentColor" stroke-width="2"/>
                                    <path d="M15 25 Q30 15 45 25 Q30 35 15 25" fill="currentColor" opacity="0.3"/>
                                    <path d="M15 35 Q30 45 45 35" stroke="currentColor" stroke-width="2"/>
                                </svg>
                            </div>
                            <h3>添加物フード</h3>
                            <p>化学薬品<br>着色料・香料</p>
                            <div class="issue-detail">犬の本能が認識できない</div>
                        </div>

                        <div class="food-issue-card" data-issue="gut">
                            <div class="issue-icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="28" stroke="currentColor" stroke-width="2"/>
                                    <path d="M20 20 Q30 25 20 30 Q30 35 20 40 M40 20 Q30 25 40 30 Q30 35 40 40"
                                          stroke="currentColor" stroke-width="2" fill="none"/>
                                </svg>
                            </div>
                            <h3>腸内環境悪化</h3>
                            <p>善玉菌減少<br>免疫低下</p>
                            <div class="issue-detail">皮膚トラブル増加</div>
                        </div>
                    </div>

                    <!-- Impact Timeline -->
                    <div class="food-impact-timeline">
                        <div class="timeline-dot" style="--delay: 0.2s;">
                            <div class="timeline-year">1年</div>
                            <div class="timeline-impact">口臭・歯石</div>
                        </div>
                        <div class="timeline-dot" style="--delay: 0.4s;">
                            <div class="timeline-year">3年</div>
                            <div class="timeline-impact">皮膚炎</div>
                        </div>
                        <div class="timeline-dot" style="--delay: 0.6s;">
                            <div class="timeline-year">5年</div>
                            <div class="timeline-impact">代謝低下</div>
                        </div>
                        <div class="timeline-dot" style="--delay: 0.8s;">
                            <div class="timeline-year">10年</div>
                            <div class="timeline-impact">寿命短縮</div>
                        </div>
                    </div>

                    <div class="food-impact-message">
                        <p>
                            <span class="highlight">毎日何を食べさせるか</span>は、<br>
                            5年後、10年後の愛犬の人生を左右します。
                        </p>
                    </div>
                </div>
            </div>

            <style>
                .food-issues-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--space-2xl);
                    margin: var(--space-4xl) 0;
                }

                .food-issue-card {
                    background: white;
                    padding: var(--space-2xl);
                    border-radius: var(--radius-lg);
                    text-align: center;
                    border: 2px solid transparent;
                    transition: all var(--transition-base);
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .food-issue-card:hover {
                    border-color: var(--color-primary-red);
                    transform: translateY(-8px);
                    box-shadow: 0 12px 28px rgba(230, 57, 70, 0.15);
                }

                .issue-icon {
                    color: var(--color-primary-red);
                    margin-bottom: var(--space-lg);
                    animation: bounce 2s infinite;
                }

                .food-issue-card h3 {
                    font-size: var(--fs-2xl);
                    font-weight: var(--fw-bold);
                    color: var(--color-text-primary);
                    margin: var(--space-lg) 0;
                }

                .food-issue-card p {
                    font-size: var(--fs-md);
                    color: var(--color-text-secondary);
                    margin-bottom: var(--space-lg);
                    line-height: var(--lh-relaxed);
                }

                .issue-detail {
                    background: rgba(230, 57, 70, 0.08);
                    padding: var(--space-md);
                    border-radius: var(--radius-md);
                    font-size: var(--fs-sm);
                    color: var(--color-primary-red);
                    font-weight: var(--fw-semibold);
                }

                .food-impact-timeline {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: var(--space-2xl);
                    margin: var(--space-5xl) 0 var(--space-4xl);
                }

                .timeline-dot {
                    text-align: center;
                    animation: slideUp 0.8s ease-out;
                    animation-delay: var(--delay);
                    animation-fill-mode: both;
                }

                .timeline-dot::before {
                    content: '';
                    display: block;
                    width: 12px;
                    height: 12px;
                    background: var(--color-primary-red);
                    border-radius: 50%;
                    margin: 0 auto var(--space-lg);
                    box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.2);
                }

                .timeline-year {
                    font-weight: var(--fw-bold);
                    color: var(--color-primary-red);
                    margin-bottom: var(--space-md);
                }

                .timeline-impact {
                    font-size: var(--fs-lg);
                    color: var(--color-text-primary);
                }

                .food-impact-message {
                    background: linear-gradient(135deg, rgba(230, 57, 70, 0.05), rgba(212, 175, 55, 0.05));
                    padding: var(--space-4xl) var(--space-3xl);
                    border-radius: var(--radius-lg);
                    text-align: center;
                    border-left: 6px solid var(--color-accent-gold);
                    animation: fadeIn 1s ease-out 0.5s both;
                }

                .food-impact-message p {
                    font-size: var(--fs-2xl);
                    color: var(--color-text-primary);
                    line-height: var(--lh-relaxed);
                }

                .highlight {
                    color: var(--color-primary-red);
                    font-weight: var(--fw-bold);
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .food-issues-grid {
                        grid-template-columns: 1fr;
                    }

                    .food-impact-timeline {
                        grid-template-columns: repeat(2, 1fr);
                        gap: var(--space-lg);
                    }
                }
            </style>
        `;

        this.setupAnimations();
    }

    setupAnimations() {
        const heading = this.section.querySelector('.food-issues-heading');
        const problems = this.section.querySelectorAll('.food-issues-problem');

        if (heading) {
            gsap.fromTo(
                heading,
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

        if (problems.length > 0) {
            gsap.fromTo(
                problems,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: this.section,
                        start: 'top 60%',
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
