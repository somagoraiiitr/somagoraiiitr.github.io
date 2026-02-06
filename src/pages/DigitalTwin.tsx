import CaseStudyTemplate from "./CaseStudyTemplate";
import ProjectSideNav from "../components/ProjectSideNav";
import imgRaptor1 from "figma:asset/fbc48c00a8609f4c9954eb43e06c4569b24266f9.png";
import imgImage40 from "figma:asset/ba4144f6f7cd924d0ea8687e6607142fe74a65e0.png";
import imgImage89 from "figma:asset/69a1f39853740db8bdacbf39bc0ecf211a3e2b4a.png";
import imgSKUSavvy from "figma:asset/cfb4754e13e3a95f3c37caa3ef0c30cb8d75ca12.png";
import imgWareBee from "figma:asset/b6650dbf8e75c37ba5012509bf7789cb5f1b2132.png";
import imgSmartThings from "figma:asset/9bd6ff539cd4b2512b4b5ea423ae15ffb541e8d0.png";
import imgMarketResearch1 from "figma:asset/36672c0835828f33e1dad3bc1873c22df40d59ff.png";
import imgMarketResearch2 from "figma:asset/e7bf186c3217dc55a4bfd37bbeb3eaa1b651dd33.png";
import imgIteration1 from "figma:asset/10741e11f469aebaeb7c4724c0698ee52f6a34d2.png";
import imgIteration2 from "figma:asset/0ac8d7c74a5e5222d4b70dfc9deb4a80bef94ddc.png";
import imgIteration3 from "figma:asset/676c75298864265df4d39b78343e39c168dc6921.png";
import imgIteration4 from "figma:asset/24e844729609817c36a5922632ff34cf8b268147.png";
import imgImage81 from "figma:asset/ebc513e07562f9939438a1a4b92f4b4a5a0216c1.png";
import imgImage87 from "figma:asset/8e69de074c916d789cb5f4dcd23df820cd2bfd2a.png";
import Group166 from "../imports/Group166";
import imgFinalDashboard from "figma:asset/5d39ed943a6afa8972a770f1dfddc8aa22c6c704.png";

export default function DigitalTwin() {
  const navSections = [
    {
      id: 'context',
      title: 'Context'
    },
    {
      id: 'design-process',
      title: 'Market Research'
    },
    {
      id: 'design-iterations',
      title: 'Design Iterations'
    },
    {
      id: 'information-architecture',
      title: 'Information Architecture'
    },
    {
      id: 'final-dashboard',
      title: 'Final Dashboard UI'
    }
  ];

  return (
    <CaseStudyTemplate
      title="Physical-to-Digital Monitoring for Robotic Systems"
      description="Designed a real-time monitoring system that translates live robotic operations into a clear, spatially grounded digital view. The interface mirrors the physical layout of RAPTOR systems, enabling faster understanding and confident action across roles."
      role="Interaction Designer"
      timeline="Oct 2024 - Jan 2025"
      tags={["Automation", "Data Viz", "B2B SaaS"]}
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
              <span style={{ fontWeight: '500' }}>Timeline:</span> Oct 2024 - Jan 2025
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#3A3A3A' }}>Tags:</span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Automation
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Data Viz
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              B2B SaaS
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(184,238,199,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '8px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Problem Statement
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
            Robotic fulfillment warehouses function as tightly coupled physical systems, but existing software represents them as <u>fragmented data streams with little operational context</u>. Failures occur in physical space, such as stalled robots or blocked conveyors, yet managers must interpret abstract logs and metrics to understand what is happening and where. This <u>gap between physical operations and digital visibility</u> makes it difficult to identify bottlenecks, understand system impact, and act quickly, <u>increasing cognitive load and causing delays</u> that directly affect throughput and reliability.
          </p>

          <div style={{ marginTop: '32px' }}>
            <div style={{ 
              background: 'rgba(184,238,199,0.3)',
              display: 'inline-block',
              padding: '2px 8px',
              marginBottom: '8px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
                Solution Implemented
              </h3>
            </div>
            <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
              We designed a real-time physical-to-digital monitoring system that translates <u>live robotic operations into a clear, spatially grounded digital view</u> of the warehouse. The <u>interface mirrors the physical layout</u> and flow of RAPTOR systems, using visual states and progressive disclosure to surface system health, failures, and dependencies at a glance. By aligning digital representation with physical behavior, the system enables faster understanding, quicker decisions, and confident action across roles.
            </p>
          </div>

          <div style={{ marginTop: '32px' }}>
            <div style={{ 
              background: 'rgba(184,238,199,0.3)',
              display: 'inline-block',
              padding: '2px 8px',
              marginBottom: '8px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
                The Team
              </h3>
            </div>
            <div style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
              <p style={{ margin: '0 0 4px 0' }}>Design Team - 1 Interaction Designer (Me), 1 Visual Designer</p>
              <p style={{ margin: '0 0 4px 0' }}>Product Team - 1 Product Manager</p>
              <p style={{ margin: '0' }}>Development Team - 1 Database Architect, 2 Front-end Engineers, 3 Back-end Engineers, 1 QA Engineer</p>
            </div>
          </div>
        </div>

        {/* Context about RAPTOR system */}
        <div style={{ marginTop: '48px', marginBottom: '32px' }}>
          <div style={{ 
            background: 'rgba(184,238,199,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '8px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Context
            </h3>
          </div>
          <div style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              Raptor system (<u>Robotic Arm Picking and Order Release</u>) is designed to automate the fulfillment of mixed (rainbow) pallets for distribution.
            </p>
            <p style={{ margin: '8px 0' }}>
              This involves using robotic arms to pick and place items onto pallets based on orders received from the Host Warehouse Management System (WMS).
            </p>
          </div>
        </div>

        {/* Images for Context Section */}
        <div style={{ marginTop: '48px' }}>
          <img 
            src={imgImage89} 
            alt="RAPTOR System Diagram" 
            style={{ width: '80%', height: 'auto', marginBottom: '48px' }}
          />
          <div style={{ display: 'flex', gap: '48px', marginTop: '48px' }}>
            <img 
              src={imgRaptor1} 
              alt="RAPTOR System 1" 
              style={{ width: '48%', height: 'auto' }}
            />
            <img 
              src={imgImage40} 
              alt="RAPTOR System 2" 
              style={{ width: '38%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design-process" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Market Research
          </h2>
        </div>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
          We went through multiple industry software which work with similar warehouse machinery and noted down pointers:
        </p>

        <ol style={{ 
          fontSize: '16px', 
          color: '#3A3A3A', 
          lineHeight: '1.8', 
          paddingLeft: '40px', 
          marginBottom: '32px',
          listStyleType: 'decimal',
          listStylePosition: 'outside'
        }}>
          <li style={{ marginBottom: '12px', paddingLeft: '8px' }}>Some mapping between the physical-to-digital context reduces cognitive load significantly.</li>
          <li style={{ marginBottom: '12px', paddingLeft: '8px' }}>Dashboards can serve two purpose - either help with passive monitoring or help understand the metrics. The best dashboards solved partially for both the cases.</li>
          <li style={{ marginBottom: '0', paddingLeft: '8px' }}>Heat maps, color-coding, drill-down of information are common techniques used to reduce the mental load.</li>
        </ol>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '48px' }}>
          In our case, we had a tight deadline and development resource availability. We started designing taking into consideration all constraints and use cases.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <img 
            src={imgMarketResearch1} 
            alt="Market Research - Physical to digital mapping examples" 
            style={{ width: '100%', height: 'auto' }}
          />
          <img 
            src={imgMarketResearch2} 
            alt="Market Research - Operational mirroring in building management" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Design Iterations Section */}
      <section id="design-iterations" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Design Iterations
          </h2>
        </div>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
          We started drafting out possible layouts for the Visualisation screen. Went through multiple rounds of iterations; documented some learnings below:
        </p>

        <div>
          <img 
            src={imgIteration1} 
            alt="Design Iteration 1" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
          <img 
            src={imgIteration2} 
            alt="Design Iteration 2" 
            style={{ width: '74.4%', height: 'auto', marginBottom: '48px' }}
          />
          <img 
            src={imgIteration3} 
            alt="Design Iteration 3" 
            style={{ width: '92.6%', height: 'auto', marginBottom: '48px' }}
          />
          <img 
            src={imgIteration4} 
            alt="Design Iteration 4" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Information Architecture Section */}
      <section id="information-architecture" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Information Architecture
          </h2>
        </div>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
          We realised we needed to display a lot of information, so we made an Information chart inorder to display the hierarchy and dependency.
        </p>

        <div style={{ marginBottom: '64px' }}>
          <img 
            src={imgImage81} 
            alt="Information Architecture Diagram" 
            style={{ width: '72%', height: 'auto' }}
          />
        </div>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '16px' }}>
          To ensure that all the information was displayed logically as per need to the warehouse managers monitoring on their computers, we implemented detailed progressive disclosure of the information.
        </p>

        <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
          Selecting parent, then child, then sub-child - ensured that the details were shown in a hierarchy.
        </p>

        <div>
          <img 
            src={imgImage87} 
            alt="Progressive Disclosure Design" 
            style={{ width: '85%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Final Dashboard UI Section */}
      <section id="final-dashboard" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #A8F0C4',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Final Dashboard UI
          </h2>
        </div>
        
        <img 
          src={imgFinalDashboard} 
          alt="Final Dashboard UI" 
          style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
        />

        <ol style={{ 
          fontSize: '16px', 
          color: '#3A3A3A', 
          lineHeight: '1.8', 
          paddingLeft: '40px', 
          marginBottom: '48px',
          listStyleType: 'decimal',
          listStylePosition: 'outside'
        }}>
          <li style={{ marginBottom: '16px', paddingLeft: '8px' }}>Eventually, the RAPTOR unit was split into two halves - we needed to only show two machine units.</li>
          <li style={{ marginBottom: '16px', paddingLeft: '8px' }}>Necessary legends were placed static on the top of the visualization.</li>
          <li style={{ marginBottom: '16px', paddingLeft: '8px' }}>The side panel needed to have lots of contextual data - Main Conveyor Belt data, Pallet data, overall RAPTOR unit data. Opted for a progressive disclosure with collapsible panels.</li>
          <li style={{ marginBottom: '16px', paddingLeft: '8px' }}>For users on computer, each individual machine/machine part can be selected directly by clicking on the visual.</li>
          <li style={{ marginBottom: '0', paddingLeft: '8px' }}>Other than clicking and seeing more information, visual cues were added to highlight warnings.</li>
        </ol>

        <div style={{ 
          background: '#FAFAFA',
          border: '1.5px solid #1A1A1A',
          padding: '24px',
          fontFamily: 'monospace'
        }}>
          <p style={{ fontSize: '16px', fontWeight: '400', color: '#111111', lineHeight: '1.8', margin: '0' }}>
            Initial UATs revealed that users preferred this over the previous table layout. Users said it was easier for them to monitor and map the progress when the data was presented anchored to the spatial context.
          </p>
        </div>
      </section>
    </CaseStudyTemplate>
  );
}