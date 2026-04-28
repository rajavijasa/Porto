import React from 'react';

const projects = [
  {
    id: 1,
    title: "16-Channel Parallel Bitonic Sorter",
    category: "Digital Systems Design",
    tech: ["VHDL", "FPGA", "Digital Logic"],
    description: "Perancangan dan implementasi algoritma pengurutan paralel berkinerja tinggi menggunakan VHDL untuk arsitektur perangkat keras tingkat rendah.",
  },
  {
    id: 2,
    title: "Low-Level System Control",
    category: "Embedded Systems",
    tech: ["AVR Assembly", "ATmega328P", "UART/I2C"],
    description: "Pemrograman sistem tersemat menggunakan Assembly untuk kontrol presisi pada komunikasi perangkat keras dan interupsi mikrokontroler.",
  },
  {
    id: 3,
    title: "Enterprise Network Architecture",
    category: "Computer Networking",
    tech: ["Cisco IOS", "OSPF", "VLANs", "GRE over IPsec"],
    description: "Konfigurasi dan simulasi topologi jaringan kompleks yang mengimplementasikan protokol perutean dinamis, segmentasi jaringan, dan tunneling aman.",
  },
  {
    id: 4,
    title: "Database Performance Analysis",
    category: "Data Systems",
    tech: ["PostgreSQL", "MongoDB", "Python"],
    description: "Studi komparatif performa antara basis data Relasional dan NoSQL, mengevaluasi kecepatan eksekusi kueri, desain skema, dan skalabilitas.",
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans">
      {/* Navbar Minimalis */}
      <nav className="border-b border-slate-800 p-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">Porto<span className="text-blue-500">.</span></h1>
        <div className="space-x-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm Raja Avicenna. <br className="hidden md:block"/>
          <span className="text-slate-400">Computer Engineering Student.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Berfokus pada pengembangan dan optimalisasi sistem komputasi—dari perancangan arsitektur perangkat keras dan jaringan, hingga manajemen performa basis data.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
          Lihat Resume
        </button>
      </header>

      {/* Projects Grid Section */}
      <section id="projects" className="bg-slate-950 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Selected Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group border border-slate-800 bg-slate-900 p-8 rounded-xl hover:border-slate-600 transition duration-300"
              >
                <div className="text-xs font-semibold text-blue-500 mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Raja Avicenna Al-Kindi Vijasa. All rights reserved.</p>
      </footer>
    </div>
  );
}