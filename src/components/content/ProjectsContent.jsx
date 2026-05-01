import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';

export default function ProjectsContent() {
  const projects = [
    { year: "Dec 2025", inst: "16-Channel Parallel Bitonic Sorter", major: "Digital Logic Design", desc: "Designed and implemented a parallel sorting network on FPGA using VHDL.", skills: ["FPGA", "VHDL", "Digital Logic"], img: univImg },
    { year: "2025 — 2026", inst: "LabuBoom Game", major: "Game Development", desc: "Managed software repository and backend deployment using Java and Spring Boot.", skills: ["Java", "Spring Boot", "LibGDX"], img: ccitImg },
    { year: "April 2026", inst: "Personal Web Portfolio", major: "Frontend Engineering", desc: "Built a responsive and interactive personal portfolio utilizing React and Vite.", skills: ["React", "CSS", "Vite"], img: schoolImg }
  ];

  return (
    <div>
      <h2 className="t-h2 popup-header-title">
        Technical <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Projects</em>
      </h2>

      <div>
        {projects.map((proj, i) => (
          <div key={i} className="popup-service-item">
            <div className="popup-img-wrapper"><img src={proj.img} alt={proj.inst} /></div>
            <div className="popup-text-wrapper">
              <span className="service-item__num" style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{proj.year}</span>
              <div className="service-item__name" style={{ fontSize: '2.7rem', lineHeight: '1.1' }}>{proj.inst}
                <div style={{ fontSize: '1.7rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>{proj.major}</div>
              </div>
            </div>
            <div className="popup-desc-wrapper">
              <p style={{ fontSize: '1.8rem', color: 'var(--clr-muted)', marginBottom: '16px', lineHeight: '1.5' }}>{proj.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{proj.skills.map(s => <span key={s} className="service-tag">{s}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}