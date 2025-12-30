import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import controlTowerImage from "figma:asset/235012a9efdd1b8a0d8d6e2e8f019cf4f55d6082.png";
import roboticArmImage from "figma:asset/8f71ad3af89068a4848d360e1e3517ffd16f2df4.png";
import designSystemImage from "figma:asset/73ea07ba5ba50811bfb0f5457a8d2a2eb8baf486.png";
import tableInteractionImage from "figma:asset/94592fa0d6f326eabbf6f841b4a64649ef3b47aa.png";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDescription: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  outcome: string;
  accentColor: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Control Tower for Warehouse",
    shortDesc: "Real-time data monitoring for warehouse operations",
    fullDescription: "Built a scalable Control Tower that gives managers live visibility into bottlenecks, SLA risks, and overall warehouse performance. Introduced a modular process map that adapts across clients and reduces engineering dependency for updates.",
    image: controlTowerImage,
    tags: ["Dashboard", "Data Viz"],
    date: "Jan 2025 -\nSep 2025",
    role: "Product Designer",
    outcome: "Unified a scattered process of drafting detailed sales quotations, process maps, implementation and monitoring",
    accentColor: "#9BD0FF",
    link: "/case-study/control-tower"
  },
  {
    id: 2,
    title: "Design System",
    shortDesc: "From fragmented UI to a unified, scalable component library",
    fullDescription: "Consolidated scattered patterns into a single design system with standardized components, tokens, and guidelines. Improved collaboration and eliminated inconsistencies across engineering and product teams.",
    image: designSystemImage,
    tags: ["Design System", "Components"],
    date: "Jul 2024 -\nOct 2024",
    role: "Product Designer",
    outcome: "Reduced rework and accelerated feature delivery across modules",
    accentColor: "#FFE24A",
    link: "/case-study/design-system"
  },
  {
    id: 3,
    title: "WES Redesign Through Heuristic Analysis",
    shortDesc: "Reliable interactions for dense enterprise data tables",
    fullDescription: "Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details. Optimized for touch, keyboard, and mouse-heavy warehouse environments.",
    image: tableInteractionImage,
    tags: ["Interaction Design", "Enterprise UX"],
    date: "Sep 2025 -\nPresent",
    role: "Product Designer",
    outcome: "Lowered mis-click errors and clarified high-risk workflows",
    accentColor: "#FFB5B5",
    link: "/case-study/wes-redesign"
  },
  {
    id: 4,
    title: "Digital-Twin Monitoring in a Warehouse",
    shortDesc: "Real-time monitoring for robotic picking operations",
    fullDescription: "Designed a dashboard for Axon Raptor to visualize robotic arm task execution, device health, and failure states. Mapped the entire robotic lifecycle and applied progressive disclosure to minimize cognitive load. Built a tablet-friendly interface for PTL workers to execute tasks quickly.",
    image: roboticArmImage,
    tags: ["Automation", "Data Viz"],
    date: "Oct 2024 -\nJan 2025",
    role: "Product Designer",
    outcome: "Reduced downtime by enabling fast failure detection and smoother task execution",
    accentColor: "#A8F0C4",
    link: "/case-study/digital-twin"
  },
];

const headerStyle = {
  fontSize: '12px',
  fontWeight: '500',
  color: '#3A3A3A',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em'
};

const transition = { duration: 0.8, ease: [0.4, 0, 0.2, 1] };

export default function MainProjectsTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <section id="work" style={{ borderBottom: '1.5px solid #1A1A1A', background: '#FAFAFA', padding: '96px 48px' }}>
      <div className="container mx-auto max-w-[1400px]">
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#111111', marginBottom: '48px' }}>
          Case Studies
        </h2>

        <div style={{ border: '1.5px solid #1A1A1A', background: '#FFFFFF', position: 'relative' }}>
          {hoveredTitle && (
            <div style={{
              position: 'fixed',
              left: tooltipPosition.x + 12,
              top: tooltipPosition.y - 32,
              background: 'rgba(17, 17, 17, 0.85)',
              color: '#FFFFFF',
              padding: '4px 8px',
              fontSize: '11px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 9999,
              backdropFilter: 'blur(4px)'
            }}>
              Go to Case Study
            </div>
          )}

          <div style={{ borderBottom: '1.5px solid #1A1A1A', background: '#FAFAFA', padding: '20px 32px 20px 38px' }}>
            <div className="flex gap-8 items-center">
              <div style={{ width: '72px', flexShrink: 0, ...headerStyle }}>Image</div>
              <div className="flex-1 min-w-0">
                <div className="flex gap-6">
                  <div className="flex-1" style={headerStyle}>Project</div>
                  <div style={{ width: '144px', flexShrink: 0, ...headerStyle }}>Tags</div>
                  <div style={{ width: '96px', flexShrink: 0, ...headerStyle }}>Date</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative"
                style={{
                  borderBottom: index !== projects.length - 1 ? '1.5px solid #1A1A1A' : 'none',
                  background: hoveredRow === project.id ? '#F7F7F7' : '#FFFFFF'
                }}
                onMouseEnter={() => setHoveredRow(project.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredRow === project.id ? 12 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: project.accentColor }}
                />

                <div style={{ padding: '32px 32px 32px 38px' }}>
                  <div className="flex gap-8 items-start">
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ width: hoveredRow === project.id ? 200 : 72 }}
                      transition={transition}
                    >
                      <motion.div
                        style={{ border: '1px solid #1A1A1A', overflow: 'hidden', width: '100%' }}
                        animate={{ height: hoveredRow === project.id ? 120 : 72 }}
                        transition={transition}
                      >
                        <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex gap-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-3">
                            <Link 
                              to={project.link}
                              className="relative"
                              onMouseEnter={() => setHoveredTitle(project.id)}
                              onMouseLeave={() => setHoveredTitle(null)}
                              onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
                              style={{ textDecoration: 'none', cursor: 'pointer' }}
                            >
                              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111111' }}>
                                {project.title}
                              </h3>
                              <span 
                                className="absolute transition-all duration-300"
                                style={{
                                  width: hoveredTitle === project.id ? '100%' : '0',
                                  height: '1.5px',
                                  background: '#111111',
                                  bottom: '-2px',
                                  left: 0
                                }}
                              />
                            </Link>
                            <ArrowUpRight size={18} strokeWidth={2} color="#111111" className="mt-0.5 flex-shrink-0" />
                          </div>
                          
                          <div style={{ minHeight: '48px', maxWidth: '600px' }}>
                            <motion.p 
                              style={{ fontSize: '15px', color: '#3A3A3A', lineHeight: '1.6' }}
                              key={hoveredRow === project.id ? 'full' : 'short'}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.05 }}
                            >
                              {hoveredRow === project.id ? project.fullDescription : project.shortDesc}
                            </motion.p>
                          </div>

                          <AnimatePresence>
                            {hoveredRow === project.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
                                className="overflow-hidden"
                              >
                                <div style={{
                                  paddingTop: '16px',
                                  borderTop: '1px solid #1A1A1A',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '24px',
                                  fontSize: '13px',
                                  color: '#3A3A3A'
                                }}>
                                  <div>{project.role}</div>
                                  <div className="flex items-center gap-1.5">
                                    <TrendingUp size={14} strokeWidth={2} />
                                    {project.outcome}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="w-36 flex-shrink-0">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  padding: '6px 12px',
                                  border: '1px solid #1A1A1A',
                                  fontSize: '13px'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="w-24 flex-shrink-0">
                          <div style={{ fontSize: '13px', color: '#3A3A3A', lineHeight: '1.4' }}>
                            {project.date.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}