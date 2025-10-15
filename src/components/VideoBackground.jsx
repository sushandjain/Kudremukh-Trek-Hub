import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = ({ 
  videoSrc, 
  fallbackImage, 
  overlay = true, 
  overlayColor = 'rgba(0,0,0,0.4)',
  particles = true 
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!particles || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particlesArray = [];
    const numberOfParticles = isMobile ? 30 : 60;

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

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Connect particles
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
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

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, isMobile]);

  return (
    <>
      <style>{`
        .video-background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .video-background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          filter: brightness(0.7);
        }

        .video-background-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          filter: brightness(0.7);
        }

        .video-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${overlayColor};
          pointer-events: none;
        }

        .video-background-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .video-background-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .video-background-video {
            display: none;
          }
        }
      `}</style>

      <div className="video-background-container">
        {!isMobile && videoSrc && (
          <video
            ref={videoRef}
            className="video-background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {(isMobile || !videoSrc) && fallbackImage && (
          <div
            className="video-background-fallback"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )}

        {overlay && <div className="video-background-overlay" />}
        {particles && <canvas ref={canvasRef} className="video-background-canvas" />}
        <div className="video-background-gradient" />
      </div>
    </>
  );
};

export default VideoBackground;
