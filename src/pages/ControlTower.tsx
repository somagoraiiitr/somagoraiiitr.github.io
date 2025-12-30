import CaseStudyTemplate from "./CaseStudyTemplate";
import controlTowerImage from "figma:asset/235012a9efdd1b8a0d8d6e2e8f019cf4f55d6082.png";

export default function ControlTower() {
  return (
    <CaseStudyTemplate
      title="Control Tower for Warehouse"
      description="Built a scalable Control Tower that gives managers live visibility into bottlenecks, SLA risks, and overall warehouse performance. Introduced a modular process map that adapts across clients and reduces engineering dependency for updates."
      role="Product Designer"
      timeline="Jan 2025 - Sep 2025"
      tags={["Dashboard", "Data Viz"]}
      accentColor="#9BD0FF"
      heroImage={controlTowerImage}
    >
      <div style={{ fontSize: '16px', color: '#111111', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Problem
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          Warehouse managers were struggling to get real-time visibility into their operations. Data was scattered across multiple systems, making it difficult to identify bottlenecks, predict SLA risks, and make informed decisions quickly.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Solution
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          We designed a unified Control Tower dashboard that consolidates all critical warehouse metrics in one place. The modular process map allows for easy customization across different client needs without requiring engineering changes.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Key Features
        </h2>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Real-time performance monitoring with color-coded alerts</li>
          <li style={{ marginBottom: '12px' }}>Modular process map that adapts to different warehouse configurations</li>
          <li style={{ marginBottom: '12px' }}>SLA risk prediction and bottleneck identification</li>
          <li style={{ marginBottom: '12px' }}>Drill-down capabilities for detailed analysis</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Impact
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          The Control Tower unified a previously scattered process of drafting detailed sales quotations, process maps, implementation and monitoring. It reduced the time managers spend looking for information by 40% and improved their ability to respond to operational issues proactively.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
