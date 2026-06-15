/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  Mail, 
  ExternalLink, 
  Layout, 
  Smartphone, 
  Users, 
  Search, 
  Figma, 
  Zap,
  MousePointer2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl tracking-tighter text-white">
          AYUSH<span className="text-white/20">GAUR</span>
        </a>
        
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
          <a href="#contact" className="text-white border-b border-white/50 pb-1">Contact</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#050505] border-b border-white/10 px-12 py-8 flex flex-col gap-6 text-[10px] uppercase tracking-[0.3em] font-medium"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center border-b border-white/10 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 items-center gap-20 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-r border-white/10 lg:pr-20 py-12"
        >
          <div className="space-y-4 mb-10 text-balance">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-semibold block"
            >
              UI/UX Designer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-light leading-[1.05] text-white italic font-serif"
            >
              UI/UX Designer building simple mobile and learning experiences.
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm text-white/50 max-w-sm leading-relaxed mb-12"
          >
            I design user flows, wireframes, and Figma prototypes for mobile-first products, 
            with a focus on clarity, usability, and problem solving.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a href="#work" className="w-full sm:w-auto text-center px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/90 transition-all">
              View Work
            </a>
            <a href="#contact" className="w-full sm:w-auto text-center px-8 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative group overflow-hidden"
        >
          <div className="aspect-[4/5] bg-white/5 overflow-hidden">
            {/* The image points to the file saved in your public folder */}
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Portrait of Ayush Gaur" 
              className="object-cover w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
          </div>
          <div className="absolute inset-0 border border-white/10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-10 text-white/20 font-mono text-xs tracking-widest uppercase"
          >
            001 // Portfolio Main Reveal
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 border-b border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-12">
            The Approach
          </h2>
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl font-light text-white leading-tight font-serif italic text-balance">
              "My process starts with understanding the user, mapping the flow, 
              and simplifying each decision into a clearer interface."
            </p>
            <div className="h-px w-full bg-white/10" />
            <div className="grid grid-cols-1 gap-12">
              <div>
                <p className="text-2xl font-light text-white mb-2 font-mono">2023 — 2027</p>
                <p className="text-[9px] uppercase tracking-widest text-white/40">B.Sc Mathematics · Graduation</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-white/60 leading-relaxed text-sm"
        >
          <p>
            I am Ayush Gaur, a UI/UX designer focused on practical product design 
            for mobile and web experiences. I enjoy turning rough ideas into clear 
            user flows, wireframes, and usable interfaces.
          </p>
          <p>
            My mathematics background helps me break complex problems into simple 
            steps. I am building stronger skills in user research, Figma prototyping, 
            information architecture, and learning-friendly digital experiences.
          </p>
          <div className="pt-8">
            <h4 className="text-white text-xs uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Background</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-xs">
                <span className="text-white/80">Personal Projects</span>
                <span className="text-white font-mono opacity-40">2025 — PRES</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WorkSection = () => {
  const projects = [
    {
      id: "01",
      title: "LaundryHub",
      category: "Mobile Design / UX",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop",
      link: "https://www.figma.com/design/C015xPTJtIW6CuLlpGR3QT/LaundryHub?node-id=6-59&t=eW317xe9GewPuOeh-1"
    },
    {
      id: "02",
      title: "SkillBridge",
      category: "Visual Exploration",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      link: "https://www.figma.com/design/zlhv3xKAimlQtjAg7LY0U6/Daily-UI-Challenge?node-id=0-1&t=Dz7k0wGii5KXOntL-1"
    }
  ];

  return (
    <section id="work" className="bg-[#050505] min-h-screen flex flex-col">
       <div className="flex justify-between items-end px-12 py-10 border-b border-white/10">
        <h2 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/40">Selected Projects</h2>
        <span className="text-[10px] text-white/20 font-mono tracking-widest">PROJ — 01 / 02</span>
      </div>
      <div className="grid md:grid-cols-2 flex-1">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-r border-b border-white/10 p-10 flex flex-col bg-[#050505] hover:bg-[#111] transition-colors"
          >
            <div className="flex-1 mb-12 overflow-hidden aspect-[4/3] md:aspect-auto">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/30">
                <span>{project.category}</span>
                <span className="font-mono">{project.id}</span>
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-white text-2xl font-medium tracking-tight font-display">{project.title}</h3>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>
              <div className="text-[8px] uppercase tracking-[0.2em] text-white py-2 px-4 border border-white/20 inline-block group-hover:bg-white group-hover:text-black transition-colors">
                View in Figma
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    { name: "User Experience Design (UED)", icon: Users, detail: "Research-driven flows and user journeys" },
    { name: "User Interface Design", icon: Figma, detail: "Clean layouts, hierarchy, and polish" },
    { name: "Product Design", icon: Layout, detail: "Problem framing and product thinking" },
    { name: "Artificial Intelligence (AI)", icon: Zap, detail: "AI-aware product and workflow thinking" },
    { name: "Artificial Intelligence for Design", icon: Zap, detail: "Using AI to explore and improve ideas" },
    { name: "Information Architecture", icon: Layout, detail: "Navigation, content hierarchy, structure" },
    { name: "Responsive Web Design", icon: Smartphone, detail: "Adaptive layouts across screen sizes" },
    { name: "Mobile Application Design", icon: Smartphone, detail: "Mobile-first screens and app flows" },
    { name: "User Flows", icon: MousePointer2, detail: "Step-by-step journeys and task paths" },
    { name: "Wireframing", icon: Figma, detail: "Low-fidelity screens and layout exploration" },
    { name: "Figma (Software)", icon: Figma, detail: "Design files, components, and prototypes" },
    { name: "User Research", icon: Search, detail: "Pain points, needs, and user insights" },
    { name: "Usability Design", icon: Users, detail: "Clear actions and reduced user friction" },
    { name: "Color Theory", icon: Figma, detail: "Contrast, mood, and accessible palettes" },
    { name: "Problem Solving", icon: Search, detail: "Turning complex needs into simple steps" },
    { name: "Team Problem Solving", icon: Users, detail: "Collaborative thinking and feedback loops" },
    { name: "Sketching", icon: MousePointer2, detail: "Early concepts and quick visual exploration" },
    { name: "Soft Skills", icon: Users, detail: "Communication, ownership, and collaboration" },
  ];

  return (
    <section id="skills" className="py-32 bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">Expertise</h2>
            <h3 className="text-4xl font-light text-white font-serif italic leading-tight">
              Designing with logic, <br />crafting with heart.
            </h3>
          </motion.div>
          <div className="md:w-2/3 grid grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#080808] p-10 flex flex-col gap-6 group hover:bg-[#111] transition-colors"
              >
                <skill.icon className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest mb-2">{skill.name}</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider">{skill.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-light text-white font-serif italic mb-24 tracking-tight"
        >
          Let's connect.
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:ayush2225gaur@gmail.com" 
            className="group flex flex-col items-center gap-4 border-b border-white/10 pb-4 transition-all hover:border-white/30 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">Email</span>
            </div>
            <span className="text-xl text-white group-hover:text-white/60 transition-colors">ayush2225gaur@gmail.com</span>
          </motion.a>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="https://www.linkedin.com/in/ayushgaur02/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 border-b border-white/10 pb-4"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">LinkedIn</span>
            <span className="text-xl text-white group-hover:text-white/60 transition-colors">ayushgaur02</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/20 font-medium">
        <span>© 2026 AYUSH GAUR STUDIO</span>
        <div className="flex gap-12">
          <a href="mailto:ayush2225gaur@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a 
            href="https://www.linkedin.com/in/ayushgaur02/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkSection />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
