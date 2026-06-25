// GSAP Configuration
gsap.registerPlugin(ScrollTrigger);

// GSAP Global Settings
gsap.config({
    trialWarn: false,
    nullTargetWarn: false,
});

// Custom GSAP defaults
gsap.defaults({
    overwrite: 'auto',
    duration: 0.5,
    ease: 'power2.out',
});

// Disable GSAP on reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0);
}

// ScrollTrigger refresh on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Performance Monitor
const PERFORMANCE = {
    fps: 60,
    enableStats: false,

    init() {
        if (this.enableStats && window.Stats) {
            const stats = new Stats();
            document.body.appendChild(stats.dom);

            const animate = () => {
                stats.update();
                requestAnimationFrame(animate);
            };
            animate();
        }
    },
};

// Utility: Ease Presets
const EASES = {
    snappy: 'power2.out',
    smooth: 'power3.out',
    bouncy: 'back.out',
    elastic: 'elastic.out(1, 0.5)',
    smooth: 'power3.inOut',
};

// Utility: Animation Timings
const TIMINGS = {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
    slowest: 1.5,
};

// Safe area detection
const SAFE_AREA = {
    top: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-top)')) || 0,
    bottom: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)')) || 0,
    left: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)')) || 0,
    right: parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)')) || 0,
};

// Viewport meta
window.addEventListener('load', () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0');
    }
});

// Prevent horizontal scroll
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
});

// Track visibility
const PAGE_VISIBILITY = {
    isVisible: true,

    init() {
        document.addEventListener('visibilitychange', () => {
            this.isVisible = document.visibilityState === 'visible';
            if (this.isVisible) {
                ScrollTrigger.refresh();
            }
        });
    },
};

PAGE_VISIBILITY.init();

console.log('✓ GSAP Configuration Loaded');
