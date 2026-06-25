// Counter Animation - Number Count Up Effects

class CounterAnimation {
    constructor() {
        this.counters = [];
        this.init();
    }

    init() {
        this.scanForCounters();
    }

    scanForCounters() {
        // Find all elements with data-counter attribute
        const elements = document.querySelectorAll('[data-counter]');
        elements.forEach((element) => {
            const endValue = parseInt(element.getAttribute('data-counter')) || 0;
            const duration = parseFloat(element.getAttribute('data-counter-duration')) || 2;
            const prefix = element.getAttribute('data-counter-prefix') || '';
            const suffix = element.getAttribute('data-counter-suffix') || '';
            const delay = parseFloat(element.getAttribute('data-counter-delay')) || 0;

            this.addCounter({
                element,
                endValue,
                duration,
                prefix,
                suffix,
                delay,
            });
        });
    }

    addCounter({ element, endValue, duration = 2, prefix = '', suffix = '', delay = 0 }) {
        const counter = {
            element,
            endValue,
            duration,
            prefix,
            suffix,
            delay,
            currentValue: 0,
            hasAnimated: false,
        };

        this.counters.push(counter);

        // Use Intersection Observer to trigger animation when visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !counter.hasAnimated) {
                        this.animateCounter(counter);
                        counter.hasAnimated = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
    }

    animateCounter(counter) {
        const obj = { value: 0 };

        gsap.to(obj, {
            value: counter.endValue,
            duration: counter.duration,
            ease: 'power2.out',
            delay: counter.delay,
            onUpdate: () => {
                const displayValue = this.formatNumber(Math.floor(obj.value));
                counter.element.textContent = `${counter.prefix}${displayValue}${counter.suffix}`;
            },
            onComplete: () => {
                const displayValue = this.formatNumber(counter.endValue);
                counter.element.textContent = `${counter.prefix}${displayValue}${counter.suffix}`;
            },
        });
    }

    formatNumber(num) {
        return num.toLocaleString('ja-JP');
    }

    // Manual trigger for specific counter
    triggerCounter(element) {
        const counter = this.counters.find((c) => c.element === element);
        if (counter && !counter.hasAnimated) {
            this.animateCounter(counter);
            counter.hasAnimated = true;
        }
    }

    // Reset all counters
    resetAll() {
        this.counters.forEach((counter) => {
            counter.hasAnimated = false;
            counter.element.textContent = `${counter.prefix}0${counter.suffix}`;
        });
    }
}

// Percentage Bar Animation
class ProgressBarAnimation {
    constructor() {
        this.bars = [];
        this.init();
    }

    init() {
        this.scanForBars();
    }

    scanForBars() {
        const elements = document.querySelectorAll('[data-progress]');
        elements.forEach((element) => {
            const percentage = parseInt(element.getAttribute('data-progress')) || 0;
            const duration = parseFloat(element.getAttribute('data-progress-duration')) || 1.5;
            const delay = parseFloat(element.getAttribute('data-progress-delay')) || 0;

            this.addBar({
                element,
                percentage,
                duration,
                delay,
            });
        });
    }

    addBar({ element, percentage = 0, duration = 1.5, delay = 0 }) {
        const bar = {
            element,
            percentage,
            duration,
            delay,
            hasAnimated: false,
        };

        this.bars.push(bar);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !bar.hasAnimated) {
                        this.animateBar(bar);
                        bar.hasAnimated = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
    }

    animateBar(bar) {
        const inner = bar.element.querySelector('[data-progress-inner]') || bar.element;

        gsap.fromTo(
            inner,
            { width: '0%' },
            {
                width: `${bar.percentage}%`,
                duration: bar.duration,
                delay: bar.delay,
                ease: 'power3.out',
            }
        );
    }
}

// Number Formatter Utility
class NumberFormatter {
    static toJapanese(num) {
        return num.toLocaleString('ja-JP');
    }

    static toEnglish(num) {
        return num.toLocaleString('en-US');
    }

    static toCurrency(num, currency = '¥') {
        return `${currency}${num.toLocaleString('ja-JP')}`;
    }

    static toPercent(num) {
        return `${num}%`;
    }

    static toCompact(num) {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
        return num.toString();
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const counterAnimation = new CounterAnimation();
    const progressBarAnimation = new ProgressBarAnimation();
    window.counterAnimation = counterAnimation;
    window.progressBarAnimation = progressBarAnimation;
    window.NumberFormatter = NumberFormatter;
    console.log('✓ Counter Animations Initialized');
});
