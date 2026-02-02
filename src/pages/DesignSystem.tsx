import CaseStudyTemplate from "./CaseStudyTemplate";
import ProjectSideNav from "../components/ProjectSideNav";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import imgWhyDesignSystem from "figma:asset/0628f1ec5da6599469954fdd03ed873fe71cddb7.png";
import imgBusinessImpact1 from "figma:asset/02aaf83e6771f017040f36ff5fd3fe3fc5fd65c3.png";
import imgBusinessImpact2 from "figma:asset/fd4ac6185c96f04df007fe56f44b089dbc08c41f.png";
import imgDesignSystemComparison from "figma:asset/745081e1c3470f175c125623ea05613fc515121b.png";
import imgImage23 from "figma:asset/c3407a865a02c5ea010675c154ec148dc9831b93.png";
import imgImage74 from "figma:asset/adde7536cd5d20f3a28c6cc72547113f59803a05.png";
import imgImage75 from "figma:asset/b2269323808fdc5f40e13626e52cbc75daefd397.png";
import imgImage76 from "figma:asset/da506d664ea7bb85f58bc83cd367a69e938f74cd.png";
import imgImage77 from "figma:asset/76ca72eaa3fd7a9a8b897fdb13e31860a3f7cc8a.png";
import imgImage78 from "figma:asset/b36965861b24252250506c483dd0c309d7e3f11e.png";
import imgImage79 from "figma:asset/bf2c16183e72ad07df140220a4c327e144f6ae97.png";
import imgImage24 from "figma:asset/b2269323808fdc5f40e13626e52cbc75daefd397.png";
import imgImage25 from "figma:asset/76ca72eaa3fd7a9a8b897fdb13e31860a3f7cc8a.png";
import imgImage27 from "figma:asset/72e5e857a14b6c92a594324b0a558d6f6e31585d.png";
import imgImage28 from "figma:asset/2462619ef57c532b7ba31941a7b637c0af0a7d56.png";
import imgImage29 from "figma:asset/a381fb83391faab170bae60a356465567dabc5cf.png";
import imgImage30 from "figma:asset/579edff63c100e0c04d77cf4985178a3bd2a6179.png";
import imgImage31 from "figma:asset/b0bacd672a132c1130b07452cce3d0bff3ed5695.png";
import imgImage32 from "figma:asset/92d9349850d9caffdf42abee1832e610a1cc0296.png";
import imgImage33 from "figma:asset/48b5983df93ac62aa9cb8b81875cf57863ece5ed.png";
import imgImage34 from "figma:asset/5c2b1c9de59793ecbb055f269b157e6dbe9205c0.png";
import imgImage35 from "figma:asset/871b88993a7a5b35e058a73ef2a389c516acf8aa.png";
import imgImage38 from "figma:asset/94d5c6e5415228cc38ff052dfa73dc7ee32f8df3.png";
import imgImage36 from "figma:asset/76cbe648c5caebbef06b7a852b3754785bc2a394.png";
import imgImage37 from "figma:asset/3b45a4acafe5c200457eb8a1a1807fadf4be3563.png";
import imgImage68 from "figma:asset/be6ea68423a5f1295e91568c4937ec11b5cfdc98.png";
import imgImage66 from "figma:asset/d2861d12c4c68dcbf0fd1053310fcec39073d726.png";
import imgImage67 from "figma:asset/4503cd99d19f868ef6b2dd74313dc3de7843331e.png";
import imgImage71 from "figma:asset/fa7df537c7151d1f75d15616c2272907c8e2c44b.png";
import imgImage69 from "figma:asset/af065e504793cd19a410b5c3ef21d7b6bd6e6491.png";
import imgImage70 from "figma:asset/8e6ae5a5427c835860a45b90b494549d7910f710.png";
import imgImage72 from "figma:asset/09da35eac4a056d97f7c1c9a6116a3801a6be2ce.png";
import imgImage73 from "figma:asset/3f6deb6db567dcfc1efd525a9b29db35c2666208.png";

export default function DesignSystem() {
  const [isHeuristicOpen, setIsHeuristicOpen] = useState(false);
  
  const navSections = [
    {
      id: 'context',
      title: 'Context'
    },
    {
      id: 'old-vs-new',
      title: 'Old UI vs New Standardised UI'
    },
    {
      id: 'how-we-built',
      title: 'How We Built It',
      subSections: [
        { id: 'component-list', title: '1. Created a Component List' },
        { id: 'color-typography', title: '2. Color System, Typography Definition' },
        { id: 'dark-light-mode', title: '3. Dark & Light Mode Definition' },
        { id: 'component-creation', title: '4. Component Creation' },
        { id: 'ag-grid', title: '5. AG Grid Alignment' },
        { id: 'navigation-panel', title: '6. Right & Navigation Panel' },
        { id: 'custom-components', title: '7. Custom Components' }
      ]
    },
    {
      id: 'different-products',
      title: 'Design Systems for Different Products'
    },
    {
      id: 'adoption',
      title: 'Adoption and Aftermath'
    }
  ];

  return (
    <CaseStudyTemplate
      title="From Fragmented UI to a Single Source of Truth"
      description="Design system that reduced rework, aligned teams, and accelerated delivery across Axon's warehouse products."
      role="Interaction Designer"
      timeline="Mar 2024 - Aug 2024"
      tags={["Design System", "Component Library", "Accessibility", "B2B Enterprise"]}
      accentColor="#A8F0C4"
      showMetadataInHero={false}
      hideHero={true}
      sideNav={<ProjectSideNav sections={navSections} accentColor="#A8F0C4" />}
    >
      {/* Context Section */}
      <section id="context" style={{ marginBottom: '96px' }}>
        {/* Role, Timeline, Tags */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Role:</span> Interaction Designer
            </span>
          </div>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Timeline:</span> Mar 2024 - Aug 2024
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#3A3A3A' }}>Tags:</span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Design System
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Component Library
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Accessibility
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              B2B Enterprise
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '8px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Problem Statement
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
            Before implementing a design system, our product suffered from <u>UI inconsistencies, totally different color system in dark/light modes, accessibility issues, and inefficiencies</u> <sup style={{ fontSize: '12px' }}>(1)</sup> in design and development. The absence of standardized components led to:
          </p>
          <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginBottom: '24px', marginTop: '16px', listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>1.</span>
              Developers recreating similar components multiple times.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>2.</span>
              Frequent back-and-forth between designers and developers to clarify colors and component states.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>3.</span>
              Increased debugging efforts due to inconsistent implementation.
            </li>
          </ul>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '16px' }}>
            We performed a <u>heuristic analysis</u> that highlighted these inconsistencies and shared our findings with stakeholders. This analysis, combined with before-and-after visual comparisons, demonstrated the need for a unified design system.
          </p>

          <div style={{ marginTop: '32px' }}>
            <div style={{ 
              background: 'rgba(237,221,132,0.3)',
              display: 'inline-block',
              padding: '2px 8px',
              marginBottom: '8px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
                Impact
              </h3>
            </div>
            <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
              Initially, stakeholders were hesitant to invest in a design system because there was no drastic visual change. To shift the conversation, we focused on efficiency gains and measurable impact:
            </p>
            <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginTop: '16px', listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0' }}>1.</span>
                <u>Upfront Component Creation</u> – Developers now build reusable components first, rather than designing screens individually, streamlining the development process.
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0' }}>2.</span>
                <u>Standardized Colors</u> – Eliminated the need to manually check and reassign colors for each screen.
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0' }}>3.</span>
                <u>Time Savings</u> – Screen development time was reduced by 50%, and when factoring in the effort to create reusable components, we estimated an overall 20% reduction in development time by minimizing context switching.
              </li>
              <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0' }}>4.</span>
                <u>Simplified Debugging</u> – Components and colors can now be edited from a single source, reducing errors and rework.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '32px' }}>
            <div style={{ 
              background: 'rgba(237,221,132,0.3)',
              display: 'inline-block',
              padding: '2px 8px',
              marginBottom: '8px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
                The Team
              </h3>
            </div>
            <div style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
              <p style={{ margin: '0' }}>Design Team - 1 Interaction Designer (Me), 1 Visual Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heuristic Analysis Section */}
      <section id="heuristic-analysis" style={{ marginBottom: '96px' }}>
        <div style={{ 
          border: '1px solid #1A1A1A',
          background: '#FFFFFF'
        }}>
          <div 
            onClick={() => setIsHeuristicOpen(!isHeuristicOpen)}
            style={{ 
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: isHeuristicOpen ? '1px solid #1A1A1A' : 'none'
            }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#111111', marginBottom: '0' }}>
              <sup style={{ fontSize: '12px' }}>(1)</sup> Heuristic Analysis of the Existing Platform
            </h3>
            {isHeuristicOpen ? (
              <ChevronUp size={18} color="#111111" style={{ flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} color="#111111" style={{ flexShrink: 0 }} />
            )}
          </div>

          {isHeuristicOpen && (
            <div style={{ padding: '32px 20px' }}>
              {/* Existing Style Guide */}
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                color: '#111111', 
                marginBottom: '24px',
                marginTop: '0',
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
                  style={{ width: '100%', height: 'auto' }}
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
                  style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
                />
                <img 
                  src={imgImage76} 
                  alt="Table Interaction Analysis 2" 
                  style={{ width: '100%', height: 'auto' }}
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
                  style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
                />
                <img 
                  src={imgImage78} 
                  alt="Pop Up Analysis 2" 
                  style={{ width: '100%', height: 'auto' }}
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
              <div style={{ marginBottom: '0' }}>
                <img 
                  src={imgImage79} 
                  alt="Accessibility Check Analysis" 
                  style={{ width: '70%', height: 'auto' }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Old UI vs New Standardised UI Section */}
      <section id="old-vs-new" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Old UI vs New Standardised UI
          </h2>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage27} 
            alt="Old UI vs New Standardised UI - Tables Comparison" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div>
          <img 
            src={imgImage28} 
            alt="Old UI vs New Standardised UI - Modals Comparison" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* How We Built It Section */}
      <section id="how-we-built" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            How We Built It
          </h2>
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '24px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Why Not Use an Existing Design System?
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '16px' }}>
            We explored using pre-existing design systems like Simple Design and Material Design but faced the following limitations:
          </p>
          <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginBottom: '32px', listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>1.</span>
              Our development stack was based on Material 3 (M3) and AG Grid, requiring heavy customization.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>2.</span>
              As a niche WMS software, we needed specialized components that were not readily available in existing systems.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>3.</span>
              The extreme complexities of these readily available design systems on Figma further deterred us.
            </li>
          </ul>
          <img 
            src={imgImage29} 
            alt="Existing Design Systems Exploration" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '0',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Our Process – How We Built It in Figma
          </h3>
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="component-list" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            1. Created a Component List
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We picked the unique components from each and every existing screen and grouped them into AG Grid, Material and Custom Components.
          </p>
          <img 
            src={imgImage30} 
            alt="Component List Creation Process" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="color-typography" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            2. Color System, Typography Definition
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We began by defining a foundational color palette and typography system, establishing clear guidelines for visual hierarchy, accessibility, and brand consistency.
          </p>
          <img 
            src={imgImage31} 
            alt="Color System and Typography Definition" 
            style={{ width: '80%', height: 'auto', marginBottom: '32px' }}
          />
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            Next, we adapted the chosen colors into defined tokens for both light and dark modes. The process was iterative and occasionally messy, involving multiple rounds of testing and adjustments to ensure consistency, contrast, and usability across various UI components.
          </p>
          <img 
            src={imgImage32} 
            alt="Color Tokens for Light and Dark Modes" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="dark-light-mode" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            3. Dark & Light Mode Definition in Figma
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We started by creating a set of primitive colors and aliases tailored for both light and dark modes. Next, we ran contrast accessibility checks across combinations to ensure compliance and readability. Finally, we mapped colors systematically across modes to enable smooth switching between light and dark modes, ensuring a consistent and accessible experience throughout.
          </p>
          <img 
            src={imgImage33} 
            alt="Dark & Light Mode Definition" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="component-creation" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            4. Component Creation
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            Based on M3 guidelines, we designed components with variants and states.
          </p>
          <img 
            src={imgImage34} 
            alt="Component Creation with Variants and States" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="ag-grid" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            5. AG Grid Alignment
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We initially explored using AG Grid's Figma file for table components but ultimately built our own for greater design flexibility. This gave us control over custom fields, states, and action buttons, enabling a more tailored experience for our workflows.
          </p>
          <img 
            src={imgImage35} 
            alt="AG Grid Component Alignment" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 id="navigation-panel" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            6. Right & Navigation Panel
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We designed a flexible left navigation panel to support multiple nested groups and a versatile right panel used extensively across screens for context-specific interactions.
          </p>
          <img 
            src={imgImage36} 
            alt="Navigation and Right Panel Design" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>

        <div>
          <h3 id="custom-components" style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            7. Custom Components
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            We created custom components to support WMS-specific workflows, with an emphasis on nested components to promote reusability—for example, smaller card components reused within more complex Picking Cards. We also created widgets for dashboard.
          </p>
          <img 
            src={imgImage37} 
            alt="Custom Components for WMS Workflows" 
            style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
          />
          <img 
            src={imgImage38} 
            alt="Custom Dashboard Widgets" 
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Design Systems for Different Products Section */}
      <section id="different-products" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Design Systems for Different Products
          </h2>
        </div>

        {/* WES Design System */}
        <div id="wes-system" style={{ marginBottom: '64px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '8px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            WES Design System
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px', marginBottom: '32px' }}>
            Once the WES design system was in place, we began <u>recreating all legacy screens</u> from the previous design team, which were originally in <u>Adobe XD</u>. Since the shift to <u>Figma</u> was necessary, we used this opportunity to rebuild the screens using <u>systemized components</u>.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
            This involved <u>redesigning nearly 780 screens</u>, ensuring alignment with the new system. The process took around <u>four months</u>, and significantly improved <u>consistency, scalability, and collaboration</u> across the product.
          </p>
          
          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage66} 
              alt="WES Logos" 
              style={{ width: '100%', height: 'auto', maxWidth: '614px' }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage67} 
              alt="The Light and Dark Theme definition for the Variable System" 
              style={{ width: '100%', height: 'auto' }}
            />
            <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', fontStyle: 'italic', marginTop: '8px' }}>
              The Light and Dark Theme definition for the Variable System
            </p>
          </div>

          <div>
            <img 
              src={imgImage68} 
              alt="WES Design System Screens" 
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Control Tower Design System */}
        <div id="control-tower-system">
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '8px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Control Tower Design System
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px', marginBottom: '16px' }}>
            For the Control Tower design system, we initially tried to extend the existing WES system by adding modes. However, since Control Tower was a new product with <u>evolving needs</u>, and <u>WES had limited flexibility</u>, this approach introduced unnecessary complexity.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
            We ultimately decided to <u>build a separate design system</u>, using the WES foundation where possible but allowing for <u>incremental, product-specific improvements</u>. This gave us the freedom to tailor the system to Control Tower's unique workflows while maintaining consistency across the broader platform.
          </p>

          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage69} 
              alt="Control Tower Logos" 
              style={{ width: '100%', height: 'auto', maxWidth: '609px' }}
            />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage70} 
              alt="The Light and Dark Theme definition for the Variable System" 
              style={{ width: '100%', height: 'auto' }}
            />
            <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', fontStyle: 'italic', marginTop: '8px' }}>
              The Light and Dark Theme definition for the Variable System
            </p>
          </div>

          <div>
            <img 
              src={imgImage71} 
              alt="Control Tower Design System Screens" 
              style={{ width: '70%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Adoption and Aftermath Section */}
      <section id="adoption" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Adoption and Aftermath
          </h2>
        </div>

        {/* Adoption & Developer Collaboration */}
        <div id="adoption-collaboration" style={{ marginBottom: '64px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '8px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Adoption & Developer Collaboration
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px', marginBottom: '16px' }}>
            To ensure seamless adoption, we:
          </p>
          <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginBottom: '32px', listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>1.</span>
              Conducted a demo call with developers to explain how to fetch colors and components.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>2.</span>
              Provided a <u>JSON file export</u> via Figma plugins.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>3.</span>
              Developers primarily use the <u>Dev Mode</u> or <u>local library</u> or <u>Figma inspect tool</u> to access components.
            </li>
          </ul>

          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '16px' }}>
            Impact on Development Workflow:
          </p>
          <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginBottom: '32px', listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>1.</span>
              Common elements like <u>page headers with contextual action buttons</u> are now modular, reducing redundancy.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>2.</span>
              Text fields were previously inconsistent; now, they are standardized, eliminating repetitive development work.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>3.</span>
              Colors, typography, components are all <u>standardised</u> and available in one place.
            </li>
          </ul>
          
          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage72} 
              alt="Adoption & Developer Collaboration" 
              style={{ width: '70%', height: 'auto' }}
            />
          </div>

          {/* Developer Feedback - Verbatim */}
          <div style={{ 
            border: '1px solid #1A1A1A',
            background: '#F9F9F9',
            padding: '24px',
            marginTop: '48px'
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#000000', marginBottom: '16px' }}>
              Developer Feedback
            </h4>
            <div style={{ 
              borderLeft: '4px solid #A8F0C4',
              paddingLeft: '20px'
            }}>
              <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#111111', lineHeight: '1.6', marginBottom: '12px' }}>
                "Previously, we had to check for colors on every feature. Now, we can just define once."
              </p>
              <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#111111', lineHeight: '1.6', marginBottom: '12px' }}>
                "Components have all the states in one place, do not need to run the prototype every time."
              </p>
              <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#111111', lineHeight: '1.6', marginBottom: '0' }}>
                "Can create the component library at one go, do not have to hunt for the components in every page."
              </p>
            </div>
          </div>
        </div>

        {/* Challenges & Key Learnings */}
        <div id="challenges-learnings" style={{ marginBottom: '64px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '8px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Challenges & Key Learnings
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px', marginBottom: '32px' }}>
            We had limited internal familiarity with Figma's latest features, so we had to self-learn through trial and error. Since off-the-shelf component libraries didn't fit our needs, we had to <u>build everything custom</u>, which demanded extra time and attention to detail.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
            Figma's Dark & Light mode capabilities turned out to be a game changer, <u>helping us cut design time by nearly 50%</u>. Starting small, layer by layer, helped us stay organized and build a scalable, reliable design system without overwhelming the team.
          </p>
          
          <div style={{ marginBottom: '32px' }}>
            <img 
              src={imgImage73} 
              alt="Challenges & Key Learnings" 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Future Evolution & Scalability */}
        <div id="future-evolution">
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '8px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Future Evolution & Scalability
          </h3>
          <ul style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '24px', marginTop: '8px', marginBottom: '32px', listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>1.</span>
              We continue to update the design system as needed based on product changes.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>2.</span>
              We plan to modularize parts of the system so that future products can reuse core components instead of creating entirely new design systems.
            </li>
            <li style={{ marginBottom: '8px', paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '0' }}>3.</span>
              Exploring better integration methods to streamline adoption across different products. Currently we have two different design systems as there were different interactions/custom components for each product.
            </li>
          </ul>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '0' }}>
            By shifting from a <u>project-based to a product-based approach,</u> our design system has led to <u>faster development, fewer errors, and a more scalable UI framework.</u> While there were challenges, the impact on efficiency and maintainability has made this initiative a game changer for our team.
          </p>
        </div>
      </section>
    </CaseStudyTemplate>
  );
}