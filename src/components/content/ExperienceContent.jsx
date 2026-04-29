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

      <div>
        {experiences.map((exp, i) => (
          <div key={i} className="popup-service-item">
            <div className="popup-img-wrapper"><img src={exp.img} alt={exp.inst} /></div>
            <div className="popup-text-wrapper">
              <span className="service-item__num" style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{exp.year}</span>
              <div className="service-item__name" style={{ fontSize: '2.7rem', lineHeight: '1.1' }}>{exp.inst}
                <div style={{ fontSize: '1.7rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>{exp.major}</div>
              </div>
            </div>
            <div className="popup-desc-wrapper">
              <p style={{ fontSize: '1.8rem', color: 'var(--clr-muted)', marginBottom: '16px', lineHeight: '1.5' }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{exp.skills.map(s => <span key={s} className="service-tag" style={{ fontSize: '1.1rem', padding: '6px 12px' }}>{s}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}