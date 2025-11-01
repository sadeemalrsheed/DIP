// Mouse Tracker
const tracker = document.getElementById('tracker');

document.addEventListener('mousemove', (e) => {
    tracker.style.left = e.clientX + 'px';
    tracker.style.top = e.clientY + 'px';
});

// Create Floating Particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDelay = Math.random() * 4 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particlesContainer.appendChild(particle);
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
        uploadArea.style.background = 'linear-gradient(135deg, rgba(139, 195, 174, 0.18) 0%, rgba(163, 177, 138, 0.12) 100%)';
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
        
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

    // Display selected image
    function displayImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            previewContainer.classList.add('active');
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    // Analyze button
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            previewContainer.style.display = 'none';
            loading.classList.add('active');

            // Simulate AI analysis (replace with actual model later)
            setTimeout(() => {
                loading.classList.remove('active');
                resultsContainer.classList.add('active');
                resetBtn.classList.add('active');

                // Demo results
                document.getElementById('plantName').textContent = 'Tomato Plant';
                document.getElementById('healthStatus').textContent = 'Healthy';
                document.getElementById('confidence').textContent = '95%';
            }, 2500);
        });
    }

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            fileInput.value = '';
            imagePreview.src = '';
            previewContainer.classList.remove('active');
            resultsContainer.classList.remove('active');
            resetBtn.classList.remove('active');
            uploadArea.style.display = 'block';
            loading.classList.remove('active');
        });
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