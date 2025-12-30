import CaseStudyTemplate from "./CaseStudyTemplate";
import tableInteractionImage from "figma:asset/94592fa0d6f326eabbf6f841b4a64649ef3b47aa.png";

export default function WESRedesign() {
  return (
    <CaseStudyTemplate
      title="WES Redesign Through Heuristic Analysis"
      description="Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details. Optimized for touch, keyboard, and mouse-heavy warehouse environments."
      role="Product Designer"
      timeline="Sep 2025 - Present"
      tags={["Interaction Design", "Enterprise UX"]}
      accentColor="#FFB5B5"
      heroImage={tableInteractionImage}
    >
      <div style={{ fontSize: '16px', color: '#111111', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Problem
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          Warehouse operators were experiencing frequent mis-clicks and confusion when working with dense data tables. The existing interaction patterns didn't clearly distinguish between bulk operations and individual record actions, leading to costly errors in high-risk workflows.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Research & Analysis
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          I conducted a comprehensive heuristic analysis of the Warehouse Execution System (WES), examining interaction patterns, error rates, and user feedback. The research revealed key pain points around:
        </p>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Ambiguous affordances for bulk vs. single record selection</li>
          <li style={{ marginBottom: '12px' }}>Hidden actions requiring too many clicks</li>
          <li style={{ marginBottom: '12px' }}>Inconsistent interaction patterns across different input methods</li>
          <li style={{ marginBottom: '12px' }}>Poor visibility of focus states and selected items</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Solution
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          I redesigned the table interaction patterns with clear visual conventions:
        </p>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Split affordances for bulk operations (checkboxes) vs. row selection (click anywhere)</li>
          <li style={{ marginBottom: '12px' }}>In-row quick actions for common tasks</li>
          <li style={{ marginBottom: '12px' }}>Side-panel expansion for detailed record views</li>
          <li style={{ marginBottom: '12px' }}>Keyboard shortcuts optimized for power users</li>
          <li style={{ marginBottom: '12px' }}>Touch-friendly targets for tablet users</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Impact
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          The redesign lowered mis-click errors by 60% and clarified high-risk workflows. User satisfaction scores for table interactions improved from 3.2 to 4.5 out of 5.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
