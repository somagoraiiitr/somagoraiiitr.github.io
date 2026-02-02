import CaseStudyTemplate from "./CaseStudyTemplate";
import tableInteractionImage from "figma:asset/94592fa0d6f326eabbf6f841b4a64649ef3b47aa.png";
import imgImage74 from "figma:asset/adde7536cd5d20f3a28c6cc72547113f59803a05.png";
import imgImage75 from "figma:asset/b2269323808fdc5f40e13626e52cbc75daefd397.png";
import imgImage76 from "figma:asset/da506d664ea7bb85f58bc83cd367a69e938f74cd.png";
import imgImage77 from "figma:asset/76ca72eaa3fd7a9a8b897fdb13e31860a3f7cc8a.png";
import imgImage78 from "figma:asset/b36965861b24252250506c483dd0c309d7e3f11e.png";
import imgImage79 from "figma:asset/bf2c16183e72ad07df140220a4c327e144f6ae97.png";

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
          Heuristic Analysis of the Existing Platform
        </h2>
        
        {/* Existing Style Guide */}
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '500', 
          color: '#111111', 
          marginBottom: '24px',
          marginTop: '32px',
          background: 'rgba(250, 227, 103, 0.3)',
          padding: '8px 12px',
          display: 'inline-block'
        }}>
          Existing Style Guide
        </h3>
        <div style={{ marginBottom: '32px' }}>
          <img 
            src={imgImage74} 
            alt="Existing Style Guide Analysis" 
            style={{ width: '100%', height: 'auto', border: '1px solid #1A1A1A' }}
          />
        </div>

        {/* Tables */}
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '500', 
          color: '#111111', 
          marginBottom: '24px',
          marginTop: '32px',
          background: 'rgba(250, 227, 103, 0.3)',
          padding: '8px 12px',
          display: 'inline-block'
        }}>
          Tables
        </h3>
        <div style={{ marginBottom: '32px' }}>
          <img 
            src={imgImage75} 
            alt="Table Interaction Analysis 1" 
            style={{ width: '100%', height: 'auto', border: '1px solid #1A1A1A', marginBottom: '32px' }}
          />
          <img 
            src={imgImage76} 
            alt="Table Interaction Analysis 2" 
            style={{ width: '100%', height: 'auto', border: '1px solid #1A1A1A' }}
          />
        </div>

        {/* Pop Ups */}
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '500', 
          color: '#111111', 
          marginBottom: '24px',
          marginTop: '32px',
          background: 'rgba(250, 227, 103, 0.3)',
          padding: '8px 12px',
          display: 'inline-block'
        }}>
          Pop Ups
        </h3>
        <div style={{ marginBottom: '32px' }}>
          <img 
            src={imgImage77} 
            alt="Pop Up Analysis 1" 
            style={{ width: '100%', height: 'auto', border: '1px solid #1A1A1A', marginBottom: '32px' }}
          />
          <img 
            src={imgImage78} 
            alt="Pop Up Analysis 2" 
            style={{ width: '100%', height: 'auto', border: '1px solid #1A1A1A' }}
          />
        </div>

        {/* Accessibility Check */}
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '500', 
          color: '#111111', 
          marginBottom: '24px',
          marginTop: '32px',
          background: 'rgba(250, 227, 103, 0.3)',
          padding: '8px 12px',
          display: 'inline-block'
        }}>
          Accessibility Check
        </h3>
        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage79} 
            alt="Accessibility Check Analysis" 
            style={{ width: '70%', height: 'auto', border: '1px solid #1A1A1A' }}
          />
        </div>

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