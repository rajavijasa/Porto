import digilabImg from '../../assets/digilab.jpg';
import amvImg from '../../assets/amv.jpeg';
import alinImg from '../../assets/alin.png';
import imeImg from '../../assets/ime.jpeg';
import netlabImg from '../../assets/netlab.png';
import yabapiImg from '../../assets/yabapi.jpeg';
import exerImg from '../../assets/exercise.jpg';

export default function ExperienceContent() {
const experiences = [
    {
      year: "Jul 2026 - Present",
      inst: "Laboratory Assistant",
      major: "Digital Laboratory & Dept. of Electrical Engineering, University of Indonesia",
      desc: "Designed and updated practical lab modules across 4 core engineering courses: Digital Systems, Embedded Systems, Real-Time IoT, and Algorithms & Programming. Evaluated weekly lab reports, conducted viva examinations, and instructed 100+ undergraduate engineering students.",
      skills: ["Digital Systems", "Embedded Systems", "Real-Time IoT", "VHDL / FPGA", "C / C++"],
      img: digilabImg,
      isLatest: true
    },
    {
      year: "Dec 2024 - Present",
      inst: "Head of ROV Contingent (KKI 2026) & Electrical Staff",
      major: "Autonomous Marine Vehicle Team Robotics UI",
      desc: "Led the ROV Sub-Division as Head of Contingent at Kontes Kapal Indonesia (KKI) 2026, leading the team to secure 2nd Place National Champion (ROV Category) and advancing the ASV team as a National Finalist. Engineered power distribution, thruster actuation circuitry, waterproof enclosure wiring, circuit protection, and sensor calibration for ROV Makara Nemo and ASV Makara Perseus.",
      skills: ["Underwater Robotics", "Marine Electronics", "Power Distribution", "Circuit Protection", "Leadership"],
      img: amvImg,
      isLatest: true
    },
    {
      year: "Feb 2026 - Jun 2026",
      inst: "Assistant Lecturer of Linear Algebra",
      major: "Faculty of Engineering UI",
      desc: "Instructed engineering students in Linear Algebra by delivering comprehensive tutorials and solving mathematical concepts.",
      skills: ["Mathematics", "Teaching", "Matrix Computations"],
      img: alinImg,
      isLatest: false
    },
    {
      year: "Feb 2025 - Dec 2025",
      inst: "Staff of Community Service",
      major: "Ikatan Mahasiswa Elektro (IME-FTUI)",
      desc: "Coordinated impactful community service programs by leveraging donation and developing multimedia content to drive social participation.",
      skills: ["Public Speaking", "Video Editing", "Social Services"],
      img: imeImg,
      isLatest: false
    },
    {
      year: "Oct 2025 - Nov 2025",
      inst: "Quantum Computing Researcher",
      major: "Bootcamp Research Assistant Network Lab",
      desc: "Conducted foundational research in quantum computing theory, focusing on technical analysis and presenting scientific findings.",
      skills: ["Quantom Computing", "Quantum Theory", "Research Skills"],
      img: netlabImg,
      isLatest: false
    },
    {
      year: "Jun 2025 - Nov 2025",
      inst: "IoT Engineer Intern",
      major: "Yayasan Bayi Prematur (YABAPI) Indonesia ",
      desc: "Developed healthcare IoT applications with integrated sensors to accurately monitor and support care metrics for people in need.",
      skills: ["IoT", "Application Development", "Sensor Integration"],
      img: yabapiImg,
      isLatest: false
    },
    {
      year: "Oct 2024 - Dec 2024",
      inst: "Hardware Division Internship",
      major: "EXERCISE FTUI",
      desc: "Build circuit and integrated electrical components to develop functional hardware and IoT solutions for engineering projects.",
      skills: ["Hardware Design", "IoT", "Electrical Component"],
      img: exerImg,
      isLatest: false
    }
  ];

  return (
    <div>
      <h2 className="t-h2 popup-header-title">
        Professional <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Experience</em>
      </h2>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {experiences.map((exp, i) => (
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
                src={exp.img}
                alt={exp.inst}
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
                {exp.year}
              </span>
              <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}>
                {exp.inst}
                <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px', overflowWrap: 'anywhere' }}>
                  {exp.major}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6', overflowWrap: 'anywhere' }}>
                {exp.desc}
              </p>
              <div className="service-tags">
                 {/* LATEST Badge Dinamis */}
                {exp.skills.map(s => <span key={s} className="service-tag">{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}