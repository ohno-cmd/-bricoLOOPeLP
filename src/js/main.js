// Main Entry Point - bricoLOOPe Landing Page

class App {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        console.log('🚀 bricoLOOPe Landing Page Initializing...');

        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        console.log('✓ DOM Ready');

        // Initialize components in order
        this.setupPerformanceMonitoring();
        this.setupArtificialDelay();
        this.setupPageVisibility();
        this.setupAccessibility();
        this.setupAnalytics();
        this.setupSharing();
        this.setupFloatingBanner();

        this.isInitialized = true;
        console.log('✅ bricoLOOPe LP Fully Initialized');

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('app-ready'));
    }

    setupPerformanceMonitoring() {
        if (window.PerformanceObserver) {
            try {
                const perfObserver = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach((entry) => {
                        if (entry.entryType === 'largest-contentful-paint') {
                            console.log('📊 LCP:', entry.renderTime || entry.loadTime);
                        }
                        if (entry.entryType === 'first-input') {
                            console.log('📊 FID:', entry.processingDuration);
                        }
                        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                            console.log('📊 CLS:', entry.value);
                        }
                    });
                });

                perfObserver.observe({
                    entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
                });
            } catch (e) {
                console.warn('Performance monitoring not available:', e);
            }
        }
    }

    setupArtificialDelay() {
        // Smooth appearance after load
        document.body.style.opacity = '0';
        gsap.to(document.body, {
            opacity: 1,
            duration: 0.5,
            delay: 0.1,
        });
    }

    setupPageVisibility() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('⏸️ Page hidden');
                if (window.sectionReviews) {
                    clearInterval(window.sectionReviews.autoplayInterval);
                }
            } else {
                console.log('▶️ Page visible');
                if (window.sectionReviews) {
                    window.sectionReviews.setupAutoplay();
                }
            }
        });
    }

    setupAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                window.scrollBy(0, window.innerHeight * 0.5);
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                window.scrollBy(0, -window.innerHeight * 0.5);
            }
            if (e.key === 'Home') {
                e.preventDefault();
                SCROLL.scrollToTop();
            }
            if (e.key === 'End') {
                e.preventDefault();
                window.scrollTo(0, document.body.scrollHeight);
            }
        });

        // Focus visible styles
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }

    setupAnalytics() {
        // Google Analytics integration (if gtag is available)
        if (typeof gtag !== 'undefined') {
            // Track page view
            gtag('event', 'page_view');

            // Track scroll depth
            let maxScroll = 0;
            window.addEventListener('scroll', () => {
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                    if ([25, 50, 75, 100].includes(Math.floor(scrollPercent))) {
                        gtag('event', 'scroll', {
                            depth: Math.floor(scrollPercent),
                        });
                    }
                }
            });
        }
    }

    setupFloatingBanner() {
        // Create premium floating banner with LP color harmony
        const productImagePath = CONSTANTS.assets.images + '3set.png';

        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #1A1A1A;
                border-top: 2px solid #E63946;
                padding: 16px;
                z-index: 1000;
                animation: slideUp 0.4s ease-out;
                box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
            ">
                <div style="
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 24px;
                    align-items: center;
                ">
                    <!-- Product Image -->
                    <div style="
                        flex-shrink: 0;
                        width: 100px;
                        height: 100px;
                    ">
                        <img
                            src="${productImagePath}"
                            alt="3種セット"
                            style="
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            "
                        />
                    </div>

                    <!-- Text Content -->
                    <div style="color: white; line-height: 1.6;">
                        <div style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 4px;">
                            内臓3種セット
                        </div>
                        <div style="font-size: 18px; font-weight: 700; color: white;">
                            1日約 <span style="color: #E63946; font-size: 22px;">194円</span> で愛犬が生まれ変わる
                        </div>
                        <div style="font-size: 12px; color: rgba(255, 255, 255, 0.7); margin-top: 6px;">
                            2日間限定 20% OFF • 3ヶ月返金保証
                        </div>
                    </div>

                    <!-- CTA Button -->
                    <button
                        id="floating-banner-btn"
                        style="
                            flex-shrink: 0;
                            background: #E63946;
                            color: white;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 6px;
                            font-weight: 600;
                            font-size: 14px;
                            cursor: pointer;
                            white-space: nowrap;
                            transition: all 0.2s ease;
                            box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
                            letter-spacing: 0.3px;
                        "
                    >
                        > 1ヶ月試してみる
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created');

        // Setup button interaction
        const btn = document.getElementById('floating-banner-btn');
        if (btn) {
            // Hover effect
            btn.addEventListener('mouseover', () => {
                gsap.to(btn, {
                    background: '#d32c38',
                    boxShadow: '0 4px 12px rgba(230, 57, 70, 0.4)',
                    duration: 0.2
                });
            });

            btn.addEventListener('mouseout', () => {
                gsap.to(btn, {
                    background: '#E63946',
                    boxShadow: '0 2px 8px rgba(230, 57, 70, 0.3)',
                    duration: 0.2
                });
            });

            // Click handler
            btn.addEventListener('click', () => {
                SCROLL.scrollToElementById('offer-section');
            });

            // Pulse animation
            gsap.to(btn, {
                boxShadow: '0 2px 16px rgba(230, 57, 70, 0.5)',
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 0.5,
            });
        }

        // Add CSS keyframes and responsive styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @media (max-width: 768px) {
                #floating-banner > div {
                    grid-template-columns: auto 1fr !important;
                    gap: 12px !important;
                    padding: 12px !important;
                }

                #floating-banner-btn {
                    grid-column: 1 / -1 !important;
                    width: 100% !important;
                }

                #floating-banner > div > div:nth-child(1) {
                    width: 70px !important;
                    height: 70px !important;
                }

                #floating-banner > div > div:nth-child(2) {
                    font-size: 14px !important;
                }

                #floating-banner > div > div:nth-child(2) > div:first-child {
                    font-size: 12px !important;
                }

                #floating-banner > div > div:nth-child(2) > div:nth-child(2) {
                    font-size: 15px !important;
                }

                #floating-banner > div > div:nth-child(2) > div:nth-child(2) span {
                    font-size: 18px !important;
                }

                #floating-banner > div > div:nth-child(2) > div:nth-child(3) {
                    font-size: 11px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupSharing() {
        // Social sharing setup
        const shareData = {
            title: 'bricoLOOPe | 愛犬の人生を変える天然鹿内臓定期便',
            text: '犬の寿命は、飼い主の選択で変わります。野生の力を秘めた天然鹿内臓が、愛犬の人生を180度変える。',
            url: window.location.href,
        };

        // Share buttons
        const shareButtons = document.querySelectorAll('[data-share]');
        shareButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const platform = btn.getAttribute('data-share');
                this.share(platform, shareData);
            });
        });
    }

    share(platform, data) {
        const encodedUrl = encodeURIComponent(data.url);
        const encodedText = encodeURIComponent(data.text);
        const encodedTitle = encodeURIComponent(data.title);

        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
            copy: () => {
                navigator.clipboard.writeText(data.url);
                alert('URLをコピーしました');
            },
        };

        if (typeof urls[platform] === 'function') {
            urls[platform]();
        } else if (urls[platform]) {
            window.open(urls[platform], '_blank', 'width=600,height=400');
        }
    }

    // Public API
    static getInstance() {
        if (!window.bricoApp) {
            window.bricoApp = new App();
        }
        return window.bricoApp;
    }
}

// Initialize App
App.getInstance();

// CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    body.keyboard-nav button:focus,
    body.keyboard-nav a:focus {
        outline: 3px solid var(--color-primary-red);
        outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);

// Utility: Disable animations for testing
window.disableAnimations = () => {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
    document.documentElement.style.setProperty('--transition-slowest', '0ms');
};

// Export for external use
window.App = App;
window.CONSTANTS = CONSTANTS;
window.DEVICE = DEVICE;
window.SCROLL = SCROLL;
window.STORAGE = STORAGE;
