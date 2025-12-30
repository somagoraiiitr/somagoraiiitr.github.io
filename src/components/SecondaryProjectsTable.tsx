import { useState } from "react";
import { Lightbulb, Briefcase, BookOpen, Compass, ArrowUpRight } from "lucide-react";

interface SecondaryItem {
  id: number;
  type: "concept" | "project" | "study" | "exploration";
  title: string;
  description: string;
  tags: string[];
  link: string;
  accentColor: string;
}

const items: SecondaryItem[] = [
  {
    id: 1,
    type: "concept",
    title: "Predictive Analytics Control Tower",
    description: "Explored AI-assisted predictive layers for an operational control tower, focusing on interpretability, confidence, and decision support rather than automation.",
    tags: ["AI", "Systems", "Dashboard"],
    link: "https://example.com",
    accentColor: "#D1B3FF"
  },
  {
    id: 2,
    type: "project",
    title: "Microsoft Teams Workflow Redesign",
    description: "Redesigned collaboration workflows within Microsoft Teams to reduce coordination friction and clarify task ownership across cross-functional teams.",
    tags: ["Workflow Design", "Collaboration"],
    link: "https://example.com",
    accentColor: "#9BD0FF"
  },
  {
    id: 3,
    type: "study",
    title: "AI Interaction Patterns Library",
    description: "Studied recurring interaction patterns in AI-assisted features and compiled a reusable library addressing feedback, control, and failure states.",
    tags: ["AI", "Interaction Design"],
    link: "https://example.com",
    accentColor: "#A8F0C4"
  },
  {
    id: 4,
    type: "project",
    title: "andwemet — Dating App Redesign",
    description: "Designed a social matching application with emphasis on transparency, pacing, and user control over algorithmic recommendations.",
    tags: ["Product Design", "Consumer UX"],
    link: "https://example.com",
    accentColor: "#FFB5B5"
  },
  {
    id: 5,
    type: "project",
    title: "R Store — App Store for University Developers",
    description: "Designed a centralized platform for student developers to publish, discover, and manage small scale apps.",
    tags: ["Platform Design", "Systems", "Developer Tools"],
    link: "https://example.com",
    accentColor: "#FFE24A"
  },
  {
    id: 6,
    type: "exploration",
    title: "WhatsApp Interaction Redesign",
    description: "Explored alternative interaction models to improve message visibility, state clarity, and conversation management.",
    tags: ["Interaction Design", "Exploratory"],
    link: "https://example.com",
    accentColor: "#D1B3FF"
  },
  {
    id: 7,
    type: "exploration",
    title: "Living City — Urban Systems Exploration",
    description: "Explored how urban infrastructure, mobility, and public spaces behave as interconnected systems through speculative architectural design.",
    tags: ["Systems Thinking", "Architecture"],
    link: "https://example.com",
    accentColor: "#9BD0FF"
  },
  {
    id: 8,
    type: "project",
    title: "Patronus — Women's Safety App",
    description: "Designed a safety-focused mobile application addressing emergency workflows, trust, and rapid access to support resources.",
    tags: ["Social Impact", "Product Design"],
    link: "https://example.com",
    accentColor: "#A8F0C4"
  },
  {
    id: 9,
    type: "exploration",
    title: "Adaptive Workspaces — Reconfigurable Architecture Study",
    description: "Explored architectural strategies for flexible work environments that adapt to changing functional and social needs.",
    tags: ["Architecture", "Exploratory"],
    link: "https://example.com",
    accentColor: "#FFB5B5"
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
              Go to Project
            </div>
          )}

          <div 
            style={{ 
              borderBottom: '1.5px solid #1A1A1A',
              background: '#FAFAFA',
              padding: '20px 32px'
            }}
          >
            <div className="grid grid-cols-12 gap-6 items-center">
              <div 
                className="col-span-2"
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#3A3A3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Type
              </div>
              <div 
                className="col-span-4"
                style={{
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
                className="col-span-6"
                style={{
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
                  <div className="grid grid-cols-12 gap-6 items-start">
                    <div className="col-span-2">
                      <div 
                        style={{
                          background: item.accentColor,
                          border: '1px solid #1A1A1A',
                          padding: '8px 12px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {getTypeIcon(item.type)}
                        <span 
                          style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            color: '#111111',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                    </div>

                    <div className="col-span-4">
                      <a 
                        href={item.link}
                        className="relative inline-block"
                        onMouseEnter={(e) => {
                          setHoveredTitle(item.id);
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
                    </div>

                    <div className="col-span-6">
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
