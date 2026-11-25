import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Fullscreen focused image lightbox rendered via portal with cross close button,
 * backdrop click dismissal, and Escape key handling.
 */
export default function ImageLightbox({ src, alt, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const alreadyLocked = document.body.classList.contains('locked-scroll');
    const prevOverflow = document.body.style.overflow;
    if (!alreadyLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (!alreadyLocked) {
        document.body.style.overflow = prevOverflow;
      }
    };
  }, [onClose]);

  return createPortal(
    <div
      className="image-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Image preview'}
    >
      <div className="image-lightbox-frame" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <img src={src} alt={alt} className="image-lightbox-img" />

        {(caption || alt) && (
          <p className="image-lightbox-caption">{caption || alt}</p>
        )}
      </div>
    </div>,
    document.body
  );
}
