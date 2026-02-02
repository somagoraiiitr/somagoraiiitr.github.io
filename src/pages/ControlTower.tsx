import CaseStudyTemplate from "./CaseStudyTemplate";
import ProjectSideNav from "../components/ProjectSideNav";
import imgImage42 from "figma:asset/87f4259206f6a11e78461c558dfba0341783435c.png";
import imgImage56 from "figma:asset/85a491ffca51657a659f941bdb4955b266b5cf6b.png";
import imgImage63 from "figma:asset/00b1eaf3e2d70bd675e72ee90f7a17aa0b4cd0f3.png";
import imgImage9 from "figma:asset/540b03b56924be33b0f06677c5325ad90dbf684a.png";
import imgImage11 from "figma:asset/876330a460ee8c780170d681f325fe344d8102d5.png";
import imgImage58 from "figma:asset/90570c06719ae4be4dd40e58803f0753bc2435b4.png";
import imgImage15 from "figma:asset/fb14ef03d8eaa687bb9d60978954bf5206e692d3.png";
import imgImage14 from "figma:asset/dea53044f92582632da75b211aed82dd8bb907a3.png";
import imgImage59 from "figma:asset/766a89c1d8532af20c4704c9ff3fd3cd2fa76071.png";
import imgProcessMap from "figma:asset/323cb41b70bda69c5dbf60187934da964ec70a33.png";
import imgImage60 from "figma:asset/992eb3a00c118fe9dd9607f460eec6815f8fb7c2.png";
import imgImage22 from "figma:asset/59aaba42cb3dfb7e081e52fa07c27adcd5526ad7.png";
import imgImage61 from "figma:asset/45a3e7a4ffc7b38a12a0c406789f97bc22747e6d.png";
import imgImage20 from "figma:asset/9fe676518ddce5490d0a73b7850856288b89dd72.png";
import imgAIChat1 from "figma:asset/819b2ee7d4bd0145644aff179ae3e80e440bce7a.png";
import imgAIChat2 from "figma:asset/d4ba1927c0c91c106e15affe6b3b7a89e41e1bdf.png";

export default function ControlTower() {
  const navSections = [
    {
      id: 'context',
      title: 'Context'
    },
    {
      id: 'problem',
      title: 'Service Ecosystem'
    },
    {
      id: 'parameter-management',
      title: 'Introducing Central Repository and Setup'
    },
    {
      id: 'quotation',
      title: 'Designing Quotation Process for Sales Team'
    },
    {
      id: 'process-map',
      title: 'Digital Maps for Warehouse Processes'
    },
    {
      id: 'deployment',
      title: 'Linking Digital Map to Data'
    },
    {
      id: 'dashboard-monitoring',
      title: 'Monitoring by Warehouse Managers'
    }
  ];

  return (
    <CaseStudyTemplate
      title="Designing the Warehouse Control Tower Ecosystem"
      description="Built a scalable Control Tower that gives managers live visibility into bottlenecks, SLA risks, and overall warehouse performance. Introduced a modular process map that adapts across clients and reduces engineering dependency for updates."
      role="Product Designer"
      timeline="Jan 2025 - Sep 2025"
      tags={["B2B Enterprise", "Service Design", "Discovery Calls", "Product Design"]}
      accentColor="#9BD0FF"
      showMetadataInHero={false}
      hideHero={true}
      sideNav={<ProjectSideNav sections={navSections} accentColor="#9BD0FF" />}
    >
      {/* Context Section */}
      <section id="context" style={{ marginBottom: '96px' }}>
        {/* Role, Timeline, Tags */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Role:</span> Product Designer
            </span>
          </div>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Timeline:</span> Jan 2025 - Sep 2025
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#3A3A3A' }}>Tags:</span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              B2B Enterprise
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Service Design
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Discovery Calls
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Product Design
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
            The warehouse setup process was <u>fragmented</u> and relied on manual Excel sheets, creating <u>data silos</u> between sales and developers that led to <u>high error rates</u> and <u>redundant data</u> entry. Additionally, clients lacked real-time visibility and control, forcing them to rely on slow support tickets for even minor dashboard adjustments or report generation.
          </p>

          <div style={{ marginTop: '32px' }}>
            <div style={{ 
              background: 'rgba(237,221,132,0.3)',
              display: 'inline-block',
              padding: '2px 8px',
              marginBottom: '8px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
                Solution Implemented
              </h3>
            </div>
            <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginTop: '8px' }}>
              By replacing disconnected workflows with a <u>centralized digital repository</u>, we enabled transparency, traceability, and real-time validation across the entire project lifecycle. Additionally, we introduced visual process map monitoring that <u>aligned with warehouse mental models.</u>
            </p>
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
              <p style={{ margin: '0 0 4px 0' }}>Design Team - 1 Product Designer (Me)</p>
              <p style={{ margin: '0 0 4px 0' }}>Product Team - 1 Product Manager, 1 Scrum Master</p>
              <p style={{ margin: '0' }}>Development Team - 1 Database Architect, 4 Front-end Engineers, 5 Back-end Engineers, 3 QA Engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Ecosystem Section */}
      <section id="problem" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Service Ecosystem
          </h2>
        </div>

        <div style={{ marginTop: '48px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '24px',
            background: 'rgba(166,207,251,0.25)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Existing Process :
          </h3>
          <img 
            src={imgImage42} 
            alt="Existing Process Flow" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div style={{ marginTop: '96px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '24px',
            background: 'rgba(166,207,251,0.25)',
            display: 'inline-block',
            padding: '4px 12px'
          }}>
            Redesigned Process :
          </h3>
          <img 
            src={imgImage56} 
            alt="Redesigned Process Flow" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Page 2: Parameter Management and Setup */}
      <section id="parameter-management" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Introducing Central Repository and Setup
          </h2>
        </div>

        {/* Target User and User Goal */}
        <div style={{ 
          marginBottom: '48px',
          border: '1px solid #1A1A1A',
          padding: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>Target User: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A' }}>Warehouse Admin Team</span>
          </div>
          <div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>User Goal: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
              To set up parameters (like enabling/disabling discount, classifications and groups for robots etc) and add exhaustive list of machines (robots, conveyor belts etc) from the sales catalogue with minute details (like cost, version, dimensions etc)
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage63} 
            alt="Parameter Management Overview" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            1. From Fixed UI to Parameter Management:
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            Instead of hardcoding configurations, we designed a granular settings panel where users could adjust warehouse parameters, eliminating dependency on devs for each change.
          </p>
          <img 
            src={imgImage9} 
            alt="Parameter Management Interface" 
            style={{ width: '80%', height: 'auto', marginBottom: '64px' }}
          />

          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            2. Introducing the Setup Section:
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            Created a central repository where users could manage devices, systems, and other parameters. This allowed new warehouses to self-onboard without manual setup.
          </p>
          <img 
            src={imgImage11} 
            alt="Setup Section Interface" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Quotation Process Section */}
      <section id="quotation" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Designing Quotation Process for Sales Team
          </h2>
        </div>

        {/* Target User and User Goal */}
        <div style={{ 
          marginBottom: '48px',
          border: '1px solid #1A1A1A',
          padding: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>Target User: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A' }}>Sales Team</span>
          </div>
          <div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>User Goal: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
              To create Sales Quotations that include details (quantity, cost, machine specifications, etc.) about the robots, conveyors, storage, software, etc. that the client decided to purchase. This involves multiple iterations and stakeholders, with extensive data entry and exports.
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage58} 
            alt="Quotation Creation Process" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            1. The Quotation Form
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            The quotation form was designed to handle a highly cognitive task by using progressive disclosure, guiding users through the information one section at a time rather than presenting everything at once.
          </p>
          <img 
            src={imgImage14} 
            alt="Quotation Form" 
            style={{ width: '80%', height: 'auto', marginBottom: '64px' }}
          />

          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '8px' }}>
            2. Data Entry in the Quotation
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', margin: '0 0 32px 0' }}>
            For quotation data entry, we enabled users to fetch items from an existing repository via a pop-up. The interaction was designed to support precise, structured actions-such as selecting an item first and then explicitly defining its units-ensuring accuracy and reducing manual input errors.
          </p>
          <img 
            src={imgImage15} 
            alt="Data Entry Interface" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Process Map Section */}
      <section id="process-map" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Digital Maps for Warehouse Processes
          </h2>
        </div>

        {/* Target User and User Goal */}
        <div style={{ 
          marginBottom: '48px',
          border: '1px solid #1A1A1A',
          padding: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>Target User: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A' }}>Sales Team and Warehouse Experts</span>
          </div>
          <div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>User Goal: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
              To finalize the layout and interactions between the machines, robots, storage, etc. being purchased. Warehouse experts and the sales team collaborate iteratively with client stakeholders to ensure that the deal is executable. This involves multiple iterations and feedback cycles that may update the Sales Quotation.
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage59} 
            alt="Process Map Creation Process" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '24px' }}>
            Creating a Process Map involved designing a system-level diagram that represents warehouse operations in real time. Unlike a static flowchart, the map is data-synced and reflects the live state of processes and their components, helping users quickly assess whether each part of the operation is performing as expected.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
            The Process Map is generated directly from the approved quotation by fetching communications, automation vendors, and robots from the existing data. This reduced manual input and ensured consistency across teams, while attaching images of robots and devices improved fault diagnosis by enabling faster visual identification during operational issues.
          </p>
        </div>

        <div>
          <img 
            src={imgProcessMap} 
            alt="Process Map Design Interface" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Linking Map to Data Section */}
      <section id="deployment" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Linking Digital Map to Data
          </h2>
        </div>

        {/* Target User and User Goal */}
        <div style={{ 
          marginBottom: '48px',
          border: '1px solid #1A1A1A',
          padding: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>Target User: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A' }}>Development Team</span>
          </div>
          <div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>User Goal: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
              Once the business deal is sealed and machines are finalized, developers establish data links between the database and physical machines to ensure real-time monitoring of the machines and processes in the warehouse.
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage60} 
            alt="Deployment Process" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '24px' }}>
            Once the process maps are developed in collaboration with the client and the tech team, the focus shifts to <span style={{ textDecoration: 'underline' }}>integrating the process map with backend services</span>, enabling live tracking capabilities. The implementation team then moves on to first create an implementation team.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
            The implementation team then ensured that all artefacts and files were uploaded, linked, and deployed within the same platform. Keeping everything in one system made inconsistencies and failures visible in context, significantly reducing ambiguity and making troubleshooting faster and more effective.
          </p>
        </div>

        <div>
          <img 
            src={imgImage22} 
            alt="Database Linking Interface" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Monitoring Section */}
      <section id="dashboard-monitoring" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Monitoring by Warehouse Managers
          </h2>
        </div>

        {/* Target User and User Goal */}
        <div style={{ 
          marginBottom: '48px',
          border: '1px solid #1A1A1A',
          padding: '24px'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>Target User: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A' }}>Client Team Warehouse Managers</span>
          </div>
          <div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#111111' }}>User Goal: </span>
            <span style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
              To monitor the health of the robots and ongoing processes in the warehouse and take action, analyze errors, and review logs as needed.
            </span>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgImage61} 
            alt="Dashboard Monitoring Process" 
            style={{ width: '100%', height: 'auto', marginBottom: '48px' }}
          />
        </div>

        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '12px' }}>
            1. Process Map Monitoring
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
            Provides process-level, real-time monitoring through a diagrammatic view of all defined warehouse workflows. Each process and its components can be evaluated in context, with errors or performance issues immediately flagged in red for quick identification.
          </p>
          <img 
            src={imgImage20} 
            alt="Process Map Monitoring Dashboard" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', marginBottom: '12px' }}>
            2. AI Assisted Dashboard
          </h3>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '32px' }}>
            Enables users to interact with operational data via an AI chatbot to generate reports, create custom widgets, or retrieve specific tables and data points, reducing manual effort and accelerating access to insights.
          </p>
          <img 
            src={imgAIChat1} 
            alt="AI Assisted Dashboard - Chat Interface" 
            style={{ width: '85%', height: 'auto', marginBottom: '32px' }}
          />
          <img 
            src={imgAIChat2} 
            alt="AI Assisted Dashboard - Widget Creation" 
            style={{ width: '85%', height: 'auto' }}
          />
        </div>
      </section>
    </CaseStudyTemplate>
  );
}