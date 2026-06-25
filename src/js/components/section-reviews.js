// Section Component: Customer Reviews (⑦-2 お客様からのリアルな喜びの声)

class SectionReviews {
    constructor() {
        this.section = document.getElementById('reviews-section');
        this.reviewsData = REVIEWS || [];
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.init();
    }

    init() {
        this.render();
        this.setupCarousel();
        this.setupAutoplay();
    }

    render() {
        this.section.innerHTML = `
            <h2 class="reviews-heading">
                お客様からの、リアルな喜びの声
            </h2>

            <div class="container">
                <div class="reviews-container">
                    <!-- Multi-Layer Carousel -->
                    <div class="reviews-carousel-wrapper" style="position: relative; overflow: hidden; max-width: 100%; margin: 0 auto;">
                        <div class="reviews-carousel" id="reviews-carousel">
                            <!-- Reviews will be dynamically inserted -->
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <div style="display: flex; justify-content: center; gap: var(--space-lg); margin-top: var(--space-3xl);">
                        <button id="reviews-prev" class="carousel-btn" aria-label="前のレビュー">
                            <span style="font-size: 24px;">←</span>
                        </button>
                        <button id="reviews-next" class="carousel-btn" aria-label="次のレビュー">
                            <span style="font-size: 24px;">→</span>
                        </button>
                    </div>

                    <!-- Pagination Dots -->
                    <div id="reviews-pagination" style="display: flex; justify-content: center; gap: var(--space-sm); margin-top: var(--space-2xl); flex-wrap: wrap;"></div>
                </div>
            </div>

            <style>
                .carousel-btn {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: white;
                    border: 2px solid var(--color-primary-red);
                    color: var(--color-primary-red);
                    font-weight: var(--fw-bold);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all var(--transition-fast);
                }

                .carousel-btn:hover {
                    background: var(--color-primary-red);
                    color: white;
                    transform: scale(1.1);
                }

                .carousel-btn:active {
                    transform: scale(0.95);
                }

                .reviews-carousel {
                    display: flex;
                    gap: var(--space-lg);
                    padding: var(--space-lg);
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                }

                .review-item {
                    scroll-snap-align: start;
                    flex-shrink: 0;
                    flex-basis: 160px;
                    width: 160px;
                    height: 240px;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    cursor: pointer;
                    transition: all var(--transition-base);
                    background: var(--color-light-gray);
                }

                .review-item:hover {
                    transform: scale(1.05);
                    box-shadow: var(--shadow-lg);
                }

                .review-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .pagination-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-medium-gray);
                    cursor: pointer;
                    transition: all var(--transition-fast);
                }

                .pagination-dot.active {
                    background: var(--color-primary-red);
                    width: 24px;
                    border-radius: var(--radius-full);
                }

                .pagination-dot:hover {
                    background: var(--color-primary-red);
                }
            </style>
        `;

        this.renderReviewItems();
        this.setupEventListeners();
    }

    renderReviewItems() {
        const carousel = document.getElementById('reviews-carousel');
        const pagination = document.getElementById('reviews-pagination');

        if (!carousel || !pagination) return;

        // Clear existing items
        carousel.innerHTML = '';
        pagination.innerHTML = '';

        // Create review items
        this.reviewsData.forEach((review, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.dataset.index = index;
            reviewItem.innerHTML = `
                <img src="${review.image}" alt="Customer ${index + 1}" class="review-image" loading="lazy">
            `;
            carousel.appendChild(reviewItem);

            // Pagination dot
            const dot = document.createElement('button');
            dot.className = `pagination-dot ${index < 3 ? 'active' : ''}`;
            dot.dataset.index = index;
            dot.addEventListener('click', () => this.goToReview(index));
            pagination.appendChild(dot);
        });

        // Setup animation on page load
        gsap.fromTo(
            '.review-item',
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: 'back.out',
                scrollTrigger: {
                    trigger: this.section,
                    start: 'top 70%',
                    end: 'top 30%',
                    scrub: false,
                    markers: false,
                },
            }
        );
    }

    setupCarousel() {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        // Snapping behavior
        carousel.addEventListener('scroll', () => {
            const scrollLeft = carousel.scrollLeft;
            const itemWidth = 160 + 16; // width + gap
            const index = Math.round(scrollLeft / itemWidth);
            this.updatePagination(Math.min(index, this.reviewsData.length - 1));
        });
    }

    setupEventListeners() {
        const prevBtn = document.getElementById('reviews-prev');
        const nextBtn = document.getElementById('reviews-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevReview());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextReview());
        }
    }

    prevReview() {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        this.currentIndex = Math.max(0, this.currentIndex - 1);
        const itemWidth = 160 + 16; // width + gap
        const padding = 16; // carousel padding
        carousel.scrollLeft = this.currentIndex * itemWidth + padding;
        this.updatePagination(this.currentIndex);
    }

    nextReview() {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        this.currentIndex = Math.min(this.reviewsData.length - 1, this.currentIndex + 1);
        const itemWidth = 160 + 16; // width + gap
        const padding = 16; // carousel padding
        carousel.scrollLeft = this.currentIndex * itemWidth + padding;
        this.updatePagination(this.currentIndex);
    }

    goToReview(index) {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        this.currentIndex = index;
        const itemWidth = 160 + 16; // width + gap
        const padding = 16; // carousel padding
        carousel.scrollLeft = index * itemWidth + padding;
        this.updatePagination(index);
    }

    updatePagination(index) {
        const dots = document.querySelectorAll('.pagination-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    setupAutoplay() {
        // Auto-scroll through reviews every 5 seconds
        this.autoplayInterval = setInterval(() => {
            if (this.currentIndex < this.reviewsData.length - 1) {
                this.nextReview();
            } else {
                this.currentIndex = 0;
                this.goToReview(0);
            }
        }, 5000);

        // Pause on hover
        this.section.addEventListener('mouseenter', () => {
            clearInterval(this.autoplayInterval);
        });

        this.section.addEventListener('mouseleave', () => {
            this.setupAutoplay();
        });
    }

    destroy() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const sectionReviews = new SectionReviews();
    window.sectionReviews = sectionReviews;
    console.log('✓ Section Reviews Rendered');
});
