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
        const banner = document.createElement('div');
        banner.id = 'floating-banner';
        banner.innerHTML = `
            <div class="fb-hearts"></div>

            <div class="fb-container">
                <!-- Left: Product Image -->
                <div class="fb-left">
                    <img src="image/3set.png" alt="内臓3種セット" class="fb-product-img">
                </div>

                <!-- Center: Main Content -->
                <div class="fb-center">
                    <!-- Speech Bubble -->
                    <div class="fb-speech-bubble">
                        <span class="fb-day">1日</span>
                        <span class="fb-price">210円</span>
                        <span class="fb-de">で</span>
                    </div>

                    <!-- Main Message -->
                    <div class="fb-main-message">
                        <div class="fb-message-line1">愛犬が</div>
                        <div class="fb-message-line2">生まれ変わる</div>
                    </div>

                    <!-- Cards Row -->
                    <div class="fb-cards-row">
                        <!-- Card 1: Organs -->
                        <div class="fb-card fb-card-organs">
                            <div class="fb-card-title">内臓3種セット</div>
                            <div class="fb-organs-icons">
                                <div class="fb-organ-icon">🫀</div>
                                <div class="fb-organ-icon">❤️</div>
                                <div class="fb-organ-icon">🦴</div>
                            </div>
                            <div class="fb-dog-icon">🐕</div>
                        </div>

                        <!-- Card 2: Guarantee -->
                        <div class="fb-card fb-card-guarantee">
                            <div class="fb-guarantee-text">3ヶ月</div>
                            <div class="fb-guarantee-badge">返金保証</div>
                            <div class="fb-stars">★★★★★</div>
                        </div>
                    </div>
                </div>

                <!-- Right: Gift Card -->
                <div class="fb-right">
                    <div class="fb-gift-card">
                        <div class="fb-ribbon">期間限定</div>

                        <div class="fb-gift-text">初回購入で</div>
                        <div class="fb-gift-price">2,000円</div>
                        <div class="fb-gift-sub">相当の</div>
                        <div class="fb-gift-product">ジャーキー</div>
                        <div class="fb-gift-action">無料プレゼント!</div>

                        <div class="fb-jerky-display">
                            <img src="image/jerky.png" alt="ジャーキー" class="fb-jerky-img">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom: CTA Button -->
            <div class="fb-cta-button">
                <div class="fb-sparkles"></div>
                <span class="fb-cta-text">1ヶ月試してみる</span>
                <div class="fb-play-icon">▶</div>
            </div>
        `;

        document.body.appendChild(banner);
        console.log('✓ Floating banner created');

        // Setup interactions
        const ctaBtn = banner.querySelector('.fb-cta-button');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', () => {
                if (window.gtag) {
                    gtag('event', 'floating_banner_click', {
                        'event_category': 'engagement',
                        'event_label': 'floating_banner_cta',
                        'value': 1
                    });
                }
                window.location.href = 'https://bricodog.official.ec/items/148533123';
            });

            // Hover effect
            ctaBtn.addEventListener('mouseover', () => {
                ctaBtn.style.transform = 'scale(1.02)';
            });

            ctaBtn.addEventListener('mouseout', () => {
                ctaBtn.style.transform = 'scale(1)';
            });

            // Press effect
            ctaBtn.addEventListener('mousedown', () => {
                ctaBtn.style.transform = 'scale(0.98)';
            });

            ctaBtn.addEventListener('mouseup', () => {
                ctaBtn.style.transform = 'scale(1.02)';
            });
        }

        // Add CSS styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translateY(110px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @keyframes heartFloat {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }

            @keyframes ctaBreathe {
                0%, 100% { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }
                50% { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); }
            }

            @keyframes sparkle {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }

            #floating-banner {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                z-index: 999999;
                background: linear-gradient(135deg, #ff0037 0%, #d9002c 100%);
                display: flex;
                flex-direction: column;
                animation: slideUp 0.4s ease-out;
                animation-keyframes: slideUp {
                    from { transform: translateY(200px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            }

            /* Heart Background Pattern */
            .fb-hearts {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0.15;
                background-image: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 15%, transparent 15%),
                                  radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.3) 20%, transparent 20%),
                                  radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.2) 18%, transparent 18%),
                                  radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.25) 16%, transparent 16%);
                animation: heartFloat 4s ease-in-out infinite;
            }

            .fb-container {
                position: relative;
                width: 100%;
                height: 110px;
                display: flex;
                align-items: stretch;
                gap: 8px;
                padding: 0 8px;
            }

            /* Left: Product Image */
            .fb-left {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .fb-product-img {
                height: 100%;
                object-fit: contain;
                filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
            }

            /* Center: Main Content */
            .fb-center {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 6px 0;
                position: relative;
            }

            /* Speech Bubble */
            .fb-speech-bubble {
                background: white;
                border-radius: 999px;
                padding: 6px 16px;
                display: flex;
                align-items: baseline;
                gap: 4px;
                width: fit-content;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }

            .fb-day {
                font-size: 13px;
                font-weight: 600;
                color: #333;
            }

            .fb-price {
                font-size: 16px;
                font-weight: bold;
                color: #ff0037;
            }

            .fb-de {
                font-size: 12px;
                color: #333;
                font-weight: 600;
            }

            /* Main Message */
            .fb-main-message {
                line-height: 1;
                margin: 2px 0;
            }

            .fb-message-line1,
            .fb-message-line2 {
                font-size: 20px;
                font-weight: bold;
                color: white;
                text-shadow:
                    0 2px 4px rgba(0, 0, 0, 0.3),
                    0 0 10px rgba(212, 175, 55, 0.6);
                letter-spacing: 1px;
            }

            /* Cards Row */
            .fb-cards-row {
                display: flex;
                gap: 6px;
                height: 50px;
            }

            .fb-card {
                border-radius: 16px;
                background: white;
                padding: 6px 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                flex: 1;
            }

            .fb-card-organs {
                border: 3px solid #ff0037;
            }

            .fb-card-title {
                font-size: 12px;
                font-weight: bold;
                color: #ff0037;
                margin-bottom: 3px;
            }

            .fb-organs-icons {
                display: flex;
                gap: 4px;
                justify-content: center;
                margin-bottom: 2px;
            }

            .fb-organ-icon {
                font-size: 14px;
            }

            .fb-dog-icon {
                font-size: 12px;
                margin-top: 2px;
            }

            .fb-card-guarantee {
                border: 3px solid #d4af37;
            }

            .fb-guarantee-text {
                font-size: 14px;
                font-weight: bold;
                color: #d4af37;
            }

            .fb-guarantee-badge {
                font-size: 11px;
                font-weight: bold;
                color: #d4af37;
            }

            .fb-stars {
                font-size: 10px;
                color: #d4af37;
                margin-top: 2px;
            }

            /* Right: Gift Card */
            .fb-right {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
            }

            .fb-gift-card {
                background: white;
                border-radius: 20px;
                padding: 8px 12px;
                position: relative;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                text-align: center;
                min-width: 140px;
            }

            .fb-ribbon {
                position: absolute;
                top: -8px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #d4af37, #e8c547);
                color: white;
                padding: 2px 12px;
                border-radius: 12px;
                font-size: 10px;
                font-weight: bold;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            }

            .fb-gift-text {
                font-size: 10px;
                color: #333;
                margin-top: 6px;
                font-weight: 600;
            }

            .fb-gift-price {
                font-size: 24px;
                font-weight: bold;
                color: #ff0037;
                line-height: 1;
                margin: 2px 0;
            }

            .fb-gift-sub {
                font-size: 9px;
                color: #333;
                font-weight: 600;
            }

            .fb-gift-product {
                font-size: 10px;
                color: #333;
                font-weight: bold;
            }

            .fb-gift-action {
                font-size: 11px;
                font-weight: bold;
                color: #ff0037;
            }

            .fb-jerky-display {
                height: 35px;
                margin-top: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }

            .fb-jerky-img {
                height: 100%;
                object-fit: contain;
            }

            /* Bottom: CTA Button */
            .fb-cta-button {
                position: relative;
                width: calc(100% - 32px);
                height: 50px;
                margin: 6px 16px 8px 16px;
                background: linear-gradient(135deg, #48d64c 0%, #1b9d2d 100%);
                border: 3px solid white;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 16px;
                cursor: pointer;
                transition: transform 0.2s ease;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                animation: ctaBreathe 2s ease-in-out infinite;
                font-weight: bold;
                color: white;
                flex-shrink: 0;
            }

            .fb-cta-button:hover {
                transform: scale(1.02);
            }

            .fb-cta-button:active {
                transform: scale(0.98);
            }

            .fb-sparkles {
                position: absolute;
                left: 12px;
                width: 16px;
                height: 16px;
                background: radial-gradient(circle, white 20%, transparent 70%);
                border-radius: 50%;
                animation: sparkle 1.5s ease-in-out infinite;
            }

            .fb-sparkles::before,
            .fb-sparkles::after {
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                background: radial-gradient(circle, white 30%, transparent 70%);
                border-radius: 50%;
                animation: sparkle 1.5s ease-in-out infinite;
            }

            .fb-sparkles::before {
                top: -12px;
                left: 4px;
                animation-delay: 0.3s;
            }

            .fb-sparkles::after {
                top: 12px;
                left: -8px;
                animation-delay: 0.6s;
            }

            .fb-cta-text {
                font-size: 18px;
                font-weight: bold;
                flex: 1;
                text-align: center;
            }

            .fb-play-icon {
                font-size: 20px;
                color: white;
                font-weight: bold;
            }

            /* Responsive */
            @media (max-width: 1024px) {
                .fb-main-message {
                    margin: 1px 0;
                }

                .fb-message-line1,
                .fb-message-line2 {
                    font-size: 16px;
                }

                .fb-cta-text {
                    font-size: 14px;
                }
            }

            @media (max-width: 768px) {
                #floating-banner {
                    height: 90px;
                }

                .fb-container {
                    gap: 6px;
                    padding: 0 6px;
                }

                .fb-speech-bubble {
                    padding: 4px 12px;
                }

                .fb-day {
                    font-size: 11px;
                }

                .fb-price {
                    font-size: 13px;
                }

                .fb-message-line1,
                .fb-message-line2 {
                    font-size: 13px;
                }

                .fb-cards-row {
                    gap: 4px;
                    height: 40px;
                }

                .fb-card {
                    padding: 4px 8px;
                    border-radius: 12px;
                }

                .fb-card-title {
                    font-size: 10px;
                }

                .fb-gift-card {
                    min-width: 120px;
                    padding: 6px 10px;
                }

                .fb-gift-price {
                    font-size: 18px;
                }

                .fb-cta-text {
                    font-size: 12px;
                }
            }

            @media (max-width: 480px) {
                #floating-banner {
                    height: 80px;
                }

                .fb-left {
                    flex: 0 0 50px;
                }

                .fb-center {
                    flex: 1;
                    padding: 4px 0;
                    gap: 2px;
                }

                .fb-speech-bubble {
                    padding: 3px 10px;
                }

                .fb-message-line1,
                .fb-message-line2 {
                    font-size: 12px;
                }

                .fb-cards-row {
                    height: 32px;
                }

                .fb-gift-card {
                    min-width: 100px;
                    padding: 4px 8px;
                }

                .fb-gift-price {
                    font-size: 16px;
                }

                .fb-cta-text {
                    font-size: 10px;
                }

                .fb-play-icon {
                    font-size: 16px;
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
