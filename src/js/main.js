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
        banner.id = 'floating-banner-wrapper';
        banner.className = 'floating-banner-wrapper';
        banner.innerHTML = `
            <div style="pointer-events: none; position: fixed; inset-x: 0; bottom: 0; z-index: 50; display: flex; justify-content: center; padding: 8px; padding-bottom: 8px; gap: 12px;">
                <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" style="pointer-events: auto; display: block; width: 100%; max-width: 900px; overflow: hidden; border-radius: 16px; background: #e60023; padding: 4px; box-shadow: 0 8px 32px rgba(230, 57, 70, 0.25); border: 2px solid #faf4e4; text-decoration: none; color: inherit; transition: all 0.2s ease-out; cursor: pointer;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 40px rgba(230, 57, 70, 0.35)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 8px 32px rgba(230, 57, 70, 0.25)';" aria-label="1日210円で愛犬が生まれ変わる。初回購入で2,000円相当のジャーキー無料プレゼント。1ヶ月試してみる">
                    <div style="background: #e60023; border-radius: 12px; overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 8px; padding: 8px 12px;">
                            <img src="${imagePath}3set.png" alt="brico 内臓ジャーキー 3袋セット" style="display: none; height: 72px; width: auto; flex-shrink: 0; object-fit: contain; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));" />
                            <div style="flex: 1; min-width: 0;">
                                <p style="margin: 2px 0 4px 0; display: inline-flex; align-items: center; background: white; color: #e60023; padding: 3px 8px; border-radius: 20px; font-size: 10px; font-weight: 700; line-height: 1;">1日<span style="margin: 0 3px; font-size: 12px; font-weight: 900;">210円</span>で</p>
                                <p style="margin: 2px 0 0 0; font-size: 15px; font-weight: 900; line-height: 1.25; color: white;">愛犬が<span style="color: #ffcf33;">生まれ変わる</span></p>
                                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
                                    <span style="display: inline-flex; align-items: center; gap: 2px; background: white; color: #e60023; padding: 3px 7px; border-radius: 3px; font-size: 9px; font-weight: 700;">内蔵3種セット</span>
                                    <span style="display: inline-flex; align-items: center; gap: 2px; background: white; color: #c8961e; padding: 3px 7px; border-radius: 3px; font-size: 9px; font-weight: 700; border: 1px solid #e3c375;">✓ 3ヶ月返金保証</span>
                                </div>
                            </div>
                            <div style="display: none; flex-shrink: 0; background: white; padding: 6px 8px; border-radius: 8px; border: 1px solid #e3c375; position: relative; text-align: left;">
                                <span style="position: absolute; top: -8px; left: 50%; transform: translateX(-50%); background: #c69524; color: white; padding: 2px 8px; border-radius: 10px; font-size: 8px; font-weight: 700; white-space: nowrap; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">期間限定</span>
                                <div style="display: flex; align-items: center; gap: 8px; margin-top: 2px;">
                                    <div>
                                        <p style="font-size: 8px; font-weight: 700; color: #555; margin: 0;">初回購入で</p>
                                        <p style="font-size: 13px; font-weight: 900; color: #e60023; margin: 0; line-height: 1.1;">2,000円<span style="font-size: 8px; color: #777; font-weight: 500;">相当の</span></p>
                                        <p style="font-size: 10px; font-weight: 900; color: #333; margin: 0; line-height: 1.1;">ジャーキー<span style="color: #e60023;">無料</span></p>
                                        <p style="font-size: 9px; font-weight: 700; color: #333; margin: 0;">🎁 プレゼント!</p>
                                    </div>
                                    <img src="${imagePath}jerky.jpg" alt="特典の無添加ジャーキー" style="width: 50px; height: 50px; flex-shrink: 0; border-radius: 6px; object-fit: cover; border: 1px solid rgba(0,0,0,0.08);" />
                                </div>
                            </div>
                        </div>
                        <div style="padding: 6px 12px 8px 12px;">
                            <div style="width: 100%; background: #39b54a; border: 1px solid #2c8f39; color: white; padding: 9px 12px; border-radius: 24px; font-size: 14px; font-weight: 900; display: flex; align-items: center; justify-content: center; gap: 6px; position: relative; overflow: hidden; box-shadow: 0 4px 12px rgba(57, 181, 74, 0.2); cursor: pointer; text-decoration: none; animation: ctaBreathe 1.5s ease-in-out infinite; transition: all 0.2s ease-out;" onmouseover="this.style.boxShadow='0 6px 16px rgba(57, 181, 74, 0.3)';" onmouseout="this.style.boxShadow='0 4px 12px rgba(57, 181, 74, 0.2)';">
                                <span style="position: relative; z-index: 2; display: inline;">1ヶ月試してみる</span>
                                <span style="position: relative; z-index: 2; display: inline;">→</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
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

        // Add CSS animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes ctaBreathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.035); }
            }
            @keyframes ctaShine {
                0% { transform: translateX(-160%) skewX(-20deg); }
                55%, 100% { transform: translateX(320%) skewX(-20deg); }
            }
            #floating-banner-wrapper {
                animation: slideUp 0.4s ease-out;
            }
            @media (min-width: 640px) {
                #floating-banner-wrapper img[alt*="3set"] { display: block !important; }
                #floating-banner-wrapper > a > div > div:nth-child(2) > div > div:nth-child(3) { display: flex !important; }
            }
            @media (prefers-reduced-motion: reduce) {
                #floating-banner-wrapper { animation: none; }
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
