import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

interface CaseStudyTemplateProps {
  title: string;
  description: string;
  role: string;
  timeline: string;
  tags: string[];
  accentColor: string;
  heroImage: string;
  children: ReactNode;
}

export default function CaseStudyTemplate({
  title,
  description,
  role,
  timeline,
  tags,
  accentColor,
  heroImage,
  children
}: CaseStudyTemplateProps) {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      {/* Back Button */}
      <div style={{ borderBottom: '1.5px solid #1A1A1A', background: '#FFFFFF' }}>
        <div className="container mx-auto max-w-[1400px] px-12 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#111111',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px 16px 8px 12px',
              marginLeft: '-12px'
            }}
          >
            <ArrowLeft size={18} strokeWidth={2} />
            <span className="relative">
              Back to Portfolio
              <span 
                className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                style={{
                  height: '1.5px',
                  background: '#111111',
                  bottom: '-2px'
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ padding: '96px 48px', borderBottom: '1.5px solid #1A1A1A', background: '#FAFAFA' }}>
        <div className="container mx-auto max-w-[1400px]">
          <div style={{ marginBottom: '48px' }}>
            <div style={{ 
              width: '4px', 
              height: '48px', 
              background: accentColor,
              marginBottom: '24px'
            }} />
            <h1 style={{ fontSize: '52px', fontWeight: '700', color: '#111111', marginBottom: '24px' }}>
              {title}
            </h1>
            <p style={{ fontSize: '20px', color: '#3A3A3A', lineHeight: '1.6', maxWidth: '800px' }}>
              {description}
            </p>
          </div>

          <div className="flex gap-12 mb-12">
            <div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#3A3A3A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Role
              </div>
              <div style={{ fontSize: '16px', color: '#111111' }}>{role}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#3A3A3A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Timeline
              </div>
              <div style={{ fontSize: '16px', color: '#111111' }}>{timeline}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#3A3A3A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Tags
              </div>
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #1A1A1A',
                      fontSize: '13px',
                      background: '#FFFFFF'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ border: '1.5px solid #1A1A1A', overflow: 'hidden', background: '#FFFFFF' }}>
            <img src={heroImage} alt={title} style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '96px 48px', background: '#FFFFFF' }}>
        <div className="container mx-auto max-w-[1000px]">
          {children}
        </div>
      </section>
    </div>
  );
}
