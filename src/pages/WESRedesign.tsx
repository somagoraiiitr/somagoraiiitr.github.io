import CaseStudyTemplate from "./CaseStudyTemplate";

export default function WESRedesign() {
  return (
    <CaseStudyTemplate
      title="WES Redesign Through Heuristic Analysis"
      description="Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details. Optimized for touch, keyboard, and mouse-heavy warehouse environments."
      role="Product Designer"
      timeline="Sep 2025 - Present"
      tags={["Interaction Design", "Enterprise UX"]}
      accentColor="#FFB5B5"
      showMetadataInHero={false}
      hideHero={true}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          fontSize: '48px', 
          fontWeight: '600', 
          color: '#111111',
          marginBottom: '16px'
        }}>
          Coming Soon
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#3A3A3A',
          maxWidth: '500px',
          lineHeight: '1.6'
        }}>
          This case study is currently being documented. Check back soon for the full details.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
