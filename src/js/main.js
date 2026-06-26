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
        // Create code-based floating banner matching LP colors
        const productImagePath = CONSTANTS.assets.images + '3set.png';

        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div class="floating-banner-inner">
                <img src="${productImagePath}" alt="3種セット" class="floating-banner-image" />
                <div class="floating-banner-text">
                    <div class="floating-banner-label">内臓3種セット</div>
                    <div class="floating-banner-main">1日約<span class="floating-banner-price">194円</span>で<br>愛犬が生まれ変わる</div>
                    <div class="floating-banner-sub">2日間限定 20% OFF • 3ヶ月返金保証</div>
                </div>
                <button id="floating-banner-btn" class="floating-banner-btn">> 1ヶ月試してみる</button>
            </div>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created');

        // Setup button interaction
        const btn = document.getElementById('floating-banner-btn');
        if (btn) {
            // Hover effect with scale and shadow
            btn.addEventListener('mouseover', () => {
                gsap.to(btn, {
                    background: '#d32c38',
                    boxShadow: '0 6px 16px rgba(230, 57, 70, 0.5)',
                    scale: 1.05,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            btn.addEventListener('mouseout', () => {
                gsap.to(btn, {
                    background: '#E63946',
                    boxShadow: '0 2px 8px rgba(230, 57, 70, 0.3)',
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            });

            // Click animation - ripple effect
            btn.addEventListener('click', () => {
                gsap.timeline()
                    .to(btn, {
                        scale: 0.95,
                        duration: 0.1
                    }, 0)
                    .to(btn, {
                        scale: 1.05,
                        duration: 0.2
                    }, 0.1)
                    .to(btn, {
                        scale: 1,
                        duration: 0.1
                    }, 0.3);

                // Navigate to external link
                setTimeout(() => {
                    window.location.href = 'https://bricodog.official.ec/items/148533123';
                }, 100);
            });

            // Continuous breathing animation (always active)
            gsap.to(btn, {
                scale: 1.08,
                boxShadow: '0 4px 16px rgba(230, 57, 70, 0.6)',
                duration: 1.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });
        }

        // Add CSS styles
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

            #floating-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #1A1A1A;
                border-top: 2px solid #E63946;
                z-index: 1000;
                animation: slideUp 0.4s ease-out;
                box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.4);
                width: 100%;
                box-sizing: border-box;
            }

            .floating-banner-inner {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0;
                display: grid;
                grid-template-columns: 140px 1fr auto;
                grid-template-rows: 1fr;
                gap: 0;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                height: 100%;
            }

            .floating-banner-image {
                width: 140px;
                height: 140px;
                object-fit: contain;
                flex-shrink: 0;
                grid-column: 1;
                grid-row: 1;
                padding: 8px;
            }

            .floating-banner-text {
                color: white;
                min-width: 0;
                text-align: left;
                grid-column: 2;
                grid-row: 1;
                padding: 8px 12px 8px 0;
            }

            .floating-banner-label {
                font-size: 12px;
                color: rgba(255, 255, 255, 0.7);
                margin-bottom: 2px;
                line-height: 1;
            }

            .floating-banner-main {
                font-size: 22px;
                font-weight: 700;
                color: white;
                line-height: 1.2;
                margin-bottom: 2px;
            }

            .floating-banner-price {
                color: #E63946;
                font-size: 26px;
                margin: 0 2px;
            }

            .floating-banner-sub {
                font-size: 11px;
                color: rgba(255, 255, 255, 0.7);
                margin-top: 2px;
                line-height: 1.1;
            }

            .floating-banner-btn {
                background: #E63946;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-weight: 700;
                font-size: 15px;
                cursor: pointer;
                white-space: nowrap;
                flex-shrink: 0;
                box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
                letter-spacing: 0.5px;
                transition: all 0.2s ease;
                grid-column: 3;
                grid-row: 1;
                margin: 8px 12px 8px 0;
                height: fit-content;
            }

            @media (max-width: 768px) {
                .floating-banner-inner {
                    grid-template-columns: 110px 1fr auto;
                    grid-template-rows: 1fr;
                    gap: 0;
                    padding: 0;
                }

                .floating-banner-image {
                    width: 110px;
                    height: 110px;
                    grid-column: 1;
                    grid-row: 1;
                    padding: 6px;
                }

                .floating-banner-text {
                    grid-column: 2;
                    grid-row: 1;
                    padding: 6px 10px 6px 0;
                }

                .floating-banner-btn {
                    grid-column: 3;
                    grid-row: 1;
                    padding: 8px 16px;
                    font-size: 13px;
                    margin: 6px 8px;
                    min-width: fit-content;
                }

                .floating-banner-label {
                    font-size: 10px;
                    margin-bottom: 0;
                    line-height: 1;
                }

                .floating-banner-main {
                    font-size: 16px;
                    margin-bottom: 0;
                    line-height: 1.1;
                }

                .floating-banner-price {
                    font-size: 20px;
                    margin: 0;
                }

                .floating-banner-sub {
                    font-size: 9px;
                    margin-top: 1px;
                    line-height: 1;
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
