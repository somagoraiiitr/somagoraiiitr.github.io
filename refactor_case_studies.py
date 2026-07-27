import os
import re

def refactor_case_study(filepath, title, description, tags, duration, sidenav_items, notes_html=""):
    with open("templates/case_study.html", "r", encoding="utf-8") as f:
        template = f.read()

    with open(filepath, "r", encoding="utf-8") as f:
        html_content = f.read()

    # Extract all <section ...> ... </section> blocks from article or content
    sections = re.findall(r'(<section\b[^>]*>.*?</section>)', html_content, re.DOTALL)
    
    clean_sections = []
    for sec in sections:
        # Remove metadata blocks inside section if present
        sec_clean = re.sub(r'<div class="case-study-metadata">.*?</div>\s*', '', sec, flags=re.DOTALL)
        sec_clean = re.sub(r'<div style="display: flex; gap: 32px; align-items: center; margin-bottom: 48px">.*?</div>\s*', '', sec_clean, flags=re.DOTALL)
        sec_clean = re.sub(r'<div><span class="metadata-label">Timeline:.*?</div>\s*</div>\s*', '', sec_clean, flags=re.DOTALL)
        sec_clean = re.sub(r'<div class="tags-container">.*?</div>\s*</div>\s*', '', sec_clean, flags=re.DOTALL)
        # Remove residual syntax artifacts
        sec_clean = re.sub(r'^\s*\}\s*>\s*', '', sec_clean)
        clean_sections.append(sec_clean.strip())

    content_body = "\n\n".join(clean_sections)

    # Format tags_html
    tags_html = "".join([f'<span class="morph-tag">{tag}</span>' for tag in tags])

    # Format sidenav_links
    nav_lis = []
    for i, item in enumerate(sidenav_items):
        active_cls = ' class="active"' if i == 0 else ''
        nav_lis.append(f'<li><a href="{item["href"]}"{active_cls}>{item["label"]}</a></li>')
    sidenav_links = f'<ul>{"".join(nav_lis)}</ul>'

    formatted_html = template.format(
        title=title,
        description=description,
        tags_html=tags_html,
        duration=duration,
        sidenav_links=sidenav_links,
        content_body=content_body,
        notes_html=notes_html
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(formatted_html)
    print(f"Refactored {filepath} successfully!")

def main():
    case_studies = [
        {
            "filepath": "case-study-control-tower.html",
            "title": "Designing the Warehouse Control Tower Ecosystem",
            "description": "Built a scalable Control Tower that gives managers live visibility into bottlenecks, SLA risks, and overall warehouse performance. Introduced a modular process map that adapts across clients and reduces engineering dependency for updates.",
            "tags": ["B2B Enterprise", "Service Design", "Discovery Calls", "Product Design"],
            "duration": "Jan 2025 - Sep 2025",
            "sidenav_items": [
                {"href": "#context", "label": "Context"},
                {"href": "#problem", "label": "Service Ecosystem"},
                {"href": "#parameter-management", "label": "Introducing Central Repository and Setup"},
                {"href": "#quotation", "label": "Designing Quotation Process for Sales Team"},
                {"href": "#process-map", "label": "Digital Maps for Warehouse Processes"},
                {"href": "#deployment", "label": "Linking Digital Map to Data"},
                {"href": "#dashboard-monitoring", "label": "Monitoring by Warehouse Managers"}
            ]
        },
        {
            "filepath": "case-study-design-system.html",
            "title": "From Fragmented UI to a Single Source of Truth",
            "description": "Design system that reduced rework, aligned teams, and accelerated delivery across Axon's warehouse products.",
            "tags": ["Design System", "Component Library", "Accessibility", "B2B Enterprise"],
            "duration": "Mar 2024 - Aug 2024",
            "sidenav_items": [
                {"href": "#context", "label": "Context"},
                {"href": "#old-vs-new", "label": "Old UI vs New Standardised UI"},
                {"href": "#how-we-built", "label": "How We Built It"},
                {"href": "#component-list", "label": "1. Created a Component List"},
                {"href": "#color-typography", "label": "2. Color System, Typography Definition"},
                {"href": "#dark-light-mode", "label": "3. Dark & Light Mode Definition"},
                {"href": "#component-creation", "label": "4. Component Creation"},
                {"href": "#ag-grid", "label": "5. AG Grid Alignment"},
                {"href": "#navigation-panel", "label": "6. Right & Navigation Panel"},
                {"href": "#custom-components", "label": "7. Custom Components"},
                {"href": "#different-products", "label": "Design Systems for Different Products"},
                {"href": "#adoption", "label": "Adoption and Aftermath"}
            ],
            "notes_html": """
            <div class="cs-notes-block">
              <div class="cs-notes-heading">Citations & References</div>
              <p class="cs-notes-item">1. Internal Audit on Design Debt and Component Duplication (2024).</p>
              <p class="cs-notes-item">2. W3C Web Content Accessibility Guidelines (WCAG 2.1 AA).</p>
            </div>
            """
        },
        {
            "filepath": "case-study-digital-twin.html",
            "title": "Physical-to-Digital Monitoring for Robotic Systems",
            "description": "Designed a real-time monitoring system that translates live robotic operations into a clear, spatially grounded digital view. The interface mirrors the physical layout of RAPTOR systems, enabling faster understanding and confident action across roles.",
            "tags": ["Automation", "Data Viz"],
            "duration": "Oct 2024 - Jan 2025",
            "sidenav_items": [
                {"href": "#context", "label": "Context & Problem"},
                {"href": "#design-process", "label": "Market Research"},
                {"href": "#design-iterations", "label": "Design Iterations"},
                {"href": "#information-architecture", "label": "Information Architecture"},
                {"href": "#final-dashboard", "label": "Final Dashboard UI"}
            ]
        },
        {
            "filepath": "case-study-predictive-analytics.html",
            "title": "Contextual AI Insights for Warehouse Operations",
            "description": "Explored AI-assisted predictive layers for an operational control tower, focusing on interpretability, confidence, and decision support rather than automation.",
            "tags": ["AI", "Systems", "Dashboard"],
            "duration": "Jan 2024 - Apr 2024",
            "sidenav_items": [
                {"href": "#problem", "label": "Problem & Context"},
                {"href": "#market-research", "label": "Market Research"},
                {"href": "#features", "label": "Finalized Features"},
                {"href": "#use-case", "label": "Use Case: Pharmaceutical"}
            ]
        },
        {
            "filepath": "case-study-teams-redesign.html",
            "title": "Optimizing Teams Notifications",
            "description": "Redesigning Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise through intelligent notification management. Explored multiple solutions including anchored notifications, pull notification systems, and visual hierarchy using color cues.",
            "tags": ["Product Management", "Data Analysis"],
            "duration": "May 2023 - July 2023",
            "sidenav_items": [
                {"href": "#context", "label": "Context & Problem"},
                {"href": "#user-issues", "label": "User Issues Identified"},
                {"href": "#anchored-notifications", "label": "Anchored Notifications"},
                {"href": "#pull-notifications", "label": "Pull Notifications"},
                {"href": "#notification-hierarchy", "label": "Notification Hierarchy"}
            ]
        },
        {
            "filepath": "case-study-wes-redesign.html",
            "title": "WES Redesign Through Heuristic Analysis",
            "description": "Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details.",
            "tags": ["Interaction Design", "Enterprise UX"],
            "duration": "Jul 2024 - Sep 2024",
            "sidenav_items": [
                {"href": "#coming-soon", "label": "Coming Soon"}
            ]
        }
    ]

    for cs in case_studies:
        refactor_case_study(
            cs["filepath"],
            cs["title"],
            cs["description"],
            cs["tags"],
            cs["duration"],
            cs["sidenav_items"],
            cs.get("notes_html", "")
        )

if __name__ == "__main__":
    main()
