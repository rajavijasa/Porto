import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Modal from './components/Modal';
import EducationContent from './components/content/EducationContent';
import ProjectsContent from './components/content/ProjectsContent';
import ExperienceContent from './components/content/ExperienceContent';
import ScrollSection from './components/ScrollSection';

import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import instagramIcon from './assets/instagram.svg';
import mailIcon from './assets/mail.svg';

import schoolImg from './assets/school.png';
import univImg from './assets/universitas.jpg';
import ccitImg from './assets/ccit.jpg';

// REVISI: Menggabungkan Teks dan Gambar agar sinkron saat berganti (Carousel)
// REVISI: Menambahkan properti isLatest: true/false agar badge muncul
const educationData = [
  { title: 'University of Indonesia', subtitle: 'B.Eng in Computer Engineering', image: univImg, isLatest: true },
  { title: 'CCIT FTUI Professional Program', subtitle: 'Internet-based System Automation (ISA)', image: ccitImg, isLatest: false },
  { title: 'SMAN 112 Jakarta', subtitle: 'Science Major', image: schoolImg, isLatest: false }
];

const projectData = [
  { title: '16-Channel Parallel Bitonic Sorter', subtitle: 'Digital Logic Design', image: schoolImg, isLatest: true },
  { title: 'LabuBoom Game', subtitle: 'Game Development', image: univImg, isLatest: true },
  { title: 'Personal Web Portfolio', subtitle: 'Frontend Engineering', image: ccitImg, isLatest: false }
];

const experienceData = [
  { title: 'Electrical Staff', subtitle: 'Autonomous Marine Vehicle Team UI', image: ccitImg, isLatest: true },
  { title: 'Participant', subtitle: 'Kontes Kapal Indonesia', image: schoolImg, isLatest: false },
  { title: 'Robotics Team', subtitle: 'Gawe Component', image: univImg, isLatest: false }
];

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollContainerRef = useRef(null);
  const aboutRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollLockRef = useRef({ locked: false, scrollY: 0, rightColumnScrollTop: 0 });

  useEffect(() => {
    const isMobile = window.innerWidth <= 1100;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.25, 
      rootMargin: "0px", 
      root: isMobile ? null : scrollContainerRef.current 
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldLock = Boolean(activeModal || isMobileMenuOpen);

    if (shouldLock) {
      if (scrollLockRef.current.locked) return;
      scrollLockRef.current.locked = true;
      scrollLockRef.current.scrollY = window.scrollY;
      scrollLockRef.current.rightColumnScrollTop = scrollContainerRef.current?.scrollTop ?? 0;

      document.documentElement.classList.add('locked-scroll');
      document.body.classList.add('locked-scroll');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollLockRef.current.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';

      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.overflow = 'hidden';
      }
      return;
    }

    if (!scrollLockRef.current.locked) return;
    scrollLockRef.current.locked = false;

    document.documentElement.classList.remove('locked-scroll');
    document.body.classList.remove('locked-scroll');

    const restoreY = scrollLockRef.current.scrollY || 0;
    const restoreRightColumn = scrollLockRef.current.rightColumnScrollTop || 0;

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';

    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.overflow = '';
      scrollContainerRef.current.scrollTop = restoreRightColumn;
    }

    window.scrollTo(0, restoreY);
  }, [activeModal, isMobileMenuOpen]);

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
      
      <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''} ${activeModal ? 'hide-btn' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      <div className="page-layout">
        <div className="left-column animate-on-load">
          <Hero />
        </div>
        
        <div className="right-column" ref={scrollContainerRef}>
          
          <nav className="right-nav animate-on-load delay-1">
            <a href="#about" className="btn-offset">About</a>
            <a href="#education" className="btn-offset">Education</a>
            <a href="#projects" className="btn-offset">Projects</a>
            <a href="#experience" className="btn-offset">Experience</a>
            <a href="#contact" className="btn-offset">Contact</a>
          </nav>

          <div className="content-wrapper">
            
            <section id="about" ref={aboutRef} className="about-section animate-on-load delay-2 reveal">
              <h2 className="section-title t-mono">ABOUT ME</h2>
              <p className="about-text">
                I am a Computer Engineering student at Universitas Indonesia and a Graduate From CCIT-FTUI with experience in hardware
                development, IoT, and embedded systems. As an Electrical Staff at the AMV Team UI, I specialize in building efficient & smart
                robots and IoT solutions.
              </p>
            </section>

            {/* REVISI: Mengirim items berisi judul, sub, dan gambar sekaligus */}
            <ScrollSection index={0} id="education" title="EDUCATION" items={educationData} onLearnMore={() => setActiveModal('education')} />
            <ScrollSection index={1} id="projects" title="PROJECTS" items={projectData} onLearnMore={() => setActiveModal('projects')} />
            <ScrollSection index={2} id="experience" title="EXPERIENCE" items={experienceData} onLearnMore={() => setActiveModal('experience')} />

            <section id="contact" className="contact-section reveal">
              <h2 className="section-title t-mono">CONTACT ME</h2>
              <div className="social-links">
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

      {activeModal && (
        <Modal title={activeModal.toUpperCase()} onClose={() => setActiveModal(null)}>
          {renderModalContent()}
        </Modal>
      )}
    </div>
  );
}