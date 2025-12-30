import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ControlTower from "./pages/ControlTower";
import DesignSystem from "./pages/DesignSystem";
import WESRedesign from "./pages/WESRedesign";
import DigitalTwin from "./pages/DigitalTwin";
import LinkedIn from "./imports/Linkedin1121";
import Medium from "./imports/MediumIconWhite1";
import Behance from "./imports/IconmonstrBehance11";
import MailIcon from "./components/MailIcon";

function AppContent() {
  const [hoveredFooterIcon, setHoveredFooterIcon] = useState<string | null>(null);
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#FFFFFF',
      scrollSnapType: 'y proximity'
    }}>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/control-tower" element={<ControlTower />} />
        <Route path="/case-study/design-system" element={<DesignSystem />} />
        <Route path="/case-study/wes-redesign" element={<WESRedesign />} />
        <Route path="/case-study/digital-twin" element={<DigitalTwin />} />
      </Routes>
      
      {/* Footer */}
      <footer 
        style={{ 
          padding: '48px',
          borderTop: '1.5px solid #1A1A1A',
          background: '#FAFAFA'
        }}
      >
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex items-center justify-between">
            {/* Left side - Credits */}
            <div 
              style={{
                fontSize: '14px',
                color: '#3A3A3A'
              }}
            >
              © 2024 Soma Gorai • Made with Figma Make
            </div>

            {/* Right side - Social Icons */}
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="LinkedIn"
                onMouseEnter={() => setHoveredFooterIcon('linkedin')}
                onMouseLeave={() => setHoveredFooterIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredFooterIcon === 'linkedin' ? 1 : 0.6
                }}
              >
                <LinkedIn />
              </a>
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="Medium"
                onMouseEnter={() => setHoveredFooterIcon('medium')}
                onMouseLeave={() => setHoveredFooterIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredFooterIcon === 'medium' ? 1 : 0.6
                }}
              >
                <Medium />
              </a>
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-opacity duration-200"
                title="Behance"
                onMouseEnter={() => setHoveredFooterIcon('behance')}
                onMouseLeave={() => setHoveredFooterIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredFooterIcon === 'behance' ? 1 : 0.6
                }}
              >
                <Behance />
              </a>
              <a 
                href="mailto:soma@example.com" 
                className="transition-opacity duration-200"
                title="Email"
                onMouseEnter={() => setHoveredFooterIcon('email')}
                onMouseLeave={() => setHoveredFooterIcon(null)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'block',
                  opacity: hoveredFooterIcon === 'email' ? 1 : 0.6
                }}
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
