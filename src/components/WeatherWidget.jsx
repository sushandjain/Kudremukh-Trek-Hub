import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ location = 'Kudremukh' }) => {
  const [weather, setWeather] = useState({
    temp: 22,
    condition: 'Partly Cloudy',
    humidity: 75,
    windSpeed: 12,
    icon: '⛅'
  });
  const [isExpanded, setIsExpanded] = useState(false);

  // Simulated weather data (you can integrate real API later)
  useEffect(() => {
    // This would normally fetch from OpenWeather API or similar
    const weatherIcons = {
      'Sunny': '☀️',
      'Partly Cloudy': '⛅',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Stormy': '⛈️'
    };
    
    setWeather({
      temp: Math.floor(Math.random() * 10) + 18,
      condition: Object.keys(weatherIcons)[Math.floor(Math.random() * 5)],
      humidity: Math.floor(Math.random() * 30) + 60,
      windSpeed: Math.floor(Math.random() * 15) + 5,
      icon: Object.values(weatherIcons)[Math.floor(Math.random() * 5)]
    });
  }, [location]);

  return (
    <>
      <style>{`
        .weather-widget {
          position: fixed;
          top: 100px;
          right: 20px;
          z-index: 999;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          overflow: hidden;
          cursor: pointer;
        }

        .weather-compact {
          padding: 15px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .weather-icon {
          font-size: 32px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .weather-temp {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
        }

        .weather-expanded {
          padding: 20px;
          max-height: ${isExpanded ? '300px' : '0'};
          opacity: ${isExpanded ? '1' : '0'};
          transition: all 0.3s ease;
        }

        .weather-location {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .weather-condition {
          font-size: 16px;
          color: #7f8c8d;
          margin-bottom: 20px;
        }

        .weather-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .weather-detail-item {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 12px;
          border-radius: 12px;
          color: white;
          text-align: center;
        }

        .weather-detail-icon {
          font-size: 24px;
          margin-bottom: 5px;
        }

        .weather-detail-value {
          font-size: 18px;
          font-weight: 700;
        }

        .weather-detail-label {
          font-size: 12px;
          opacity: 0.9;
          margin-top: 3px;
        }

        .best-time-badge {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          color: white;
          padding: 10px 15px;
          border-radius: 12px;
          margin-top: 15px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .weather-widget {
            top: 80px;
            right: 10px;
            font-size: 14px;
          }

          .weather-icon {
            font-size: 24px;
          }

          .weather-temp {
            font-size: 20px;
          }

          .weather-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="weather-widget" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="weather-compact">
          <span className="weather-icon">{weather.icon}</span>
          <span className="weather-temp">{weather.temp}°C</span>
        </div>

        <div className="weather-expanded">
          <div className="weather-location">
            <span>📍</span>
            {location}
          </div>
          <div className="weather-condition">{weather.condition}</div>

          <div className="weather-details">
            <div className="weather-detail-item">
              <div className="weather-detail-icon">💧</div>
              <div className="weather-detail-value">{weather.humidity}%</div>
              <div className="weather-detail-label">Humidity</div>
            </div>
            <div className="weather-detail-item">
              <div className="weather-detail-icon">💨</div>
              <div className="weather-detail-value">{weather.windSpeed} km/h</div>
              <div className="weather-detail-label">Wind Speed</div>
            </div>
          </div>

          <div className="best-time-badge">
            ✨ Best time: Oct - Feb
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;
