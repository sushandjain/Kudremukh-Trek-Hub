import React from 'react';
import ReactDOM from 'react-dom/client';
import FloatingBookingButton from './components/FloatingBookingButton';
import WeatherWidget from './components/WeatherWidget';
import AnimatedCounter from './components/AnimatedCounter';

// Initialize React components on existing HTML pages
document.addEventListener('DOMContentLoaded', () => {
  // Add Floating Booking Button
  const bookingButtonContainer = document.createElement('div');
  bookingButtonContainer.id = 'react-booking-button';
  document.body.appendChild(bookingButtonContainer);
  const bookingRoot = ReactDOM.createRoot(bookingButtonContainer);
  bookingRoot.render(<FloatingBookingButton />);

  // Add Weather Widget
  const weatherContainer = document.createElement('div');
  weatherContainer.id = 'react-weather-widget';
  document.body.appendChild(weatherContainer);
  const weatherRoot = ReactDOM.createRoot(weatherContainer);
  weatherRoot.render(<WeatherWidget location="Kudremukh" />);

  // Replace stat numbers with animated counters
  const statValues = document.querySelectorAll('.stat-value');
  statValues.forEach((stat) => {
    const text = stat.textContent.trim();
    const match = text.match(/(\d+)/);
    if (match) {
      const number = parseInt(match[1]);
      const suffix = text.replace(number.toString(), '').trim();
      const counterRoot = ReactDOM.createRoot(stat);
      counterRoot.render(<AnimatedCounter end={number} suffix={` ${suffix}`} />);
    }
  });

  // Add smooth scroll animation
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

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all content cards
  document.querySelectorAll('.content-card, .trek-card, .feature-card').forEach(card => {
    observer.observe(card);
  });

  // Add global styles for animations
  const style = document.createElement('style');
  style.textContent = `
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

    /* Smooth cursor effect */
    * {
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="%23667eea"/></svg>'), auto;
    }

    a, button {
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="5" fill="%23f5576c"/></svg>'), pointer;
    }

    /* Enhanced button hover effects */
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

    /* Card hover glow effect */
    .content-card {
      transition: all 0.3s ease;
      position: relative;
    }

    .content-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      opacity: 0;
      box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .content-card:hover::after {
      opacity: 1;
    }

    /* Navbar glass effect enhancement */
    .navbar {
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
    }

    /* Loading screen enhancement */
    .loading-screen, .loading-overlay {
      backdrop-filter: blur(10px);
    }

    /* Image parallax effect */
    img {
      transition: transform 0.3s ease;
    }

    .content-card:hover img {
      transform: scale(1.05);
    }

    /* Gradient text effect */
    .hero-title, h1, h2 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 3s ease infinite;
    }

    @keyframes gradientShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    /* Scroll indicator */
    .scroll-indicator {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(to right, #667eea, #764ba2, #f093fb);
      z-index: 9999;
      transition: width 0.1s ease;
    }
  `;
  document.head.appendChild(style);

  // Add scroll progress indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  document.body.appendChild(scrollIndicator);

  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
  }, { passive: true });
});
