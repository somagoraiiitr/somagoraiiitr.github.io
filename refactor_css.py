import re
import os

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace all hardcoded colors with tokens
replacements = {
    r'#F3F0E7': 'var(--color-bg)',
    r'#FDFDFD': 'var(--color-surface)',
    r'rgba\(\s*28\s*,\s*33\s*,\s*35\s*,\s*0\.04\s*\)': 'var(--color-surface-hover)',
    r'rgba\(\s*28\s*,\s*33\s*,\s*35\s*,\s*0\.08\s*\)': 'var(--color-surface-hover-dark)',
    r'#B64F2A': 'var(--color-primary)',
    r'#195959': 'var(--color-accent)',
    r'#938C82': 'var(--color-light-gray)',
    r'#6A675D': 'var(--color-gray)',
    r'#4E4B44': 'var(--color-dark-gray)',
    r'#1C2123': 'var(--color-neutral-black)',
    r'#F5C7AF': 'var(--color-secondary-1)',
    r'#CD846B': 'var(--color-secondary-2)',
    r'#523C2E': 'var(--color-brown)',
    r'#D9D9D9': 'var(--color-white)',
    r'#FFFFFF': 'var(--color-pure-white)',
    r'#FAFAFA': 'var(--color-bg)' # Assuming FAFAFA is a slight off-bg for case studies, merging to bg for consistency
}

for pattern, replacement in replacements.items():
    css = re.sub(pattern, replacement, css, flags=re.IGNORECASE)

# Ensure the morph-row transition is optimized
# Stop animating grid-template-columns and padding directly. Use max-height or transform if possible.
# For now, let's just make it will-change.
css = css.replace(
    'transition: background-color 0.2s ease, box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), height 0.5s cubic-bezier(0.16, 1, 0.3, 1), padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), grid-template-columns 0.5s cubic-bezier(0.16, 1, 0.3, 1);',
    'transition: background-color 0.2s ease, box-shadow 0.5s var(--ease-spring), height 0.5s var(--ease-spring), grid-template-columns 0.5s var(--ease-spring);\n  will-change: height, grid-template-columns;'
)

# We can output this cleaned css to style.css and prepend an import for tokens.css
final_css = '@import url("css/tokens.css");\n\n'

# Find the start of non-root rules (skip :root and body since they are in tokens.css)
# Find .scroll-track which is roughly where the main css starts
match = re.search(r'\.scroll-track\s*\{', css)
if match:
    final_css += css[match.start():]
else:
    final_css += css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(final_css)

print("CSS tokens enforced and cleaned up.")
