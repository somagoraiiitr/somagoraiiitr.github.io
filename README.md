# somagorai-portfolio

Steps to deploy

1. Make changes to /src folder or if using Figma Make then replace the with the new /src folder

2. Make changes to dependencies in package.json if newer libraries or versions are used

3. Update the 'deploy' script in package.json if required (if cname changed)

4. Update the 'resolve' section in vite.config.ts

5. Push this latest version to main branch in git remote

6. Run 'npm run deploy' locally, the build files will be then pushed to the git branch 'gh-pages' which should be configured to host the github pages from.