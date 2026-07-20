import re

with open('build_portfolio.py', 'r') as f:
    content = f.read()

# Replace case_study_template
case_study_pattern = r'case_study_template\s*=\s*"""(.*?)"""'
content = re.sub(case_study_pattern, 'case_study_template = open("templates/case_study.html", "r", encoding="utf-8").read()', content, flags=re.DOTALL)

# Replace html_template
html_template_pattern = r'html_template\s*=\s*"""(.*?)"""'
content = re.sub(html_template_pattern, 'html_template = open("templates/index.html", "r", encoding="utf-8").read()', content, flags=re.DOTALL)

with open('build_portfolio.py', 'w') as f:
    f.write(content)

print("Successfully refactored build_portfolio.py")
