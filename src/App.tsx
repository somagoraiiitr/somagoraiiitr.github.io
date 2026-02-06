import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ControlTower from "./pages/ControlTower";
import DesignSystem from "./pages/DesignSystem";
import WESRedesign from "./pages/WESRedesign";
import DigitalTwin from "./pages/DigitalTwin";
import MicrosoftTeams from "./pages/MicrosoftTeams";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import LinkedIn from "./imports/Linkedin1121";
import Medium from "./imports/MediumIconWhite1";
import Behance from "./imports/IconmonstrBehance11";
import MailIcon from "./components/MailIcon";
import faviconImage from "figma:asset/b1379fff4776134ec186100abcb547d24fc8dc15.png";

function AppContent() {
  const [hoveredFooterIcon, setHoveredFooterIcon] = useState<string | null>(null);
  
  useEffect(() => {
    // Set page title
    document.title = "Soma Gorai";
    
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);
  
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
        <Route path="/case-study/teams-redesign" element={<MicrosoftTeams />} />
        <Route path="/case-study/predictive-analytics" element={<PredictiveAnalytics />} />
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
                href="https://www.linkedin.com/in/soma-gorai/" 
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
                href="https://somagorai.medium.com/" 
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
                href="https://www.behance.net/somagorai" 
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