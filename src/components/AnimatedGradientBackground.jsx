import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground = ({ colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'] }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawGradient = () => {
      const { width, height } = canvas;

      // Create animated gradient
      const gradient = ctx.createLinearGradient(
        Math.sin(time * 0.001) * width,
        Math.cos(time * 0.0015) * height,
        Math.cos(time * 0.001) * width,
        Math.sin(time * 0.0015) * height
      );

      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add animated circles
      for (let i = 0; i < 5; i++) {
        const x = width / 2 + Math.sin(time * 0.001 + i) * (width / 3);
        const y = height / 2 + Math.cos(time * 0.0015 + i) * (height / 3);
        const radius = 100 + Math.sin(time * 0.002 + i) * 50;

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        circleGradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 + Math.sin(time * 0.001) * 0.05})`);
        circleGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = circleGradient;
        ctx.fillRect(0, 0, width, height);
      }

      time++;
      animationFrameId = requestAnimationFrame(drawGradient);
    };

    drawGradient();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'blur(80px)',
        opacity: 0.6
      }}
    />
  );
};

export default AnimatedGradientBackground;
