// Kingdom Tattoo - Script principal
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation fluide
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation link
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-gold');
                    link.classList.add('text-white');
                });
                
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-white');
                    activeLink.classList.add('text-gold');
                }
            }
        });
    }
    
    // Scroll reveal animation
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.scroll-reveal');
        
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('revealed');
            }
        });
    }
    
    // Filtres de galerie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Mise à jour des boutons actifs
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrage des éléments
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Effet parallaxe pour la section héro
    function parallaxEffect() {
        const heroSection = document.getElementById('accueil');
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    }
    
    // Animation des particules
    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            
            particle.style.left = randomX + '%';
            particle.style.top = randomY + '%';
            particle.style.animationDelay = randomDelay + 's';
        });
    }
    
    // Effet de typing pour le titre principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Animation des cartes d'artistes
    function animateArtistCards() {
        const artistCards = document.querySelectorAll('.artist-card');
        
        artistCards.forEach((card, index) => {
            card.style.animationDelay = (index * 0.2) + 's';
            card.classList.add('scroll-reveal');
        });
    }
    
    // Effet de hover pour les images de galerie
    function addGalleryHoverEffects() {
        const galleryImages = document.querySelectorAll('.gallery-item img');
        
        galleryImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.filter = 'sepia(1) saturate(2) hue-rotate(45deg) brightness(1.2)';
                this.style.transform = 'scale(1.05)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.filter = 'none';
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Validation du formulaire de contact
    function validateContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input, textarea, select');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (input.hasAttribute('required') && !input.value.trim()) {
                        input.style.borderColor = '#ef4444';
                        isValid = false;
                    } else {
                        input.style.borderColor = '#4b5563';
                    }
                });
                
                if (isValid) {
                    // Simulation d'envoi
                    showNotification('Demande envoyée avec succès !', 'success');
                    form.reset();
                } else {
                    showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                }
            });
        }
    }
    
    // Système de notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            type === 'success' ? 'bg-green-600 text-white' : 
            type === 'error' ? 'bg-red-600 text-white' : 
            'bg-blue-600 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Animation des boutons
    function animateButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Effet de loading pour les images
    function addImageLoadingEffects() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
            
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = 'all 0.5s ease';
        });
    }
    
    // Menu mobile
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        
        if (mobileMenuButton && mobileMenu) {
            // Toggle menu
            mobileMenuButton.addEventListener('click', function() {
                const isHidden = mobileMenu.classList.contains('hidden');
                
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    
                    setTimeout(() => {
                        mobileMenu.style.maxHeight = '500px';
                        mobileMenu.style.opacity = '1';
                    }, 10);
                } else {
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300);
                }
                
                // Animer le bouton hamburger
                this.classList.toggle('active');
            });
            
            // Fermer le menu quand on clique sur un lien
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenuButton.classList.remove('active');
                    }, 300);
                });
            });
        }
    }
    
    // Effet de scroll progressif
    function addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-gold to-yellow-400 z-50 transition-all duration-300';
        progressBar.style.width = '0%';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Animation des liens sociaux
    function animateSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) rotate(5deg)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0deg)';
            });
        });
    }
    
    // Effet de typing pour le sous-titre
    function initTypingEffect() {
        const subtitle = document.querySelector('.text-2xl.md\\:text-3xl');
        if (subtitle) {
            const originalText = subtitle.textContent;
            subtitle.textContent = '';
            typeWriter(subtitle, originalText, 50);
        }
    }
    
    // Initialisation de toutes les fonctions
    function init() {
        updateActiveNavLink();
        revealOnScroll();
        animateParticles();
        animateArtistCards();
        addGalleryHoverEffects();
        validateContactForm();
        animateButtons();
        addImageLoadingEffects();
        initMobileMenu();
        addScrollProgress();
        animateSocialLinks();
        initTypingEffect();
    }
    
    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        revealOnScroll();
        parallaxEffect();
    });
    
    window.addEventListener('resize', function() {
        animateParticles();
    });
    
    // Initialisation
    init();
    
    // Animation d'entrée pour les éléments
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec la classe scroll-reveal
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
    
    // Effet de parallaxe avancé
    function advancedParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', advancedParallax);
    
    // Effet de magnétisme pour les boutons
    function addMagneticEffect() {
        const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .social-link');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    addMagneticEffect();
    
    // Effet de cursor personnalisé
    function initCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'fixed w-6 h-6 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference';
        cursor.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
        });
    }
    
    // Désactiver le cursor personnalisé sur mobile
    if (window.innerWidth > 768) {
        initCustomCursor();
    }
    
    console.log('Kingdom Tattoo - Site chargé avec succès ! 👑');
});
