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
            <div class="reviews-header">
                <h2 class="reviews-heading">
                    お客様からの、リアルな喜びの声
                </h2>
                <p class="reviews-subheading">
                    35人のお客様の笑顔と感動の瞬間
                </p>
            </div>

            <div class="container">
                <div class="reviews-container">
                    <!-- Horizontal Carousel -->
                    <div class="reviews-carousel-wrapper">
                        <div class="reviews-carousel" id="reviews-carousel">
                            <!-- Reviews will be dynamically inserted -->
                        </div>
                    </div>

                    <!-- Carousel Controls -->
                    <div class="reviews-controls">
                        <button id="reviews-prev" class="carousel-btn carousel-btn-prev" aria-label="前のレビュー">
                            ← 前へ
                        </button>
                        <div id="reviews-pagination" class="reviews-pagination"></div>
                        <button id="reviews-next" class="carousel-btn carousel-btn-next" aria-label="次のレビュー">
                            次へ →
                        </button>
                    </div>
                </div>
            </div>

            <style>
                .reviews-header {
                    text-align: center;
                    margin-bottom: var(--space-5xl);
                    animation: fadeInUp 0.8s ease-out;
                }

                .reviews-subheading {
                    font-size: var(--fs-lg);
                    color: rgba(0, 0, 0, 0.6);
                    margin-top: var(--space-lg);
                    font-weight: var(--fw-regular);
                }

                .reviews-carousel-wrapper {
                    position: relative;
                    overflow: hidden;
                    margin: var(--space-3xl) 0;
                    border-radius: var(--radius-lg);
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(230, 57, 70, 0.02));
                    padding: var(--space-3xl) 0;
                }

                .reviews-carousel {
                    display: flex;
                    gap: var(--space-2xl);
                    padding: 0 var(--space-2xl);
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                }

                .reviews-carousel::-webkit-scrollbar {
                    height: 6px;
                }

                .reviews-carousel::-webkit-scrollbar-track {
                    background: rgba(230, 57, 70, 0.1);
                    border-radius: 10px;
                }

                .reviews-carousel::-webkit-scrollbar-thumb {
                    background: var(--color-primary-red);
                    border-radius: 10px;
                }

                .reviews-carousel::-webkit-scrollbar-thumb:hover {
                    background: var(--color-primary-red-dark);
                }

                .carousel-btn {
                    padding: var(--space-lg) var(--space-2xl);
                    border-radius: var(--radius-lg);
                    background: var(--color-primary-red);
                    border: none;
                    color: white;
                    font-weight: var(--fw-bold);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all var(--transition-base);
                    font-size: var(--fs-md);
                    white-space: nowrap;
                    gap: var(--space-sm);
                }

                .carousel-btn:hover {
                    background: var(--color-primary-red-dark);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(230, 57, 70, 0.3);
                }

                .carousel-btn:active {
                    transform: translateY(0);
                }

                .reviews-controls {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-2xl);
                    margin-top: var(--space-4xl);
                    flex-wrap: wrap;
                }

                .review-item {
                    scroll-snap-align: start;
                    flex-shrink: 0;
                    width: 180px;
                    height: 280px;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
                    cursor: pointer;
                    transition: all var(--transition-base);
                    background: var(--color-light-gray);
                    border: 2px solid transparent;
                }

                .review-item:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 16px 40px rgba(230, 57, 70, 0.2);
                    border-color: var(--color-primary-red);
                }

                .review-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .reviews-pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-sm);
                }

                .pagination-dot {
                    width: 10px;
                    height: 10px;
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
            const itemWidth = 180 + 16; // width + gap
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
        const itemWidth = 180 + 16;
        carousel.scrollLeft = this.currentIndex * itemWidth;
        this.updatePagination(this.currentIndex);
    }

    nextReview() {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        this.currentIndex = Math.min(this.reviewsData.length - 1, this.currentIndex + 1);
        const itemWidth = 180 + 16;
        carousel.scrollLeft = this.currentIndex * itemWidth;
        this.updatePagination(this.currentIndex);
    }

    goToReview(index) {
        const carousel = document.getElementById('reviews-carousel');
        if (!carousel) return;

        this.currentIndex = index;
        const itemWidth = 180 + 16;
        carousel.scrollLeft = index * itemWidth;
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
