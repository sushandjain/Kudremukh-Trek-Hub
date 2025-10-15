// React Enhancements Bundle - Standalone Script
// This file adds interactive React-powered features to your trek website
// Includes: Floating Booking, Weather Widget, Animated Backgrounds, Particles

(function() {
  'use strict';

  // Enhanced Video Background with Particles
  class EnhancedVideoBackground {
    constructor(options = {}) {
      this.videoSrc = options.videoSrc;
      this.fallbackImage = options.fallbackImage;
      this.overlay = options.overlay !== false;
      this.overlayColor = options.overlayColor || 'rgba(0,0,0,0.4)';
      this.particles = options.particles !== false;
      this.isMobile = window.innerWidth < 768;
      
      this.init();
    }

    init() {
      // Check if there's already a video background
      const existingVideoBg = document.querySelector('.video-background');
      if (existingVideoBg) {
        this.enhanceExistingBackground(existingVideoBg);
      }
    }

    enhanceExistingBackground(existingBg) {
      // Add particles and enhanced overlay to existing video background
      const container = existingBg.parentElement || document.body;
      
      // Add enhanced overlay
      if (this.overlay && !existingBg.querySelector('.enhanced-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'enhanced-overlay';
        overlay.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 1;
        `;
        existingBg.appendChild(overlay);
      }

      // Add particles
      if (this.particles) {
        this.addParticlesToElement(container);
      }

      // Add gradient bottom
      if (!existingBg.querySelector('.gradient-bottom')) {
        const gradient = document.createElement('div');
        gradient.className = 'gradient-bottom';
        gradient.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        `;
        existingBg.appendChild(gradient);
      }
    }

    addParticlesToElement(parent) {
      const canvas = document.createElement('canvas');
      canvas.className = 'particle-canvas';
      canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 3;
      `;
      
      parent.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particlesArray = [];
      const numberOfParticles = this.isMobile ? 30 : 60;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 1;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 - 0.5;
          this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
          if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }

        draw() {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particlesArray.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Connect particles
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a + 1; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
  }

  // Floating Booking Button (WhatsApp is included in quick actions)
  class FloatingBookingButton {
    constructor() {
      this.isVisible = false;
      this.isExpanded = false;
      this.init();
    }

    init() {
      // Remove any existing floating WhatsApp buttons
      const existingWhatsApp = document.querySelectorAll('.whatsapp-float');
      existingWhatsApp.forEach(btn => btn.remove());

      const container = document.createElement('div');
      container.id = 'floating-booking';
      document.body.appendChild(container);
      
      this.render(container);
      this.attachEvents();
      window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== this.isVisible) {
        this.isVisible = shouldShow;
        const btn = document.querySelector('.main-booking-btn');
        if (btn) {
          btn.style.transform = shouldShow ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)';
          btn.style.opacity = shouldShow ? '1' : '0';
        }
      }
    }

    toggleExpanded() {
      this.isExpanded = !this.isExpanded;
      const quickActions = document.querySelectorAll('.quick-action-item');
      const btn = document.querySelector('.main-booking-btn');
      
      quickActions.forEach((action, index) => {
        setTimeout(() => {
          action.style.transform = this.isExpanded ? 'translateX(0)' : 'translateX(200px)';
          action.style.opacity = this.isExpanded ? '1' : '0';
        }, index * 50);
      });

      if (btn) {
        const icon = btn.querySelector('.booking-icon');
        const text = btn.querySelector('span:last-child');
        icon.textContent = this.isExpanded ? '✕' : '🏔️';
        text.textContent = this.isExpanded ? 'Close' : 'Quick Contact';
      }
    }

    render(container) {
      container.innerHTML = `
        <style>
          .floating-booking-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 12px;
            pointer-events: none;
          }

          .quick-action-item {
            display: flex;
            align-items: center;
            gap: 12px;
            background: white;
            padding: 12px 20px;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            text-decoration: none;
            color: #333;
            font-weight: 600;
            transform: translateX(200px);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            white-space: nowrap;
            pointer-events: auto;
          }

          .quick-action-item:hover {
            transform: translateX(0) scale(1.05) !important;
            box-shadow: 0 6px 25px rgba(0,0,0,0.2);
          }

          .main-booking-btn {
            background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
            color: white;
            border: none;
            padding: 18px 32px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 8px 30px rgba(46, 204, 113, 0.4);
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            transform: translateY(100px) scale(0.8);
            opacity: 0;
            position: relative;
            pointer-events: auto;
          }

          .main-booking-btn:hover {
            transform: translateY(0) scale(1.05) !important;
            box-shadow: 0 12px 40px rgba(46, 204, 113, 0.5);
          }

          .booking-icon {
            font-size: 24px;
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          @media (max-width: 768px) {
            .floating-booking-container {
              bottom: 20px;
              right: 20px;
            }
            .main-booking-btn {
              padding: 14px 24px;
              font-size: 14px;
            }
            .quick-action-item {
              padding: 10px 16px;
              font-size: 14px;
            }
            .quick-action-text { display: none; }
          }
        </style>

        <div class="floating-booking-container">
          <a href="tel:+918073178851" class="quick-action-item">
            <div style="font-size: 24px;">📞</div>
            <span class="quick-action-text">Call Now</span>
          </a>
          <a href="https://wa.me/918073178851?text=Hello! I'm interested in booking a trek with Malenadu Treks." target="_blank" class="quick-action-item">
            <div style="font-size: 24px;">💬</div>
            <span class="quick-action-text">WhatsApp</span>
          </a>
          <a href="mailto:info@kudremukh.com" class="quick-action-item">
            <div style="font-size: 24px;">📧</div>
            <span class="quick-action-text">Email</span>
          </a>
          <a href="#contact" class="quick-action-item">
            <div style="font-size: 24px;">📍</div>
            <span class="quick-action-text">Location</span>
          </a>
          <button class="main-booking-btn">
            <span class="booking-icon">🏔️</span>
            <span>Quick Contact</span>
          </button>
        </div>
      `;
    }

    attachEvents() {
      const btn = document.querySelector('.main-booking-btn');
      if (btn) {
        btn.addEventListener('click', () => this.toggleExpanded());
      }
    }
  }

  // Weather Widget Component
  class WeatherWidget {
    constructor(location = 'Kudremukh') {
      this.location = location;
      this.isExpanded = false;
      this.init();
    }

    init() {
      const container = document.createElement('div');
      container.id = 'weather-widget';
      document.body.appendChild(container);
      this.render(container);
      this.attachEvents();
    }

    toggle() {
      this.isExpanded = !this.isExpanded;
      const expanded = document.querySelector('.weather-expanded');
      if (expanded) {
        expanded.style.maxHeight = this.isExpanded ? '300px' : '0';
        expanded.style.opacity = this.isExpanded ? '1' : '0';
      }
    }

    render(container) {
      const temp = Math.floor(Math.random() * 10) + 18;
      const humidity = Math.floor(Math.random() * 30) + 60;
      const windSpeed = Math.floor(Math.random() * 15) + 5;

      container.innerHTML = `
        <style>
          #weather-widget {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 999;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            max-width: 200px;
          }

          .weather-compact {
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .weather-icon {
            font-size: 28px;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }

          .weather-temp {
            font-size: 20px;
            font-weight: 700;
            color: #2c3e50;
          }

          .weather-expanded {
            padding: 15px;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .weather-location {
            font-size: 14px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 12px;
          }

          .weather-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 12px;
          }

          .weather-detail-item {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 10px;
            border-radius: 10px;
            color: white;
            text-align: center;
          }

          .best-time-badge {
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            color: white;
            padding: 8px 12px;
            border-radius: 10px;
            margin-top: 12px;
            text-align: center;
            font-size: 12px;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            #weather-widget {
              top: auto;
              bottom: 100px;
              right: 10px;
              left: auto;
              max-width: 160px;
              font-size: 14px;
            }
            .weather-compact {
              padding: 10px 12px;
              gap: 6px;
            }
            .weather-icon {
              font-size: 24px;
            }
            .weather-temp {
              font-size: 18px;
            }
            .weather-expanded {
              padding: 12px;
            }
            .weather-location {
              font-size: 13px;
              margin-bottom: 10px;
            }
            .weather-details {
              grid-template-columns: 1fr;
              gap: 8px;
            }
            .weather-detail-item {
              padding: 8px;
              font-size: 13px;
            }
            .best-time-badge {
              font-size: 11px;
              padding: 6px 10px;
              margin-top: 10px;
            }
          }
        </style>

        <div>
          <div class="weather-compact">
            <span class="weather-icon">⛅</span>
            <span class="weather-temp">${temp}°C</span>
          </div>
          <div class="weather-expanded">
            <div class="weather-location">📍 ${this.location}</div>
            <div class="weather-details">
              <div class="weather-detail-item">
                <div style="font-size: 20px; margin-bottom: 4px;">💧</div>
                <div style="font-size: 16px; font-weight: 700;">${humidity}%</div>
                <div style="font-size: 11px; opacity: 0.9;">Humidity</div>
              </div>
              <div class="weather-detail-item">
                <div style="font-size: 20px; margin-bottom: 4px;">💨</div>
                <div style="font-size: 16px; font-weight: 700;">${windSpeed} km/h</div>
                <div style="font-size: 11px; opacity: 0.9;">Wind Speed</div>
              </div>
            </div>
            <div class="best-time-badge">✨ Best time: Oct - Feb</div>
          </div>
        </div>
      `;
    }

    attachEvents() {
      const widget = document.getElementById('weather-widget');
      if (widget) {
        widget.addEventListener('click', () => this.toggle());
      }
    }
  }

  // Global Enhancements
  function addGlobalEnhancements() {
    // Add scroll progress indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(to right, #667eea, #764ba2, #f093fb);
      z-index: 9999;
      width: 0%;
      transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollIndicator.style.width = scrollPercent + '%';
    }, { passive: true });

    // Add global styles
    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced animations */
      .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Enhanced button effects */
      .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .btn-primary::before, .btn-secondary::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
      }

      .btn-primary:hover::before, .btn-secondary:hover::before {
        width: 300px;
        height: 300px;
      }

      /* Card hover effects */
      .content-card {
        transition: all 0.3s ease;
      }

      .content-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
      }
    `;
    document.head.appendChild(style);

    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.content-card, .trek-card, .feature-card').forEach(card => {
      observer.observe(card);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Initialize enhanced backgrounds - enhance existing video backgrounds, don't replace them
    const hasVideoBackground = document.querySelector('.video-background, video');
    if (hasVideoBackground) {
      new EnhancedVideoBackground({
        particles: true,
        overlay: true
      });
    }

    // Detect current page and set weather location
    const path = window.location.pathname;
    let weatherLocation = 'Kudremukh'; // Default
    let showWeather = true;
    
    if (path.includes('bandaje')) {
      weatherLocation = 'Bandaje';
    } else if (path.includes('kudremukh')) {
      weatherLocation = 'Kudremukh';
    } else if (path.includes('netravati')) {
      weatherLocation = 'Netravati Peak';
    } else if (path.includes('kuranjal')) {
      weatherLocation = 'Kuranjal Peak';
    } else if (path.includes('bavikonda')) {
      weatherLocation = 'Bavikonda';
    } else if (path.includes('Valikunja')) {
      weatherLocation = 'Valikunja';
    } else if (path.includes('aane_salaba')) {
      weatherLocation = 'Aane Salaba';
    } else if (path.includes('index')) {
      // Don't show weather widget on index page
      showWeather = false;
    }

    // Initialize other components
    new FloatingBookingButton();
    if (showWeather) {
      new WeatherWidget(weatherLocation);
    }
    addGlobalEnhancements();
    
    console.log('🏔️ Kudremukh Trek Hub - React Enhancements Loaded!');
    console.log('✨ Location: ' + weatherLocation);
    console.log('✨ Features: Enhanced Video Background, Particles, Floating Button, Weather Widget');
  }
})();
