import { useEffect, useRef, useState } from "react";
import { FileText, Grid3x3, IterationCw, Briefcase } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  useEffect(() => {
    tilesRef.current.forEach((tile, index) => {
      if (!tile) return;
      
      const handleMouseEnter = () => {
        gsap.to(tile, {
          y: -4,
          duration: 0.2,
          ease: "power2.out",
        });
        setHoveredCard(index);
      };

      const handleMouseLeave = () => {
        gsap.to(tile, {
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        });
        setHoveredCard(null);
      };

      tile.addEventListener("mouseenter", handleMouseEnter);
      tile.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        tile.removeEventListener("mouseenter", handleMouseEnter);
        tile.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const tiles = [
    {
      icon: Briefcase,
      value: "3",
      label: "Years in industry",
      color: "#9BD0FF",
      hoverText: "Formally 3 · Informally longer"
    },
    {
      icon: FileText,
      value: "4",
      label: "Case studies",
      color: "#FFE24A",
      hoverText: "4 published · more in progress"
    },
    {
      icon: Grid3x3,
      value: "Table",
      label: "Favorite component",
      color: "#A8F0C4",
      hoverText: "CRUD · Filters · Dense rows · Love them all!"
    },
    {
      icon: IterationCw,
      value: "3",
      label: "Avg. iterations",
      color: "#FFB5B5",
      hoverText: "Usually 3 · Sometimes 10+"
    },
  ];

  return (
    <section 
      style={{ 
        borderBottom: '1.5px solid #1A1A1A',
        background: '#FFFFFF',
        padding: '120px 48px'
      }}
    >
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h1 
                style={{ 
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#111111',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  marginBottom: '32px'
                }}
              >
                Interaction Designer
              </h1>
              
              <div style={{ marginBottom: '24px' }}>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#111111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px'
                  }}
                >
                  About
                </div>
                <p 
                  style={{ 
                    fontSize: '20px',
                    color: '#3A3A3A',
                    lineHeight: '1.6',
                    maxWidth: '520px'
                  }}
                >
                  I design enterprise systems by untangling complex workflows and translating them into clear, reliable interactions.
                </p>
              </div>
            </div>

            {/* Currently Working */}
            <div 
              style={{
                border: '1.5px solid #1A1A1A',
                padding: '20px',
                maxWidth: '520px'
              }}
            >
              <div 
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#111111',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Currently
              </div>
              <div 
                style={{
                  fontSize: '15px',
                  color: '#111111',
                  lineHeight: '1.6'
                }}
              >
                Redesigning a legacy enterprise WES platform through heuristic analysis and workflow mapping.
              </div>
            </div>

            {/* Skills */}
            <div style={{ maxWidth: '520px' }}>
              <div 
                style={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: '#111111',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {["Heuristic Evaluation", "Interaction Design", "Information Architecture", "Enterprise Workflows", "Data-Dense Interfaces", "Design System", "High-Fidelity Prototyping"].map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #1A1A1A',
                      background: 'transparent',
                      color: '#111111',
                      fontSize: '13px',
                      fontWeight: '400',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F7F7F7';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {tiles.map((tile, index) => (
              <div
                key={index}
                ref={(el) => (tilesRef.current[index] = el)}
                style={{
                  border: '1.5px solid #1A1A1A',
                  padding: '32px 24px',
                  background: tile.color,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  height: '300px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <tile.icon size={36} strokeWidth={1.5} color="#111111" />
                <div 
                  style={{ 
                    fontSize: '48px',
                    fontWeight: '500',
                    color: '#111111',
                    lineHeight: '1'
                  }}
                >
                  {tile.value}
                </div>
                <div 
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#111111',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    lineHeight: '1.3'
                  }}
                >
                  {tile.label}
                </div>
                
                {/* Hover Text */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: hoveredCard === index ? '1.5px solid #111111' : '1.5px solid transparent',
                    fontSize: '13px',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    color: '#111111',
                    letterSpacing: '0.02em',
                    lineHeight: '1.4',
                    opacity: hoveredCard === index ? 1 : 0,
                    transition: 'opacity 0.3s ease, border-color 0.3s ease'
                  }}
                >
                  {tile.hoverText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}