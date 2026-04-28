export default function ProjectsContent() {
  const projects = [
    {
      id: "01",
      title: "16-Channel Parallel Bitonic Sorter",
      category: "Digital Logic Design",
      desc: "Designed and implemented a high-performance parallel sorting algorithm using VHDL for low-level hardware architectures[cite: 48, 84].",
      tech: ["VHDL", "FPGA"]
    },
    {
      id: "02",
      title: "Smart Clothesline System",
      category: "IoT / Embedded Systems",
      desc: "Built a Blynk-based weather-responsive control system using ESP32 microcontrollers and servo motors for automated clothesline movement[cite: 27, 28].",
      tech: ["ESP32", "Blynk", "Sensors"]
    },
    {
      id: "03",
      title: "Neon Database & Movie System",
      category: "Database Management",
      desc: "Structured high-performance database schemas and entity relationship diagrams for movie information storage using Microsoft SQL Server and Neon[cite: 118, 119].",
      tech: ["SQL Server", "Neon DB", "ERD"]
    },
    {
      id: "04",
      title: "AI Job Replacement Trends",
      category: "Data Analysis",
      desc: "Processed and analyzed labor datasets (2020-2026) using Python and Pandas to visualize trends in AI automation[cite: 48, 84].",
      tech: ["Python", "Pandas", "Matplotlib"]
    }
  ];

  return (
    <div>
      <h2 className="t-h2" style={{ marginBottom: 'var(--space-2xl)' }}>
        Selected<br /><em style={{ fontStyle: 'italic', color: 'var(--clr-copper)' }}>Lab Work</em>
      </h2>
      <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
        {projects.map((proj) => (
          <div key={proj.id} style={{ paddingBottom: 'var(--space-lg)', borderBottom: '1px solid var(--clr-border)' }}>
            <div className="t-mono" style={{ color: 'var(--clr-copper)', marginBottom: '8px' }}>Module {proj.id}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem' }}>{proj.title}</h3>
              <span className="t-label" style={{ marginTop: '8px' }}>{proj.category}</span>
            </div>
            <p style={{ color: 'var(--clr-muted)', marginBlock: '16px', maxWidth: '650px' }}>{proj.desc}</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {proj.tech.map(t => <span key={t} className="pin-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}