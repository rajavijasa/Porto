import ZoomableImage from '../ZoomableImage';
import univImg from '../../assets/universitas.jpg';
import ccitImg from '../../assets/ccit.jpg';
import schoolImg from '../../assets/school.png';
import kkiAwardImg from '../../assets/kki2026_rov_award.jpeg';

export default function EducationContent() {
  // Data eksklusif untuk modal Education
  const educationData = [
    {
      year: "Aug 2024 — Present",
      inst: "University of Indonesia",
      major: "B.Eng in Computer Engineering",
      score: "GPA: 3.84",
      desc: "Currently pursuing bachelor degree with a focus on embedded systems, computer architecture, and programming.",
      skills: ["Computer Architecture", "Embedded Systems", "Programming", "Digital Design"],
      img: univImg,
      isLatest: false
    },
    {
      year: "Sep 2023 — Oct 2025",
      inst: "CCIT FTUI Professional Program",
      major: "Internet-based System Automation (ISA)",
      score: "GPA: 3.34",
      desc: "Completed a 2-year professional program focusing on IoT, Network, and system automation. Graduated with expertise in network infrastructure and IoT.",
      skills: ["IoT", "Networking", "Programming"],
      img: ccitImg,
      isLatest: false
    },
    {
      year: "2020 — 2023",
      inst: "SMAN 112 Jakarta",
      major: "Science Major",
      score: "Score: 89,8",
      desc: "Completed secondary education with a strong foundation in mathematics and physics, paving the way for advanced studies in engineering.",
      skills: ["Mathematics", "Physics", "Analytical Thinking"],
      img: schoolImg,
      isLatest: false
    }
  ];

  const honorsData = [
    {
      year: "Sep 2026",
      inst: "2nd Place National Champion (Juara II)",
      major: "Remotely Operated Vehicle (ROV) Category — KKI 2026",
      desc: "Awarded 2nd Place National Champion in the ROV category at Kontes Kapal Indonesia 2026 by BPTI Kemendikbudristek.",
      skills: ["Underwater Robotics", "National Champion", "Marine Engineering", "Team Leadership"],
      img: kkiAwardImg
    }
  ];

  const certifications = [
    {
      title: "Data Science Foundations - Level 1",
      issuer: "IBM",
      skills: ["Data Science", "Machine Learning", "Big Data"]
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Cognitive Class / IBM",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis"]
    },
    {
      title: "Data Science Methodology",
      issuer: "Cognitive Class / IBM",
      skills: ["CRISP-DM", "Problem Formulation", "Analytics Lifecycle"]
    },
    {
      title: "Data Science Tools",
      issuer: "Cognitive Class / IBM",
      skills: ["Jupyter Notebooks", "RStudio", "GitHub Tools"]
    },
    {
      title: "Data Science 101",
      issuer: "Cognitive Class / IBM",
      skills: ["Analytics", "Exploratory Analysis", "Data Mining"]
    }
  ];

  return (
    <div>
      <h2 className="t-h2 popup-header-title" style={{ marginBottom: 'var(--space-xl)' }}>
        Academic <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Foundations</em>
      </h2>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {educationData.map((edu, i) => (
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
              <ZoomableImage
                src={edu.img}
                alt={edu.inst}
                caption={`${edu.inst} — ${edu.major}`}
              />
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                {edu.year}
              </span>
              <div
                className="service-item__name"
                style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}
              >
                {edu.inst}
                <div
                  style={{
                    fontSize: '1.425rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--clr-muted)',
                    marginTop: '8px',
                    overflowWrap: 'anywhere'
                  }}
                >
                  {edu.major}
                </div>

                <div
                  style={{
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--clr-copper)',
                    marginTop: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    overflowWrap: 'anywhere'
                  }}
                >
                  {edu.score}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--clr-muted)',
                  marginBottom: '12px',
                  lineHeight: '1.6',
                  overflowWrap: 'anywhere'
                }}
              >
                {edu.desc}
              </p>
              <div className="service-tags">
                {edu.skills.map((s) => (
                  <span key={s} className="service-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HONORS & AWARDS SECTION */}
      <div className="project-group-header" style={{ marginTop: 'var(--space-xl)' }}>
        <h3 className="project-group-title">
          Honors &amp; <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Awards</em>
        </h3>
        <span className="project-group-badge">{honorsData.length} Achievements</span>
      </div>

      <div style={{ borderTop: '1px solid var(--clr-border)' }}>
        {honorsData.map((h, i) => (
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
              <ZoomableImage
                src={h.img}
                alt={h.inst}
                caption={`${h.inst} — ${h.major}`}
              />
            </div>

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <span className="service-item__num" style={{ width: 'auto', marginBottom: '8px', fontSize: '1.05rem' }}>
                {h.year}
              </span>
              <div
                className="service-item__name"
                style={{ width: 'auto', fontSize: '2.1rem', lineHeight: '1.1', overflowWrap: 'anywhere' }}
              >
                {h.inst}
                <div
                  style={{
                    fontSize: '1.425rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--clr-copper-light)',
                    marginTop: '8px',
                    overflowWrap: 'anywhere'
                  }}
                >
                  {h.major}
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--clr-muted)',
                  marginBottom: '12px',
                  lineHeight: '1.6',
                  overflowWrap: 'anywhere'
                }}
              >
                {h.desc}
              </p>
              <div className="service-tags">
                {h.skills.map((s) => (
                  <span key={s} className="service-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PROFESSIONAL CERTIFICATIONS SECTION */}
      <div className="project-group-header" style={{ marginTop: 'var(--space-xl)' }}>
        <h3 className="project-group-title">
          Professional <em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Certifications</em>
        </h3>
        <span className="project-group-badge">{certifications.length} Credentials</span>
      </div>

      <div style={{ borderTop: '1px solid var(--clr-border)', paddingTop: 'var(--space-md)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
          {certifications.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'var(--clr-bg-alt)',
                border: '1px solid var(--clr-border)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease'
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--clr-copper)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  {c.issuer}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: 'var(--clr-text)',
                    marginTop: '6px',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}
                >
                  {c.title}
                </h4>
              </div>
              <div className="service-tags" style={{ marginTop: '8px' }}>
                {c.skills.map((s) => (
                  <span key={s} className="service-tag" style={{ fontSize: '0.75rem', padding: '3px 8px' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}