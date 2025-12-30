import CaseStudyTemplate from "./CaseStudyTemplate";
import designSystemImage from "figma:asset/73ea07ba5ba50811bfb0f5457a8d2a2eb8baf486.png";

export default function DesignSystem() {
  return (
    <CaseStudyTemplate
      title="Design System"
      description="Consolidated scattered patterns into a single design system with standardized components, tokens, and guidelines. Improved collaboration and eliminated inconsistencies across engineering and product teams."
      role="Product Designer"
      timeline="Jul 2024 - Oct 2024"
      tags={["Design System", "Components"]}
      accentColor="#FFE24A"
      heroImage={designSystemImage}
    >
      <div style={{ fontSize: '16px', color: '#111111', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Problem
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          Our product had evolved organically over time, leading to inconsistent UI patterns, duplicate components, and significant collaboration friction between design and engineering teams. Each new feature required reinventing basic patterns.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Solution
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          I led the creation of a comprehensive design system that documented all patterns, established a single source of truth for components, and created clear guidelines for their usage. The system includes design tokens, component libraries, and detailed documentation.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Process
        </h2>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Audited existing UI patterns across all product modules</li>
          <li style={{ marginBottom: '12px' }}>Consolidated duplicate components and established naming conventions</li>
          <li style={{ marginBottom: '12px' }}>Created design tokens for colors, spacing, typography, and other primitives</li>
          <li style={{ marginBottom: '12px' }}>Built component library with variants and usage guidelines</li>
          <li style={{ marginBottom: '12px' }}>Collaborated with engineering to ensure proper implementation</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Impact
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          The design system reduced rework and accelerated feature delivery across modules. Design-to-development handoff time decreased by 50%, and visual consistency improved significantly across the product.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
