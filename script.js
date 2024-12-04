// Navbar Scrolling
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const leftScroll = document.querySelector('.scroll-btn.left');
    const rightScroll = document.querySelector('.scroll-btn.right');

    if (leftScroll && rightScroll && navbar) {
        leftScroll.addEventListener('click', () => {
            navbar.scrollBy({ left: -200, behavior: 'smooth' });
        });

        rightScroll.addEventListener('click', () => {
            navbar.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
}
function scrollNavbar(amount) {
    const navbar = document.querySelector('.navbar-wrapper');
    navbar.scrollBy({
        top: 0,
        left: amount,
        behavior: 'smooth'
    });
}
// Slider Management
function setupSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;

    if (prevButton && nextButton && slider) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }
}

// Cart Management
class Cart {
    constructor() {
        this.items = [];
        this.cartCount = document.querySelector('.cart-count');
    }

    addToCart(product) {
        this.items.push(product);
        this.updateCartCount();
    }

    updateCartCount() {
        if (this.cartCount) {
            this.cartCount.textContent = this.items.length;
        }
    }
}

// Carousel Management
function setupCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                carousel.scrollBy({ left: -300, behavior: 'smooth' });
            });

            nextButton.addEventListener('click', () => {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cart = new Cart();
    
    setupNavbarScroll();
    setupSlider();
    setupCarousels();

    // Add to Cart Event Listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            const productName = e.target.closest('.producto').querySelector('h3').textContent;
            const product = { id: productId, name: productName };
            cart.addToCart(product);
        });
    });
});