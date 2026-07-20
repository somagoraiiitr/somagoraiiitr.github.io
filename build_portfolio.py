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
                <span class="material-symbols-outlined cue-plus">add</span>
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
            <button class="cta-button morph-row-btn" data-id="{project["id"]}"><span class="material-symbols-outlined">arrow_forward</span></button>
          </div>
          
          <!-- EXPANDED STATE PANEL -->
          <button class="morph-close-btn" aria-label="Close"><span class="material-symbols-outlined">close</span></button>
          <div class="morph-details-panel">
            <div class="morph-details-content">
              <div class="morph-card-subtext">{project["role"]}  ·  {project["year"]}</div>
              <h2 class="morph-card-header">{project["title"]}</h2>
              <div class="morph-card-tags">
                {"".join([f'<span class="morph-card-tag">{tag}</span>' for tag in project["tags"]])}
              </div>
              <div class="morph-card-body">
                <p>{project["synopsis"]}</p>
              </div>
              <div class="morph-card-divider"></div>
              <div class="morph-card-body">
                <div class="morph-card-label">Problem</div>
                <p>{project["problem"]}</p>
              </div>
              <div class="morph-card-action">
                <a href="#" class="morph-card-link">
                  <span>View Case Study</span>
                  <span class="material-symbols-outlined morph-card-link-icon">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>\n"""

    html_template = open("templates/index.html", "r", encoding="utf-8").read()
    
    final_html = html_template.format(
        svg1=svg1,
        main_projects_rows=main_projects_rows
    )
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(final_html)
    print("Generated index.html successfully.")
    
    print("Success: Compiled entire portfolio site!")

if __name__ == "__main__":
    main()
