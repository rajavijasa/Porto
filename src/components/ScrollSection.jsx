import React, { useState, useEffect } from 'react';

const ScrollSection = ({ id, title, latestItem, items, images, onLearnMore, index = 0 }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const currentItem = (items && items.length > 0 ? items[currentImg] : null) || latestItem;

  useEffect(() => {
    let interval;
    const isMobile = window.innerWidth <= 850;
    
    if ((isHovering || isMobile) && images && images.length > 1) {
      
      const timeout = setTimeout(() => {
        // REVISI: 3000ms untuk HP, 1250ms untuk Monitor
        interval = setInterval(() => {
          setCurrentImg(prev => (prev + 1) % images.length);
        }, isMobile ? 3000 : 1250); 
        
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
            <h3 className="preview-title">{currentItem?.title}</h3>
            <p className="preview-subtitle">{currentItem?.subtitle}</p>
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