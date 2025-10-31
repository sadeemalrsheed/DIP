// Particle System
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Create particles
const particles = [];
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76, 175, 80, 0.3)';
        ctx.fill();
        
        // Draw connection to mouse
        const distance = Math.sqrt(
            Math.pow(particle.x - mouseX, 2) + 
            Math.pow(particle.y - mouseY, 2)
        );
        
        if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(76, 175, 80, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    });
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// File Upload Functionality
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const imageContainer = document.getElementById('imageContainer');
const placeholderText = document.getElementById('placeholderText');
const previewImage = document.getElementById('previewImage');
const progressContainer = document.getElementById('progressContainer');
const plantName = document.getElementById('plantName');
const plantNameBox = document.getElementById('plantNameBox');
const healthStatus = document.getElementById('healthStatus');
const healthBox = document.getElementById('healthBox');

let uploadedImage = null;

uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = (event) => {
            uploadedImage = event.target.result;
            previewImage.src = uploadedImage;
            previewImage.style.display = 'block';
            placeholderText.style.display = 'none';
            analyzeBtn.disabled = false;
            
            // Reset results
            plantName.textContent = 'Waiting for analysis...';
            plantNameBox.style.background = '#F0FFF0';
            healthStatus.textContent = 'Unknown';
            healthBox.className = 'result-box health-box';
        };
        
        reader.readAsDataURL(file);
    }
});

analyzeBtn.addEventListener('click', () => {
    // Disable buttons during analysis
    analyzeBtn.disabled = true;
    uploadBtn.disabled = true;
    
    // Show progress bar
    progressContainer.style.display = 'block';
    
    // Simulate analysis (replace with actual model call)
    setTimeout(() => {
        showResults();
    }, 2000);
});

function showResults() {
    // Hide progress bar
    progressContainer.style.display = 'none';
    
    // Simulated results - replace with actual model results
    plantName.textContent = 'Aloe Vera';
    
    // Random health status for demo
    const healthStatuses = [
        { text: '✓ Healthy & Excellent', class: 'health-healthy' },
        { text: '⚠ Needs Attention', class: 'health-warning' },
        { text: '✗ Unhealthy', class: 'health-unhealthy' }
    ];
    
    const randomStatus = healthStatuses[Math.floor(Math.random() * healthStatuses.length)];
    healthStatus.textContent = randomStatus.text;
    healthBox.className = 'result-box health-box ' + randomStatus.class;
    
    // Re-enable buttons
    analyzeBtn.disabled = false;
    uploadBtn.disabled = false;
}

// Add this function when you integrate your ML model
function analyzeWithModel(imageData) {
    // Your model code here
    // Example:
    // const result = model.predict(imageData);
    // return result;
}