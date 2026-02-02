import { ImageWithFallback } from "./figma/ImageWithFallback";
import whatsappImage from "figma:asset/9430c9f8e66b1e7546b24a99c8687a1fdc9863a2.png";

interface Exploration {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  accentColor: string;
  link?: string;
}

const explorations: Exploration[] = [
  {
    id: 1,
    title: "WhatsApp Marketplace",
    description: "Exploring peer-to-peer commerce within messaging contexts",
    image: whatsappImage,
    tags: ["Social Commerce", "Mobile UX"],
    accentColor: "#A8F0C4",
    link: "https://www.behance.net/gallery/137906089/Case-Study-Rethinking-WhatsApp-Business"
  },
  {
    id: 2,
    title: "Living City",
    description: "Urban infrastructure as interconnected systems through speculative design",
    image: "https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwdXJiYW4lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3Njk3ODE3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Systems Thinking", "Architecture"],
    accentColor: "#9BD0FF"
  },
  {
    id: 3,
    title: "Patronus",
    description: "Safety-focused mobile app addressing emergency workflows and trust",
    image: "https://images.unsplash.com/photo-1659080540645-12867bc7fcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNhZmV0eSUyMG1vYmlsZSUyMGFwcCUyMGVtZXJnZW5jeXxlbnwxfHx8fDE3Njk3ODE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Social Impact", "Product Design"],
    accentColor: "#FFB5B5"
  },
  {
    id: 4,
    title: "Changing Walls",
    description: "Reconfigurable architecture adapting to changing functional needs",
    image: "https://images.unsplash.com/photo-1517421054973-2ac2fb9b9ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGV4aWJsZSUyMHdvcmtzcGFjZSUyMG1vZHVsYXIlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY5NzgxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Architecture", "Exploratory"],
    accentColor: "#FFE24A"
  }
];

export default function Explorations() {
  return (
    <section 
      style={{ 
        borderBottom: '1.5px solid #1A1A1A',
        background: '#FAFAFA',
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
          Explorations
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {explorations.map((exploration) => {
            const CardContent = (
              <div
                style={{
                  border: '1.5px solid #1A1A1A',
                  background: '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{ 
                  height: '240px', 
                  overflow: 'hidden',
                  borderBottom: '1.5px solid #1A1A1A',
                  position: 'relative'
                }}>
                  <div 
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: exploration.accentColor
                    }}
                  />
                  <ImageWithFallback 
                    src={exploration.image} 
                    alt={exploration.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#111111',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {exploration.title}
                  </h3>

                  <p 
                    style={{ 
                      fontSize: '14px',
                      color: '#3A3A3A',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                      minHeight: '42px'
                    }}
                  >
                    {exploration.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exploration.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '4px 10px',
                          border: '1px solid #1A1A1A',
                          fontSize: '11px',
                          fontWeight: '500'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return exploration.link ? (
              <a
                key={exploration.id}
                href={exploration.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {CardContent}
              </a>
            ) : (
              <div key={exploration.id}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}