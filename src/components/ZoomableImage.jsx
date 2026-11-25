import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

/**
 * Clickable thumbnail button that opens an enlarged focused ImageLightbox on tap or click.
 */
export default function ZoomableImage({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="zoomable-thumb-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
        aria-label={`Enlarge ${alt} image`}
      >
        <img src={src} alt={alt} className="zoomable-thumb-img" />
        <span className="zoomable-thumb-hint" aria-hidden="true">
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
      </button>

      {isOpen && (
        <ImageLightbox
          src={src}
          alt={alt}
          caption={caption || alt}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
