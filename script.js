// ===== 8K VISUALLY STUNNING HUBHAWKS WEBSITE 2025 =====
// Advanced JavaScript with GSAP, 3D Effects, and Interactive Animations

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===== DOM ELEMENTS =====
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const heroTitle = document.querySelector('.hero-title');
const heroTagline = document.querySelector('.hero-tagline');
const heroCta = document.querySelector('.hero-cta');
const flyingElements = document.querySelectorAll('.flying-book, .flying-pen, .flying-pencil, .flying-arrow, .flying-star');
const bookCards = document.querySelectorAll('.book-card');
const authorCards = document.querySelectorAll('.author-card');
const serviceCards = document.querySelectorAll('.service-card');
const contactForm = document.querySelector('.contact-form');

// ===== 3D BACKGROUND EFFECT =====
function init3DBackground() {
    const threeDBackground = document.querySelector('.three-d-background');
    
    // Create animated gradient background
    gsap.to(threeDBackground, {
        background: `
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)
        `,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
}

// ===== FLYING ELEMENTS ANIMATION =====
function initFlyingElements() {
    flyingElements.forEach((element, index) => {
        // Create random floating animation for each element
        gsap.to(element, {
            y: -50 + Math.random() * 100,
            x: -30 + Math.random() * 60,
            rotation: -15 + Math.random() * 30,
            duration: 3 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5
        });
        
        // Add hover effect
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.2,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ===== HERO SECTION ANIMATIONS =====
function initHeroAnimations() {
    // Hero title animation
    gsap.fromTo(heroTitle, 
        { 
            opacity: 0, 
            y: 100,
            scale: 0.8
        },
        { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "back.out(1.7)"
        }
    );
    
    // Hero tagline animation
    gsap.fromTo(heroTagline,
        {
            opacity: 0,
            y: 50,
            rotationX: 90
        },
        {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "power3.out"
        }
    );
    
    // Hero CTA button animation
    gsap.fromTo(heroCta,
        {
            opacity: 0,
            scale: 0,
            rotation: -180
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 1,
            ease: "elastic.out(1, 0.3)"
        }
    );
    
    // Continuous glow effect for hero title
    gsap.to(heroTitle, {
        filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
}

// ===== SCROLL TRIGGER ANIMATIONS =====
function initScrollAnimations() {
    // Book cards animation
    gsap.fromTo(bookCards,
        {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".featured-books",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Author cards animation
    gsap.fromTo(authorCards,
        {
            opacity: 0,
            x: -100,
            rotationY: -45
        },
        {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".authors-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Service cards animation
    gsap.fromTo(serviceCards,
        {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".services-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            {
                opacity: 0,
                y: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// ===== INTERACTIVE CARD ANIMATIONS =====
function initCardAnimations() {
    // Book cards hover effects
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Animate book image
            const bookImage = card.querySelector('.book-image');
            gsap.to(bookImage, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            const bookImage = card.querySelector('.book-image');
            gsap.to(bookImage, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Author cards hover effects
    authorCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Animate author image
            const authorImg = card.querySelector('.author-img');
            gsap.to(authorImg, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            const authorImg = card.querySelector('.author-img');
            gsap.to(authorImg, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Service cards hover effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.03,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Animate service icon
            const icon = card.querySelector('.service-icon');
            gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            const icon = card.querySelector('.service-icon');
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            gsap.to(header, {
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(25px)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                duration: 0.3
            });
        } else {
            gsap.to(header, {
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                duration: 0.3
            });
        }
        
        lastScrollY = currentScrollY;
    });
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    searchToggle.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        
        if (searchContainer.classList.contains('active')) {
            gsap.fromTo(searchContainer,
                {
                    opacity: 0,
                    y: -20,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                }
            );
            
            // Focus on input
            setTimeout(() => {
                searchContainer.querySelector('.search-input').focus();
            }, 100);
        }
    });
    
    // Close search on outside click
    document.addEventListener('click', (e) => {
        if (!searchToggle.contains(e.target) && !searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            gsap.fromTo(nav,
                {
                    opacity: 0,
                    y: -20,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                }
            );
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 70
                    },
                    ease: "power3.inOut"
                });
            }
        });
    });
}

// ===== BUTTON ANIMATIONS =====
function initButtonAnimations() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('click', () => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
            });
        });
    });
}

// ===== FORM ANIMATIONS =====
function initFormAnimations() {
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        });
        
        // Form submission animation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            gsap.to(submitBtn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out",
                onComplete: () => {
                    // Show success message
                    showNotification('Message sent successfully!', 'success');
                }
            });
        });
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        opacity: 0;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    gsap.to(notification, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        gsap.to(notification, {
            x: '100%',
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    // Hero parallax
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Book cards parallax
    bookCards.forEach((card, index) => {
        gsap.to(card, {
            yPercent: -20 + (index * 5),
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

// ===== LOADING ANIMATION =====
function initLoadingAnimation() {
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        font-weight: 900;
    `;
    loadingScreen.textContent = 'HubHawks.com';
    
    document.body.appendChild(loadingScreen);
    
    // Animate loading screen
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out",
        onComplete: () => {
            document.body.removeChild(loadingScreen);
            // Start all animations after loading
            initAllAnimations();
        }
    });
}

// ===== INITIALIZE ALL ANIMATIONS =====
function initAllAnimations() {
    init3DBackground();
    initFlyingElements();
    initHeroAnimations();
    initScrollAnimations();
    initCardAnimations();
    initHeaderScroll();
    initSearch();
    initMobileMenu();
    initSmoothScroll();
    initButtonAnimations();
    initFormAnimations();
    initParallaxEffects();
}

// ===== PERFORMANCE OPTIMIZATION =====
function optimizePerformance() {
    // Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set("*", { clearProps: "all" });
    }
}

// ===== ERROR HANDLING =====
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Website error:', e.error);
        showNotification('Something went wrong. Please refresh the page.', 'error');
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchContainer.classList.remove('active');
            nav.classList.remove('active');
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, a, input, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            gsap.to(element, {
                scale: 1.02,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        element.addEventListener('blur', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Start with loading animation
    initLoadingAnimation();
    
    // Initialize performance optimizations
    optimizePerformance();
    
    // Initialize error handling
    handleErrors();
    
    // Initialize accessibility enhancements
    enhanceAccessibility();
    
    // Add some fun interactive effects
    addFunEffects();
});

// ===== FUN INTERACTIVE EFFECTS =====
function addFunEffects() {
    // Cursor trail effect
    let cursorTrail = [];
    const trailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
        `;
        
        document.body.appendChild(dot);
        cursorTrail.push(dot);
        
        if (cursorTrail.length > trailLength) {
            const oldDot = cursorTrail.shift();
            gsap.to(oldDot, {
                opacity: 0,
                scale: 0,
                duration: 0.3,
                onComplete: () => {
                    if (oldDot.parentNode) {
                        oldDot.parentNode.removeChild(oldDot);
                    }
                }
            });
        }
        
        gsap.to(dot, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            delay: 0.1
        });
    });
    
    // Random sparkle effect
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.cssText = `
            position: fixed;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 1000;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            opacity: 0;
        `;
        
        document.body.appendChild(sparkle);
        
        gsap.to(sparkle, {
            opacity: 1,
            scale: 1.5,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(sparkle, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (sparkle.parentNode) {
                            sparkle.parentNode.removeChild(sparkle);
                        }
                    }
                });
            }
        });
    }, 3000);
}

// ===== EXPORT FOR GLOBAL ACCESS =====
window.HubHawksWebsite = {
    showNotification,
    initAllAnimations,
    addFunEffects
}; 