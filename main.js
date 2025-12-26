// AI/ML Engineer Portfolio - Main JavaScript
// Neo-cybernetic futurism with interactive neural networks

class NeuralNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        
        this.init();
        this.animate();
    }
    
    init() {
        this.resize();
        this.createNodes();
        this.createConnections();
        
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.updateMouse(e));
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createNodes() {
        const nodeCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        
        for (let i = 0; i < nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 2,
                pulse: Math.random() * Math.PI * 2,
                connections: [],
                color: this.getRandomColor()
            });
        }
    }
    
    createConnections() {
        const maxDistance = 150;
        
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = this.getDistance(this.nodes[i], this.nodes[j]);
                if (distance < maxDistance && Math.random() > 0.7) {
                    this.connections.push({
                        from: i,
                        to: j,
                        strength: Math.random() * 0.5 + 0.5,
                        dataFlow: Math.random() * Math.PI * 2
                    });
                }
            }
        }
    }
    
    getRandomColor() {
        const colors = ['#6366F1', '#14B8A6', '#FFFFFF'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    getDistance(node1, node2) {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
    }
    
    updateMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        
        // Add particle at mouse position
        if (Math.random() > 0.8) {
            this.particles.push({
                x: this.mouse.x,
                y: this.mouse.y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1.0,
                color: '#14B8A6'
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw connections
        this.updateConnections();
        
        // Update and draw nodes
        this.updateNodes();
        
        // Update and draw particles
        this.updateParticles();
        
        requestAnimationFrame(() => this.animate());
    }
    
    updateConnections() {
        this.connections.forEach(conn => {
            const fromNode = this.nodes[conn.from];
            const toNode = this.nodes[conn.to];
            
            // Update data flow
            conn.dataFlow += 0.1;
            
            // Draw connection
            this.ctx.beginPath();
            this.ctx.moveTo(fromNode.x, fromNode.y);
            this.ctx.lineTo(toNode.x, toNode.y);
            
            const gradient = this.ctx.createLinearGradient(
                fromNode.x, fromNode.y, toNode.x, toNode.y
            );
            gradient.addColorStop(0, `rgba(99, 102, 241, ${conn.strength * 0.3})`);
            gradient.addColorStop(0.5, `rgba(20, 184, 166, ${conn.strength * 0.5})`);
            gradient.addColorStop(1, `rgba(99, 102, 241, ${conn.strength * 0.3})`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
            
            // Draw data flow particles
            if (Math.sin(conn.dataFlow) > 0.9) {
                const t = (Math.sin(conn.dataFlow) + 1) / 2;
                const x = fromNode.x + (toNode.x - fromNode.x) * t;
                const y = fromNode.y + (toNode.y - fromNode.y) * t;
                
                this.ctx.beginPath();
                this.ctx.arc(x, y, 2, 0, Math.PI * 2);
                this.ctx.fillStyle = '#14B8A6';
                this.ctx.fill();
            }
        });
    }
    
    updateNodes() {
        this.nodes.forEach(node => {
            // Update pulse
            node.pulse += 0.05;
            const pulseSize = node.radius + Math.sin(node.pulse) * 2;
            
            // Draw node
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
            this.ctx.fillStyle = node.color;
            this.ctx.fill();
            
            // Draw glow
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, pulseSize + 5, 0, Math.PI * 2);
            this.ctx.fillStyle = `${node.color}20`;
            this.ctx.fill();
        });
    }
    
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= 0.02;
            
            if (particle.life > 0) {
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = `${particle.color}${Math.floor(particle.life * 255).toString(16).padStart(2, '0')}`;
                this.ctx.fill();
                return true;
            }
            return false;
        });
    }
}

class PerformanceDashboard {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.charts = {};
        this.metrics = {
            accuracy: 94.7,
            speed: 87.3,
            efficiency: 91.2,
            scalability: 96.8
        };
        
        this.init();
    }
    
    init() {
        this.createDashboard();
        this.animateCounters();
    }
    
    createDashboard() {
        const dashboardHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="metric-card bg-gray-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-lg p-6 hover:border-indigo-500/60 transition-all duration-300">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-gray-300 text-sm font-medium">Model Accuracy</h3>
                        <div class="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center">
                            <div class="w-3 h-3 bg-indigo-400 rounded-full"></div>
                        </div>
                    </div>
                    <div class="metric-value text-3xl font-bold text-white mb-2" data-target="94.7">0</div>
                    <div class="text-teal-400 text-sm">+2.3% from last month</div>
                </div>
                
                <div class="metric-card bg-gray-900/50 backdrop-blur-sm border border-teal-500/30 rounded-lg p-6 hover:border-teal-500/60 transition-all duration-300">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-gray-300 text-sm font-medium">Processing Speed</h3>
                        <div class="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                            <div class="w-3 h-3 bg-teal-400 rounded-full"></div>
                        </div>
                    </div>
                    <div class="metric-value text-3xl font-bold text-white mb-2" data-target="87.3">0</div>
                    <div class="text-teal-400 text-sm">ms per inference</div>
                </div>
                
                <div class="metric-card bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-all duration-300">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-gray-300 text-sm font-medium">Efficiency</h3>
                        <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <div class="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                    </div>
                    <div class="metric-value text-3xl font-bold text-white mb-2" data-target="91.2">0</div>
                    <div class="text-teal-400 text-sm">Resource utilization</div>
                </div>
                
                <div class="metric-card bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all duration-300">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-gray-300 text-sm font-medium">Scalability</h3>
                        <div class="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                            <div class="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        </div>
                    </div>
                    <div class="metric-value text-3xl font-bold text-white mb-2" data-target="96.8">0</div>
                    <div class="text-teal-400 text-sm">Concurrent users</div>
                </div>
            </div>
        `;
        
        this.container.innerHTML = dashboardHTML;
    }
    
    animateCounters() {
        const counters = document.querySelectorAll('.metric-value');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = current.toFixed(1);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toFixed(1);
                }
            };
            
            setTimeout(updateCounter, Math.random() * 500);
        });
    }
}

class TechStack {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.technologies = [
            { name: 'Python', icon: '🐍', level: 95 },
            { name: 'TensorFlow', icon: '🧠', level: 92 },
            { name: 'PyTorch', icon: '🔥', level: 89 },
            { name: 'Docker', icon: '🐳', level: 87 },
            { name: 'Kubernetes', icon: '☸️', level: 84 },
            { name: 'AWS', icon: '☁️', level: 91 },
            { name: 'GCP', icon: '🔧', level: 86 },
            { name: 'MLflow', icon: '📊', level: 88 }
        ];
        
        this.init();
    }
    
    init() {
        this.createTechGrid();
        this.animateSkills();
    }
    
    createTechGrid() {
        const gridHTML = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                ${this.technologies.map(tech => `
                    <div class="tech-item bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
                        <div class="text-4xl mb-3 text-center">${tech.icon}</div>
                        <h3 class="text-white font-medium text-center mb-3">${tech.name}</h3>
                        <div class="skill-bar bg-gray-800 rounded-full h-2 overflow-hidden">
                            <div class="skill-fill bg-gradient-to-r from-indigo-500 to-teal-400 h-full rounded-full transition-all duration-1000" data-level="${tech.level}" style="width: 0%"></div>
                        </div>
                        <div class="text-xs text-gray-400 text-center mt-2">${tech.level}%</div>
                    </div>
                `).join('')}
            </div>
        `;
        
        this.container.innerHTML = gridHTML;
    }
    
    animateSkills() {
        const skillFills = document.querySelectorAll('.skill-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fill = entry.target;
                    const level = parseInt(fill.getAttribute('data-level'));
                    
                    setTimeout(() => {
                        fill.style.width = `${level}%`;
                    }, Math.random() * 300);
                }
            });
        }, { threshold: 0.5 });
        
        skillFills.forEach(fill => observer.observe(fill));
    }
}

class ParticleCursor {
    constructor() {
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.canvas = null;
        this.ctx = null;
        
        this.init();
    }
    
    init() {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        this.canvas.style.opacity = '0.6';
        
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', (e) => this.updateMouse(e));
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    updateMouse(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        
        // Add particles
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: this.mouse.x + (Math.random() - 0.5) * 20,
                y: this.mouse.y + (Math.random() - 0.5) * 20,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                life: 1.0,
                size: Math.random() * 3 + 1,
                color: ['#6366F1', '#14B8A6', '#FFFFFF'][Math.floor(Math.random() * 3)]
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= 0.02;
            particle.size *= 0.98;
            
            if (particle.life > 0) {
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fillStyle = `${particle.color}${Math.floor(particle.life * 255).toString(16).padStart(2, '0')}`;
                this.ctx.fill();
                
                // Add glow
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                this.ctx.fillStyle = `${particle.color}${Math.floor(particle.life * 50).toString(16).padStart(2, '0')}`;
                this.ctx.fill();
                
                return true;
            }
            return false;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural network background
    if (document.getElementById('neural-canvas')) {
        new NeuralNetwork('neural-canvas');
    }
    
    // Initialize performance dashboard
    if (document.getElementById('performance-dashboard')) {
        new PerformanceDashboard('performance-dashboard');
    }
    
    // Initialize tech stack
    if (document.getElementById('tech-stack')) {
        new TechStack('tech-stack');
    }
    
    // Initialize particle cursor
    new ParticleCursor();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover effects
    initHoverEffects();
});

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.scroll-animate').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initHoverEffects() {
    document.querySelectorAll('.hover-3d').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05)';
            el.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            el.style.boxShadow = 'none';
        });
    });
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-teal-600' : 
        type === 'error' ? 'bg-red-600' : 
        'bg-indigo-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}