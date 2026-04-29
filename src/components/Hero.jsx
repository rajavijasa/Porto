import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <img 
          src={profileImg} 
          alt="Raja Avicenna Al-Kindi Vijasa"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            filter: 'grayscale(100%) contrast(1.1)'
          }} 
        />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-text-content">
        <h1 className="main-title" style={{ position: 'relative', zIndex: 10, lineHeight: '1.1' }}>
          Raja Avicenna<br />Al-Kindi Vijasa
        </h1>
        <h2 className="main-subtitle" style={{ 
          fontSize: '1.2rem', 
          marginTop: 'var(--space-md)', 
          position: 'relative', 
          zIndex: 10 
        }}>
          Computer Engineering
        </h2>
      </div>
    </>
  );
}