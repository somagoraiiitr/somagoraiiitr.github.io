import { ImageWithFallback } from "./figma/ImageWithFallback";
import whatsappImage from "figma:asset/9430c9f8e66b1e7546b24a99c8687a1fdc9863a2.png";
import livingCityImage from "figma:asset/3cc07253aa4d70e51e0fe2f85e14c865d940e797.png";
import patronusImage from "figma:asset/f82c750cdb4506633c5b1899caa9e178a64df8d4.png";
import flyingSaucerImage from "figma:asset/ba287376c419d92e997159257d087b70b1eabfe9.png";

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
    title: "Patronus",
    description: "Safety app for women in emergencies",
    image: patronusImage,
    tags: ["Social Impact", "Product Design"],
    accentColor: "#FFB5B5",
    link: "https://somagorai.medium.com/patronus-cec5abaf7e30"
  },
  {
    id: 2,
    title: "WhatsApp Marketplace",
    description: "Exploring ways to bring neighborhood stores to WhatsApp",
    image: whatsappImage,
    tags: ["Social Commerce", "Mobile UX"],
    accentColor: "#A8F0C4",
    link: "https://www.behance.net/gallery/137906089/Case-Study-Rethinking-WhatsApp-Business"
  },
  {
    id: 3,
    title: "A Living City",
    description: "Role of politics, capitalism in determining how we live",
    image: livingCityImage,
    tags: ["Systems Thinking", "Architecture"],
    accentColor: "#9BD0FF",
    link: "https://www.behance.net/gallery/243356443/A-Living-City"
  },
  {
    id: 4,
    title: "Flying Saucer",
    description: "What will \"home\" be in 2500?",
    image: flyingSaucerImage,
    tags: ["Architecture", "Exploratory"],
    accentColor: "#FFE24A",
    link: "https://www.behance.net/gallery/136269837/Living-in-Future"
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