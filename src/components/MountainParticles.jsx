import React, { useEffect, useRef } from 'react';

const MountainParticles = ({ count = 100, color = 'rgba(255,255,255,0.6)' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class MountainParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 0.5 + 0.2;
        this.size = Math.random() * 2 + 1;
        this.swing = Math.random() * 0.5;
        this.swingSpeed = Math.random() * 0.02;
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.y * this.swingSpeed) * this.swing;

        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = color.replace(/[\d.]+\)$/g, `${this.opacity})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    for (let i = 0; i < count; i++) {
      particles.push(new MountainParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default MountainParticles;
