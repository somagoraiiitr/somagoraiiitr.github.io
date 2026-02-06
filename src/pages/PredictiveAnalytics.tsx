import CaseStudyTemplate from "./CaseStudyTemplate";
import ProjectSideNav from "../components/ProjectSideNav";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import imgWhyMlAi1 from "figma:asset/71ff10a43d2cc9ac21fc15fa00d52f76200c5dea.png";
import imgImage93 from "figma:asset/36a1cb8f6515dcdd504c1f6a055185769daa3e18.png";
import imgImage94 from "figma:asset/e50317cfde6df612ed37c95d6f962cc3f861befc.png";
import imgImage95 from "figma:asset/89245d0a010d55b342a4d8c67ac5bdf46b94b3b3.png";
import imgImage96 from "figma:asset/158303a7c5db1a6248c926acef1d1f76be9eec77.png";
import imgImage97 from "figma:asset/c47bc5ecafeb4cf9d3a8905fa56bc117b017ce43.png";
import imgImage98 from "figma:asset/1db8fe95727c2d143da6e33a8e3175699e64dfd2.png";
import imgImage99 from "figma:asset/971c8158cac91f145c66e573f7afd18f87dc7252.png";
import imgImage100 from "figma:asset/0095cd871a1b3b608f07280d230fabcff7bc0708.png";
import imgUsecase01 from "figma:asset/3846215c188a0474821a821bd0a2e527af14e1f5.png";
import imgUsecase11 from "figma:asset/a4d3d0d14ee6702a20564dd4b258c413a1b84a49.png";
import imgDesignParameters5 from "figma:asset/ab749714a42c01f5fdab46f2b1a1dc841eebbc40.png";

export default function PredictiveAnalytics() {
  const [isMarketResearchOpen, setIsMarketResearchOpen] = useState(false);

  const navSections = [
    {
      id: 'problem',
      title: 'Problem Statement'
    },
    {
      id: 'features',
      title: 'Finalized Features'
    },
    {
      id: 'use-case',
      title: 'Use Case'
    }
  ];

  return (
    <CaseStudyTemplate
      title="Contextual AI Insights for Warehouse Operations"
      description="Developed AI-driven insights and recommendations for warehouse managers, integrating contextual analysis to provide actionable intelligence directly within the Control Tower interface."
      role="Interaction Designer"
      timeline="Concept Project"
      tags={["AI", "Systems", "Dashboard", "ML/AI"]}
      accentColor="#D1B3FF"
      showMetadataInHero={false}
      hideHero={true}
      sideNav={<ProjectSideNav sections={navSections} accentColor="#D1B3FF" />}
    >
      {/* Problem Statement Section */}
      <section id="problem" style={{ marginBottom: '96px' }}>
        {/* Role, Timeline, Tags */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Role:</span> Interaction Designer
            </span>
          </div>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Timeline:</span> Concept Project
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#3A3A3A' }}>Tags:</span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              AI
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Systems
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Dashboard
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              ML/AI
            </span>
          </div>
        </div>

        {/* Problem Statement */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '16px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginLeft: '-8px'
          }}>
            Problem Statement
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6',
            marginBottom: '0'
          }}>
            Warehouse managers and supervisors can't get actionable insights on the isolated data provided by Control Tower as it uses static models, limited data, and no recommendations.
          </p>
          <p style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6'
          }}>
            To address this, we aim to develop a feature leveraging artificial intelligence, machine learning and advanced analytics to offer <span style={{ textDecoration: 'underline' }}>actionable insights and recommendations</span>.
          </p>
        </div>

        {/* How does ML/AI come into the picture */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '16px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginLeft: '-8px'
          }}>
            How does ML/AI come into the picture?
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6',
            marginBottom: '8px'
          }}>
            ML/AI can help answer questions like:
          </p>
          <ol style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6',
            paddingLeft: '40px',
            margin: '0',
            listStyleType: 'decimal',
            listStylePosition: 'outside'
          }}>
            <li style={{ marginBottom: '8px' }}>Which products should I re-slot to improve overall efficiency?</li>
            <li style={{ marginBottom: '0' }}>If I move three more workers to Zone A, will I get my orders shipped on time?</li>
          </ol>
        </div>

        {/* The Team */}
        <div style={{ marginBottom: '46px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '16px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginLeft: '-8px'
          }}>
            The Team
          </h3>
          <p style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6',
            margin: '0'
          }}>
            Design Team - 1 Interaction Designer (Me), 1 Visual Designer
          </p>
        </div>

        {/* ML/AI Diagram */}
        <div style={{ width: '576px', marginBottom: '96px' }}>
          <img 
            src={imgWhyMlAi1} 
            alt="ML/AI Framework"
            style={{ 
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Market Research Collapsible */}
        <div style={{ 
          border: '1px solid #1A1A1A',
          background: '#FFFFFF'
        }}>
          <div 
            onClick={() => setIsMarketResearchOpen(!isMarketResearchOpen)}
            style={{ 
              padding: '16px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: isMarketResearchOpen ? '1px solid #1A1A1A' : 'none'
            }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#111111', marginBottom: '0' }}>
              Market Research
            </h3>
            {isMarketResearchOpen ? (
              <ChevronUp size={18} color="#111111" style={{ flexShrink: 0 }} />
            ) : (
              <ChevronDown size={18} color="#111111" style={{ flexShrink: 0 }} />
            )}
          </div>

          {isMarketResearchOpen && (
            <div style={{ padding: '32px 20px' }}>
              {/* Ataccama */}
              <div style={{ marginBottom: '39px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#111111', 
                  marginBottom: '16px',
                  background: 'rgba(237,221,132,0.3)',
                  display: 'inline-block',
                  padding: '2px 8px',
                  marginLeft: '-8px'
                }}>
                  Ataccama
                </h3>
                <ul style={{ 
                  fontSize: '16px', 
                  color: '#3A3A3A', 
                  lineHeight: '1.6',
                  paddingLeft: '24px',
                  listStyleType: 'disc',
                  margin: '0'
                }}>
                  <li style={{ marginBottom: '0' }}>Uses AI to assess data quality, surface inconsistencies, and generate contextual insights directly tied to specific issues in the workflow.</li>
                  <li>Provides smart summaries with recommended actions, allowing users to drill into dedicated pages to investigate and resolve problems.</li>
                </ul>
              </div>

              {/* Ataccama Images */}
              <div style={{ position: 'relative', marginBottom: '39px', height: '398px' }}>
                <img 
                  src={imgImage93} 
                  alt="Ataccama Interface 1"
                  style={{ 
                    position: 'absolute',
                    left: '196px',
                    top: '0',
                    width: '713px',
                    height: '398px',
                    display: 'block'
                  }}
                />
                <img 
                  src={imgImage94} 
                  alt="Ataccama Interface 2"
                  style={{ 
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '892px',
                    height: '306px',
                    display: 'block'
                  }}
                />
              </div>

              {/* Image 95 */}
              <img 
                src={imgImage95} 
                alt="Ataccama Interface 3"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '55px'
                }}
              />

              {/* AWS Supply Chain */}
              <div style={{ marginBottom: '39px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#111111', 
                  marginBottom: '16px',
                  background: 'rgba(237,221,132,0.3)',
                  display: 'inline-block',
                  padding: '2px 8px',
                  marginLeft: '-8px'
                }}>
                  AWS Supply Chain
                </h3>
                <ul style={{ 
                  fontSize: '16px', 
                  color: '#3A3A3A', 
                  lineHeight: '1.6',
                  paddingLeft: '24px',
                  listStyleType: 'disc',
                  margin: '0'
                }}>
                  <li style={{ marginBottom: '0' }}>Automatically generates real-time insights on supply chain risks like overstock and stock-outs using unified data from the supply chain data lake.</li>
                  <li>Suggests recommended actions with projected outcomes and confidence scores, supported by a real-time visual map of inventory health across locations.</li>
                </ul>
              </div>

              {/* AWS Images */}
              <img 
                src={imgImage96} 
                alt="AWS Supply Chain Interface 1"
                style={{ 
                  width: '937px',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '39px'
                }}
              />

              <img 
                src={imgImage97} 
                alt="AWS Supply Chain Interface 2"
                style={{ 
                  width: '936px',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '39px'
                }}
              />

              <img 
                src={imgImage98} 
                alt="AWS Supply Chain Interface 3"
                style={{ 
                  width: '937px',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '55px'
                }}
              />

              {/* Tredence */}
              <div style={{ marginBottom: '39px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '500', 
                  color: '#111111', 
                  marginBottom: '16px',
                  background: 'rgba(237,221,132,0.3)',
                  display: 'inline-block',
                  padding: '2px 8px',
                  marginLeft: '-8px'
                }}>
                  Tredence
                </h3>
                <ul style={{ 
                  fontSize: '16px', 
                  color: '#3A3A3A', 
                  lineHeight: '1.6',
                  paddingLeft: '24px',
                  listStyleType: 'disc',
                  margin: '0'
                }}>
                  <li style={{ marginBottom: '0' }}>Delivers contextual recommendations by combining internal operational data with external signals such as weather, geopolitical factors, and demand trends.</li>
                  <li>Prioritizes alerts and demand forecasts across multiple information channels to help users select the most relevant and impactful actions.</li>
                </ul>
              </div>

              {/* Tredence Images */}
              <img 
                src={imgImage99} 
                alt="Tredence Interface 1"
                style={{ 
                  width: '897px',
                  height: 'auto',
                  display: 'block',
                  marginBottom: '39px'
                }}
              />

              <img 
                src={imgImage100} 
                alt="Tredence Interface 2"
                style={{ 
                  width: '910px',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Finalized Features Section */}
      <section id="features" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #D1B3FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Finalized Features
          </h2>
        </div>

        {/* Features Overview */}
        <div style={{ marginBottom: '39px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '16px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginLeft: '-8px'
          }}>
            Features Overview
          </h3>
          <ol style={{ 
            fontSize: '16px', 
            color: '#3A3A3A', 
            lineHeight: '1.6',
            paddingLeft: '40px',
            margin: '0',
            listStyleType: 'decimal',
            listStylePosition: 'outside'
          }}>
            <li style={{ marginBottom: '8px' }}>AI-driven insights and recommendations appear contextually wherever losses, errors, or anomalies are detected.</li>
            <li style={{ marginBottom: '8px' }}>Each insight includes a concise explanation along with actionable options to address the issue immediately.</li>
            <li style={{ marginBottom: '8px' }}>Dashboard widgets can be analyzed individually, generating recommendations specific to the metric or trend shown.</li>
            <li style={{ marginBottom: '0' }}>This approach keeps insights relevant, reduces cognitive load, and enables faster decision-making within the existing workflow.</li>
          </ol>
        </div>

        {/* Features Images */}
        <img 
          src={imgUsecase01} 
          alt="Features Overview UI 1"
          style={{ 
            width: '995px',
            height: 'auto',
            display: 'block',
            marginBottom: '39px'
          }}
        />

        <img 
          src={imgUsecase11} 
          alt="Features Overview UI 2"
          style={{ 
            width: '1007px',
            height: 'auto',
            display: 'block',
            marginBottom: '39px'
          }}
        />

        {/* Design Parameters */}
        <div style={{ marginBottom: '39px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#111111', 
            marginBottom: '16px',
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginLeft: '-8px'
          }}>
            Design Parameters
          </h3>
        </div>

        {/* Design Parameters Image */}
        <img 
          src={imgDesignParameters5} 
          alt="Design Parameters"
          style={{ 
            width: '955px',
            height: 'auto',
            display: 'block'
          }}
        />
      </section>

      {/* Use Case Section */}
      <section id="use-case" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #D1B3FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Use Case : Pharmaceutical
          </h2>
        </div>

        {/* Use Case Steps */}
        <ol style={{ 
          fontSize: '16px', 
          color: '#3A3A3A', 
          lineHeight: '1.6',
          paddingLeft: '40px',
          margin: '0 0 39px 0',
          listStyleType: 'decimal',
          listStylePosition: 'outside'
        }}>
          <li style={{ marginBottom: '8px' }}>Ryan opens the Control Tower dashboard to review overall warehouse and inventory trends.</li>
          <li style={{ marginBottom: '8px' }}>He monitors key data points such as inventory levels, inbound and outbound shipments, and compliance status.</li>
          <li style={{ marginBottom: '8px' }}>An alert appears on the <span style={{ textDecoration: 'underline' }}>Analyze Card</span>, flagging a potential <span style={{ textDecoration: 'underline' }}>stock-out risk over the next three days</span> due to rising demand.</li>
          <li style={{ marginBottom: '8px' }}>Ryan investigates the alert to understand the root cause and projected timeline of the issue.</li>
          <li style={{ marginBottom: '8px' }}>The system predicts increased demand driven by the flu season, impacting the period from 4th July to 8th July, 2023.</li>
          <li style={{ marginBottom: '8px' }}>The analysis highlights a <span style={{ textDecoration: 'underline' }}>high risk of stock-out</span> for essential medicines during this window.</li>
          <li style={{ marginBottom: '8px' }}>A Recommendation Card suggests <span style={{ textDecoration: 'underline' }}>corrective actions</span>, including diverting 80% of SKUs to a specific distributor.</li>
          <li style={{ marginBottom: '0' }}>The system also shows the predicted impact, indicating that 95% of demand can be met, while warning that remaining stock will require replenishment.</li>
        </ol>

        {/* Use Case Images */}
        <img 
          src={imgUsecase01} 
          alt="Use Case Pharmaceutical 1"
          style={{ 
            width: '995px',
            height: 'auto',
            display: 'block',
            marginBottom: '39px'
          }}
        />

        <img 
          src={imgUsecase11} 
          alt="Use Case Pharmaceutical 2"
          style={{ 
            width: '1007px',
            height: 'auto',
            display: 'block'
          }}
        />
      </section>
    </CaseStudyTemplate>
  );
}