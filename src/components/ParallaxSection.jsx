import React, { useState, useEffect, useRef } from 'react';

const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setOffsetY(scrollPercent * 100 * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <>
      <style>{`
        .parallax-section {
          position: relative;
          overflow: hidden;
        }

        .parallax-content {
          position: relative;
          z-index: 2;
        }

        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          will-change: transform;
        }
      `}</style>

      <div ref={sectionRef} className={`parallax-section ${className}`}>
        <div
          className="parallax-bg"
          style={{
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ParallaxSection;
