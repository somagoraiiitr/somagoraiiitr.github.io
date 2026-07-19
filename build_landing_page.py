import xml.etree.ElementTree as ET

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
        print("Root group <g> not found in SVG. Wrapping children in <g id='cat-g-1'>...")
        g_element = ET.Element('{http://www.w3.org/2000/svg}g', attrib={'id': 'cat-g-1'})
        
        children_to_move = []
        rect_background = None
        defs_element = None
        
        # Identify children to move
        for child in list(root):
            tag_local = child.tag.split('}')[-1]
            if tag_local == 'defs':
                defs_element = child
            elif tag_local == 'rect' and rect_background is None:
                rect_background = child # Keep first rect outside group as fixed background
            else:
                children_to_move.append(child)
                root.remove(child)
                
        # Append moved children to group
        for child in children_to_move:
            g_element.append(child)
            
        # Append group back to root
        root.append(g_element)
        
        # Ensure defs is kept at the root level if present
        if defs_element is not None:
            root.remove(defs_element)
            root.append(defs_element)
        print("Successfully wrapped cat vectors inside <g id='cat-g-1'>")
    else:
        g_element.attrib['id'] = 'cat-g-1'
        print("Using existing root group <g> and setting id='cat-g-1'")
        
    # 3. Find and target specific paths by original index BEFORE reordering
    g_children = list(g_element)
    print(f"Total children inside group: {len(g_children)}")
    
    if len(g_children) > 109:
        path102 = g_children[102]
        path103 = g_children[103]
        path104 = g_children[104]
        path105 = g_children[105]
        path106 = g_children[106]
        path107 = g_children[107]
        path108 = g_children[108]
        path109 = g_children[109]
        
        # Tag elements with their respective IDs
        path104.attrib['id'] = 'cat-eye-left'
        path107.attrib['id'] = 'cat-tooth-left'
        path103.attrib['id'] = 'cat-eye-right'
        path108.attrib['id'] = 'cat-tooth-right'
        path105.attrib['id'] = 'cat-mouth'
        path106.attrib['id'] = 'cat-tongue'
        path109.attrib['id'] = 'cat-mouth-detail-1'
        path102.attrib['id'] = 'cat-mouth-detail-2'
        
        print("Successfully tagged all face elements with IDs")
        
        # 4. Re-order snout lines (Path 102 and Path 109) in the XML document list
        # We push them to be rendered BEFORE Path 105 (mouth), so the expanding mouth naturally covers them
        g_children.remove(path102)
        g_children.remove(path109)
        
        # Insert them right before Path 105
        idx_105 = g_children.index(path105)
        g_children.insert(idx_105, path102)
        g_children.insert(idx_105, path109)
        
        # Re-apply children to g_element in the new ordering
        del g_element[:]
        for child in g_children:
            g_element.append(child)
        print("Re-ordered layers: Pushed snout paths 102 and 109 behind mouth path 105 in XML tree!")
    else:
        print("Error: Too few paths in SVG!")
        return None

    
    # 5. Transition circle is now handled entirely as an HTML element for seamless visual transitions.
    print("Transition circle handled in HTML, skipping SVG circle append")
    
    # Convert back to string
    svg_str = ET.tostring(root, encoding='utf-8').decode('utf-8')
    if svg_str.startswith("<?xml"):
        svg_str = svg_str[svg_str.find(">")+1:]
        
    # Replace hex codes with CSS variables
    import re
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
    }
    for hex_val, var_val in replacements.items():
        pattern = re.compile(re.escape(hex_val), re.IGNORECASE)
        svg_str = pattern.sub(var_val, svg_str)
        
    return svg_str

def main():
    print("Loading and preparing single 1_5.svg baseline...")
    svg1 = prepare_svg("1_5.svg")
    if not svg1:
        print("Build failed!")
        return
        
    html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Curiosity - Programmatic SVG Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

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
            <h1 class="hero-title">Hi, I am Soma</h1>
            <p class="hero-description">
              I am a UX designer with a cat
            </p>
            <a href="#" class="cta-button">Scroll to Begin</a>
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
    
    final_html = html_template.format(svg1=svg1)
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(final_html)
        
    print("Success: Generated index.html with single-SVG system!")

if __name__ == "__main__":
    main()
