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
        // Create premium floating banner for CVR optimization
        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
                border-top: 3px solid #E63946;
                padding: 18px 16px;
                z-index: 1000;
                box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.4s ease-out;
            ">
                <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 20px;">

                    <!-- Left: Key Benefits -->
                    <div style="flex: 1; display: flex; gap: 16px; align-items: center;">
                        <!-- Offer Badge -->
                        <div style="
                            background: linear-gradient(135deg, #E63946, #F44E5C);
                            color: white;
                            padding: 8px 12px;
                            border-radius: 6px;
                            text-align: center;
                            flex-shrink: 0;
                            box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
                        ">
                            <div style="font-weight: bold; font-size: 16px; line-height: 1;">初回</div>
                            <div style="font-size: 13px; font-weight: bold; line-height: 1; margin-top: 2px;">20%OFF</div>
                        </div>

                        <!-- Benefits Text -->
                        <div style="color: white; font-size: 14px; line-height: 1.5;">
                            <div style="font-weight: bold; margin-bottom: 4px; text-decoration: line-through; opacity: 0.6;"><span style="font-size: 7px; vertical-align: baseline;">¥</span>7,260</div>
                            <div style="font-weight: bold; margin-bottom: 4px; font-size: 16px; color: #F44E5C;"><span style="font-size: 8px; vertical-align: baseline;">¥</span>5,808</div>
                            <div style="color: #D4AF37; font-weight: bold;">✓ 3ヶ月返金保証</div>
                            <div style="color: rgba(255,255,255,0.8); font-size: 12px;">1日あたり約194円</div>
                        </div>
                    </div>


                    <!-- Right: CTA Button -->
                    <div style="flex-shrink: 0;">
                        <button id="floating-cta-btn" style="
                            background: linear-gradient(135deg, #E63946, #F44E5C);
                            color: white;
                            border: none;
                            padding: 16px 32px;
                            border-radius: 8px;
                            font-weight: bold;
                            font-size: 16px;
                            cursor: pointer;
                            white-space: nowrap;
                            box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
                            transition: all 0.2s;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            animation: buttonPulse 2s ease-in-out infinite;
                        ">
                            1か月試してみる
                        </button>
                        <div style="text-align: center; color: rgba(255,255,255,0.6); font-size: 12px; margin-top: 6px;">
                            3日間限定募集
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Setup button interaction
        const btn = document.getElementById('floating-cta-btn');
        if (btn) {
            btn.addEventListener('mouseover', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 10px 28px rgba(230, 57, 70, 0.5)';
            });
            btn.addEventListener('mouseout', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = '0 6px 20px rgba(230, 57, 70, 0.4)';
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

            @keyframes buttonPulse {
                0%, 100% {
                    transform: scale(1);
                    box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
                }
                50% {
                    transform: scale(1.05);
                    box-shadow: 0 8px 28px rgba(230, 57, 70, 0.6);
                }
            }

            @media (max-width: 768px) {
                #floating-banner {
                    padding: 10px 12px !important;
                }

                #floating-banner > div > div {
                    gap: 8px !important;
                }

                #floating-banner button {
                    padding: 12px 20px !important;
                    font-size: 13px !important;
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
