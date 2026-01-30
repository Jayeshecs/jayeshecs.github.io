# Copilot Instructions for jayeshecs.github.io

## Project Overview
Personal portfolio/resume website hosted on GitHub Pages featuring multiple profile views and a utility application (Muster) for analyzing Windows Event Viewer logs.

## Architecture

### Main Components
- **Root HTML files**: Resume/CV pages with different professional profiles
  - `index.html` - Java Architect profile
  - `profile-strategic-leader.html` - Strategic Technology Leader profile
- **Muster Application** (`muster/`): Standalone utility for parsing Windows logon/logoff events from CSV exports
- **Theming System**: 7 color variants of the Pillar Bootstrap theme (pillar-1 through pillar-7)

## Key Patterns & Conventions

### HTML Structure
- All HTML pages use Bootstrap 4 grid system
- Standard pattern: `resume-wrapper` → `resume-wrapper-inner` → sections
- Dynamic year calculation via inline JavaScript: `yearExp` element computed as `new Date().getFullYear() - 2020`
- External CDN resources for Bootstrap, jQuery, FontAwesome

### SCSS Theme Variants
The project uses 7 theme color schemes via separate SCSS files (`pillar-1.scss` through `pillar-7.scss`):
- Each defines `$theme-color-primary` with different hex colors
- pillar-1: `#434E5E` (gray-blue)
- pillar-2: `#3582C4` (blue)
- pillar-3: `#22A162` (green)
- Variants 4-7 follow similar pattern
- Compiled CSS output: `assets/css/pillar-{1-7}.css`
- Change theme by updating `<link id="theme-style">` href in HTML

### Muster Application
- RequireJS module pattern for JavaScript organization
- File processing using `filereader.js` library for CSV parsing
- Entry point: `muster.js` with `Muster` constructor prototype pattern
- Expects Windows Event Viewer CSV exports with logon/logoff events

## Development Workflow

### SCSS Compilation
The SCSS files use CodeKit for compilation (see `config.codekit3` files). To modify themes:
1. Edit relevant `assets/scss/pillar-{N}.scss` file
2. Compile to corresponding `assets/css/pillar-{N}.css`
3. Bootstrap SCSS is embedded at `assets/scss/bootstrap/`

### PDF Generation
To update resume PDF (per [ReadMe.txt](ReadMe.txt)):
1. Visit https://www.sejda.com/html-to-pdf
2. Convert https://jayeshecs.github.io to PDF
3. Save as `assets/pdf/Resume - Jayesh PRAJAPATI.pdf`

### File Organization
- `/assets/images/DCIM/` - image storage
- `/assets/pdf/` - downloadable PDF resumes
- `/lib/` - third-party JavaScript libraries (RequireJS, FileReader.js)

## External Dependencies
- Bootstrap 4.x (via CDN)
- jQuery 3.4.1 (via CDN)
- FontAwesome 5.1.1 (via CDN)
- Google Fonts (Roboto)
- Google AdSense integration (ca-pub-3974814253789170)

## Important Conventions
- Body background: `cornsilk` color
- Max content width: `1280px` (via `.resume-wrapper-inner`)
- Resume export links follow pattern: `{service}.jayeshprajapati.in`
- All external profile links open in new tabs (`target="_blank"`)
