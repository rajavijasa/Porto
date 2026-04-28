export default function ExperienceContent() {
  const experiences = [
    {
      period: "Jan 2025 — Present",
      role: "Electrical Staff",
      company: "Autonomous Marine Vehicle Team UI",
      desc: "Developing underwater autonomous navigation systems and surface maneuvering control[cite: 30, 31, 70]. Responsible for thruster control wiring, sensor calibration, and surface electronics integration[cite: 34, 71].",
      tags: ["Marine Navigation", "Soldering", "Sensor Calibration"]
    },
    {
      period: "Oct 2025 — Nov 2025",
      role: "Bootcamp Research Assistant",
      company: "Quantum Computing",
      desc: "Researched quantum behavior on electrons and wave-particle duality[cite: 63, 66]. Controlled electron quantum states using quantum gates such as Hadamard and NOT gates[cite: 67].",
      tags: ["Quantum States", "Hadamard Gate", "Research"]
    },
    {
      period: "Oct 2024 — Dec 2024",
      role: "IoT Engineer Intern",
      company: "Exercise FTUI",
      desc: "Integrated IoT solutions with Arduino IDE for programmable devices[cite: 56, 57]. Configured actuators, sensors, and microcontrollers for automated systems[cite: 59].",
      tags: ["Arduino IDE", "ESP32", "Microcontrollers"]
    },
    {
      period: "Feb 2025 — Present",
      role: "Staff of Community Service",
      company: "Ikatan Mahasiswa Elektro FTUI",
      desc: "Engaged in community outreach and village development assistance[cite: 37, 68]. Managed environmental health campaigns and care initiatives[cite: 38, 69].",
      tags: ["Community Outreach", "Environment"]
    }
  ];

  return (
    <div>
      <h2 className="t-h2" style={{ marginBottom: 'var(--space-2xl)' }}>
        Professional<br /><em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Track Record</em>
      </h2>
      <div style={{ borderBottom: '1px solid var(--clr-border)' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="service-item">
            <span className="service-item__num">{exp.period}</span>
            <div className="service-item__name">
              {exp.company}
              <div style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', color: 'var(--clr-muted)', marginTop: '4px' }}>
                {exp.role}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--clr-muted)', marginBottom: '16px' }}>{exp.desc}</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {exp.tags.map(tag => <span key={tag} className="service-tag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}