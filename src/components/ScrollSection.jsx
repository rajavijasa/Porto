import React, { useState, useEffect } from 'react';

const ScrollSection = ({ id, title, latestItem, images, onLearnMore, index = 0 }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    const isMobile = window.innerWidth <= 850;
    
    // Auto-play selang-seling di HP, atau aktif saat Hover di Laptop
    if ((isHovering || isMobile) && images && images.length > 1) {
      
      // JEDA AWAL SELANG-SELING: Kotak 0 mulai lgsg, Kotak 1 tunda 1 detik, Kotak 2 tunda 2 detik
      const timeout = setTimeout(() => {
        
        // INTERVAL: Gambar berganti setiap 3000ms (3 Detik)
        interval = setInterval(() => {
          setCurrentImg(prev => (prev + 1) % images.length);
        }, 3000); 
        
      }, isMobile ? index * 1000 : 0); 
      
      return () => { clearTimeout(timeout); clearInterval(interval); }
    } else {
      setCurrentImg(0);
    }
  }, [isHovering, images, index]);

  return (
    <section id={id} className="scroll-section reveal">
      <h2 className="section-title t-mono">{title}</h2>
      
      <div 
        className="preview-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {images && images.length > 0 && (
          <div className="preview-image-container">
            {images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${title} highlight ${idx + 1}`} 
                className={idx === currentImg ? 'active' : ''} 
              />
            ))}
          </div>
        )}

        <div className="preview-content-wrapper">
          <div className="preview-content">
            <p className="preview-latest-label t-label">LATEST</p>
            <h3 className="preview-title">{latestItem.title}</h3>
            <p className="preview-subtitle">{latestItem.subtitle}</p>
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