import React, { useState, useEffect, useRef } from 'react';

const ScrollSection = ({ id, title, latestItem, images, onLearnMore }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  // Efek Carousel 2 Detik saat Hover
  useEffect(() => {
    if (isHovering && images && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Berganti setiap 2 detik
    } else {
      clearInterval(timerRef.current);
      setCurrentImg(0); // Kembali ke gambar pertama saat mouse keluar
    }

    return () => clearInterval(timerRef.current);
  }, [isHovering, images]);

  return (
    <section id={id} className="scroll-section reveal">
      <h2 className="section-title t-mono">{title}</h2>
      
      {/* Deteksi mouse masuk dan keluar */}
      <div 
        className="preview-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {/* Kontainer Gambar Kiri */}
        {images && images.length > 0 && (
          <div className="preview-image-container">
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${title} highlight ${index + 1}`} 
                className={index === currentImg ? 'active' : ''} 
              />
            ))}
          </div>
        )}

        {/* Kontainer Teks & Tombol Kanan */}
        <div className="preview-content-wrapper">
          <div className="preview-content">
            <p className="preview-latest-label t-label">LATEST</p>
            <h3 className="preview-title" style={{ fontSize: '2.4rem' }}>{latestItem.title}</h3>
            <p className="preview-subtitle" style={{ fontSize: '1.2rem', color: 'var(--clr-muted)' }}>{latestItem.subtitle}</p>
          </div>
          <button onClick={onLearnMore} className="btn-learn-more">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default ScrollSection;