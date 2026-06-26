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
        // Create floating banner with image
        const bannerImagePath = CONSTANTS.assets.images + 'banner.jpg';
        console.log('🎯 Floating Banner Path:', bannerImagePath);

        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                animation: slideUp 0.4s ease-out;
            ">
                <img
                    id="floating-banner-img"
                    src="${bannerImagePath}"
                    alt="bricoLOOPe フローティングバナー"
                    style="
                        width: 100%;
                        height: auto;
                        display: block;
                        cursor: pointer;
                        transition: opacity 0.2s ease;
                    "
                    onload="console.log('✓ Banner image loaded')"
                    onerror="console.error('✗ Banner image failed to load:', '${bannerImagePath}')"
                />
            </div>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created');

        // Setup banner interaction
        const bannerImg = document.getElementById('floating-banner-img');
        if (bannerImg) {
            bannerImg.addEventListener('mouseover', () => {
                gsap.to(bannerImg, { opacity: 0.95, duration: 0.2 });
            });
            bannerImg.addEventListener('mouseout', () => {
                gsap.to(bannerImg, { opacity: 1, duration: 0.2 });
            });
            bannerImg.addEventListener('click', () => {
                SCROLL.scrollToElementById('offer-section');
            });

            // Add subtle pulse animation to banner
            gsap.to(bannerImg, {
                boxShadow: '0 -4px 20px rgba(230, 57, 70, 0.3)',
                duration: 2,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 0.5,
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
