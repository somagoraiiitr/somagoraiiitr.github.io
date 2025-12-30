import CaseStudyTemplate from "./CaseStudyTemplate";
import roboticArmImage from "figma:asset/8f71ad3af89068a4848d360e1e3517ffd16f2df4.png";

export default function DigitalTwin() {
  return (
    <CaseStudyTemplate
      title="Digital-Twin Monitoring in a Warehouse"
      description="Designed a dashboard for Axon Raptor to visualize robotic arm task execution, device health, and failure states. Mapped the entire robotic lifecycle and applied progressive disclosure to minimize cognitive load. Built a tablet-friendly interface for PTL workers to execute tasks quickly."
      role="Product Designer"
      timeline="Oct 2024 - Jan 2025"
      tags={["Automation", "Data Viz"]}
      accentColor="#A8F0C4"
      heroImage={roboticArmImage}
    >
      <div style={{ fontSize: '16px', color: '#111111', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Problem
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          Warehouse operators had no visibility into robotic arm operations until failures occurred. This reactive approach led to extended downtime, missed SLAs, and frustrated PTL (Pick-to-Light) workers who couldn't understand what was happening with their assigned tasks.
        </p>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Discovery
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          I mapped the entire robotic lifecycle from task assignment through execution to completion. Through interviews with operators and PTL workers, I identified critical pain points:
        </p>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>No real-time visibility into robot status</li>
          <li style={{ marginBottom: '12px' }}>Unclear failure states and recovery actions</li>
          <li style={{ marginBottom: '12px' }}>Complex interface overwhelming workers with too much information</li>
          <li style={{ marginBottom: '12px' }}>Tablet interface not optimized for warehouse floor conditions</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Solution
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          I designed a dual-interface system:
        </p>
        <p style={{ marginBottom: '12px', color: '#3A3A3A' }}><strong>Manager Dashboard:</strong></p>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Digital twin visualization showing real-time robot positions and states</li>
          <li style={{ marginBottom: '12px' }}>Device health monitoring with predictive failure indicators</li>
          <li style={{ marginBottom: '12px' }}>Performance metrics and task queue visibility</li>
          <li style={{ marginBottom: '12px' }}>Progressive disclosure to manage information density</li>
        </ul>

        <p style={{ marginBottom: '12px', color: '#3A3A3A' }}><strong>PTL Worker Interface:</strong></p>
        <ul style={{ marginBottom: '24px', color: '#3A3A3A', paddingLeft: '24px' }}>
          <li style={{ marginBottom: '12px' }}>Simplified tablet view focusing only on assigned tasks</li>
          <li style={{ marginBottom: '12px' }}>Large touch targets optimized for gloved hands</li>
          <li style={{ marginBottom: '12px' }}>Clear status indicators and next action prompts</li>
          <li style={{ marginBottom: '12px' }}>Quick task execution workflow minimizing steps</li>
        </ul>

        <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '24px', marginTop: '48px' }}>
          Impact
        </h2>
        <p style={{ marginBottom: '24px', color: '#3A3A3A' }}>
          The digital twin system reduced downtime by enabling fast failure detection and smoother task execution. Mean time to resolution for robotic failures decreased by 45%, and PTL worker task completion speed improved by 25%.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
