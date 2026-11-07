import { useState, useEffect } from 'react';
import dsdImg from '../../assets/dsd.png';
import progdasImg from '../../assets/progdas.png';
import pdtImg from '../../assets/scheduled.png';
import statisImg from '../../assets/statis.jpg';
import molitavImg from '../../assets/molitav.png';
import jarkomImg from '../../assets/jarkom.png';
import labuboomImg from '../../assets/labuboom.png';
import psdImg from '../../assets/psd.jpeg';
import qvitImg from '../../assets/aset.jpg';
import exerprojectImg from '../../assets/exerproject.png';
import kki2025Img from '../../assets/kki2025.jpeg';
import reserveImg from '../../assets/reservation.jpg';
import moviedbImg from '../../assets/moviedb.jpg';
import dataanalysisImg from '../../assets/analyst.jpg';
import melodifyImg from '../../assets/melodify.jpeg';
import isasImg from '../../assets/isas.png';
import parkingImg from '../../assets/parking.jpeg';
import crudapp from '../../assets/crudapp.png';
import clothImg from '../../assets/cloth.png';

export default function ProjectsContent() {
  const [subView, setSubView] = useState(null); // null | 'univ' | 'ccit'

  useEffect(() => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [subView]);

  const independentProjects = [
    {
      year: "Jun 2025 - Dec 2025",
      inst: "Makara Nirmala",
      major: "Autonomous Marine Vehicle",
      desc: "Develop an Autonomous Marine Vehicle for Competing in Prestigious Kontes Kapal Indonesia 2025, Responsible for The Integrating Electrical Components, Cable Managements, and Component's Interconnectivity",
      skills: ["KiCad", "Marine Electronics", "Robotics Integration"],
      img: kki2025Img,
      link: "https://drive.google.com/drive/folders/1Zs2I_YWlR4bK_S3vGFh0dpP6XQAopCo9?usp=sharing",
      isLatest: true
    },
    {
      year: "Nov 2025",
      inst: "Quantum Vision Transformer (QViT) Research",
      major: "Quantum Computing",
      desc: "Researched And Summarized The Quantum Vision Transformer (QViT) Architecture, Evaluating Its Hybrid Quantum Classical Approach For Classifying High Energy Particle Data.",
      skills: ["Quantum Computing", "Machine Learning", "Research"],
      img: qvitImg,
      link: "https://drive.google.com/drive/folders/19AZvHEqbkCSCy8Plbk4OKdFqgDzKyjnN?usp=sharing",
      isLatest: false
    },
    {
      year: "Jun 2025 - Nov 2025",
      inst: "MoLiTav",
      major: "IoT Engineer",
      desc: "Developed a Flutter-Based Mobile Application Integrated with IoT sensors via Bluetooth to Monitor Six Vital Signs for People in Needs.",
      skills: ["Flutter", "Kotlin", "Sensor Integration"],
      img: molitavImg,
      link: "https://drive.google.com/drive/folders/1WkxPNl7BUpMvrR8uiklH0oFRppFAwmPr?usp=sharing",
      isLatest: false
    }
  ];

  const universityProjects = [
    {
      year: "Dec 2025",
      inst: "16-Channel Parallel Bitonic Sorter",
      major: "Digital System Design",
      desc: "Engineered An FPGA Using VHDL To Perform 16-Channel Parallel Sorting with Bitonic Sort Algorithm, Integrating An FSM Control Unit And Automated Testbench Validation",
      skills: ["VHDL", "FPGA", "Quartus Prime"],
      img: psdImg,
      link: "https://github.com/Hadar15/Kelompok10_FINPRO_PSD.git",
      isLatest: true
    },
    {
      year: "Dec 2025",
      inst: "LabuBoom",
      major: "Object-Oriented Programming",
      desc: "Developed A 2D Game Project Named LabuBoom Using Java And LibGDX, Implementing Complex Object-Oriented Design Patterns, Collision Systems, And Spring Boot For Player's Data.",
      skills: ["LibGDX", "Spring Boot", "Java"],
      img: labuboomImg,
      link: "https://ement.itch.io/labuboom",
      isLatest: true
    },
    {
      year: "Jun 2024 & Dec 2025",
      inst: "Computer Network Project",
      major: "Computer Network (3 Project)",
      desc: "Designed A Complex Multi-Area Network Featuring RPVST And EtherChannel, Alongside Independent Projects For Multi-Story Building VLANs And Cisco IoT Integration.",
      skills: ["Cisco", "Network Integration", "IoT"],
      img: jarkomImg,
      link: "https://drive.google.com/drive/folders/1geIVr534sXtRFSDia04wgQNchVsA_3Er?usp=sharing",
      isLatest: true
    },
    {
      year: "Dec 2025",
      inst: "Life Style Analytic",
      major: "Statistics",
      desc: "Analyzed Several Engineering Students Using Hypothesis Testing and Regression Models to Determine the Correlation Between Daily Lifestyle and GPA.",
      skills: ["Analytic", "Research & Survei"],
      img: statisImg,
      link: "https://drive.google.com/drive/folders/1lRKsrnVZIUvoLWQcAV6juUpy17uwX3jC?usp=sharing",
      isLatest: true
    },
    {
      year: "Jun 2025",
      inst: "Housing Energy Monitor",
      major: "Programming Fundamental",
      desc: "Developed a Program 'Housing Energy Monitor' to Calculate and Predict Monthly Electricity Consumption to Provide Usage Recommendation for Saving the Energy.",
      skills: ["C", "Programming"],
      img: progdasImg,
      link: "https://drive.google.com/drive/folders/18BlD3wDQuD29BnB2GQzHw4HXO5jtVGmv?usp=sharing",
      isLatest: false
    },
    {
      year: "May 2025 - Jun 2025",
      inst: "Scheduled",
      major: "Engineering Design",
      desc: "Build and Developing a Frontend Website Designed to Solve Student's Time Management with Integrating ToDo List, Interactive Calendar, etc.",
      skills: ["Vite", "JavaScript"],
      img: pdtImg,
      link: "https://drive.google.com/drive/folders/1v3ZVlJ_7KgInGX1Jpj0hOCg6y6UpLr9-?usp=sharing",
      isLatest: false
    },
    {
      year: "Dec 2024",
      inst: "Slam Dunk (Arcade Basket)",
      major: "Digital Design",
      desc: "Designed and Implemented a Digital System Cloning an Arcade Basketball Mechanism featuring a Timer, Sensor Scoring, and HighScore memory using sequential circuits.",
      skills: ["Digital Logic Design", "Proteus", "Electrical Components"],
      img: dsdImg,
      link: "https://drive.google.com/drive/folders/12tWzmCju5krIt5BH_M8NlfaHGMvBNemf?usp=sharing",
      isLatest: false
    },
    {
      year: "Nov 2024",
      inst: "Automatic Window with ESP32",
      major: "IoT Design",
      desc: "Implementing an Automatic Window if Raining for Draining Clothes, Integrated with Servo Motor, Buzzer & Rain Drop sensor, and BLYNK for more Flexible Monitoring",
      skills: ["Wokwi Design", "IoT", "ESP32"],
      img: exerprojectImg,
      link: "https://drive.google.com/drive/folders/1XQbho1QM0IuEf4n1DyJ_bDTc_LQ_AKDv?usp=sharing",
      isLatest: false
    }
  ];

  const ccitProjects = [
    {
      year: "May 2025",
      inst: "Melodify",
      major: "Web Development",
      desc: "Engineered A Music Streaming Hub Using Native PHP And MVC Architecture, Implementing Role-Based Authentication And Seamless Multimedia File Handling.",
      skills: ["PHP", "MVC Architecture", "MySQL"],
      img: melodifyImg,
      link: "https://melodify.great-site.net",
      isLatest: false
    },
    {
      year: "Apr 2025",
      inst: "Firebase CRUD Application",
      major: "Android Development",
      desc: "Developed A Mobile Application with Kotlin And Android Studio, Featuring Secure Authentication And CRUD Operations With Integrated Backend.",
      skills: ["Kotlin", "Android Studio", "Firebase"],
      img: crudapp,
      link: "https://drive.google.com/drive/folders/1ZisGGcOh4ZgHR_vH96VnBuJwQaiRRxR6?usp=sharing",
      isLatest: false
    },
    {
      year: "Mar 2025",
      inst: "Parking Management System",
      major: "Database Management",
      desc: "Developed A Database for Parking Management System with Java And JDBC, Implementing Role Based Access Control (RBAC) And SQL Query Optimization For Efficient Operations.",
      skills: ["Java", "JDBC", "Database Management"],
      img: parkingImg,
      link: "https://drive.google.com/drive/folders/19WytMJms_fXjpBfwNP8rpjxtnSLcgaU2?usp=sharing",
      isLatest: false
    },
    {
      year: "Dec 2024",
      inst: "Smart Clothesline IoT System",
      major: "Internet of Things",
      desc: "Developed An Automated Smart Clothesline System Using An ESP32 Microcontroller, Integrating Environmental Sensors And The Blynk App For Real Time Remote Monitoring And Motor Control.",
      skills: ["ESP32 / C++", "IoT Integration", "Electrical Sensors"],
      img: clothImg,
      link: "https://drive.google.com/drive/folders/1s52zRodD85MEaN3eVIfQASATynXxaWGR?usp=sharing",
      isLatest: false
    },
    {
      year: "Jan 2024",
      inst: "Technician Service Labor Analysis",
      major: "Data Analysis",
      desc: "Performed data analysis on technician service labor history using Excel and built interactive dashboards for operational monitoring.",
      skills: ["Microsoft Excel", "Data Analysis", "Data Visualization"],
      img: dataanalysisImg,
      link: "https://drive.google.com/drive/folders/1k-W5P10JjxZVX6IAVwKmXWGO_N6j_WHa?usp=sharing",
      isLatest: true
    },
    {
      year: "Dec 2023",
      inst: "Movie Database System",
      major: "Database Administration",
      desc: "Designed And Implemented A Relational Database For A Movie System with Microsoft SQL Server, Illustrate Entity-Relationship Diagrams, Stored Procedures, And Triggers.",
      skills: ["Microsoft SQL Server", "Database Design", "SQL"],
      img: moviedbImg,
      link: "https://drive.google.com/drive/folders/1OvCQfg9iBG5dbpC4RvumJCcs2qEz55WC?usp=sharing",
      isLatest: false
    },
    {
      year: "Nov 2023",
      inst: "Craftsmen Service Reservation System",
      major: "System Analysis & Design",
      desc: "Designed And Documented The Algorithms, Flowcharts, And Pseudocode For A Comprehensive Craftsmen Service Reservation System To Streamline Booking And Payment Processes.",
      skills: ["System Analysis", "Algorithm Design", "Pseudocode"],
      img: reserveImg,
      link: "https://drive.google.com/drive/folders/1LwiLu8ffDBf5QW2Pl-yLdVBCMT5bdAoT?usp=sharing",
      isLatest: false
    }
  ];

  const isasProjects = [
    {
      year: "Sep 2023 - Feb 2025",
      inst: "ISAS Academic Research",
      major: "Information Search & Analysis",
      desc: "Executed Comprehensive Information Search And Analytical Methodologies To Evaluate Technological Challenges And Synthesize Findings Into Professional Academic Research Reports.",
      skills: ["Academic Research", "Problem Analysis", "Technical Writing"],
      img: isasImg,
      link: "https://drive.google.com/drive/folders/1phN8e2Mq4pRGKTyOnFRoBMGky3kM8YyL?usp=sharing",
      isLatest: false
    }
  ];

  const renderProjectItem = (proj, i) => (
    <div
      key={i}
      className="service-item"
      style={{
        alignItems: 'center',
        flexWrap: 'nowrap',
        padding: 'var(--space-lg) 0'
      }}
    >
      <div style={{ width: '240px', flexShrink: 0 }}>
        <img
          src={proj.img}
          alt={proj.inst}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '12px',
            border: '1px solid var(--clr-border)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
          {proj.year}
        </span>
        <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}>
          {proj.inst}
          <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px', overflowWrap: 'anywhere' }}>
            {proj.major}
          </div>

          {proj.link && (
            <a
              className="btn-offset"
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: '14px', alignSelf: 'flex-start' }}
            >
              See More
            </a>
          )}
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6', overflowWrap: 'anywhere' }}>
          {proj.desc}
        </p>
        <div className="service-tags">
          {proj.skills.map(tag => (
            <span className="service-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {subView === null && (
        <div>
          <h2 className="t-h2 popup-header-title">
            Technical <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
          </h2>

          {/* 1. INDEPENDENT & RESEARCH PROJECTS (STANDALONE & FIRST) */}
          <div className="project-group-header">
            <h3 className="project-group-title">
              Independent &amp; <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Research Projects</em>
            </h3>
            <span className="project-group-badge">{independentProjects.length} Projects</span>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)' }}>
            {independentProjects.map((proj, i) => renderProjectItem(proj, i))}
          </div>

          {/* 2. UNIVERSITY'S PROJECTS (POPUP ACCESS) */}
          <div className="project-group-header">
            <h3 className="project-group-title">
              University&apos;s <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
            </h3>
            <span className="project-group-badge">{universityProjects.length} Projects</span>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)' }}>
            <div
              className="service-item project-bundle-item"
              onClick={() => setSubView('univ')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSubView('univ'); }}
            >
              <div style={{ width: '240px', flexShrink: 0, position: 'relative' }}>
                <img
                  src={psdImg}
                  alt="University's Projects"
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid var(--clr-border)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }}
                />
                <div className="bundle-overlay-badge">
                  {universityProjects.length} Projects Inside
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                  Aug 2024 — Present
                </span>
                <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}>
                  University&apos;s Projects
                  <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px', overflowWrap: 'anywhere' }}>
                    Faculty of Engineering, Universitas Indonesia
                  </div>

                  <button
                    className="btn-offset"
                    onClick={(e) => { e.stopPropagation(); setSubView('univ'); }}
                    style={{ marginTop: '14px', alignSelf: 'flex-start' }}
                  >
                    Open University Projects ({universityProjects.length}) &rarr;
                  </button>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6', overflowWrap: 'anywhere' }}>
                  Curated engineering coursework and laboratory projects built during Computer Engineering studies, spanning FPGA VHDL parallel bitonic sorter, LibGDX game design, Cisco multi-area networking, statistical regression analysis, and embedded IoT systems.
                </p>
                <div className="service-tags">
                  <span className="service-tag">VHDL / FPGA</span>
                  <span className="service-tag">Java &amp; LibGDX</span>
                  <span className="service-tag">Cisco Networking</span>
                  <span className="service-tag">C Programming</span>
                  <span className="service-tag">ESP32 IoT</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. CCIT'S PROJECTS (POPUP ACCESS) */}
          <div className="project-group-header">
            <h3 className="project-group-title">
              CCIT&apos;s <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
            </h3>
            <span className="project-group-badge">{ccitProjects.length} Projects</span>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)' }}>
            <div
              className="service-item project-bundle-item"
              onClick={() => setSubView('ccit')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSubView('ccit'); }}
            >
              <div style={{ width: '240px', flexShrink: 0, position: 'relative' }}>
                <img
                  src={melodifyImg}
                  alt="CCIT's Projects"
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    border: '1px solid var(--clr-border)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                  }}
                />
                <div className="bundle-overlay-badge">
                  {ccitProjects.length} Projects Inside
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                  Sep 2023 — Oct 2025
                </span>
                <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}>
                  CCIT&apos;s Projects
                  <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px', overflowWrap: 'anywhere' }}>
                    CCIT FTUI Professional Program (ISA)
                  </div>

                  <button
                    className="btn-offset"
                    onClick={(e) => { e.stopPropagation(); setSubView('ccit'); }}
                    style={{ marginTop: '14px', alignSelf: 'flex-start' }}
                  >
                    Open CCIT Projects ({ccitProjects.length}) &rarr;
                  </button>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6', overflowWrap: 'anywhere' }}>
                  Applied software engineering and system automation projects completed at CCIT-FTUI, featuring full-stack music streaming platform, Android Kotlin mobile applications, SQL Server database administration, Excel data analytics dashboards, and smart IoT automation.
                </p>
                <div className="service-tags">
                  <span className="service-tag">PHP / MySQL</span>
                  <span className="service-tag">Kotlin / Android</span>
                  <span className="service-tag">SQL Server</span>
                  <span className="service-tag">IoT Automation</span>
                  <span className="service-tag">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. ISAS ACADEMIC RESEARCH (STANDALONE) */}
          <div className="project-group-header">
            <h3 className="project-group-title">
              ISAS <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Academic Research</em>
            </h3>
            <span className="project-group-badge">{isasProjects.length} Project</span>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)' }}>
            {isasProjects.map((proj, i) => renderProjectItem(proj, i))}
          </div>
        </div>
      )}

      {/* POPUP SUBVIEW: UNIVERSITY'S PROJECTS */}
      {subView === 'univ' && (
        <div>
          <div className="category-detail-header">
            <button className="btn-offset btn-back" onClick={() => setSubView(null)}>
              &larr; Back to Technical Projects
            </button>
            <div className="category-detail-meta" style={{ marginTop: '8px' }}>
              <span className="category-detail-tag">Faculty of Engineering, Universitas Indonesia &bull; 8 Projects</span>
              <h2 className="t-h2 category-detail-title">
                University&apos;s <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
              </h2>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)', marginTop: 'var(--space-md)' }}>
            {universityProjects.map((proj, i) => renderProjectItem(proj, i))}
          </div>
        </div>
      )}

      {/* POPUP SUBVIEW: CCIT'S PROJECTS */}
      {subView === 'ccit' && (
        <div>
          <div className="category-detail-header">
            <button className="btn-offset btn-back" onClick={() => setSubView(null)}>
              &larr; Back to Technical Projects
            </button>
            <div className="category-detail-meta" style={{ marginTop: '8px' }}>
              <span className="category-detail-tag">CCIT FTUI Professional Program (ISA) &bull; 7 Projects</span>
              <h2 className="t-h2 category-detail-title">
                CCIT&apos;s <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
              </h2>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--clr-border)', marginTop: 'var(--space-md)' }}>
            {ccitProjects.map((proj, i) => renderProjectItem(proj, i))}
          </div>
        </div>
      )}
    </div>
  );
}
