# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with Vite, React, TypeScript, and Tailwind CSS
- Basic components structure:
  - Header
  - Footer
  - Hero
  - QuestionForm
  - Modals (Success and UserInfo)
  - Trust Indicators
- Admin section components (preliminary)
- Basic routing setup with react-router-dom
- Chart functionality with chart.js
- Project documentation:
  - README.md with project overview and setup instructions
  - CONTRIBUTING.md with development guidelines
  - ROADMAP.md for development planning
  - ARCHITECTURE.md detailing system design
  - .env.example for environment configuration
- Deployment infrastructure:
  - GitHub Actions workflow for automated deployment
  - Firebase hosting configuration
  - Continuous deployment on master branch

### Changed
- Restructured codebase to follow feature-based architecture:
  - Organized components by feature (dashboard, forms, layout, modals)
  - Created shared directory for common components and utilities
  - Updated import paths to reflect new structure
  - Maintained core application files in src root

### Planned
- Abstract Modal system into reusable components
- Create consistent Layout system
- Implement reusable Form components
- Add backend integration
- Add database functionality

### Removed
- `.bolt` directory (unnecessary generated files)
