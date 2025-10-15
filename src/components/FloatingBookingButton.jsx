import React, { useState, useEffect } from 'react';

const FloatingBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickActions = [
    { icon: '📞', text: 'Call Now', link: 'tel:+919876543210', color: '#25D366' },
    { icon: '💬', text: 'WhatsApp', link: 'https://wa.me/919876543210', color: '#25D366' },
    { icon: '📧', text: 'Email', link: 'mailto:info@kudremukh.com', color: '#EA4335' },
    { icon: '📍', text: 'Location', link: '#contact', color: '#4285F4' }
  ];

  return (
    <>
      <style>{`
        .floating-booking-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
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
        }

        .quick-action-item.visible {
          transform: translateX(0);
          opacity: 1;
        }

        .quick-action-item:hover {
          transform: translateX(0) scale(1.05);
          box-shadow: 0 6px 25px rgba(0,0,0,0.2);
        }

        .quick-action-icon {
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color) 0%, var(--color-dark) 100%);
          color: white;
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
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)'};
          opacity: ${isVisible ? '1' : '0'};
          pointer-events: ${isVisible ? 'all' : 'none'};
        }

        .main-booking-btn:hover {
          transform: translateY(0) scale(1.05);
          box-shadow: 0 12px 40px rgba(46, 204, 113, 0.5);
        }

        .main-booking-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .booking-icon {
          font-size: 24px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border: 3px solid #2ecc71;
          border-radius: 50px;
          animation: pulse 2s infinite;
          opacity: 0;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
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

          .quick-action-text {
            display: none;
          }

          .quick-action-icon {
            width: 35px;
            height: 35px;
            font-size: 20px;
          }
        }
      `}</style>

      <div className="floating-booking-container">
        {isExpanded && quickActions.map((action, index) => (
          <a
            key={action.text}
            href={action.link}
            className={`quick-action-item ${isExpanded ? 'visible' : ''}`}
            style={{
              transitionDelay: `${index * 0.1}s`,
              '--color': action.color,
              '--color-dark': action.color + 'dd'
            }}
            target={action.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <div className="quick-action-icon">{action.icon}</div>
            <span className="quick-action-text">{action.text}</span>
          </a>
        ))}

        <button
          className="main-booking-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="pulse-ring"></span>
          <span className="booking-icon">{isExpanded ? '✕' : '🏔️'}</span>
          <span>{isExpanded ? 'Close' : 'Book Trek Now'}</span>
        </button>
      </div>
    </>
  );
};

export default FloatingBookingButton;
