import CaseStudyTemplate from "./CaseStudyTemplate";
import ProjectSideNav from "../components/ProjectSideNav";
import imgMs11 from "figma:asset/a7394d68f48341f939e62edd69c10c64107800b7.png";
import imgPn2 from "figma:asset/e8ab899e25c2cae3f36b848c1412d4c905e74f3c.png";
import imgPn1 from "figma:asset/a3a7d30d3ed5c196af0a2d39d44c6543b4eb0f9d.png";
import imgHn2 from "figma:asset/d313b2056ad7a41365a2f8bcd796fd4ab8cb7ed9.png";
import imgHn1 from "figma:asset/9b338a1edc7008ea8d30b2772da7970305ffafee.png";
import imgImage64 from "figma:asset/daac1ade1f6f7afde0966bfdeb81badd751cf0c0.png";
import imgAnResearch1 from "figma:asset/86356aa63c344c1961864c4cb3df0757034f839a.png";
import imgAnchoredNotifications from "figma:asset/874d89a1ebae618e9f4adb6a033158d1061b823e.png";
import imgDesignMockups from "figma:asset/7f73af1ebc967e7e13b79f71187731ec75efea54.png";

export default function MicrosoftTeams() {
  const navSections = [
    {
      id: 'context',
      title: 'Context'
    },
    {
      id: 'user-issues',
      title: 'User Issues'
    },
    {
      id: 'anchored-notifications',
      title: 'Anchored Notifications'
    },
    {
      id: 'pull-notifications',
      title: 'Pull Notifications System'
    },
    {
      id: 'notification-hierarchy',
      title: 'Defining Hierarchy of Notifications'
    }
  ];

  return (
    <CaseStudyTemplate
      title="Optimizing Teams Notifications"
      description="Redesigning Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise through intelligent notification management."
      role="Product Intern"
      timeline="May 2023 - July 2023"
      tags={["Product Management", "Data Analysis", "Interaction Design"]}
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
              <span style={{ fontWeight: '500' }}>Role:</span> Product Intern
            </span>
          </div>
          <div>
            <span style={{ fontSize: '14px', color: '#3A3A3A' }}>
              <span style={{ fontWeight: '500' }}>Timeline:</span> May 2023 - July 2023
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#3A3A3A' }}>Tags:</span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Product Management
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Data Analysis
            </span>
            <span style={{ padding: '4px 10px', border: '1px solid #1A1A1A', fontSize: '12px', background: '#FFFFFF' }}>
              Interaction Design
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
            Microsoft Teams treated every notification as urgent, creating a "noisy" environment where users struggled to <u>distinguish signal from noise.</u> This lack of hierarchy forced users to <u>constantly context-switch</u> to triage scattered messages, often leading to missed critical updates and high cognitive fatigue.
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
              Explored four distinct conceptual directions to reduce cognitive load, moving beyond standard alerts. Concepts included a "Pull" system for <u>batching low-priority</u> summaries, <u>a visual hierarchy model</u> using color cues, bulk management tools for granular control, and <u>source-anchored windows</u> to preserve workflow context.
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
              <p style={{ margin: '0' }}>Product Team - 1 Product Intern (Me), 1 Product Manager (Mentor), 1 Product Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Issues Section */}
      <section id="user-issues" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            User Issues
          </h2>
        </div>

        {/* Notification Statistics Image */}
        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgMs11} 
            alt="Notification statistics showing daily and weekly volumes" 
            style={{ width: '80%', height: 'auto' }}
          />
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.5', marginTop: '12px', fontStyle: 'italic' }}>
            <span style={{ fontWeight: '500' }}>Target Persona - Enterprise Users and SMC Corporate:</span> Solving for 90th Percentile of Enterprise Users and SMC Corporate Users, as they receive notifications beyond a limit that is considered easily consumable (based on user conversations).
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Issue 1: Teams is screaming for attention
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
            Research indicates that the average time spent on any screen before switching is <u>a mere 47 seconds</u> due to constant self-interruption via checking email, chat, and/or social media (ref: Attention Span by Gloria Mark).
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Issue 2: Triage is painful: too many places, too many clicks
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', fontStyle: 'italic' }}>
            "It's also hard to find things and keep them organized: information is fragmented and scattered in different places. Finally, there is a lot of context switching, moving from channel to channel, getting context and making sense of everything. A significant part of the issue here is this <u>multi-channel info often is bound together only in users' minds with the mental glue of memory.</u>"
          </p>
        </div>

        <div>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Issue 3: Important messages are missed
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
            There is a flood of information through multiple channels (Teams chats, emails, meetings, documents, task/to-do lists). It can be very difficult to stay on top of things.
          </p>
        </div>
      </section>

      {/* Anchored Notifications Section */}
      <section id="anchored-notifications" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Solution 1: Anchored Notifications
          </h2>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Concept of "Anchor"
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '16px' }}>
            Anchor is the visual component of the app where the notifications surface on the interface, and <u>anchored to source</u> means the notification appears at the source itself. The user can directly reach the information being conveyed by the notification, without the trouble of an added middle layer.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6' }}>
            Chat Notifications amount to <u>78% of the total notifications</u> of any user, and anchoring would reduce the notifications to the Activity Feed, thus ensuring better click and engagement rate.
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              How this helps
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '24px' }}>
            Notifications are considered noise when the <u>users are not able to take any further action</u> on them or gain anything conclusive. Context is a major factor that helps in response which is being solved for with this solution.
          </p>
          
          {/* Research Insights - Verbatim */}
          <div style={{ 
            border: '1px solid #1A1A1A',
            background: '#F9F9F9',
            padding: '24px',
            marginTop: '24px',
            marginBottom: '24px'
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#000000', marginBottom: '16px' }}>
              Research Insights
            </h4>
            <div style={{ 
              borderLeft: '4px solid #9BD0FF',
              paddingLeft: '20px'
            }}>
              <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#111111', lineHeight: '1.6', marginBottom: '12px' }}>
                "Users find viewing content in context within the tabs intuitive and valuable."
              </p>
              <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#111111', lineHeight: '1.6', marginBottom: '0' }}>
                "Not having to switch between multiple windows enables multitasking and to focus on the content."
              </p>
            </div>
          </div>

          <img 
            src={imgAnResearch1} 
            alt="Research audit summary of customer insights" 
            style={{ width: '70%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '18px', color: '#111111', marginBottom: '16px' }}>
            Solution : Anchored Notifications
          </p>
          <img 
            src={imgAnchoredNotifications} 
            alt="Current vs proposed anchored notifications showing flexibility to split channels" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>

        <div>
          <p style={{ fontSize: '18px', color: '#111111', marginBottom: '16px' }}>
            Design Mockups
          </p>
          <img 
            src={imgDesignMockups} 
            alt="Anchored notifications workflow showing all customization steps" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Pull Notifications System Section */}
      <section id="pull-notifications" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Solution 2: Pull Notifications System
          </h2>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Smart Notification Vault
            </h3>
          </div>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginBottom: '16px' }}>
            Instead of <u>pushing</u> notifications to users, this system <u>stores non-urgent and non-instant response-requiring notifications</u> in a vault. Users access this vault at their preferred time to view and address the notifications.
          </p>
          <p style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', fontStyle: 'italic' }}>
            iOS uses a similar system where they store and sort the notifications before sending out to the users.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '18px', color: '#111111', marginBottom: '16px' }}>
            1. Summary Vault
          </p>
          <img 
            src={imgPn1} 
            alt="Smart Notification Vault concept showing daily summary" 
            style={{ width: '80%', height: 'auto' }}
          />
        </div>

        <div>
          <p style={{ fontSize: '18px', color: '#111111', marginBottom: '16px' }}>
            2. Summary History and Vault Settings
          </p>
          <img 
            src={imgPn2} 
            alt="Notification vault interface with summary history" 
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Notification Hierarchy Section */}
      <section id="notification-hierarchy" style={{ marginBottom: '96px' }}>
        <div style={{ 
          width: '100%',
          borderLeft: '4px solid #9BD0FF',
          paddingLeft: '24px',
          marginBottom: '48px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111111', marginBottom: '0' }}>
            Solution 3: Defining Hierarchy of Notifications
          </h2>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <img 
            src={imgHn1} 
            alt="Components of notification visual hierarchy diagram" 
            style={{ width: '48%', height: 'auto' }}
          />
        </div>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            background: 'rgba(237,221,132,0.3)',
            display: 'inline-block',
            padding: '2px 8px',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#111111', margin: '0' }}>
              Color of Notification Badges
            </h3>
          </div>
          <ol style={{ fontSize: '16px', color: '#3A3A3A', lineHeight: '1.6', marginLeft: '0', marginTop: '16px', paddingLeft: '20px', listStyleType: 'decimal', listStylePosition: 'outside' }}>
            <li style={{ marginBottom: '8px', display: 'list-item' }}>
              Sync between all the components of notification ensure smoother and better communication.
            </li>
            <li style={{ marginBottom: '8px', display: 'list-item' }}>
              Ensuring a consistent visual language reduces confusion.
            </li>
            <li style={{ marginBottom: '8px', display: 'list-item' }}>
              Dual colors will ensure that the <u>users do not get triggered equally at every notification</u>. Slack follows a similar pattern, and the feature has received positive feedback.
            </li>
          </ol>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '18px', color: '#111111', marginBottom: '16px' }}>
            Purple and Red Notification Badges
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <img 
              src={imgHn2} 
              alt="Notification color coding in Teams interface" 
              style={{ width: '100%', height: 'auto' }}
            />
            <img 
              src={imgImage64} 
              alt="Notification hierarchy table showing ML-driven importance" 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </CaseStudyTemplate>
  );
}