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
        // Create simple, natural floating banner
        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #1a1a1a;
                border-top: 2px solid #E63946;
                padding: 20px 16px;
                z-index: 1000;
                box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.4);
                animation: slideUp 0.4s ease-out;
            ">
                <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center;">

                    <!-- Left: Product Info -->
                    <div style="display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: center;">

                        <!-- Product Badge -->
                        <div style="
                            background: rgba(255, 255, 255, 0.08);
                            border: 1px solid rgba(230, 57, 70, 0.3);
                            border-radius: 6px;
                            padding: 12px 16px;
                            text-align: center;
                            white-space: nowrap;
                            flex-shrink: 0;
                        ">
                            <div style="color: rgba(255, 255, 255, 0.7); font-size: 12px; letter-spacing: 0.5px;">内臓</div>
                            <div style="color: white; font-size: 16px; font-weight: 600; margin-top: 4px;">3種セット</div>
                        </div>

                        <!-- Text Content -->
                        <div style="color: white; line-height: 1.6;">
                            <div style="font-size: 15px; margin-bottom: 8px;">
                                1日約 <span style="font-size: 18px; font-weight: 700; color: #E63946;">194円</span> で 愛犬が生まれ変わる
                            </div>
                            <div style="display: flex; gap: 16px; font-size: 13px; color: rgba(255, 255, 255, 0.8);">
                                <span style="color: #E63946; font-weight: 600;">2日間限定 20% OFF</span>
                                <span>•</span>
                                <span>3ヶ月返金保証</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Button -->
                    <div style="flex-shrink: 0;">
                        <button id="floating-cta-btn" style="
                            background: #E63946;
                            color: white;
                            border: none;
                            padding: 14px 28px;
                            border-radius: 6px;
                            font-weight: 600;
                            font-size: 15px;
                            cursor: pointer;
                            white-space: nowrap;
                            transition: all 0.2s ease;
                            letter-spacing: 0.3px;
                            box-shadow: 0 2px 8px rgba(230, 57, 70, 0.25);
                        ">
                            > 1ヶ月試してみる
                        </button>
                    </div>

                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Setup button interaction
        const btn = document.getElementById('floating-cta-btn');
        if (btn) {
            btn.addEventListener('mouseover', () => {
                btn.style.background = '#d32c38';
                btn.style.boxShadow = '0 4px 12px rgba(230, 57, 70, 0.35)';
            });
            btn.addEventListener('mouseout', () => {
                btn.style.background = '#E63946';
                btn.style.boxShadow = '0 2px 8px rgba(230, 57, 70, 0.25)';
            });
            btn.addEventListener('click', () => {
                SCROLL.scrollToElementById('offer-section');
            });
        }

        // Add CSS keyframes
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
                #floating-banner {
                    padding: 16px 12px !important;
                }

                #floating-banner > div {
                    grid-template-columns: 1fr !important;
                    gap: 16px !important;
                }

                #floating-banner > div > div:first-child {
                    grid-template-columns: 1fr !important;
                    gap: 12px !important;
                }

                #floating-banner > div > div:first-child > div:first-child {
                    padding: 10px 12px !important;
                }

                #floating-banner button {
                    width: 100%;
                    padding: 16px 20px !important;
                    font-size: 14px !important;
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
