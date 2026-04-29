import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';

export default function EducationContent() {
  const education = [
    { year: "2024 — Present", inst: "University of Indonesia", major: "B.Eng in Computer Engineering", desc: "Currently pursuing a degree in Computer Engineering, focusing on hardware-software integration and system design.", skills: ["Operating Systems", "Computer Architecture", "PostgreSQL"], img: univImg },
    { year: "2023 — 2025", inst: "CCIT FTUI Professional Program", major: "Internet-based System Automation (ISA)", desc: "Specialized in IoT orientation and information technology within a professional development framework.", skills: ["IoT Automation", "Network Infrastructure", "ISA"], img: ccitImg },
    { year: "2020 — 2023", inst: "SMAN 112 Jakarta", major: "Science Major", desc: "Completed secondary education with a focus on mathematics and natural sciences.", skills: ["Mathematics", "Physics"], img: schoolImg }
  ];

  return (
    <div>
      <h2 className="t-h2" style={{ marginBottom: 'var(--space-xl)', fontSize: 'clamp(2rem, 4.8vw, 3.2rem)' }}>
        Academic<br /><em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Foundations</em>
      </h2>
      <div>
        {education.map((edu, i) => (
          <div key={i} className="popup-service-item">
            <div className="popup-img-wrapper"><img src={edu.img} alt={edu.inst} /></div>
            <div className="popup-text-wrapper">
              <span className="service-item__num" style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{edu.year}</span>
              <div className="service-item__name" style={{ fontSize: '2.7rem', lineHeight: '1.1' }}>{edu.inst}
                <div style={{ fontSize: '1.7rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>{edu.major}</div>
              </div>
            </div>
            <div className="popup-desc-wrapper">
              <p style={{ fontSize: '1.8rem', color: 'var(--clr-muted)', marginBottom: '16px', lineHeight: '1.5' }}>{edu.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{edu.skills.map(s => <span key={s} className="service-tag" style={{ fontSize: '1.1rem', padding: '6px 12px' }}>{s}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}