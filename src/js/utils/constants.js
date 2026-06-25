// Global Constants

const CONSTANTS = {
    /* Colors */
    colors: {
        primaryRed: '#E63946',
        primaryRedDark: '#B81C28',
        primaryRedLight: '#F44E5C',
        darkBlack: '#1A1A1A',
        darkCharcoal: '#2C2C2C',
        white: '#FFFFFF',
        creamWhite: '#FFFAF0',
        lightGray: '#F5F5F5',
        accentGold: '#D4AF37',
    },

    /* Spacing */
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
    },

    /* Animations */
    animations: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
        slowest: '500ms',
    },

    /* Breakpoints */
    breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1024,
    },

    /* Z-index */
    zIndex: {
        dropdown: 100,
        sticky: 200,
        fixed: 300,
        modal: 500,
    },

    /* CTA Button */
    cta: {
        height: '54px',
        heightLarge: '64px',
        borderRadius: '12px',
    },

    /* Asset Paths */
    assets: {
        images: 'image/',
        videos: 'video/',
        reviews: 'review/',
    },

    /* Copy Text */
    copy: {
        ctaPrimary: '定期購入を申し込む',
        ctaSecondary: '詳しく知る',
        badge: 'クラファン支援者様・リピーター様限定',
        countdownDays: '3日間限定募集',
    },
};

// Device Detection
const DEVICE = {
    isMobile: () => window.innerWidth <= CONSTANTS.breakpoints.tablet,
    isTablet: () => window.innerWidth > CONSTANTS.breakpoints.tablet && window.innerWidth < CONSTANTS.breakpoints.desktop,
    isDesktop: () => window.innerWidth >= CONSTANTS.breakpoints.desktop,
    hasTouchScreen: () => {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    },
};

// Scroll Utilities
const SCROLL = {
    scrollToTop: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToElement: (element) => {
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },
    scrollToElementById: (id) => {
        const element = document.getElementById(id);
        SCROLL.scrollToElement(element);
    },
    getCurrentScroll: () => {
        return window.scrollY || document.documentElement.scrollTop;
    },
    getWindowHeight: () => {
        return window.innerHeight || document.documentElement.clientHeight;
    },
    getDocumentHeight: () => {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
    },
};

// localStorage Utilities
const STORAGE = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('localStorage.set error:', e);
        }
    },
    get: (key) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.warn('localStorage.get error:', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('localStorage.remove error:', e);
        }
    },
    clear: () => {
        try {
            localStorage.clear();
        } catch (e) {
            console.warn('localStorage.clear error:', e);
        }
    },
};

// Event Emitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }
}

const eventBus = new EventEmitter();
