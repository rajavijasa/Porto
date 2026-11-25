import { useState, useEffect } from 'react';
import ImageLightbox from './ImageLightbox';

const ScrollSection = ({ id, title, items, onLearnMore, index = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 850px)').matches : false
  );
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 850px)');
    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    let interval;
    let timeout;

    const mobileCycleMs = 3000;
    const desktopCycleMs = 1250;
    const desktopHoverCycleMs = Math.round(desktopCycleMs * 1.5);

    if ((isHovering || isMobile) && !lightboxItem && items && items.length > 1) {
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          setCurrentIndex(prev => (prev + 1) % items.length);
        }, isMobile ? mobileCycleMs : desktopHoverCycleMs);
      }, isMobile ? index * 1000 : 0);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isHovering, isMobile, lightboxItem, items, index]);

  const currentData = items && items.length > 0 ? items[currentIndex] : null;

  return (
    <section id={id} className="scroll-section reveal">
      <h2 className="section-title t-mono">{title}</h2>

      <div
        className="preview-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          if (!lightboxItem) {
            setCurrentIndex(0);
          }
        }}
      >
        {items && items.length > 0 && (
          <div
            className="preview-image-container preview-image-clickable"
            onClick={() => currentData && setLightboxItem(currentData)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && currentData) {
                e.preventDefault();
                setLightboxItem(currentData);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Enlarge ${currentData?.title || title} image`}
          >
            {items.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={`${title} highlight ${idx + 1}`}
                className={idx === currentIndex ? 'active' : ''}
              />
            ))}

            {/* REVISI: LATEST Badge sekarang bergantung pada data isLatest, bukan index 0 */}
            <div className={`overlay-latest-badge ${currentData?.isLatest ? 'show' : ''}`}>
              LATEST
            </div>

            <span className="zoomable-thumb-hint preview-zoom-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                <path
                  d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        )}

        <div className="preview-content-wrapper">
          <div className="preview-content">
            <h3 className="preview-title">{currentData?.title}</h3>
            <p className="preview-subtitle">{currentData?.subtitle}</p>
          </div>
          <button onClick={onLearnMore} className="btn-learn-more">
            Learn More
          </button>
        </div>
      </div>

      {lightboxItem && (
        <ImageLightbox
          src={lightboxItem.image}
          alt={lightboxItem.title}
          caption={`${lightboxItem.title} — ${lightboxItem.subtitle}`}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </section>
  );
};

export default ScrollSection;
