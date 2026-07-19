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
            "title": "Project Alpha",
            "role": "Lead UI/UX Designer",
            "year": "2025",
            "tags": ["SaaS", "Dashboard", "B2B"],
            "synopsis": "A next-generation SaaS dashboard designed to simplify multi-tenant operations and monitoring.",
            "problem": "Users struggled to correlate metrics from disparate database instances, leading to slow incident response times.",
            "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
        },
        {
            "id": 2,
            "title": "Project Beta",
            "role": "Interaction Engineer",
            "year": "2024",
            "tags": ["Fintech", "Real-time", "Data Viz"],
            "synopsis": "An interactive, web-based tool for visualizing real-time financial market swings and order books.",
            "problem": "Traditional graphs lagged when handling high-frequency tick data, causing visualization delay for day traders.",
            "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"
        },
        {
            "id": 3,
            "title": "Project Gamma",
            "role": "Design Systems Lead",
            "year": "2024",
            "tags": ["Systems", "Mobile", "Web"],
            "synopsis": "Building a multi-theme component library to align consumer-facing platforms across web and mobile web.",
            "problem": "Fragmented component definitions led to excessive design debt and high build payload sizes.",
            "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
        },
        {
            "id": 4,
            "title": "Project Delta",
            "role": "UX Researcher",
            "year": "2023",
            "tags": ["E-commerce", "Research", "Checkout"],
            "synopsis": "An in-depth study of friction points in digital checkout flows for regional e-commerce products.",
            "problem": "High drop-off rates at payment gateways due to misleading layout indicators and lack of localization options.",
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
        }
    ]
    
    for project in projects_data:
        main_projects_rows += f"""
        <div class="morph-row" data-id="{project["id"]}">
          <!-- DEFAULT STATE ELEMENTS (5 COLUMNS) -->
          <div class="morph-col morph-img-col">
            <div class="morph-thumbnail">
              <img src="{project["image"]}" alt="{project["title"]}">
              <div class="morph-expand-cue">
                <span class="cue-plus">+</span>
                <span class="cue-text">View Project</span>
              </div>
            </div>
          </div>
          
          <div class="morph-col morph-title-col">
            <h3>{project["title"]}</h3>
          </div>
          
          <div class="morph-col morph-role-col">
            <span class="morph-role-text">{project["role"]}</span>
          </div>
          
          <div class="morph-col morph-tags-col">
            {"".join([f'<span class="morph-tag">{tag}</span>' for tag in project["tags"]])}
          </div>

          <div class="morph-col morph-year-col">
            <span class="morph-year-text">{project["year"]}</span>
          </div>

          <div class="morph-col morph-button-col">
            <button class="cta-button morph-row-btn" data-id="{project["id"]}">&rarr;</button>
          </div>
          
          <!-- EXPANDED STATE PANEL (2 COLUMNS INTERACTION) -->
          <button class="morph-close-btn" aria-label="Close">&times;</button>
          <div class="morph-details-panel">
            <div class="morph-details-content">
              <div class="morph-meta-header">
                <span class="morph-role-label">{project["role"]}</span>
                <span class="meta-separator">•</span>
                <span class="morph-year-label">{project["year"]}</span>
              </div>
              
              <h2>{project["title"]}</h2>
              
              <div class="morph-detail-section">
                <span class="section-label">Synopsis</span>
                <p class="section-desc">{project["synopsis"]}</p>
              </div>

              <div class="morph-detail-section">
                <span class="section-label">Problem Statement</span>
                <p class="section-desc">{project["problem"]}</p>
              </div>
              
              <div class="morph-link-wrapper">
                <span class="placeholder-link-btn">
                  Case Study Link (Placeholder)
                </span>
              </div>
            </div>
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

  <!-- Top Navigation Bar -->
  <nav class="top-nav-bar">
    <div class="nav-container">
      <div class="nav-left">
        <a href="/" class="nav-logo-link">
          <svg class="nav-logo-svg" viewBox="0 0 371 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M222.721 124.038V167.901H208.856V124.038H222.721Z" fill="#D84500"/>
            <path d="M148.636 145.893C148.636 141.386 149.501 137.429 151.23 134.023C153.014 130.617 155.42 127.997 158.447 126.162C161.474 124.328 164.852 123.411 168.582 123.411C171.771 123.411 174.555 124.04 176.933 125.298C179.366 126.555 181.231 128.206 182.528 130.25V124.04H196.393V167.903H182.528V161.693C181.177 163.736 179.285 165.387 176.852 166.645C174.474 167.903 171.69 168.531 168.501 168.531C164.825 168.531 161.474 167.614 158.447 165.78C155.42 163.894 153.014 161.247 151.23 157.841C149.501 154.382 148.636 150.399 148.636 145.893ZM182.528 145.971C182.528 142.617 181.555 139.971 179.609 138.032C177.717 136.093 175.393 135.124 172.636 135.124C169.879 135.124 167.528 136.093 165.582 138.032C163.69 139.919 162.744 142.539 162.744 145.893C162.744 149.247 163.69 151.919 165.582 153.911C167.528 155.85 169.879 156.819 172.636 156.819C175.393 156.819 177.717 155.85 179.609 153.911C181.555 151.972 182.528 149.325 182.528 145.971Z" fill="#D84500"/>
            <path d="M128.141 131.354C129.763 128.944 131.79 127.057 134.222 125.695C136.655 124.28 139.358 123.572 142.331 123.572V137.8H138.52C135.06 137.8 132.466 138.534 130.736 140.001C129.006 141.416 128.141 143.931 128.141 147.547V167.906H114.276V124.044H128.141V131.354Z" fill="#D84500"/>
            <path d="M80.8096 168.531C76.3771 168.531 72.3771 167.614 68.8095 165.78C65.2959 163.946 62.5121 161.326 60.458 157.919C58.458 154.513 57.458 150.53 57.458 145.971C57.458 141.464 58.4851 137.508 60.5391 134.102C62.5932 130.643 65.404 127.997 68.9716 126.162C72.5392 124.328 76.5393 123.411 80.9717 123.411C85.4042 123.411 89.4042 124.328 92.9718 126.162C96.5394 127.997 99.3503 130.643 101.404 134.102C103.458 137.508 104.485 141.464 104.485 145.971C104.485 150.478 103.431 154.461 101.323 157.919C99.2692 161.326 96.4313 163.946 92.8097 165.78C89.2421 167.614 85.242 168.531 80.8096 168.531ZM80.8096 156.898C83.4582 156.898 85.7015 155.954 87.5394 154.068C89.4313 152.181 90.3772 149.482 90.3772 145.971C90.3772 142.46 89.4583 139.761 87.6204 137.875C85.8366 135.988 83.6204 135.045 80.9717 135.045C78.269 135.045 76.0257 135.988 74.2419 137.875C72.4581 139.709 71.5662 142.408 71.5662 145.971C71.5662 149.482 72.4311 152.181 74.1609 154.068C75.9447 155.954 78.1609 156.898 80.8096 156.898Z" fill="#D84500"/>
            <path d="M19.9461 123.411C23.1354 123.411 25.9191 124.04 28.2975 125.298C30.73 126.555 32.5949 128.206 33.8922 130.25V124.04H47.7572V167.824C47.7572 171.859 46.9193 175.501 45.2436 178.75C43.622 182.052 41.1085 184.672 37.703 186.611C34.3517 188.55 30.1624 189.519 25.1354 189.519C18.4326 189.519 13.0001 187.973 8.83793 184.882C4.67573 181.842 2.29734 177.702 1.70274 172.462H15.4056C15.838 174.139 16.865 175.449 18.4866 176.392C20.1083 177.388 22.1083 177.886 24.4867 177.886C27.3516 177.886 29.6219 177.073 31.2976 175.449C33.0273 173.877 33.8922 171.335 33.8922 167.824V161.614C32.5408 163.658 30.6759 165.335 28.2975 166.645C25.9191 167.903 23.1354 168.531 19.9461 168.531C16.2164 168.531 12.8379 167.614 9.81089 165.78C6.78384 163.894 4.37843 161.247 2.59464 157.841C0.86489 154.382 0 150.399 0 145.893C0 141.386 0.86489 137.429 2.59464 134.023C4.37843 130.617 6.78384 127.997 9.81089 126.162C12.8379 124.328 16.2164 123.411 19.9461 123.411ZM33.8922 145.971C33.8922 142.617 32.9192 139.971 30.9733 138.032C29.0814 136.093 26.757 135.124 24.0002 135.124C21.2434 135.124 18.8921 136.093 16.9461 138.032C15.0542 139.919 14.1082 142.539 14.1082 145.893C14.1082 149.247 15.0542 151.919 16.9461 153.911C18.8921 155.85 21.2434 156.819 24.0002 156.819C26.757 156.819 29.0814 155.85 30.9733 153.911C32.9192 151.972 33.8922 149.325 33.8922 145.971Z" fill="#D84500"/>
            <path d="M177.02 88.1153C177.02 83.6085 177.858 79.652 179.535 76.2457C181.264 72.8394 183.596 70.2192 186.531 68.385C189.466 66.5509 192.741 65.6338 196.357 65.6338C199.449 65.6338 202.147 66.2626 204.453 67.5204C206.811 68.7781 208.619 70.4288 209.877 72.4726V66.2626H223.319V110.125H209.877V103.915C208.567 105.959 206.733 107.61 204.375 108.868C202.069 110.125 199.37 110.754 196.278 110.754C192.715 110.754 189.466 109.837 186.531 108.003C183.596 106.116 181.264 103.47 179.535 100.064C177.858 96.6049 177.02 92.6221 177.02 88.1153ZM209.877 88.1939C209.877 84.84 208.934 82.1936 207.047 80.2546C205.213 78.3157 202.96 77.3462 200.287 77.3462C197.614 77.3462 195.335 78.3157 193.448 80.2546C191.614 82.1412 190.697 84.7614 190.697 88.1153C190.697 91.4692 191.614 94.1418 193.448 96.1332C195.335 98.0722 197.614 99.0417 200.287 99.0417C202.96 99.0417 205.213 98.0722 207.047 96.1332C208.934 94.1942 209.877 91.5478 209.877 88.1939Z" fill="#013C42"/>
            <path d="M152.626 65.793C158.076 65.793 162.4 67.4437 165.596 70.7452C168.845 74.0467 170.47 78.6321 170.47 84.5014V110.127H157.107V86.3093C157.107 83.4795 156.347 81.3047 154.827 79.785C153.36 78.2128 151.316 77.4268 148.696 77.4268C146.076 77.4268 144.006 78.2128 142.486 79.785C141.019 81.3047 140.285 83.4795 140.285 86.3093V110.127H126.922V86.3093C126.922 83.4795 126.162 81.3047 124.642 79.785C123.175 78.2128 121.131 77.4268 118.511 77.4268C115.891 77.4268 113.821 78.2128 112.301 79.785C110.834 81.3047 110.1 83.4795 110.1 86.3093V110.127H96.6582V66.2646H110.1V71.7671C111.462 69.9329 113.244 68.4918 115.445 67.4437C117.646 66.3432 120.135 65.793 122.913 65.793C126.214 65.793 129.149 66.5004 131.717 67.9154C134.337 69.3303 136.381 71.3478 137.848 73.9681C139.368 71.5575 141.438 69.5923 144.058 68.0726C146.678 66.5528 149.534 65.793 152.626 65.793Z" fill="#013C42"/>
            <path d="M67.1563 110.754C62.8592 110.754 58.9812 109.837 55.5225 108.003C52.1162 106.169 49.4174 103.548 47.426 100.142C45.4871 96.7359 44.5176 92.7531 44.5176 88.1939C44.5176 83.6871 45.5133 79.7306 47.5046 76.3243C49.496 72.8656 52.221 70.2192 55.6797 68.385C59.1384 66.5509 63.0164 65.6338 67.3135 65.6338C71.6107 65.6338 75.4886 66.5509 78.9473 68.385C82.406 70.2192 85.1311 72.8656 87.1224 76.3243C89.1138 79.7306 90.1095 83.6871 90.1095 88.1939C90.1095 92.7007 89.0876 96.6835 87.0438 100.142C85.0525 103.548 82.3012 106.169 78.7901 108.003C75.3314 109.837 71.4535 110.754 67.1563 110.754ZM67.1563 99.1203C69.7241 99.1203 71.8989 98.177 73.6807 96.2904C75.5148 94.4039 76.4319 91.705 76.4319 88.1939C76.4319 84.6828 75.541 81.984 73.7593 80.0974C72.0299 78.2109 69.8814 77.2676 67.3135 77.2676C64.6933 77.2676 62.5185 78.2109 60.7892 80.0974C59.0598 81.9316 58.1952 84.6304 58.1952 88.1939C58.1952 91.705 59.0336 94.4039 60.7106 96.2904C62.4399 98.177 64.5885 99.1203 67.1563 99.1203Z" fill="#013C42"/>
            <path d="M20.2019 110.754C16.3764 110.754 12.9701 110.099 9.98306 108.789C6.996 107.479 4.6378 105.697 2.90845 103.444C1.1791 101.138 0.209618 98.57 0 95.7402H13.2845C13.4418 97.2599 14.1492 98.4914 15.4069 99.4347C16.6646 100.378 18.2106 100.85 20.0447 100.85C21.7217 100.85 23.0056 100.535 23.8965 99.9063C24.8397 99.2251 25.3114 98.3604 25.3114 97.3123C25.3114 96.0546 24.6563 95.1375 23.3462 94.5611C22.0361 93.9322 19.9137 93.251 16.9791 92.5173C13.8348 91.7836 11.2146 91.0238 9.11838 90.2377C7.0222 89.3992 5.21425 88.1153 3.69452 86.386C2.17479 84.6042 1.41492 82.2198 1.41492 79.2328C1.41492 76.7173 2.09618 74.4377 3.4587 72.394C4.87362 70.2978 6.9174 68.647 9.59003 67.4417C12.3151 66.2364 15.5379 65.6338 19.2587 65.6338C24.7611 65.6338 29.0845 66.9963 32.2288 69.7213C35.4254 72.4464 37.2596 76.0623 37.7312 80.5691H25.3114C25.1018 79.0493 24.4205 77.844 23.2676 76.9532C22.1671 76.0623 20.6998 75.6168 18.8656 75.6168C17.2935 75.6168 16.0882 75.9313 15.2497 76.5601C14.4112 77.1366 13.992 77.9488 13.992 78.9969C13.992 80.2546 14.6471 81.1979 15.9572 81.8268C17.3197 82.4556 19.4159 83.0845 22.2457 83.7133C25.4948 84.5518 28.1412 85.3903 30.185 86.2288C32.2288 87.0148 34.0105 88.3249 35.5303 90.1591C37.1024 91.9408 37.9147 94.3515 37.9671 97.3909C37.9671 99.9587 37.2334 102.265 35.7661 104.308C34.3512 106.3 32.2812 107.872 29.5561 109.025C26.8835 110.178 23.7654 110.754 20.2019 110.754Z" fill="#013C42"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M265.553 1.37757C265.341 2.06557 264.912 11.7026 264.6 22.7936C263.899 47.6956 264.865 50.8106 275.576 58.1796L280 61.2236V69.1166V77.0106L273.789 80.3186C250.259 92.8526 241.754 111.992 239.543 157.378L239.019 168.128H252.118H265.217L264.561 165.378C264.2 163.865 263.648 161.728 263.334 160.628C262.836 158.886 263.132 158.967 265.631 161.264C277.371 172.05 295.747 167.717 300.117 153.133C302.358 145.653 305.864 145.432 307.794 152.648C312.882 171.672 339.843 172.267 346.531 153.503C347.718 150.173 347.918 149.995 347.956 152.242C348.005 155.163 346.501 163.689 345.462 166.378C344.84 167.99 345.814 168.128 357.782 168.128H370.779L370.35 159.378C368.614 123.902 363.952 106.071 353.304 94.1796L349.321 89.7316L352.406 85.3536C356.845 79.0566 357.264 68.9216 353.601 56.4716C348.809 40.1826 351.114 29.1276 359.301 29.1276C364.412 29.1276 365.381 23.9836 360.611 22.1696C346.532 16.8176 338.893 36.6566 346.05 59.9826C348.263 67.1956 348.561 75.4716 346.735 79.0486C345.298 81.8656 343 82.9596 343 80.8266C343 76.7896 334.766 63.2086 328.961 57.6716L322.869 51.8606L324.908 47.1206C326.811 42.6966 326.906 41.0566 326.337 22.5046C325.542 -3.43043 324.835 -4.29443 313.633 6.99357L306.819 13.8596L295.436 13.7436L284.053 13.6276L277.252 6.87757C270.654 0.329567 266.479 -1.63243 265.553 1.37757ZM287.171 30.7826C289.45 32.8446 289.542 37.8716 287.345 40.2986C283.658 44.3736 275 41.2536 275 35.8506C275 29.9176 282.682 26.7196 287.171 30.7826ZM313.429 30.6986C319.42 36.6906 310.116 46.1626 303.829 40.4726C299.45 36.5096 302.49 29.1276 308.5 29.1276C310.346 29.1276 312.564 29.8346 313.429 30.6986ZM280 35.6276C280 36.4606 280.889 37.1276 282 37.1276C283.111 37.1276 284 36.4606 284 35.6276C284 34.7946 283.111 34.1276 282 34.1276C280.889 34.1276 280 34.7946 280 35.6276ZM307 35.6276C307 36.4526 307.675 37.1276 308.5 37.1276C309.325 37.1276 310 36.4526 310 35.6276C310 34.8026 309.325 34.1276 308.5 34.1276C307.675 34.1276 307 34.8026 307 35.6276ZM298.874 42.4756C299.728 43.5046 299.519 44.2526 297.992 45.6346C294.831 48.4956 288.692 44.7686 291.667 41.7946C292.841 40.6206 297.717 41.0816 298.874 42.4756ZM326.482 115.102C329.478 119.425 337.28 125.064 343.172 127.164C346.703 128.423 346.87 128.698 347.527 134.362C348.126 139.52 347.394 143.447 346.359 140.628C340.762 125.381 318.502 123.162 310 137.004C306.401 142.864 301.806 142.804 297.475 136.84C293.65 131.572 289.096 128.489 283.828 127.599L279.703 126.902L288.101 124.183C302.495 119.524 310.742 114.275 316.7 105.983L320.374 100.869L322.042 105.985C322.959 108.799 324.957 112.902 326.482 115.102ZM269.317 131.013C267.126 132.6 264.4 135.181 263.258 136.748L261.183 139.597L261.972 135.282C262.879 130.323 263.547 129.468 267 128.849C272.941 127.783 273.306 128.124 269.317 131.013ZM290.028 137.655C301.646 148.786 288.415 166.482 273.981 159.118C264.931 154.501 264.548 141.526 273.299 136.028C278.056 133.039 286.018 133.813 290.028 137.655ZM333.938 135.955C343.579 141.126 342.941 154.447 332.8 159.723C322.835 164.907 311.038 155.127 313.998 144.136C316.298 135.593 325.911 131.65 333.938 135.955ZM278.2 145.328C275.535 147.993 278.069 153.128 282.048 153.128C284.926 153.128 287.423 148.787 286.036 146.195C284.795 143.876 280.165 143.363 278.2 145.328ZM322.2 145.328C319.535 147.993 322.069 153.128 326.048 153.128C328.926 153.128 331.423 148.787 330.036 146.195C328.795 143.876 324.165 143.363 322.2 145.328ZM257.403 152.878C257.776 156.591 258.356 161.381 258.692 163.524C259.301 167.412 259.296 167.419 256.407 166.694C245.925 164.063 243.739 146.128 253.901 146.128C256.652 146.128 256.741 146.299 257.403 152.878ZM360.646 148.683C365.754 153.791 359.816 167.128 352.434 167.128C350.354 167.128 350.338 167 351.62 160.378C352.339 156.665 352.943 151.941 352.963 149.878C353.009 145.196 356.6 144.638 360.646 148.683ZM297.601 162.965C296.419 164.877 300.133 168.128 303.5 168.128C305.838 168.128 307.356 167.458 308.402 165.965C310.563 162.879 309.605 162.128 303.5 162.128C300.54 162.128 297.885 162.505 297.601 162.965Z" fill="#2F2E1B"/>
          </svg>
        </a>
      </div>
      <div class="nav-right">
        <div class="nav-links">
          <a href="/work" class="nav-item">Work</a>
          <a href="#about" class="nav-item">About me</a>
          <a href="#resume" class="nav-item">Resume</a>
        </div>
        <span class="nav-divider">|</span>
        <div class="nav-socials">
          <span class="nav-say-hi">Say Hi!</span>
          <a href="https://linkedin.com/in/somagorai" target="_blank" class="social-icon-link" aria-label="LinkedIn">
            <svg class="social-icon" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="mailto:soma.gorai@outlook.com" class="social-icon-link" aria-label="Email">
            <svg class="social-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </nav>

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
        <div class="portfolio-container">
          <section id="work-section" class="portfolio-section">
            <div class="container-portfolio">
              <h2 class="section-header">Case Studies</h2>
              <div class="morph-table">
                {main_projects_rows}
              </div>
            </div>
          </section>
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
      
      <!-- Removed Scroll Indicator per feedback -->
      
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
"""
    
    final_html = html_template.format(
        svg1=svg1,
        main_projects_rows=main_projects_rows
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
