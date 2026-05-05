import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';

export default function ProjectsContent() {
  const projects = [
    {
      year: "Dec 2025",
      inst: "16-Channel Parallel Bitonic Sorter",
      major: "Digital Logic Design",
      desc: "Designed and implemented a parallel sorting network on FPGA using VHDL.",
      skills: ["FPGA", "VHDL", "Digital Logic"],
      img: univImg,
      link: null,
      isLatest: true
    },
    {
      year: "2025 — 2026",
      inst: "LabuBoom Game",
      major: "Game Development",
      desc: "Managed software repository and backend deployment using Java and Spring Boot.",
      skills: ["Java", "Spring Boot", "LibGDX"],
      img: ccitImg,
      link: null,
      isLatest: true
    },
    {
      year: "April 2026",
      inst: "Personal Web Portfolio",
      major: "Frontend Engineering",
      desc: "Built a responsive and interactive personal portfolio utilizing React and Vite.",
      skills: ["React", "CSS", "Vite"],
      img: schoolImg,
      link: null,
      isLatest: false
    },
    {
      year: "—",
      inst: "Slam Dunk (Arcade Basket)",
      major: "Digital Design",
      desc: "(Dummy) Replace this description with the real project details.",
      skills: ["(Dummy) Skill 1", "(Dummy) Skill 2", "(Dummy) Skill 3"],
      img: ccitImg,
      link: "https://drive.google.com/drive/folders/12tWzmCju5krIt5BH_M8NlfaHGMvBNemf?usp=sharing",
      isLatest: false
    }
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
            <div style={{ width: '160px', flexShrink: 0 }}>
              <img
                src={proj.img}
                alt={proj.inst}
                style={{
                  width: '100%',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '1px solid var(--clr-border)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }}
              />
            </div>

            <div style={{ flex: 1, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                {proj.year}
              </span>
              <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1' }}>
                {proj.inst}
                <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>
                  {proj.major}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6' }}>
                {proj.desc}
              </p>
              <div className="service-tags">
                {/* LATEST Badge Dinamis (Diperbaiki referensinya menjadi proj) */}
                {proj.skills.map(tag => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>

              {proj.link && (
                <a
                  className="btn-offset"
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: '14px' }}
                >
                  Open Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}