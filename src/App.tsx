/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react"; // Note: Change to "framer-motion" if using v11 or older
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
            <img 
              src="/IMG-20251205-WA0000.jpg" 
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
