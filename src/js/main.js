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
        // Create premium floating banner with HTML/CSS
        const productImagePath = CONSTANTS.assets.images + '3set.png';

        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
                padding: 24px 16px;
                z-index: 1000;
                animation: slideUp 0.4s ease-out;
                box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
            ">
                <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 30px; align-items: center;">

                    <!-- Left: Text Content -->
                    <div style="color: white;">
                        <!-- Ribbon Text -->
                        <div style="
                            font-size: 14px;
                            color: #2c2c2c;
                            background: #E8D5B7;
                            padding: 6px 16px;
                            border-radius: 20px;
                            display: inline-block;
                            margin-bottom: 12px;
                            font-weight: 600;
                            letter-spacing: 0.5px;
                        ">
                            内臓3種セットを
                        </div>

                        <!-- Main Headline -->
                        <div style="font-size: 32px; font-weight: 700; color: #D4AF37; margin-bottom: 8px; line-height: 1.3;">
                            1日約<span style="font-size: 42px;">194</span>円で
                        </div>

                        <!-- Subheading -->
                        <div style="
                            font-size: 24px;
                            color: #D4AF37;
                            font-style: italic;
                            font-weight: 500;
                            margin-bottom: 16px;
                            letter-spacing: 1px;
                        ">
                            愛犬が生まれ変わる
                        </div>

                        <!-- Divider -->
                        <div style="
                            border-top: 2px dotted rgba(255, 255, 255, 0.3);
                            margin: 16px 0;
                        "></div>

                        <!-- Secondary Info -->
                        <div style="color: rgba(255, 255, 255, 0.8); font-size: 13px;">
                            2日間限定 20% OFF • 3ヶ月返金保証
                        </div>
                    </div>

                    <!-- Center: Product Image -->
                    <div style="position: relative; width: 200px; height: 140px; flex-shrink: 0;">
                        <img
                            src="${productImagePath}"
                            alt="3種セット"
                            style="
                                width: 100%;
                                height: auto;
                                max-height: 140px;
                                object-fit: contain;
                            "
                        />
                    </div>

                    <!-- Right: CTA Button -->
                    <div style="flex-shrink: 0;">
                        <button id="floating-cta-btn" style="
                            background: #999999;
                            color: #2c2c2c;
                            border: none;
                            padding: 16px 32px;
                            border-radius: 28px;
                            font-weight: 600;
                            font-size: 16px;
                            cursor: pointer;
                            white-space: nowrap;
                            transition: all 0.2s ease;
                            letter-spacing: 0.5px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                            min-width: 180px;
                        ">
                            > 1ヶ月試してみる
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created with HTML');

        // Setup button interaction with animations
        const btn = document.getElementById('floating-cta-btn');
        if (btn) {
            // Hover effect
            btn.addEventListener('mouseover', () => {
                gsap.to(btn, {
                    background: '#888888',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                    duration: 0.2
                });
            });

            btn.addEventListener('mouseout', () => {
                gsap.to(btn, {
                    background: '#999999',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    duration: 0.2
                });
            });

            // Click handler
            btn.addEventListener('click', () => {
                SCROLL.scrollToElementById('offer-section');
            });

            // Continuous pulse animation
            gsap.to(btn, {
                boxShadow: '0 4px 16px rgba(230, 57, 70, 0.3)',
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
                #floating-banner {
                    padding: 16px 12px !important;
                }

                #floating-banner > div {
                    grid-template-columns: 1fr !important;
                    gap: 16px !important;
                }

                #floating-banner > div > div:last-child {
                    width: 100% !important;
                }

                #floating-banner button {
                    width: 100% !important;
                    padding: 14px 24px !important;
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
