import { useState } from "react";
import { Link } from "react-router";
import { Lightbulb, Briefcase, BookOpen, Compass, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import andwemetImage from "figma:asset/344ef4562767210cbe7b43463de89fd759564002.png";
import optoMizeImage from "figma:asset/3bb82bf383a52e322b1f9c7ed1243553ccaabf11.png";
import axonWESImage from "figma:asset/9e5c9ce58f92fcf33dff7ca8800befd4fcca8371.png";
import andwemetBrandImage from "figma:asset/87d249f923ad0eae4c34c69a356affb48c2e12f3.png";
import rStoreImage from "figma:asset/0f28c8fda4629ddf29a5cc50b5a56361b13ec511.png";

interface SecondaryItem {
  id: number;
  type: "concept" | "project" | "study" | "exploration";
  title: string;
  description: string;
  tags: string[];
  link: string;
  accentColor: string;
  image: string;
}

const items: SecondaryItem[] = [
  {
    id: 1,
    type: "concept",
    title: "Contextual AI Insights for Warehouse Operations",
    description: "Explored AI-assisted predictive layers for an operational control tower, focusing on interpretability, confidence, and decision support rather than automation.",
    tags: ["AI", "Systems", "Dashboard"],
    link: "/case-study/predictive-analytics",
    accentColor: "#D1B3FF",
    image: optoMizeImage
  },
  {
    id: 2,
    type: "project",
    title: "WES Redesign Through Heuristic Analysis",
    description: "Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details.",
    tags: ["Interaction Design", "Enterprise UX"],
    link: "/case-study/wes-redesign",
    accentColor: "#FFB5B5",
    image: axonWESImage
  },
  {
    id: 4,
    type: "project",
    title: "andwemet — Dating App Redesign",
    description: "Redesigned the dashboard and enhanced the UX/UI for andwemet dating app. Focused on creating an intuitive dashboard that provides users with a global overview and easy access to key features and information.",
    tags: ["Product Design", "Consumer UX"],
    link: "https://www.behance.net/gallery/137446671/Redesigning-the-User-dashboard-for-andwemet",
    accentColor: "#FFB5B5",
    image: andwemetBrandImage
  },
  {
    id: 5,
    type: "project",
    title: "R Store — App Store for University Developers",
    description: "Designed a centralized platform for student developers to publish, discover, and manage small scale apps.",
    tags: ["Platform Design", "Systems", "Developer Tools"],
    link: "https://somagorai.medium.com/designing-rstore-for-channeli-d4b52f7e462a",
    accentColor: "#FFE24A",
    image: rStoreImage
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "concept":
      return <Lightbulb size={16} strokeWidth={1.5} />;
    case "project":
      return <Briefcase size={16} strokeWidth={1.5} />;
    case "study":
      return <BookOpen size={16} strokeWidth={1.5} />;
    case "exploration":
      return <Compass size={16} strokeWidth={1.5} />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "concept":
      return "Concept";
    case "project":
      return "Project";
    case "study":
      return "Study";
    case "exploration":
      return "Exploration";
  }
};

export default function SecondaryProjectsTable() {
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<SecondaryItem | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  return (
    <section 
      id="experiments" 
      style={{ 
        borderBottom: '1.5px solid #1A1A1A',
        background: '#FFFFFF',
        padding: '96px 48px'
      }}
    >
      <div className="container mx-auto max-w-[1400px]">
        <h2 
          style={{ 
            fontSize: '32px',
            fontWeight: '600',
            color: '#111111',
            marginBottom: '48px'
          }}
        >
          Projects
        </h2>

        <div style={{ border: '1.5px solid #1A1A1A', background: '#FFFFFF', position: 'relative' }}>
          {hoveredTitle && hoveredItem && (
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
              {hoveredItem.link.startsWith('/') 
                ? 'Go to Project' 
                : hoveredItem.link.includes('medium.com') 
                  ? 'Go to Medium' 
                  : 'Go to Behance'}
            </div>
          )}

          <div 
            style={{ 
              borderBottom: '1.5px solid #1A1A1A',
              background: '#FAFAFA',
              padding: '20px 32px'
            }}
          >
            <div className="flex gap-6 items-center">
              <div 
                style={{
                  width: '72px',
                  flexShrink: 0,
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#3A3A3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Image
              </div>
              <div 
                style={{
                  width: '30%',
                  flexShrink: 0,
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#3A3A3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Title
              </div>
              <div 
                style={{
                  width: '60%',
                  flexShrink: 0,
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#3A3A3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Description
              </div>
            </div>
          </div>

          <div>
            {items.map((item, index) => (
              <div
                key={item.id}
                style={{
                  borderBottom: index !== items.length - 1 ? '1.5px solid #1A1A1A' : 'none',
                  background: '#FFFFFF',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#F7F7F7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                }}
              >
                <div style={{ padding: '24px 32px' }}>
                  <div className="flex gap-6 items-start">
                    {/* Image */}
                    <div 
                      style={{
                        width: '72px',
                        height: '72px',
                        flexShrink: 0,
                        border: '1px solid #1A1A1A',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <ImageWithFallback 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Title */}
                    <div style={{ width: '30%', flexShrink: 0 }}>
                      {item.link.startsWith('/') ? (
                        <Link 
                          to={item.link}
                          className="relative inline-block"
                          onMouseEnter={(e) => {
                            setHoveredTitle(item.id);
                            setHoveredItem(item);
                            setTooltipPosition({ x: e.clientX, y: e.clientY });
                          }}
                          onMouseLeave={() => setHoveredTitle(null)}
                          onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
                          style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                          <div className="flex items-start gap-2">
                            <h3 
                              style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#111111',
                                lineHeight: '1.4'
                              }}
                            >
                              {item.title}
                            </h3>
                            <ArrowUpRight size={16} strokeWidth={2} color="#111111" className="mt-0.5 flex-shrink-0" />
                          </div>
                          <span 
                            className="absolute transition-all duration-300"
                            style={{
                              width: hoveredTitle === item.id ? '100%' : '0',
                              height: '1.5px',
                              background: '#111111',
                              bottom: '-2px',
                              left: 0
                            }}
                          />
                        </Link>
                      ) : (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-block"
                          onMouseEnter={(e) => {
                            setHoveredTitle(item.id);
                            setHoveredItem(item);
                            setTooltipPosition({ x: e.clientX, y: e.clientY });
                          }}
                          onMouseLeave={() => setHoveredTitle(null)}
                          onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
                          style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                          <div className="flex items-start gap-2">
                            <h3 
                              style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#111111',
                                lineHeight: '1.4'
                              }}
                            >
                              {item.title}
                            </h3>
                            <ArrowUpRight size={16} strokeWidth={2} color="#111111" className="mt-0.5 flex-shrink-0" />
                          </div>
                          <span 
                            className="absolute transition-all duration-300"
                            style={{
                              width: hoveredTitle === item.id ? '100%' : '0',
                              height: '1.5px',
                              background: '#111111',
                              bottom: '-2px',
                              left: 0
                            }}
                          />
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <div style={{ width: '60%', flexShrink: 0 }}>
                      <p 
                        style={{
                          fontSize: '15px',
                          color: '#3A3A3A',
                          lineHeight: '1.6',
                          marginBottom: '12px'
                        }}
                      >
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: '4px 10px',
                              border: '1px solid #1A1A1A',
                              fontSize: '12px'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}