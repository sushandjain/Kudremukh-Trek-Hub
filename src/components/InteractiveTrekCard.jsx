import React, { useState } from 'react';

const InteractiveTrekCard = ({ trek }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <style>{`
        .trek-card-3d {
          perspective: 1000px;
          height: 400px;
          position: relative;
          cursor: pointer;
        }

        .trek-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          transform: ${isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
        }

        .trek-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .trek-card-front {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
        }

        .trek-card-back {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          transform: rotateY(180deg);
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }

        .trek-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .trek-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .trek-card-3d:hover .trek-image-container img {
          transform: scale(1.1);
        }

        .trek-overlay {
          position: relative;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          padding: 30px;
          color: white;
          z-index: 1;
        }

        .trek-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .trek-stats {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .trek-stat-badge {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .like-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
          transition: all 0.3s ease;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .like-button:hover {
          transform: scale(1.1);
          background: rgba(255,255,255,0.5);
        }

        .like-button.liked {
          animation: likeAnimation 0.5s ease;
        }

        @keyframes likeAnimation {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .trek-highlights {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .trek-highlights li {
          margin-bottom: 12px;
          padding-left: 30px;
          position: relative;
          font-size: 16px;
        }

        .trek-highlights li:before {
          content: '✓';
          position: absolute;
          left: 0;
          font-weight: bold;
          color: #fff;
          background: rgba(255,255,255,0.3);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .flip-instruction {
          text-align: center;
          font-size: 14px;
          opacity: 0.8;
          margin-top: auto;
        }

        .book-now-btn {
          background: white;
          color: #f5576c;
          border: none;
          padding: 15px 30px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .book-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255,255,255,0.3);
        }

        @media (max-width: 768px) {
          .trek-card-3d {
            height: 350px;
          }

          .trek-title {
            font-size: 22px;
          }

          .trek-stat-badge {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <div className="trek-card-3d" onClick={() => setIsFlipped(!isFlipped)}>
        <div className="trek-card-inner">
          {/* Front Face */}
          <div className="trek-card-face trek-card-front">
            <button
              className={`like-button ${isLiked ? 'liked' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              {isLiked ? '❤️' : '🤍'}
            </button>

            <div className="trek-image-container">
              <img src={trek.image} alt={trek.name} />
            </div>

            <div className="trek-overlay">
              <h3 className="trek-title">{trek.name}</h3>
              <div className="trek-stats">
                <span className="trek-stat-badge">
                  <span>📏</span> {trek.distance}
                </span>
                <span className="trek-stat-badge">
                  <span>⏱️</span> {trek.duration}
                </span>
                <span className="trek-stat-badge">
                  <span>⛰️</span> {trek.difficulty}
                </span>
              </div>
              <p className="flip-instruction">👆 Tap to see more details</p>
            </div>
          </div>

          {/* Back Face */}
          <div className="trek-card-face trek-card-back">
            <h3 className="trek-title">Highlights</h3>
            <ul className="trek-highlights">
              {trek.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <button className="book-now-btn">Book This Trek</button>
            <p className="flip-instruction">👆 Tap to flip back</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveTrekCard;
