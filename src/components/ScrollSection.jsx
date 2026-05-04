import React, { useState, useEffect } from 'react';

const ScrollSection = ({ id, title, items, onLearnMore, index = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    const isMobile = window.innerWidth <= 850;
    
    if ((isHovering || isMobile) && items && items.length > 1) {
      const timeout = setTimeout(() => {
        interval = setInterval(() => {
          setCurrentIndex(prev => (prev + 1) % items.length);
        }, isMobile ? 3000 : 1250); 
      }, isMobile ? index * 1000 : 0); 
      
      return () => { clearTimeout(timeout); clearInterval(interval); }
    } else {
      setCurrentIndex(0);
    }
  }, [isHovering, items, index]);

  const currentData = items && items.length > 0 ? items[currentIndex] : null;

  return (
    <section id={id} className="scroll-section reveal">
      <h2 className="section-title t-mono">{title}</h2>
      
      <div 
        className="preview-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        
        {items && items.length > 0 && (
          <div className="preview-image-container">
            {items.map((item, idx) => (
              <img 
                key={idx} 
                src={item.image} 
                alt={`${title} highlight ${idx + 1}`} 
                className={idx === currentIndex ? 'active' : ''} 
              />
            ))}
          </div>
        )}

        <div className="preview-content-wrapper">
          <div className="preview-content">
            {/* REVISI: Menggunakan visibility agar LATEST hilang namun ruangnya tetap terjaga (Kotak tidak melompat) */}
            <p 
              className="preview-latest-label t-label"
              style={{ visibility: currentIndex === 0 ? 'visible' : 'hidden' }}
            >
              LATEST
            </p>
            <h3 className="preview-title">{currentData?.title}</h3>
            <p className="preview-subtitle">{currentData?.subtitle}</p>
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