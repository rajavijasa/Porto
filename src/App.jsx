import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Modal from './components/Modal';
import EducationContent from './components/content/EducationContent';
import ProjectsContent from './components/content/ProjectsContent';
import ExperienceContent from './components/content/ExperienceContent';
import ScrollSection from './components/ScrollSection';

// Import file SVG 
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import instagramIcon from './assets/instagram.svg';
import mailIcon from './assets/mail.svg';

// Import file Image
import schoolImg from './assets/school.png';
import univImg from './assets/universitas.jpg';
import ccitImg from './assets/ccit.jpg';

const latestEducation = { title: 'University of Indonesia', subtitle: 'B.Eng in Computer Engineering' };
const latestProject = { title: '16-Channel Parallel Bitonic Sorter', subtitle: 'Digital Logic Design' };
const latestExperience = { title: 'Electrical Staff', subtitle: 'Autonomous Marine Vehicle Team UI' };

const educationImages = [univImg, ccitImg, schoolImg];
const projectImages = []; 
const experienceImages = [];

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollContainerRef = useRef(null);
  const aboutRef = useRef(null);

  // Auto-scroll ke About Me saat web dibuka
  useEffect(() => {
    if (aboutRef.current && scrollContainerRef.current) {
      setTimeout(() => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 800);
    }
  }, []);

  // Animasi Scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -10% 0px", 
      root: scrollContainerRef.current 
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'education': return <EducationContent />;
      case 'projects': return <ProjectsContent />;
      case 'experience': return <ExperienceContent />;
      default: return null;
    }
  };

  return (
    <div className="bg-pcb-grid">
      <div className="page-layout">
        
        {/* INI YANG SEBELUMNYA HILANG: Pembungkus Kolom Kiri */}
        <div className="left-column animate-on-load">
          <Hero />
        </div>
        
        {/* INI YANG SEBELUMNYA HILANG: Pembungkus Kolom Kanan */}
        <div className="right-column" ref={scrollContainerRef}>
          
          {/* Navigasi Atas */}
          <nav className="right-nav animate-on-load delay-1">
            <a href="#about" className="btn-offset">About</a>
            <a href="#education" className="btn-offset">Education</a>
            <a href="#projects" className="btn-offset">Projects</a>
            <a href="#experience" className="btn-offset">Experience</a>
            <a href="#contact" className="btn-offset">Contact</a>
          </nav>

          {/* Wrapper Konten Utama */}
          <div className="content-wrapper">
            
            <section id="about" ref={aboutRef} className="about-section animate-on-load delay-2 reveal" style={{ borderTop: 'none', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 className="section-title t-mono">ABOUT ME</h2>
              <p className="about-text">
                I am a Computer Engineering student at Universitas Indonesia and a Graduate From CCIT-FTUI with experience in hardware
                development, IoT, and embedded systems. As an Electrical Staff at the AMV Team UI, I specialize in building efficient & smart
                robots and IoT solutions.
              </p>
            </section>

            <ScrollSection 
              id="education" 
              title="EDUCATION" 
              latestItem={latestEducation} 
              images={educationImages} 
              onLearnMore={() => setActiveModal('education')} 
            />

            <ScrollSection 
              id="projects" 
              title="PROJECTS" 
              latestItem={latestProject} 
              images={projectImages} 
              onLearnMore={() => setActiveModal('projects')} 
            />

            <ScrollSection 
              id="experience" 
              title="EXPERIENCE" 
              latestItem={latestExperience} 
              images={experienceImages} 
              onLearnMore={() => setActiveModal('experience')} 
            />

            <section id="contact" className="contact-section reveal">
              <h2 className="section-title t-mono">CONTACT ME</h2>
              <div className="social-links" style={{ gap: '2.5rem', marginTop: '1rem' }}>
                <a href="https://github.com/rajavijasa" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/rajavijasa" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/jarodvijasa/" target="_blank" rel="noreferrer">
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a href="mailto:jarotvijasa@gmail.com">
                  <img src={mailIcon} alt="Email" className="social-icon" />
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* MODAL / POP UP */}
      {activeModal && (
        <Modal 
          title={activeModal.toUpperCase()} 
          onClose={() => setActiveModal(null)}
        >
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
}