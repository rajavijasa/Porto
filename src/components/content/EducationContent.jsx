import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';

export default function EducationContent() {
  // Data eksklusif untuk modal Education
  const educationData = [
    { year: "2024 — Present", inst: "University of Indonesia", major: "B.Eng in Computer Engineering", desc: "Currently pursuing bachelor degree with a focus on embedded systems, computer architecture, and programming.", skills: ["Computer Architecture", "Embedded Systems", "Programming", "Digital Design"], img: univImg, isLatest: false },
    { year: "2024 — 2026", inst: "CCIT FTUI Professional Program", major: "Internet-based System Automation (ISA)", desc: "Completed a 2-year professional program focusing on IoT, Network, and system automation. Graduated with expertise in network infrastructure and IoT.", skills: ["IoT", "Networking", "Programming"], img: ccitImg, isLatest: false },
    { year: "2021 — 2024", inst: "SMAN 112 Jakarta", major: "Science Major", desc: "Completed secondary education with a strong foundation in mathematics and physics, paving the way for advanced studies in engineering.", skills: ["Mathematics", "Physics", "Analytical Thinking"], img: schoolImg, isLatest: false }
  ];

  return (
    <div>
      <h2 className="t-h2 popup-header-title" style={{ marginBottom: 'var(--space-xl)' }}>
        Academic <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Foundations</em>
      </h2>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {educationData.map((edu, i) => (
          <div key={i} className="service-item" style={{ 
            alignItems: 'center', 
            flexWrap: 'nowrap',
            padding: 'var(--space-lg) 0'
          }}>
            
            {/* KOLOM 1: Gambar */}
            <div style={{ width: '160px', flexShrink: 0 }}>
              <img 
                src={edu.img} 
                alt={edu.inst} 
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

            {/* KOLOM 2: Tahun & Nama Institusi */}
            <div style={{ flex: 1, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                {edu.year}
              </span>
              <div className="service-item__name" style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1' }}>
                {edu.inst}
                <div style={{ fontSize: '1.425rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>
                  {edu.major}
                </div>
              </div>
            </div>

            {/* KOLOM 3: Deskripsi & Skills */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <p style={{ fontSize: '1.3rem', color: 'var(--clr-muted)', marginBottom: '12px', lineHeight: '1.6' }}>
                {edu.desc}
              </p>
              <div className="service-tags">
                {/* LATEST Badge Dinamis */}
                {edu.skills.map(s => <span key={s} className="service-tag">{s}</span>)}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}