"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Mail,
  Linkedin,
  Github
} from "lucide-react";

// --- MTA Colors (Official Hex Codes) ---
const MTA_BLUE = "#0039A6";   // A, C, E (Frontend)
const MTA_ORANGE = "#FF6319"; // B, D, F, M (Database)
const MTA_YELLOW = "#FCCC0A"; // N, Q, R, W (Highlight)
const MTA_RED = "#EE352E";    // 1, 2, 3 (Backend)
const MTA_GREEN = "#00933C";  // 4, 5, 6 (Tools)
const MTA_PURPLE = "#B933AD"; // 7 (AI/Special)
const MTA_GRAY = "#A7A9AC";   // S (Shuttle)

// --- Animation Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Interfaces ---
interface SectionHeaderProps {
  title: string;
  number: string;
}

interface ProjectSignProps {
  title: string;
  type: string;
  desc: string;
  link: string;
  line: string;
  color: string;
  textColor?: string;
}

interface SkillSignProps {
  title: string;
  color: string;
  skills: string[];
}

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Always has bg-black and border-b border-white to mimic a static sign
    <nav className={`fixed w-full z-50 transition-all duration-300 font-helvetica bg-black border-b border-white ${scrolled ? "py-3" : "py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo - Matches Screenshot Style */}
        <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            {/* Name First - Reverted to font-bold for clarity */}
            <h1 className="text-white font-bold tracking-tight text-3xl md:text-4xl group-hover:text-[#FCCC0A] transition-colors duration-300">
                Mahathir Rojan
            </h1>

            {/* The Bullets - To the Right */}
            <div className="flex -space-x-1">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF6319] flex items-center justify-center text-white font-bold text-lg border-2 border-black z-10 shadow-lg">
                    M
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FCCC0A] flex items-center justify-center text-black font-bold text-lg border-2 border-black z-0 shadow-lg">
                    R
                </div>
            </div>
        </div>

        {/* Navigation - Minimalist */}
        <div className="hidden md:flex items-center gap-8">
            {['About', 'Work', 'Skills'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-neutral-400 font-bold uppercase tracking-widest text-xs hover:text-[#FCCC0A] transition-colors duration-300">
                    {item}
                </a>
            ))}
            <a
                href="https://drive.google.com/file/d/1wVJeTSo9T4zEPVHbOiT08jE6nmi8Yfuu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-[#FCCC0A] transition-colors"
            >
                Resume
            </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white font-helvetica">
      <div className="container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                    <div className="h-[2px] w-12 bg-[#FCCC0A]"></div>
                    <span className="text-[#FCCC0A] font-bold uppercase tracking-widest text-xs">Based in New York City</span>
                </motion.div>

                <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                    Software Engineer <br/>
                    <span className="text-neutral-600">Full Stack</span>
                </motion.h1>

                <motion.p variants={fadeIn} className="text-xl md:text-2xl font-light text-neutral-300 max-w-2xl leading-relaxed mb-12">
                    I create full-stack applications focused on <strong className="text-white border-b border-[#0039A6]"> clarity, performance, and great user experience. </strong> <br/>

                </motion.p>

                <motion.div variants={fadeIn} className="flex gap-4">
                    <a href="#work" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#FCCC0A] transition-colors">
                        View Projects
                    </a>
                    <a href="#about" className="border border-white text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                        More About Me
                    </a>
                </motion.div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Section Header ---
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, number }) => (
    <div className="mb-20">
        <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            {title}.
        </h2>
        {/* The Track Line Container */}
        <div className="flex items-center w-full">
            {/* The White Line */}
            <div className="h-2 bg-white flex-grow"></div>
            {/* The Train Bullet (Page Number) */}
            <div className="ml-6 w-16 h-16 rounded-full bg-[#EE352E] flex items-center justify-center text-white font-bold text-3xl border-4 border-white shadow-[0_0_15px_rgba(238,53,46,0.5)]">
                {number}
            </div>
        </div>
    </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white font-helvetica">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" number="1" />

        <div className="grid md:grid-cols-12 gap-16 items-stretch">
            {/* Minimalist Profile Image */}
            <motion.div
                className="md:col-span-4 lg:col-span-3 relative flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="aspect-[3/4] md:aspect-auto md:h-full bg-neutral-900 transition-all duration-700 relative z-10 border border-neutral-800 w-full">
                     <img
                        src="/images/IMG_7281.jpg"
                        alt="Mahathir"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>
                {/* Decorative Offset Border */}
                <div className="absolute top-4 left-4 w-full h-full border border-white/20 z-0"></div>
            </motion.div>

            <div className="md:col-span-8 lg:col-span-9 space-y-8 pb-4">
                <p className="text-2xl font-light leading-snug text-white">
  I’m a <span className="text-[#FCCC0A]">Software Engineer</span> and Hunter College graduate
  with a B.A. in Computer Science (’25).
</p>

<p className="text-lg text-neutral-400 leading-relaxed">
  My background is in software engineering and full-stack development — learning algorithms,
  building systems, and creating web and mobile applications. During college I also explored
  Computer Vision and Data Science, which pushed me to tackle more complex problems with code.
</p>

<p className="text-lg text-neutral-400 leading-relaxed">
  I also work as an IT Support Assistant at Hunter’s IT Helpdesk, which gives me a real-world
  view of how people actually use technology and how systems fail. That experience keeps me
  focused on building software that’s not just technically correct, but reliable, understandable,
  and easy to support.
</p>

                <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-neutral-800">
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Education</h4>
                        <p className="text-neutral-400">Hunter College</p>
                        <p className="text-neutral-500 text-sm">B.A. Computer Science, 2025</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Location</h4>
                        <p className="text-neutral-400 flex items-center gap-2">
                            <MapPin size={16} className="text-[#FCCC0A]"/> New York, NY
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Project Component
const ProjectSign: React.FC<ProjectSignProps> = ({ title, type, desc, link, line, color, textColor = "text-white" }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block mb-8">
        {/* The Black Signage Box */}
        <div className="bg-black border border-neutral-800 hover:border-white transition-colors duration-300 relative overflow-hidden group-hover:bg-neutral-900/30">
            {/* Colored Line Strip */}
            <div className="h-2 w-full" style={{ backgroundColor: color }}></div>

            <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div className="flex items-center gap-4">
                         {/* Bullet */}
                         <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0 ${textColor}`} style={{ backgroundColor: color }}>
                            {line}
                         </div>
                         <div>
                             {/* Yellow Hover Shine */}
                             <h3 className="text-3xl font-bold text-white group-hover:text-[#FCCC0A] transition-colors duration-300">{title}</h3>
                             <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest mt-1">{type}</p>
                         </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-neutral-500 uppercase text-xs font-bold tracking-widest group-hover:text-white transition-colors">
                        View <ArrowRight size={16} />
                    </div>
                </div>

                {/* Vertical line to the left of description */}
                <div className="ml-0 md:ml-16 border-l-2 pl-4" style={{ borderColor: color }}>
                    <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-3xl">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    </a>
);

const Projects = () => {
  return (
    <section id="work" className="bg-black text-white font-helvetica">
        <div className="container mx-auto px-6 md:px-12">
             <SectionHeader title="Selected Work" number="2" />

             <div className="max-w-5xl mx-auto">
                <ProjectSign
                    title="Knicks Dashboard"
                    line="K"
                    color={MTA_BLUE}
                    type="Next.js • TypeScript • REST API"
                    desc="A real-time Knicks dashboard that displays live scores, recent games, player stats, and box scores using ESPN’s public NBA API. Built with Next.js and TypeScript for fast loading and smooth UI updates."
                    link="http://knicks-dashboard.vercel.app"
                />

                <ProjectSign
                    title="Hunter Helpdesk Kiosk"
                    line="H"
                    color={MTA_BLUE}
                    type="Next.js • PostgreSQL • TypeScript"
                    desc="A digital check-in system used by 20,000+ students. Features real-time queue logic, admin dashboard, and kiosk interfaces to replace paper logs."
                    link="https://hunter-helpdesk-kiosk.vercel.app"
                />
                <ProjectSign
                    title="MySubway"
                    line="S"
                    color={MTA_GRAY}
                    type="Swift • Python • GTFS"
                    desc="Real-time NYC subway tracker integrating official GTFS feeds. Custom algorithms deliver accurate train times and service alerts faster than standard apps."
                    link="https://github.com/mahathirrojan/MYSubway"
                />
                <ProjectSign
                    title="NBA Fantasy Analytics"
                    line="N"
                    color={MTA_YELLOW}
                    textColor="text-black"
                    type="React • Firebase • API"
                    desc="Real-time performance stats and analytics dashboard helping fantasy users make data-driven lineup decisions in seconds."
                    link="https://github.com/mahathirrojan/nba-fantasy-frontend"
                />
                 <ProjectSign
                    title="Film Analyzer"
                    line="F"
                    color={MTA_ORANGE}
                    type="Django • OpenAI • Next.js • PostgreSQL"
                    desc="AI-powered analysis of movie trailers for emotion and pacing, comparing machine insights against audience reactions."
                    link="https://github.com/aurnabdas/CapStone-Film-Analyzer"
                />
             </div>
        </div>
    </section>
  );
};

// --- Skill "Sign" Component ---
const SkillSign: React.FC<SkillSignProps> = ({ title, color, skills }) => (
    <div className="bg-black border border-neutral-800 hover:border-neutral-600 transition-colors">
        {/* Top Strip */}
        <div className="h-1 w-full" style={{ backgroundColor: color }}></div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white tracking-tight mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span
                        key={skill}
                        className="text-xs font-bold tracking-widest px-3 py-1 bg-neutral-900 text-neutral-400 border border-neutral-800"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white font-helvetica">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Proficiency" number="3" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <SkillSign
                title="Frontend Engineering"
                color={MTA_BLUE}
                skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]}
            />
            <SkillSign
                title="Backend Development"
                color={MTA_RED}
                skills={["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL"]}
            />
            <SkillSign
                title="Database & Cloud"
                color={MTA_ORANGE}
                skills={["PostgreSQL", "Firebase", "Supabase", "AWS (Basic)", "Vercel"]}
            />
            <SkillSign
                title="Tools & Environment"
                color={MTA_GREEN}
                skills={["Git / GitHub", "Linux / Unix", "ServiceNow", "Postman", "Figma"]}
            />
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-20 font-helvetica">
    <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
                <h2 className="text-black text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    Let's Connect.
                </h2>
                <div className="flex flex-col gap-4">
                     <a href="mailto:mahathir.rojan@gmail.com" className="flex items-center gap-3 text-black font-bold uppercase tracking-widest hover:text-[#0039A6] transition-colors">
                        <Mail size={20} /> mahathir.rojan@gmail.com
                     </a>
                     <a href="https://linkedin.com/in/m-rojan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-black font-bold uppercase tracking-widest hover:text-[#0039A6] transition-colors">
                        <Linkedin size={20} /> LinkedIn
                     </a>
                     <a href="https://github.com/mahathirrojan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-black font-bold uppercase tracking-widest hover:text-[#0039A6] transition-colors">
                        <Github size={20} /> GitHub
                     </a>
                </div>
            </div>

            <div className="md:text-right">
                <div className=" text-black inline-block border-2 border-black px-6 py-2 mb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">New York City</span>
                </div>
                <p className="text-neutral-500 text-sm font-bold uppercase">
                    © {new Date().getFullYear()} Mahathir Rojan. <br/> Built with React & Tailwind.
                </p>
            </div>
        </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="bg-black min-h-screen selection:bg-[#FCCC0A] selection:text-black">
        <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
            .font-helvetica { font-family: 'Inter', sans-serif; }
            html { scroll-behavior: smooth; }
        `}
        </style>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}