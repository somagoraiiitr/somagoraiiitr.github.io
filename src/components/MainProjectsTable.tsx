import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import controlTowerImage from "figma:asset/235012a9efdd1b8a0d8d6e2e8f019cf4f55d6082.png";
import roboticArmImage from "figma:asset/8f71ad3af89068a4848d360e1e3517ffd16f2df4.png";
import designSystemImage from "figma:asset/73ea07ba5ba50811bfb0f5457a8d2a2eb8baf486.png";
import teamsNotificationImage from "figma:asset/e96c9cc922798632243bfacf2f601225830c14d9.png";

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
    title: "Designing the Warehouse Control Tower Ecosystem",
    shortDesc: "Centralized control tower enabling real-time warehouse planning, validation, and operational visibility.",
    fullDescription: "Replaced fragmented, Excel-driven warehouse setup with a centralized system unifying sales configuration, process mapping, and operations. Enabled real-time validation, traceability, and client-managed updates, removing data silos and engineering dependency.",
    image: controlTowerImage,
    tags: ["B2B Enterprise", "Service Design"],
    date: "Jan 2025 -\nSep 2025",
    role: "Product Designer",
    outcome: "Reduced configuration errors and turnaround time while giving clients direct control over warehouse process changes.",
    accentColor: "#FFE24A",
    link: "/case-study/control-tower"
  },
  {
    id: 2,
    title: "From Fragmented UI to a Single Source of Truth",
    shortDesc: "Design system that reduced rework, aligned teams, and accelerated delivery across Axon's warehouse products.",
    fullDescription: "We built a custom design system to address inconsistent UI patterns across Axon's warehouse software. By standardizing components, colors, typography, and states, the system reduced repeated design and development effort and made UI decisions clearer and easier to apply.",
    image: designSystemImage,
    tags: ["Design System", "Component Library"],
    date: "Mar 2024 -\nAug 2024",
    role: "Interaction Designer",
    outcome: "Reduced rework and accelerated feature delivery across modules",
    accentColor: "#A8F0C4",
    link: "/case-study/design-system"
  },
  {
    id: 3,
    title: "Optimizing Teams Notifications",
    shortDesc: "Redesigning Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise.",
    fullDescription: "Redesigned Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise through intelligent notification management. Explored multiple solutions including anchored notifications, pull notification systems, and visual hierarchy using color cues.",
    image: teamsNotificationImage,
    tags: ["Product Management", "Data Analysis"],
    date: "May 2023 -\nJuly 2023",
    role: "Product Intern",
    outcome: "Reduced notification overload and improved focus on critical updates",
    accentColor: "#9BD0FF",
    link: "/case-study/teams-redesign"
  },
  {
    id: 4,
    title: "Physical-to-Digital Monitoring for Robotic Systems",
    shortDesc: "Real-time monitoring for robotic picking operations",
    fullDescription: "Designed a real-time monitoring system that translates live robotic operations into a clear, spatially grounded digital view. The interface mirrors the physical layout of RAPTOR systems, enabling faster understanding and confident action across roles.",
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
                  <div style={{ width: '96px', flexShrink: 0, ...headerStyle }}>Timeline</div>
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
                      animate={{ width: hoveredRow === project.id ? 200 : 83 }}
                      transition={transition}
                    >
                      <motion.div
                        style={{ border: '1px solid #1A1A1A', overflow: 'hidden', width: '100%' }}
                        animate={{ height: hoveredRow === project.id ? 138 : 83 }}
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