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
        const imagePath = CONSTANTS.assets.images;
        const linkUrl = 'https://bricodog.official.ec/items/148533123';

        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.className = 'floating-banner-container';
        banner.innerHTML = `
            <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="floating-banner-link" aria-label="1日210円で愛犬が生まれ変わる。初回購入で2,000円相当のジャーキー無料プレゼント。1ヶ月試してみる">
                <div class="floating-banner-inner">
                    <div class="floating-banner-top">
                        <img src="${imagePath}1.png" alt="brico 内臓ジャーキー 3袋セット" class="floating-banner-product-image" style="display: block; height: 80px; width: auto; flex-shrink: 0; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));" />

                        <div class="floating-banner-content">
                            <p class="floating-banner-price">
                                1日<span class="floating-banner-amount">210円</span>で
                            </p>
                            <p class="floating-banner-headline">
                                愛犬が<span class="floating-banner-highlight">生まれ変わる</span>
                            </p>

                            <div class="floating-banner-badges">
                                <span class="floating-banner-badge">内蔵3種セット</span>
                                <span class="floating-banner-badge guarantee">✓ 3ヶ月返金保証</span>
                            </div>
                        </div>

                        <div class="floating-banner-offer">
                            <span class="floating-banner-label">期間限定</span>
                            <div class="floating-banner-offer-content">
                                <div>
                                    <p class="floating-banner-offer-text">初回購入で</p>
                                    <p class="floating-banner-offer-price">2,000円<span>相当の</span></p>
                                    <p class="floating-banner-offer-item">ジャーキー<span>無料</span></p>
                                    <p class="floating-banner-offer-gift">🎁 プレゼント!</p>
                                </div>
                                <img src="${imagePath}jerky1.png" alt="特典の無添加ジャーキー" class="floating-banner-jerky-image" />
                            </div>
                        </div>
                    </div>

                    <div class="floating-banner-bottom">
                        <div class="floating-banner-button">
                            <span class="floating-banner-button-text">1ヶ月試してみる</span>
                            <span class="floating-banner-button-arrow">→</span>
                        </div>
                    </div>
                </div>
            </a>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created');

        // Track click event
        const bannerLink = banner.querySelector('.floating-banner-link');
        if (bannerLink) {
            bannerLink.addEventListener('click', () => {
                if (window.gtag) {
                    gtag('event', 'floating_banner_click', {
                        'event_category': 'engagement',
                        'event_label': 'floating_banner',
                        'value': 1
                    });
                }
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

            @keyframes ctaBreathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.035); }
            }

            @keyframes ctaShine {
                0% { transform: translateX(-160%) skewX(-20deg); }
                55%, 100% { transform: translateX(320%) skewX(-20deg); }
            }

            .floating-banner-container {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 999999;
                display: flex;
                justify-content: center;
                padding: 8px;
                animation: slideUp 0.4s ease-out;
            }

            .floating-banner-link {
                display: block;
                width: 100%;
                max-width: 900px;
                text-decoration: none;
                color: inherit;
                background: #e60023;
                border-radius: 16px;
                padding: 2px;
                box-shadow: 0 8px 32px rgba(230, 57, 70, 0.25);
                border: 2px solid #faf4e4;
                transition: all 0.2s ease-out;
                height: 120px;
            }

            .floating-banner-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 12px 40px rgba(230, 57, 70, 0.35);
            }

            .floating-banner-inner {
                background: #e60023;
                border-radius: 12px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .floating-banner-top {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 4px 8px;
                flex: 1;
                overflow: visible;
                position: relative;
            }

            .floating-banner-product-image {
                display: block !important;
                height: 50px !important;
                width: auto;
                flex-shrink: 0;
                object-fit: contain;
                filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
            }

            .floating-banner-content {
                flex: 1;
                min-width: 0;
            }

            .floating-banner-price {
                margin: 1px 0 1px 0;
                display: inline-flex;
                align-items: center;
                background: white;
                color: #e60023;
                padding: 3px 8px;
                border-radius: 16px;
                font-size: 10px;
                font-weight: 700;
                line-height: 1;
            }

            .floating-banner-amount {
                margin: 0 2px;
                font-size: 12px;
                font-weight: 900;
            }

            .floating-banner-headline {
                margin: 1px 0 0 0;
                font-size: 15px;
                font-weight: 900;
                line-height: 1.1;
                color: white;
                white-space: nowrap;
            }

            .floating-banner-highlight {
                color: #ffcf33;
            }

            .floating-banner-badges {
                display: flex;
                flex-wrap: wrap;
                gap: 2px;
                margin-top: 1px;
                position: absolute;
                left: 8px;
                top: -8px;
                z-index: 10;
            }

            .floating-banner-badge {
                display: inline-flex;
                align-items: center;
                gap: 2px;
                background: white;
                color: #e60023;
                padding: 2px 5px;
                border-radius: 3px;
                font-size: 8px;
                font-weight: 700;
                white-space: nowrap;
            }

            .floating-banner-badge.guarantee {
                display: none;
            }


            .floating-banner-offer {
                display: flex;
                flex-direction: column;
                flex-shrink: 0;
                background: white;
                padding: 5px 6px;
                border-radius: 6px;
                border: 1px solid #e3c375;
                position: relative;
            }

            .floating-banner-label {
                position: absolute;
                top: -8px;
                left: 50%;
                transform: translateX(-50%);
                background: #c69524;
                color: white;
                padding: 2px 8px;
                border-radius: 10px;
                font-size: 8px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 2px 4px rgba(0,0,0,0.15);
            }

            .floating-banner-offer-content {
                display: flex;
                align-items: center;
                gap: 4px;
                margin-top: 1px;
            }

            .floating-banner-offer-content > div {
                flex: 1;
                text-align: left;
            }

            .floating-banner-offer-text {
                font-size: 7px;
                font-weight: 700;
                color: #555;
                margin: 0;
            }

            .floating-banner-offer-price {
                font-size: 11px;
                font-weight: 900;
                color: #e60023;
                margin: 0;
                line-height: 1.05;
            }

            .floating-banner-offer-price span {
                font-size: 8px;
                color: #777;
                font-weight: 500;
            }

            .floating-banner-offer-item {
                font-size: 9px;
                font-weight: 900;
                color: #333;
                margin: 0;
                line-height: 1.05;
            }

            .floating-banner-offer-item span {
                color: #e60023;
            }

            .floating-banner-offer-gift {
                font-size: 8px;
                font-weight: 700;
                color: #333;
                margin: 0;
            }

            .floating-banner-jerky-image {
                width: 55px;
                height: 55px;
                flex-shrink: 0;
                border-radius: 5px;
                object-fit: contain;
                border: none;
                background: transparent;
            }

            .floating-banner-bottom {
                padding: 2px 6px 3px 6px;
            }

            .floating-banner-button {
                width: 100%;
                background: #39b54a;
                border: 1px solid #2c8f39;
                color: white;
                padding: 6px 10px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 900;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(57, 181, 74, 0.2);
                animation: ctaBreathe 1.5s ease-in-out infinite;
                transition: all 0.2s ease-out;
            }

            .floating-banner-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 33%;
                background: rgba(255,255,255,0.3);
                filter: blur(12px);
                animation: ctaShine 2.6s ease-in-out infinite;
                z-index: 1;
            }

            .floating-banner-button-text,
            .floating-banner-button-arrow {
                position: relative;
                z-index: 2;
            }

            .floating-banner-button:hover {
                box-shadow: 0 6px 16px rgba(57, 181, 74, 0.3);
            }

            @media (min-width: 640px) {
                .floating-banner-container {
                    padding: 12px 12px;
                }

                .floating-banner-link {
                    border-radius: 16px;
                    padding: 6px;
                }

                .floating-banner-inner {
                    border-radius: 10px;
                }

                .floating-banner-top {
                    gap: 12px;
                    padding: 10px 16px;
                }

                .floating-banner-product-image {
                    display: block;
                    height: 96px;
                }

                .floating-banner-price {
                    font-size: 11px;
                    padding: 4px 10px;
                }

                .floating-banner-amount {
                    font-size: 14px;
                }

                .floating-banner-headline {
                    font-size: 18px;
                }

                .floating-banner-badge {
                    font-size: 10px;
                    padding: 4px 8px;
                }

                .floating-banner-offer {
                    display: flex;
                    flex-direction: column;
                    padding: 8px 10px;
                }

                .floating-banner-offer-content {
                    gap: 10px;
                    margin-top: 4px;
                }

                .floating-banner-jerky-image {
                    width: 56px;
                    height: 56px;
                }

                .floating-banner-button {
                    font-size: 16px;
                    padding: 10px 16px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .floating-banner-container { animation: none; }
                .floating-banner-link { transition: none; }
                .floating-banner-button { animation: none; }
                .floating-banner-button::before { animation: none; }
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
