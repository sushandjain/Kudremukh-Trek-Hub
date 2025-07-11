// Advanced Malenadu Treks JavaScript
(function() {
    'use strict';

    // Constants
    const SCROLL_THRESHOLD = 100;
    const TYPING_SPEED = 50;
    const TYPING_DELAY = 2000;

    // DOM Elements
    const elements = {
        loading: document.getElementById('loading'),
        navbar: document.querySelector('.navbar'),
        navLinks: document.querySelectorAll('.nav-link'),
        heroTitle: document.querySelector('.hero-title'),
        heroSubtitle: document.querySelector('.hero-subtitle'),
        sections: document.querySelectorAll('.section'),
        galleryItems: document.querySelectorAll('.gallery-item'),
        trekCards: document.querySelectorAll('.trek-card'),
        whatsappBtn: document.querySelector('.btn-whatsapp'),
        storeImages: document.querySelectorAll('.store-image-container')
    };

    // State
    let isScrolling = false;
    let ticking = false;
    let currentSection = 0;

    // Initialize application
    function init() {
        setupEventListeners();
        initializeAOS();
        handleLoading();
        setupSmoothScrolling();
        setupIntersectionObserver();
        setupParallaxEffects();
        setupTrekCardAnimations();
        setupGalleryLightbox();
        setupFormValidation();
        setupPerformanceOptimizations();
        setupAccessibility();
    }

    // Event Listeners
    function setupEventListeners() {
        // Window events
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', debounce(handleResize, 250));
        window.addEventListener('load', handlePageLoad);

        // Navigation events
        elements.navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        // Trek card events
        elements.trekCards.forEach(card => {
            card.addEventListener('mouseenter', handleTrekCardHover);
            card.addEventListener('mouseleave', handleTrekCardLeave);
        });

        // Gallery events
        elements.galleryItems.forEach(item => {
            item.addEventListener('click', handleGalleryClick);
        });

        // WhatsApp button events
        if (elements.whatsappBtn) {
            elements.whatsappBtn.addEventListener('click', handleWhatsAppClick);
        }

        // Store image events
        elements.storeImages.forEach(img => {
            img.addEventListener('click', handleStoreImageClick);
        });

        // Keyboard events
        document.addEventListener('keydown', handleKeyDown);
    }

    // Loading Screen
    function handleLoading() {
        const minLoadingTime = 1500; // Minimum loading time for UX
        const startTime = performance.now();

        function hideLoading() {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

            setTimeout(() => {
                elements.loading.classList.add('hidden');
                setTimeout(() => {
                    elements.loading.style.display = 'none';
                    startTypewriterEffect();
                }, 500);
            }, remainingTime);
        }

        // Check if all critical resources are loaded
        if (document.readyState === 'complete') {
            hideLoading();
        } else {
            window.addEventListener('load', hideLoading);
        }
    }

    // Typewriter Effect for Hero Section
    function startTypewriterEffect() {
        const titles = [
            'Discover Hidden Treks of Western Ghats',
            'Explore Karnataka\'s Pristine Mountains',
            'Adventure Awaits in Malenadu Region'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentTitle = '';

        function typeWriter() {
            const fullTitle = titles[titleIndex];
            
            if (isDeleting) {
                currentTitle = fullTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentTitle = fullTitle.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (elements.heroTitle) {
                elements.heroTitle.textContent = currentTitle;
            }
            
            let typeSpeed = isDeleting ? 30 : 60;
            
            if (!isDeleting && charIndex === fullTitle.length) {
                typeSpeed = TYPING_DELAY;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        typeWriter();
    }

    // Scroll Handling
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(updateScrollElements);
            ticking = true;
        }
    }

    function updateScrollElements() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navbar
        updateNavbar(scrollTop);
        
        // Update active navigation
        updateActiveNavigation(scrollTop);
        
        // Update parallax effects
        updateParallaxEffects(scrollTop);
        
        ticking = false;
    }

    function updateNavbar(scrollTop) {
        if (scrollTop > SCROLL_THRESHOLD) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
    }

    function updateActiveNavigation(scrollTop) {
        elements.sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                elements.navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Smooth Scrolling
    function setupSmoothScrolling() {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    smoothScrollTo(offsetTop, 1000);
                }
            });
        });
    }

    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Navigation Click Handler
    function handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            smoothScrollTo(offsetTop, 1000);
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    }

    // Intersection Observer for Animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        
        // Observe all animated elements
        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                
                // Add custom animations
                if (entry.target.classList.contains('trek-card')) {
                    animateTrekCard(entry.target);
                }
                
                if (entry.target.classList.contains('feature-item')) {
                    animateFeatureItem(entry.target);
                }
            }
        });
    }

    // Parallax Effects
    function setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero-section');
        
        parallaxElements.forEach(element => {
            element.style.willChange = 'transform';
        });
    }

    function updateParallaxEffects(scrollTop) {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const rate = scrollTop * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    }

    // Trek Card Animations
    function setupTrekCardAnimations() {
        elements.trekCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const img = card.querySelector('.trek-img');
                if (img) {
                    img.style.transform = 'scale(1.1)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('.trek-img');
                if (img) {
                    img.style.transform = 'scale(1)';
                }
            });
        });
    }

    function animateTrekCard(card) {
        const details = card.querySelectorAll('.trek-details li');
        details.forEach((detail, index) => {
            setTimeout(() => {
                detail.style.opacity = '1';
                detail.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }

    function animateFeatureItem(item) {
        const icon = item.querySelector('.feature-icon');
        const title = item.querySelector('.feature-title');
        const description = item.querySelector('.feature-description');
        
        setTimeout(() => {
            if (icon) icon.style.transform = 'scale(1.1)';
        }, 200);
        
        setTimeout(() => {
            if (title) title.style.opacity = '1';
        }, 400);
        
        setTimeout(() => {
            if (description) description.style.opacity = '1';
        }, 600);
    }

    // Gallery Lightbox
    function setupGalleryLightbox() {
        const modal = createLightboxModal();
        
        elements.galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const bgImage = getComputedStyle(item).backgroundImage;
                const imageUrl = bgImage.slice(5, -2); // Remove 'url("' and '")'
                showLightbox(modal, imageUrl);
            });
        });
    }

    function createLightboxModal() {
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-image" src="" alt="Gallery Image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev">&larr;</button>
                    <button class="lightbox-next">&rarr;</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal events
        modal.querySelector('.lightbox-close').addEventListener('click', () => {
            hideLightbox(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideLightbox(modal);
            }
        });
        
        return modal;
    }

    function showLightbox(modal, imageUrl) {
        const img = modal.querySelector('.lightbox-image');
        img.src = imageUrl;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.querySelector('.lightbox-content').style.transform = 'scale(1)';
        });
    }

    function hideLightbox(modal) {
        modal.style.opacity = '0';
        modal.querySelector('.lightbox-content').style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // WhatsApp Integration
    function handleWhatsAppClick(e) {
        const message = encodeURIComponent('Hello! I\'m interested in booking a trek with Malenadu Treks. Could you please provide more information about your packages?');
        const phone = '919876543210';
        const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
        
        // Add click animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    }

    // Form Validation (if forms are added later)
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', handleFormSubmit);
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // Basic validation
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showFieldError(field, 'This field is required');
            } else {
                clearFieldError(field);
            }
        });
        
        if (isValid) {
            // Process form submission
            showFormSuccess(form);
        }
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function showFormSuccess(form) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
            form.reset();
        }, 5000);
    }

    // Performance Optimizations
    function setupPerformanceOptimizations() {
        // Lazy loading for images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Preload critical resources
        preloadCriticalResources();
    }

    function preloadCriticalResources() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Accessibility Features
    function setupAccessibility() {
        // Add focus management
        setupFocusManagement();
        
        // Add keyboard navigation
        setupKeyboardNavigation();
        
        // Add ARIA labels
        setupARIALabels();
    }

    function setupFocusManagement() {
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    }

    function setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    function setupARIALabels() {
        // Add ARIA labels to interactive elements
        const whatsappBtn = document.querySelector('.btn-whatsapp');
        if (whatsappBtn) {
            whatsappBtn.setAttribute('aria-label', 'Contact us on WhatsApp');
        }
        
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.setAttribute('aria-label', `View gallery image ${index + 1}`);
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
        });
    }

    // Event Handlers
    function handleTrekCardHover(e) {
        const card = e.target.closest('.trek-card');
        if (card) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    }

    function handleTrekCardLeave(e) {
        const card = e.target.closest('.trek-card');
        if (card) {
            card.style.transform = 'translateY(0) scale(1)';
        }
    }

    function handleGalleryClick(e) {
        const item = e.target.closest('.gallery-item');
        if (item) {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 150);
        }
    }

    function handleStoreImageClick(e) {
        const container = e.target.closest('.store-image-container');
        if (container) {
            container.style.transform = 'scale(0.98)';
            setTimeout(() => {
                container.style.transform = 'scale(1)';
            }, 150);
        }
    }

    function handleKeyDown(e) {
        // ESC key to close modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('.lightbox-modal[style*="flex"]');
            if (modal) {
                hideLightbox(modal);
            }
        }
    }

    function handleResize() {
        // Recalculate parallax effects
        updateParallaxEffects(window.pageYOffset);
        
        // Update navigation
        updateActiveNavigation(window.pageYOffset);
    }

    function handlePageLoad() {
        // Initialize AOS after page load
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    // Initialize AOS
    function initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100,
                delay: 100
            });
        }
    }

    // Utility Functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // CSS for lightbox modal
    const lightboxStyles = `
        .lightbox-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }
        
        .lightbox-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 30px;
            color: white;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .lightbox-close:hover {
            color: #ccc;
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid #6fa8dc;
            outline-offset: 2px;
        }
        
        .focused {
            box-shadow: 0 0 0 2px rgba(111, 168, 220, 0.5);
        }
    `;

    // Inject lightbox styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = lightboxStyles;
    document.head.appendChild(styleSheet);

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export functions for global access if needed
    window.MalenaduTreks = {
        init,
        smoothScrollTo,
        showLightbox,
        hideLightbox
    };

})();