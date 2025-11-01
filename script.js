//  Mouse Tracker with smooth following
const tracker = document.getElementById('tracker');
let mouseX = 0, mouseY = 0;
let trackerX = 0, trackerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth animation loop
function animateTracker() {
    const dx = mouseX - trackerX;
    const dy = mouseY - trackerY;
    
    trackerX += dx * 0.1;
    trackerY += dy * 0.1;
    
    tracker.style.left = trackerX + 'px';
    tracker.style.top = trackerY + 'px';
    
    requestAnimationFrame(animateTracker);
}

animateTracker();

//  Enhanced Particles with Mouse Interaction
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create enhanced particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
    
    // Mouse interaction with particles
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const dx = e.clientX - particleX;
            const dy = e.clientY - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const force = (150 - distance) / 150;
                const moveX = -(dx / distance) * force * 30;
                const moveY = -(dy / distance) * force * 30;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
                particle.style.opacity = 1;
            } else {
                particle.style.transform = 'translate(0, 0) scale(1)';
                particle.style.opacity = 0.6;
            }
        });
    });
}

// File Upload Functionality
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn');
const loading = document.getElementById('loading');
const resultsContainer = document.getElementById('resultsContainer');
const resetBtn = document.getElementById('resetBtn');

// Check if elements exist (for pages without upload functionality)
if (uploadArea && fileInput) {
    // Click to upload
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#457b67';
        uploadArea.style.transform = 'scale(1.02)';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.transform = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.transform = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            displayImage(file);
        }
    });

    // File input change
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            displayImage(file);
        }
    });

    // Display selected image with smooth transition
    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            
            // Smooth transition
            uploadArea.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            uploadArea.style.transform = 'scale(0.95)';
            uploadArea.style.opacity = '0';
            
            setTimeout(() => {
                uploadArea.style.display = 'none';
                previewContainer.style.opacity = '0';
                previewContainer.style.transform = 'scale(0.95)';
                previewContainer.classList.add('active');
                
                setTimeout(() => {
                    previewContainer.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    previewContainer.style.opacity = '1';
                    previewContainer.style.transform = 'scale(1)';
                }, 50);
            }, 300);
        };
        reader.readAsDataURL(file);
    }

    // Analyze button with smooth transitions
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            // Smooth hide preview
            previewContainer.style.transition = 'all 0.4s ease';
            previewContainer.style.opacity = '0';
            previewContainer.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                previewContainer.style.display = 'none';
                loading.classList.add('active');
                loading.style.opacity = '0';
                loading.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    loading.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    loading.style.opacity = '1';
                    loading.style.transform = 'scale(1)';
                }, 50);
            }, 300);

            // Simulate AI analysis with smooth transition
            setTimeout(() => {
                loading.style.opacity = '0';
                loading.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    loading.classList.remove('active');
                    resultsContainer.style.opacity = '0';
                    resultsContainer.style.transform = 'translateY(30px)';
                    resultsContainer.classList.add('active');
                    resetBtn.classList.add('active');
                    
                    setTimeout(() => {
                        resultsContainer.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        resultsContainer.style.opacity = '1';
                        resultsContainer.style.transform = 'translateY(0)';
                    }, 50);

                    // Demo results with stagger animation
                    setTimeout(() => {
                        document.getElementById('plantName').textContent = 'Tomato Plant';
                    }, 200);
                    setTimeout(() => {
                        document.getElementById('healthStatus').textContent = 'Healthy';
                    }, 400);
                    setTimeout(() => {
                        document.getElementById('confidence').textContent = '95%';
                    }, 600);
                    
                    // 🎉 Trigger confetti on success
                    setTimeout(() => {
                        createConfetti();
                    }, 800);
                }, 400);
            }, 2500);
        });
    }

    // Reset button with smooth transitions
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Smooth fade out
            resultsContainer.style.transition = 'all 0.4s ease';
            resultsContainer.style.opacity = '0';
            resultsContainer.style.transform = 'translateY(-30px)';
            
            setTimeout(() => {
                fileInput.value = '';
                imagePreview.src = '';
                previewContainer.classList.remove('active');
                resultsContainer.classList.remove('active');
                resetBtn.classList.remove('active');
                loading.classList.remove('active');
                
                // Smooth fade in upload area
                uploadArea.style.display = 'block';
                uploadArea.style.opacity = '0';
                uploadArea.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    uploadArea.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    uploadArea.style.opacity = '1';
                    uploadArea.style.transform = 'scale(1)';
                }, 50);
            }, 400);
        });
    }
}

//  Magnetic Button Effect
function addMagneticEffect(button) {
    if (!button) return;
    
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.15;
        const moveY = y * 0.15;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    });
}

if (analyzeBtn) addMagneticEffect(analyzeBtn);
if (resetBtn) addMagneticEffect(resetBtn);

//  3D Tilt Effect for Cards
const cards = document.querySelectorAll('.result-card, .about-card, .feature-card-detailed');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    });
});

//  Cursor Trail Effect
let cursorTrail = [];
const trailLength = 8;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
    
    drawCursorTrail();
});

function drawCursorTrail() {
    const existingTrails = document.querySelectorAll('.cursor-trail');
    existingTrails.forEach(trail => trail.remove());
    
    cursorTrail.forEach((point, index) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: ${12 - index}px;
            height: ${12 - index}px;
            background: radial-gradient(circle, rgba(139, 195, 174, ${0.6 - index * 0.08}), transparent);
            border-radius: 50%;
            pointer-events: none;
            left: ${point.x}px;
            top: ${point.y}px;
            transform: translate(-50%, -50%);
            z-index: 9999;
            animation: trailFade 0.5s ease-out forwards;
        `;
        document.body.appendChild(trail);
    });
}

// Click Ripple Effect
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.cssText = `
        position: fixed;
        width: 30px;
        height: 30px;
        border: 3px solid rgba(139, 195, 174, 0.8);
        border-radius: 50%;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: rippleExpand 0.8s ease-out forwards;
    `;
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 800);
});

//  Dynamic Color Shift on Scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    const hue = 150 + (scrollPercent * 30);
    header.style.backdropFilter = `blur(30px) saturate(180%) hue-rotate(${hue - 150}deg)`;
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        header.style.backdropFilter = 'blur(30px) saturate(180%)';
    }, 150);
});

// Parallax Effect for Hero
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
        heroSection.style.opacity = 1 - (scrolled / 500);
    });
}

// Text Glow on Hover
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('mousemove', (e) => {
        const rect = heroTitle.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        heroTitle.style.textShadow = `
            ${x / 10}px ${y / 10}px 20px rgba(139, 195, 174, 0.5),
            ${x / 5}px ${y / 5}px 40px rgba(69, 123, 103, 0.3)
        `;
    });
    
    heroTitle.addEventListener('mouseleave', () => {
        heroTitle.style.textShadow = 'none';
    });
}

//  Success Confetti Effect
function createConfetti() {
    const colors = ['#8BC3AE', '#a3b18a', '#457b67', '#91a68d'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            opacity: ${Math.random()};
            transform: rotate(${Math.random() * 360}deg);
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Active navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-card, .feature-card-detailed, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
