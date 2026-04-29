import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';

export default function EducationContent() {
  const education = [
    {
      year: "2024 — Present",
      inst: "University of Indonesia",
      major: "B.Eng in Computer Engineering",
      desc: "Currently pursuing a degree in Computer Engineering, focusing on hardware-software integration and system design.",
      skills: ["Operating Systems", "Computer Architecture", "PostgreSQL"],
      img: univImg
    },
    {
      year: "2023 — 2025",
      inst: "CCIT FTUI Professional Program",
      major: "Internet-based System Automation (ISA)",
      desc: "Specialized in IoT orientation and information technology within a professional development framework.",
      skills: ["IoT Automation", "Network Infrastructure", "ISA"],
      img: ccitImg
    },
    {
      year: "2020 — 2023",
      inst: "SMAN 112 Jakarta",
      major: "Science Major",
      desc: "Completed secondary education with a focus on mathematics and natural sciences.",
      skills: ["Mathematics", "Physics"],
      img: schoolImg
    }
  ];

  return (
    <div>
      <h2 className="t-h2" style={{ marginBottom: 'var(--space-xl)', fontSize: 'clamp(2rem, 4.8vw, 3.2rem)' }}>
        Academic<br /><em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>History</em>
      </h2>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {education.map((edu, i) => (
          
          <div key={i} className="service-item" style={{ 
            alignItems: 'center', 
            flexWrap: 'nowrap', 
            /* REVISI: Padding dikurangi 40% (menjadi 19px) */
            padding: '19px 0' 
          }}>
            
            {/* KOLOM 1: Gambar Diperbesar 200% */}
            <div style={{ width: '320px', flexShrink: 0 }}>
              <img 
                src={edu.img} 
                alt={edu.inst} 
                style={{ 
                  width: '100%', 
                  height: '240px', 
                  objectFit: 'cover', 
                  borderRadius: '12px', 
                  border: '1px solid var(--clr-border)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                }} 
              />
            </div>

            {/* KOLOM 2: Teks Diperbesar ~80% */}
            <div style={{ width: '350px', flexShrink: 0, display: 'flex', flexDirection: 'column', marginLeft: '24px' }}>
              <span className="service-item__num" style={{ width: 'auto', marginBottom: '12px', fontSize: '1.25rem' }}>
                {edu.year}
              </span>
              <div className="service-item__name" style={{ width: 'auto', fontSize: '2.7rem', lineHeight: '1.1' }}>
                {edu.inst}
                <div style={{ fontSize: '1.7rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '8px' }}>
                  {edu.major}
                </div>
              </div>
            </div>

            {/* KOLOM 3: Deskripsi Diperbesar ~80% */}
            <div style={{ flex: 1, minWidth: '300px', marginLeft: '24px' }}>
              <p style={{ fontSize: '1.8rem', color: 'var(--clr-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
                {edu.desc}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {edu.skills.map(s => <span key={s} className="service-tag" style={{ fontSize: '1.1rem', padding: '6px 12px' }}>{s}</span>)}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}