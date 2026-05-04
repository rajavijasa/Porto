import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';

export default function ExperienceContent() {
  const experiences = [
    { year: "2025 — Present", inst: "AMV Team UI", major: "Electrical Staff", desc: "Specializing in building smart robots and IoT solutions. Developed autonomous acoustic pinger detection systems for AUVs.", skills: ["Robotics", "IoT", "Embedded Systems"], img: univImg },
    { year: "2024 — 2025", inst: "Kontes Kapal Indonesia", major: "Participant", desc: "Designed and programmed a robot ship. Gained hands-on experience in marine vehicle automation and hardware integration.", skills: ["Marine Automation", "Hardware", "Team Collaboration"], img: ccitImg }
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
            <div style={{ width: '160px', flexShrink: 0 }}>
              <img
                src={exp.img}
                alt={exp.inst}
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
                {exp.year}
              </span>
              <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1' }}>
                {exp.inst}
                <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>
                  {exp.major}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6' }}>
                {exp.desc}
              </p>
              <div className="service-tags">
                {exp.skills.map(s => <span key={s} className="service-tag">{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}