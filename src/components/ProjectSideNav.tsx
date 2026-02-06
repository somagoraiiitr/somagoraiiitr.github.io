import { useState, useEffect } from 'react';

interface SubSection {
  id: string;
  title: string;
}

interface NavSection {
  id: string;
  title: string;
  subSections?: SubSection[];
}

interface ProjectSideNavProps {
  sections: NavSection[];
  accentColor?: string;
}

export default function ProjectSideNav({ sections, accentColor = '#9BD0FF' }: ProjectSideNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Collect all section and subsection IDs
      const allIds: string[] = [];
      sections.forEach(section => {
        allIds.push(section.id);
        if (section.subSections) {
          section.subSections.forEach(sub => allIds.push(sub.id));
        }
      });

      // Find which section is currently in view
      for (let i = allIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(allIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(allIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -32;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: '16px',
        width: '180px',
        marginRight: '64px',
        flexShrink: 0,
        alignSelf: 'flex-start'
      }}
    >
      <div style={{ paddingTop: '32px' }}>
        <div
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#111111',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1.5px solid rgba(166,207,251,0.8)',
            paddingLeft: '0px'
          }}
        >
          Contents
        </div>

        <nav>
          {sections.map((section) => (
            <div key={section.id} style={{ marginBottom: '8px' }}>
              <button
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 0',
                  fontSize: '13px',
                  color: '#3A3A3A',
                  textAlign: 'left',
                  fontWeight: activeSection === section.id ? '600' : '400',
                  transition: 'all 0.2s',
                  width: '100%',
                  paddingLeft: '0px',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = '100%';
                  }
                }}
                onMouseLeave={(e) => {
                  const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                  if (underline) {
                    underline.style.width = '0';
                  }
                }}
              >
                {section.title}
                <span 
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: '0px',
                    height: '1px',
                    background: '#3A3A3A',
                    width: '0',
                    transition: 'width 0.3s'
                  }}
                />
              </button>
              
              {/* Render subsections if they exist */}
              {section.subSections && section.subSections.length > 0 && (
                <div style={{ marginLeft: '12px', marginTop: '4px' }}>
                  {section.subSections.map((subSection) => (
                    <button
                      key={subSection.id}
                      onClick={() => scrollToSection(subSection.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px 0',
                        fontSize: '12px',
                        color: '#666666',
                        textAlign: 'left',
                        fontWeight: activeSection === subSection.id ? '600' : '400',
                        transition: 'all 0.2s',
                        width: '100%',
                        paddingLeft: '0px',
                        position: 'relative',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                      onMouseEnter={(e) => {
                        const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                        if (underline) {
                          underline.style.width = '100%';
                        }
                      }}
                      onMouseLeave={(e) => {
                        const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                        if (underline) {
                          underline.style.width = '0';
                        }
                      }}
                    >
                      {subSection.title}
                      <span 
                        className="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: '0px',
                          height: '1px',
                          background: '#666666',
                          width: '0',
                          transition: 'width 0.3s'
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}