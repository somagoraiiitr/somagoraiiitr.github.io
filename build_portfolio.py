import xml.etree.ElementTree as ET
import os
import re

def prepare_svg(filename):
    ET.register_namespace('', 'http://www.w3.org/2000/svg')
    tree = ET.parse(filename)
    root = tree.getroot()
    
    # Remove all foreignObject elements
    for parent in root.iter():
        for child in list(parent):
            if child.tag.endswith('foreignObject'):
                parent.remove(child)

    # 1. Set preserveAspectRatio on the root <svg> tag
    root.attrib['preserveAspectRatio'] = 'xMidYMid slice'
    
    # 2. Check if a root <g> tag already exists. If not, wrap children.
    g_element = root.find("{http://www.w3.org/2000/svg}g")
    if g_element is None:
        g_element = ET.Element('{http://www.w3.org/2000/svg}g', attrib={'id': 'cat-g-1'})
        children_to_move = []
        rect_background = None
        defs_element = None
        
        for child in list(root):
            tag_local = child.tag.split('}')[-1]
            if tag_local == 'defs':
                defs_element = child
            elif tag_local == 'rect' and rect_background is None:
                rect_background = child
            else:
                children_to_move.append(child)
                root.remove(child)
                
        for child in children_to_move:
            g_element.append(child)
            
        root.append(g_element)
        if defs_element is not None:
            root.remove(defs_element)
            root.append(defs_element)
        print("Wrapped cat vectors inside <g id='cat-g-1'>")
    else:
        g_element.attrib['id'] = 'cat-g-1'
        
    g_children = list(g_element)
    
    if len(g_children) > 109:
        path102 = g_children[102]
        path103 = g_children[103]
        path104 = g_children[104]
        path105 = g_children[105]
        path106 = g_children[106]
        path107 = g_children[107]
        path108 = g_children[108]
        path109 = g_children[109]
        
        path104.attrib['id'] = 'cat-eye-left'
        path107.attrib['id'] = 'cat-tooth-left'
        path103.attrib['id'] = 'cat-eye-right'
        path108.attrib['id'] = 'cat-tooth-right'
        path105.attrib['id'] = 'cat-mouth'
        path106.attrib['id'] = 'cat-tongue'
        path109.attrib['id'] = 'cat-mouth-detail-1'
        path102.attrib['id'] = 'cat-mouth-detail-2'
        
        g_children.remove(path102)
        g_children.remove(path109)
        
        idx_105 = g_children.index(path105)
        g_children.insert(idx_105, path102)
        g_children.insert(idx_105, path109)
        
        del g_element[:]
        for child in g_children:
            g_element.append(child)
        print("Re-ordered layers inside XML tree.")
    else:
        print("Error: Too few paths in SVG!")
        return None
    
    svg_str = ET.tostring(root, encoding='utf-8').decode('utf-8')
    if svg_str.startswith("<?xml"):
        svg_str = svg_str[svg_str.find(">")+1:]
        
    # Replace hex codes with CSS variables
    replacements = {
        '#B64F2A': 'var(--color-primary)',      # Rust - Primary
        '#195959': 'var(--color-accent)',       # Teal - Accent
        '#938C82': 'var(--color-light-gray)',
        '#6A675D': 'var(--color-gray)',
        '#4E4B44': 'var(--color-dark-gray)',
        '#1C2123': 'var(--color-neutral-black)',
        '#F5C7AF': 'var(--color-secondary-1)',
        '#CD846B': 'var(--color-secondary-2)',
        '#523C2E': 'var(--color-brown)',
        '#F3F0E7': 'var(--color-bg)',
        '#D9D9D9': 'var(--color-white)',
    }
    for hex_val, var_val in replacements.items():
        pattern = re.compile(re.escape(hex_val), re.IGNORECASE)
        svg_str = pattern.sub(var_val, svg_str)
        
    return svg_str

def parse_style(match):
    style_dict_str = match.group(1)
    # Parse attributes: key: 'value' or key: value
    parts = re.split(r',(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)', style_dict_str)
    css_styles = []
    for part in parts:
        part = part.strip()
        if not part or ':' not in part: continue
        key, val = part.split(':', 1)
        key = key.strip()
        val = val.strip().strip("'").strip('"')
        # Convert camelCase to kebab-case
        css_key = re.sub(r'(?<!^)(?=[A-Z])', '-', key).lower()
        css_styles.append(f"{css_key}: {val}")
    return f'style="{"; ".join(css_styles)}"'

def compile_case_studies(src_dir, dest_dir):
    files = {
        "ControlTower.tsx": ("case-study-control-tower.html", "#FFE24A"),
        "DesignSystem.tsx": ("case-study-design-system.html", "#A8F0C4"),
        "DigitalTwin.tsx": ("case-study-digital-twin.html", "#A8F0C4"),
        "MicrosoftTeams.tsx": ("case-study-teams-redesign.html", "#9BD0FF"),
        "PredictiveAnalytics.tsx": ("case-study-predictive-analytics.html", "#D1B3FF"),
        "WESRedesign.tsx": ("case-study-wes-redesign.html", "#FFB5B5")
    }
    
    case_study_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — Case Study</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="case-study-body">

  <!-- Back button navigation (Top bar) -->
  <div class="case-study-back-bar">
    <div class="container-editorial">
      <a href="index.html#work" class="back-link">
        <span class="back-arrow">&larr;</span> Back to Portfolio
      </a>
    </div>
  </div>

  <!-- Hero Section -->
  <header class="case-study-hero">
    <div class="container-editorial">
      <div class="hero-accent-bar" style="background: {accent_color};"></div>
      <h1 class="case-study-title">{title}</h1>
      <p class="case-study-description">{description}</p>
    </div>
  </header>

  <!-- Content Split Grid (z-index: 10) -->
  <main class="case-study-main">
    <div class="container-editorial case-study-split">
      
      <!-- Sticky Sidebar Navigator -->
      <aside class="case-study-sidebar">
        <div class="side-nav-title" style="border-bottom: 1.5px solid {accent_color};">Contents</div>
        <nav class="side-nav-list">
          {sidenav_links}
        </nav>
      </aside>

      <!-- Main Case Study Content -->
      <article class="case-study-content">
        {content_body}
      </article>

    </div>
  </main>

  <!-- Editorial Footer -->
  <footer class="editorial-footer">
    <div class="container-editorial">
      <div class="footer-layout">
        <div class="footer-copy">
          © 2026 Soma Gorai • Made with loads of love and vanilla JS &hearts;
        </div>
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/somagorai/" target="_blank">LinkedIn</a>
          <a href="https://www.behance.net/somagorai" target="_blank">Behance</a>
          <a href="https://somagorai.medium.com/" target="_blank">Medium</a>
          <a href="mailto:soma.gorai@outlook.com">Email</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>
"""

    for filename, (out_name, accent_color) in files.items():
        src_path = os.path.join(src_dir, filename)
        if not os.path.exists(src_path):
            print(f"Skipping {filename} (not found)")
            continue
            
        with open(src_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Parse image mappings
        img_map = {}
        for match in re.finditer(r'import\s+(\w+)\s+from\s+"figma:asset/([^"]+)"', content):
            img_map[match.group(1)] = "assets/" + match.group(2)
            
        # Extract title and description attributes inside CaseStudyTemplate tag
        title_match = re.search(r'title="([^"]*)"', content)
        desc_match = re.search(r'description="([^"]*)"', content)
        title = title_match.group(1) if title_match else "Case Study"
        description = desc_match.group(1) if desc_match else ""
        
        # Extract navSections list from TSX
        nav_sections = []
        nav_match = re.search(r'const\s+navSections\s*=\s*\[(.*?)\];', content, re.DOTALL)
        if nav_match:
            nav_body = nav_match.group(1)
            # Find all objects with id and title
            for obj in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*title:\s*[\'"]([^\'"]+)[\'"]', nav_body):
                nav_sections.append((obj.group(1), obj.group(2)))
        
        sidenav_links = ""
        for sid, stitle in nav_sections:
            sidenav_links += f'<a href="#{sid}" class="side-nav-link" data-target="{sid}">{stitle}</a>\n'
            
        # Extract CaseStudyTemplate children body
        body_match = re.search(r'<CaseStudyTemplate[^>]*>(.*?)</CaseStudyTemplate>', content, re.DOTALL)
        if not body_match:
            # Handle placeholder pages like WESRedesign
            body_match = re.search(r'return\s*\(\s*(<div.*?>.*?</div>)\s*\);', content, re.DOTALL)
            body_content = body_match.group(1) if body_match else ""
        else:
            body_content = body_match.group(1)
            
        # Clean React code and convert to pure HTML
        # 1. Remove comments
        body_content = re.sub(r'\{\/\*.*?\*\/\s*\}', '', body_content, flags=re.DOTALL)
        
        # 2. Convert class names
        body_content = body_content.replace('className=', 'class=')
        
        # 3. Convert style={{ ... }} to style="..."
        body_content = re.sub(r'style=\{\{\s*([^}]+)\s*\}\}', parse_style, body_content)
        
        # 4. Map image tags
        for img_var, img_file in img_map.items():
            body_content = body_content.replace(f'src={{{img_var}}}', f'src="{img_file}"')
            
        # 5. Convert ImageWithFallback tags
        body_content = re.sub(
            r'<ImageWithFallback\s+src={([^}]+)}\s+alt={?([^}]+)}??\s+class="([^"]*)"\s*/>',
            lambda m: f'<img src="{img_map.get(m.group(1), m.group(1))}" alt="{m.group(2).strip(chr(34))}" class="{m.group(3)}" />',
            body_content
        )
        
        # 6. Convert custom CaseStudyMetadata, SectionHeading, HighlightedLabel, UserGoalBox components
        # CaseStudyMetadata
        meta_pattern = r'<CaseStudyMetadata\s+role="([^"]*)"\s+timeline="([^"]*)"\s+tags={\[([^\]]*)\]}\s*/>'
        def replace_meta(m):
            role, timeline, tags_raw = m.groups()
            tags = [t.strip().strip('"').strip("'") for t in tags_raw.split(',') if t.strip()]
            tags_html = "".join([f'<span class="tag">{tag}</span>' for tag in tags])
            return f'''<div class="case-study-metadata">
                <div><span class="metadata-label">Role:</span> {role}</div>
                <div><span class="metadata-label">Timeline:</span> {timeline}</div>
                <div class="tags-container"><span class="metadata-label">Tags:</span> {tags_html}</div>
            </div>'''
        body_content = re.sub(meta_pattern, replace_meta, body_content)
        
        # SectionHeading
        heading_pattern = r'<SectionHeading\s+title="([^"]*)"\s+accentColor={?([^}\s/>]+)}??\s*/>'
        body_content = re.sub(
            heading_pattern,
            lambda m: f'''<div class="section-heading" style="border-left: 4px solid {m.group(2).strip(chr(34)) if not m.group(2).startswith('ACCENT') else accent_color}">
                <h2>{m.group(1)}</h2>
            </div>''',
            body_content
        )
        
        # HighlightedLabel
        label_pattern = r'<HighlightedLabel(?:\s+color="([^"]*)")?\s*>(.*?)</HighlightedLabel>'
        body_content = re.sub(
            label_pattern,
            lambda m: f'<div class="highlighted-label" style="background: {m.group(1) or "rgba(237,221,132,0.3)"}"><h3>{m.group(2)}</h3></div>',
            body_content
        )
        
        # UserGoalBox
        goal_pattern = r'<UserGoalBox\s+targetUser="([^"]*)"\s+userGoal="([^"]*)"\s*/>'
        body_content = re.sub(
            goal_pattern,
            lambda m: f'''<div class="user-goal-box">
                <div style="margin-bottom: 16px;">
                    <span style="font-weight: 600; color: var(--color-neutral-black);">Target User: </span>
                    <span style="color: var(--color-gray);">{m.group(1)}</span>
                </div>
                <div>
                    <span style="font-weight: 600; color: var(--color-neutral-black);">User Goal: </span>
                    <span style="color: var(--color-gray); line-height: 1.6;">{m.group(2)}</span>
                </div>
            </div>''',
            body_content
        )
        
        # 7. Convert state toggles (Heuristic Collapsible Drawer in DesignSystem)
        # Replacing onClick state elements with semantic details/summary blocks
        heuristic_pattern = r'<div\s+class="relative"\s+style="border:\s*\'1px\s+solid\s+#1A1A1A\',[^"]*">\s*<div\s+onClick=\{[^}]+\}\s+style=\{[^}]+\}>\s*<h3\s+style=\{[^}]+\}>Heuristic\s+Evaluation</h3>.*?</div>.*?\{isHeuristicOpen\s+&&\s+\((.*?)\)\}'
        # To make it simple and cover both DesignSystem and PredictiveAnalytics, let's write standard details/summary structures for the drawer blocks:
        body_content = body_content.replace(
            'onClick={() => setIsHeuristicOpen(!isHeuristicOpen)}',
            'class="accordion-header"'
        )
        body_content = body_content.replace(
            'onClick={() => setIsMarketResearchOpen(!isMarketResearchOpen)}',
            'class="accordion-header"'
        )
        # Clean bracket boundaries for conditional hooks:
        body_content = re.sub(r'\{isHeuristicOpen\s+&&\s+\(', '<div class="accordion-content">', body_content)
        body_content = re.sub(r'\{isMarketResearchOpen\s+&&\s+\(', '<div class="accordion-content">', body_content)
        # Closing tags for maps and braces
        body_content = body_content.replace(')}\n        </div>\n      </div>', '</div></div>')
        body_content = body_content.replace(')}\n        </div>', '</div>')
        body_content = body_content.replace(')}', '</div>')
        
        # Replace Lucide chevron tags with unicode caert:
        body_content = re.sub(r'<Chevron(Down|Up)[^>]*/>', r'<span class="chevron-icon">&#9662;</span>', body_content)
        
        # Output final case study HTML
        output_html = case_study_template.format(
            title=title,
            description=description,
            accent_color=accent_color,
            sidenav_links=sidenav_links,
            content_body=body_content
        )
        
        dest_path = os.path.join(dest_dir, out_name)
        with open(dest_path, "w", encoding="utf-8") as out_f:
            out_f.write(output_html)
            
        print(f"Generated {out_name} successfully.")

def main():
    print("Loading and preparing single 1_5.svg baseline...")
    svg1 = prepare_svg("1_5.svg")
    if not svg1:
        print("Build failed!")
        return
        
    # Main Projects Table Content (Case Studies list)
    main_projects_rows = ""
    projects_data = [
        {
            "id": 1,
            "title": "Designing the Warehouse Control Tower Ecosystem",
            "shortDesc": "Centralized control tower enabling real-time warehouse planning, validation, and operational visibility.",
            "fullDescription": "Replaced fragmented, Excel-driven warehouse setup with a centralized system unifying sales configuration, process mapping, and operations. Enabled real-time validation, traceability, and client-managed updates, removing data silos and engineering dependency.",
            "image": "assets/235012a9efdd1b8a0d8d6e2e8f019cf4f55d6082.png",
            "tags": ["B2B Enterprise", "Service Design"],
            "date": "Jan 2025 -<br>Sep 2025",
            "accentColor": "#FFE24A",
            "link": "case-study-control-tower.html"
        },
        {
            "id": 2,
            "title": "From Fragmented UI to a Single Source of Truth",
            "shortDesc": "Design system that reduced rework, aligned teams, and accelerated delivery across Axon's warehouse products.",
            "fullDescription": "We built a custom design system to address inconsistent UI patterns across Axon's warehouse software. By standardizing components, colors, typography, and states, the system reduced repeated design and development effort and made UI decisions clearer and easier to apply.",
            "image": "assets/73ea07ba5ba50811bfb0f5457a8d2a2eb8baf486.png",
            "tags": ["Design System", "Component Library"],
            "date": "Mar 2024 -<br>Aug 2024",
            "accentColor": "#A8F0C4",
            "link": "case-study-design-system.html"
        },
        {
            "id": 3,
            "title": "Optimizing Teams Notifications",
            "shortDesc": "Redesigning Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise.",
            "fullDescription": "Redesigned Microsoft Teams' notification system to reduce cognitive load and help users distinguish signal from noise through intelligent notification management. Explored multiple solutions including anchored notifications, pull notification systems, and visual hierarchy using color cues.",
            "image": "assets/e96c9cc922798632243bfacf2f601225830c14d9.png",
            "tags": ["Product Management", "Data Analysis"],
            "date": "May 2023 -<br>July 2023",
            "accentColor": "#9BD0FF",
            "link": "case-study-teams-redesign.html"
        },
        {
            "id": 4,
            "title": "Physical-to-Digital Monitoring for Robotic Systems",
            "shortDesc": "Real-time monitoring for robotic picking operations",
            "fullDescription": "Designed a real-time monitoring system that translates live robotic operations into a clear, spatially grounded digital view. The interface mirrors the physical layout of RAPTOR systems, enabling faster understanding and confident action across roles.",
            "image": "assets/8f71ad3af89068a4848d360e1e3517ffd16f2df4.png",
            "tags": ["Automation", "Data Viz"],
            "date": "Oct 2024 -<br>Jan 2025",
            "accentColor": "#A8F0C4",
            "link": "case-study-digital-twin.html"
        }
    ]
    
    for project in projects_data:
        tags_html = "".join([f'<span class="tag">{tag}</span>' for tag in project["tags"]])
        main_projects_rows += f"""
        <div class="table-row main-project-row" data-id="{project["id"]}" data-link="{project["link"]}">
          <!-- Left slide-out accent indicator -->
          <div class="row-accent-bar" style="background: {project["accentColor"]};"></div>
          
          <div class="row-content">
            <!-- Dynamically scaling thumbnail -->
            <div class="thumbnail-container">
              <img src="{project["image"]}" alt="{project["title"]}" class="row-image">
            </div>
            
            <div class="text-container">
              <div class="title-wrapper">
                <a href="{project["link"]}" class="project-title-link" data-id="{project["id"]}">
                  <h3>{project["title"]}</h3>
                  <span class="title-underline"></span>
                </a>
                <span class="arrow-icon">&#8599;</span>
              </div>
              
              <!-- Swap paragraph containing data params -->
              <p class="project-description" 
                 data-short="{project["shortDesc"]}" 
                 data-full="{project["fullDescription"]}">{project["shortDesc"]}</p>
            </div>
            
            <!-- Tags & Date Columns -->
            <div class="tags-column">
              <div class="tags-flex">{tags_html}</div>
            </div>
            <div class="date-column">{project["date"]}</div>
          </div>
        </div>\n"""

    # Secondary Projects Table Content
    secondary_projects_rows = ""
    secondary_data = [
        {
            "id": 1,
            "title": "Contextual AI Insights for Warehouse Operations",
            "description": "Explored AI-assisted predictive layers for an operational control tower, focusing on interpretability, confidence, and decision support rather than automation.",
            "tags": ["AI", "Systems", "Dashboard"],
            "link": "case-study-predictive-analytics.html",
            "image": "assets/3bb82bf383a52e322b1f9c7ed1243553ccaabf11.png"
        },
        {
            "id": 2,
            "title": "WES Redesign Through Heuristic Analysis",
            "description": "Researched bulk vs. individual record interactions, evaluated alternatives (split affordances, in-row actions, expansion patterns), and defined clear conventions for focus, quick actions, and side-panel details.",
            "tags": ["Interaction Design", "Enterprise UX"],
            "link": "case-study-wes-redesign.html",
            "image": "assets/9e5c9ce58f92fcf33dff7ca8800befd4fcca8371.png"
        },
        {
            "id": 4,
            "title": "andwemet — Dating App Redesign",
            "description": "Redesigned the dashboard and enhanced the UX/UI for andwemet dating app. Focused on creating an intuitive dashboard that provides users with a global overview and easy access to key features and information.",
            "tags": ["Product Design", "Consumer UX"],
            "link": "https://www.behance.net/gallery/137446671/Redesigning-the-User-dashboard-for-andwemet",
            "image": "assets/87d249f923ad0eae4c34c69a356affb48c2e12f3.png"
        },
        {
            "id": 5,
            "title": "R Store — App Store for University Developers",
            "description": "Designed a centralized platform for student developers to publish, discover, and manage small scale apps.",
            "tags": ["Platform Design", "Systems", "Developer Tools"],
            "link": "https://somagorai.medium.com/designing-rstore-for-channeli-d4b52f7e462a",
            "image": "assets/0f28c8fda4629ddf29a5cc50b5a56361b13ec511.png"
        }
    ]
    
    for item in secondary_data:
        secondary_projects_rows += f"""
        <div class="table-row secondary-project-row" data-link="{item["link"]}">
          <div class="row-content">
            <div class="thumbnail-container mini">
              <img src="{item["image"]}" alt="{item["title"]}" class="row-image">
            </div>
            <div class="title-column">
              <a href="{item["link"]}" class="project-title-link secondary-link">
                <h3>{item["title"]}</h3>
                <span class="title-underline"></span>
              </a>
              <span class="arrow-icon">&#8599;</span>
            </div>
            <div class="desc-column">
              <p>{item["description"]}</p>
            </div>
          </div>
        </div>\n"""

    # Explorations Cards Grid Content
    explorations_cards = ""
    explorations_data = [
        {
            "id": 1,
            "title": "Patronus",
            "description": "Safety app for women in emergencies",
            "image": "assets/f82c750cdb4506633c5b1899caa9e178a64df8d4.png",
            "tags": ["Social Impact", "Product Design"],
            "accentColor": "#FFB5B5",
            "link": "https://somagorai.medium.com/patronus-cec5abaf7e30"
        },
        {
            "id": 2,
            "title": "WhatsApp Marketplace",
            "description": "Exploring ways to bring neighborhood stores to WhatsApp",
            "image": "assets/9430c9f8e66b1e7546b24a99c8687a1fdc9863a2.png",
            "tags": ["Social Commerce", "Mobile UX"],
            "accentColor": "#A8F0C4",
            "link": "https://www.behance.net/gallery/137906089/Case-Study-Rethinking-WhatsApp-Business"
        },
        {
            "id": 3,
            "title": "A Living City",
            "description": "Role of politics, capitalism in determining how we live",
            "image": "assets/3cc07253aa4d70e51e0fe2f85e14c865d940e797.png",
            "tags": ["Systems Thinking", "Architecture"],
            "accentColor": "#9BD0FF",
            "link": "https://www.behance.net/gallery/243356443/A-Living-City"
        },
        {
            "id": 4,
            "title": "Flying Saucer",
            "description": "What will \"home\" be in 2500?",
            "image": "assets/ba287376c419d92e997159257d087b70b1eabfe9.png",
            "tags": ["Architecture", "Exploratory"],
            "accentColor": "#FFE24A",
            "link": "https://www.behance.net/gallery/136269837/Living-in-Future"
        }
    ]
    
    for exploration in explorations_data:
        tags_html = "".join([f'<span class="tag">{tag}</span>' for tag in exploration["tags"]])
        explorations_cards += f"""
        <div class="exploration-card" data-link="{exploration["link"]}">
          <div class="card-image-wrapper">
            <div class="card-accent-bar" style="background: {exploration["accentColor"]};"></div>
            <img src="{exploration["image"]}" alt="{exploration["title"]}" class="card-image">
          </div>
          <div class="card-content">
            <h3>{exploration["title"]}</h3>
            <p>{exploration["description"]}</p>
            <div class="tags-flex">{tags_html}</div>
          </div>
        </div>\n"""

    html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soma Gorai — Interaction Designer Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Global Cursor-Following Tooltip -->
  <div id="custom-tooltip" class="custom-tooltip"></div>

  <!-- Scroll Animation Track (z-index: 10) -->
  <div id="scroll-track" class="scroll-track">
    <div class="sticky-viewport">
      
      <!-- Single Baseline SVG Container (z-index: 10) -->
      <div id="cat-svg-container" class="cat-svg-container active">
        {svg1}
      </div>
      
      <!-- Second Section (Revealed via circular wipe collapse, z-index: 20) -->
      <section id="section-2" class="next-section">
        <div class="container-editorial">
          <div class="next-section-text-block">
            <span class="kicker">Chapter Two</span>
            <h2 class="next-title">A New Dimension</h2>
            <p class="next-description">
              Welcome to the other side. By letting curiosity swallow the canvas, you have unlocked our creative playground. Here we combine visual art, programming, and interactive engineering to create premium web experiences.
            </p>
            <a href="#" class="cta-button">Explore Projects</a>
          </div>
        </div>
      </section>

      <!-- Physical Transition Circle Overlay (Wipe Collapse, z-index: 30) -->
      <div id="transition-curtain" class="transition-curtain"></div>

      <!-- Foreground Hero Text Block (z-index: 40) -->
      <div class="hero-content-wrapper">
        <div class="container-editorial">
          <div class="hero-text-block">
            <h1 class="hero-title">Hi, I am <span class="text-rust">Soma</span></h1>
            <p class="hero-description">
              I am a UX designer with a cat
            </p>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-indicator-line"></div>
        <span>Scroll Down</span>
      </div>
      
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
"""
    
    final_html = html_template.format(
        svg1=svg1
    )
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(final_html)
    print("Generated index.html successfully.")
    
    # Compile case study pages
    src_dir = "../Portfolio-Latest/src/pages"
    dest_dir = "."
    compile_case_studies(src_dir, dest_dir)
    print("Success: Compiled entire portfolio site!")

if __name__ == "__main__":
    main()
