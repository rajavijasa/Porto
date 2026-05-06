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

export default function ProjectsContent() {
  const projects = [
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
      major: "Computer Network",
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
      skills: ["FLutter", "Kotlin", "Sensor Integration"],
      img: molitavImg,
      link: "https://drive.google.com/drive/folders/1WkxPNl7BUpMvrR8uiklH0oFRppFAwmPr?usp=sharing",
      isLatest: false
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
      major: "Programming Fundamental",
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
      skills: ["DIgital Logic Design", "Proteus", "Electrical Components"],
      img: dsdImg,
      link: "https://drive.google.com/drive/folders/12tWzmCju5krIt5BH_M8NlfaHGMvBNemf?usp=sharing",
      isLatest: false
    },
    {
      year: "Nov 2024",
      inst: "Automatic Window with ESP32",
      major: "IoT Design",
      desc: "Implementing an Automatic Window if Raining for Draining Clothes, Integrated with Servo Motor, Buzzer & Rain Drop sensor, and BLYNK for more Fleksible Monitoring",
      skills: ["Wokwi Design", "IoT", "ESP32"],
      img: exerprojectImg,
      link: "https://drive.google.com/drive/folders/1XQbho1QM0IuEf4n1DyJ_bDTc_LQ_AKDv?usp=sharing",
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
      desc: "Designed And Implemented A Relational Database For A Movie System with Microsoft SQL Server, Ilustrate Entity-Relationship Diagrams, Stored Procedures, And Triggers.",
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
    },
  ];

  return (
    <div>
      <h2 className="t-h2 popup-header-title">
        Technical <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
      </h2>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {projects.map((proj, i) => (
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
                {/* LATEST Badge Dinamis (Diperbaiki referensinya menjadi proj) */}
                {proj.skills.map(tag => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}