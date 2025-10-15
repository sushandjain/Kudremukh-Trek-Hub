import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px 0;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          cursor: pointer;
          aspect-ratio: 1;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.15);
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          padding: 20px;
          color: white;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          z-index: 10000;
          display: ${selectedImage ? 'flex' : 'none'};
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .lightbox-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: white;
          color: #333;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          transform: rotate(90deg);
          background: #ff4444;
          color: white;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-nav:hover {
          background: rgba(255,255,255,0.4);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        .lightbox-counter {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 10px;
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .lightbox-prev {
            left: 10px;
          }

          .lightbox-next {
            right: 10px;
          }
        }
      `}</style>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.caption || `Gallery image ${index + 1}`} />
            <div className="gallery-overlay">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div className="lightbox" onClick={closeLightbox}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img
            src={selectedImage?.src}
            alt={selectedImage?.caption}
            className="lightbox-image"
          />
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>‹</button>
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>›</button>
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
