import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logonew from "../imports/Logonew3-4007-91";
import LinkedIn from "../imports/Linkedin1121";
import Medium from "../imports/MediumIconWhite1";
import Behance from "../imports/IconmonstrBehance11";
import MailIcon from "./MailIcon";

export default function Navigation() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav style={{ borderBottom: '1.5px solid #1A1A1A', background: '#FFFFFF' }}>
      <div className="container mx-auto px-12 py-6 flex items-center justify-between max-w-[1400px]">
        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ height: '60px', width: 'auto' }}>
          <Logonew />
        </Link>
        
        {/* Navigation Links + Social Icons */}
        <div className="flex items-center gap-12">
          {isHomePage ? (
            <>
              <a 
                href="#work" 
                className="uppercase tracking-wide relative group"
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  color: '#111111',
                  letterSpacing: '0.05em',
                  textDecoration: 'none'
                }}
              >
                Case Studies
                <span 
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    height: '1.5px',
                    background: '#111111',
                    bottom: '-4px'
                  }}
                />
              </a>
              <a 
                href="#resume" 
                className="uppercase tracking-wide relative group"
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  color: '#111111',
                  letterSpacing: '0.05em',
                  textDecoration: 'none'
                }}
              >
                Resume
                <span 
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    height: '1.5px',
                    background: '#111111',
                    bottom: '-4px'
                  }}
                />
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/#work" 
                className="uppercase tracking-wide relative group"
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  color: '#111111',
                  letterSpacing: '0.05em',
                  textDecoration: 'none'
                }}
              >
                Case Studies
                <span 
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    height: '1.5px',
                    background: '#111111',
                    bottom: '-4px'
                  }}
                />
              </Link>
              <Link 
                to="/#resume" 
                className="uppercase tracking-wide relative group"
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  color: '#111111',
                  letterSpacing: '0.05em',
                  textDecoration: 'none'
                }}
              >
                Resume
                <span 
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    height: '1.5px',
                    background: '#111111',
                    bottom: '-4px'
                  }}
                />
              </Link>
            </>
          )}
          
          {/* Social Icons Section */}
          <div className="flex items-center gap-4" style={{ borderLeft: '1.5px solid #1A1A1A', paddingLeft: '24px' }}>
            <span 
              style={{
                fontSize: '13px',
                fontWeight: '500',
                color: '#111111'
              }}
            >
              Say hi here →
            </span>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="LinkedIn"
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredIcon === 'linkedin' ? 1 : 0.6
                }}
              >
                <LinkedIn />
              </a>

              {/* Medium */}
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="Medium"
                onMouseEnter={() => setHoveredIcon('medium')}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredIcon === 'medium' ? 1 : 0.6
                }}
              >
                <Medium />
              </a>

              {/* Behance */}
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="Behance"
                onMouseEnter={() => setHoveredIcon('behance')}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredIcon === 'behance' ? 1 : 0.6
                }}
              >
                <Behance />
              </a>

              {/* Email */}
              <a 
                href="mailto:soma@example.com" 
                className="transition-opacity duration-200"
                title="Email"
                onMouseEnter={() => setHoveredIcon('email')}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredIcon === 'email' ? 1 : 0.6
                }}
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}