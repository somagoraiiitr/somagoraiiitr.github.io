import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy projects data as specified
const projects = [
  {
    id: 1,
    title: "Project Alpha",
    role: "Lead UI/UX Designer",
    year: "2025",
    synopsis: "A next-generation SaaS dashboard designed to simplify multi-tenant operations and monitoring.",
    problem: "Users struggled to correlate metrics from disparate database instances, leading to slow incident response times.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Project Beta",
    role: "Interaction Engineer",
    year: "2024",
    synopsis: "An interactive, web-based tool for visualizing real-time financial market swings and order books.",
    problem: "Traditional graphs lagged when handling high-frequency tick data, causing visualization delay for day traders.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Project Gamma",
    role: "Design Systems Lead",
    year: "2024",
    synopsis: "Building a multi-theme component library to align consumer-facing platforms across web and mobile web.",
    problem: "Fragmented component definitions led to excessive design debt and high build payload sizes.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Project Delta",
    role: "UX Researcher",
    year: "2023",
    synopsis: "An in-depth study of friction points in digital checkout flows for regional e-commerce products.",
    problem: "High drop-off rates at payment gateways due to misleading layout indicators and lack of localization options.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  }
];

export default function CaseStudiesComponent() {
  const [expandedId, setExpandedId] = useState(null);

  // Find the currently expanded project if any
  const expandedProject = projects.find(p => p.id === expandedId);

  return (
    <div className="min-h-screen bg-[#F3F0E7] text-[#1C2123] font-sans p-8 md:p-16 relative">
      
      {/* Section Header */}
      <header className="mb-12 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#B64F2A] tracking-tight">
          Case Studies
        </h2>
      </header>

      {/* Main Grid/Table Container */}
      <main className="max-w-5xl mx-auto relative">
        <div className="border-[1.5px] border-[#1C2123] bg-white divide-y-[1.5px] divide-[#1C2123]">
          
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-[80px_2.5fr_1.5fr_100px_120px] gap-8 px-8 py-4 bg-[#F3F0E7] font-semibold text-sm uppercase tracking-wider text-[#6A675D]">
            <div>Image</div>
            <div>Project Title</div>
            <div>Role / Deliverable</div>
            <div>Year</div>
            <div className="text-right">Action</div>
          </div>

          {/* Rows */}
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`row-container-${project.id}`}
              onClick={() => setExpandedId(project.id)}
              className="grid grid-cols-1 md:grid-cols-[80px_2.5fr_1.5fr_100px_120px] gap-4 md:gap-8 items-center px-8 py-6 cursor-pointer hover:bg-[#F3F0E7]/30 transition-colors"
            >
              {/* Column 1: Image Thumbnail with hover cues */}
              <div className="relative w-20 h-20 border border-[#1C2123] overflow-hidden group">
                <motion.img
                  layoutId={`project-img-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#1C2123]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-[10px] font-bold uppercase tracking-wider">
                  <span>View</span>
                  <span>Project</span>
                </div>
              </div>

              {/* Column 2: Title */}
              <motion.div layoutId={`project-title-container-${project.id}`}>
                <h3 className="text-xl font-bold text-[#1C2123]">{project.title}</h3>
              </motion.div>

              {/* Column 3: Role */}
              <motion.div layoutId={`project-role-container-${project.id}`}>
                <span className="text-[#6A675D]">{project.role}</span>
              </motion.div>

              {/* Column 4: Year */}
              <motion.div layoutId={`project-year-container-${project.id}`}>
                <span className="text-[#6A675D]">{project.year}</span>
              </motion.div>

              {/* Column 5: Ripple CTA Button */}
              <div className="text-right flex md:block justify-start mt-2 md:mt-0">
                <RippleButton onClick={(e) => {
                  e.stopPropagation();
                  setExpandedId(project.id);
                }}>
                  Expand
                </RippleButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttery Smooth Shared Element Modal Overlay */}
        <AnimatePresence>
          {expandedId && expandedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
                className="fixed inset-0 bg-[#1C2123]/40 backdrop-blur-sm z-40"
              />

              {/* Expanded Card (Morphs from Row) */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                <motion.div
                  layoutId={`row-container-${expandedProject.id}`}
                  className="bg-white border-2 border-[#1C2123] w-full max-w-4xl rounded-none overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
                >
                  
                  {/* Left Column: Expanded Feature Image */}
                  <div className="relative h-64 md:h-[450px] border-b-2 md:border-b-0 md:border-r-2 border-[#1C2123]">
                    <motion.img
                      layoutId={`project-img-${expandedProject.id}`}
                      src={expandedProject.image}
                      alt={expandedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Column: Detailed Case Study Info */}
                  <div className="p-8 md:p-12 flex flex-col justify-between relative bg-[#F3F0E7]">
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setExpandedId(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#1C2123] bg-white hover:bg-[#B64F2A] hover:text-white transition-colors flex items-center justify-center text-lg font-bold text-[#1C2123] z-10"
                    >
                      &times;
                    </button>

                    <div>
                      {/* Meta Information Container */}
                      <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#6A675D] mb-4">
                        <motion.span layoutId={`project-role-container-${expandedProject.id}`}>
                          {expandedProject.role}
                        </motion.span>
                        <span>•</span>
                        <motion.span layoutId={`project-year-container-${expandedProject.id}`}>
                          {expandedProject.year}
                        </motion.span>
                      </div>

                      {/* Title */}
                      <motion.h2
                        layoutId={`project-title-container-${expandedProject.id}`}
                        className="text-3xl font-bold font-serif text-[#1C2123] mb-6"
                      >
                        {expandedProject.title}
                      </motion.h2>

                      {/* Synopsis */}
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#B64F2A] mb-1">Synopsis</h4>
                        <p className="text-sm text-[#4E4B44] leading-relaxed">
                          {expandedProject.synopsis}
                        </p>
                      </div>

                      {/* Problem Statement */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#B64F2A] mb-1">Problem Statement</h4>
                        <p className="text-sm text-[#4E4B44] leading-relaxed">
                          {expandedProject.problem}
                        </p>
                      </div>
                    </div>

                    {/* Non-clickable Case Study Link */}
                    <div>
                      <span className="inline-block w-full text-center py-3 border-[1.5px] border-[#1C2123] bg-[#B64F2A]/10 text-[#B64F2A] font-bold text-xs uppercase tracking-wider cursor-not-allowed select-none rounded-none">
                        Case Study Link (Placeholder)
                      </span>
                    </div>

                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Custom Material Ripple Button (Vanilla Motion Implementation)
function RippleButton({ children, onClick }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples(prev => [...prev, newRipple]);
    onClick && onClick(e);
  };

  const cleanRipple = (id) => {
    setRipples(prev => prev.filter(r => r.id !== id));
  };

  return (
    <button
      onClick={addRipple}
      className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2 border-[1.5px] border-[#1C2123] bg-[#B64F2A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B64F2A]/90 transition-all select-none rounded-none shadow-[2px_2px_0px_#1C2123] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1C2123]"
    >
      <span className="relative z-10">{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => cleanRipple(ripple.id)}
            style={{
              position: 'absolute',
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
}
