# Contributing to HIPPO

## Development Process
1. Check the [ROADMAP.md](ROADMAP.md) for current priorities
2. Create a new branch for your feature
3. Make your changes
4. Update documentation as needed
5. Submit a pull request

## Coding Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Keep components small and focused
- Add comments for complex logic

## Component Guidelines
- Create reusable components in `src/components/ui`
- Use Tailwind CSS for styling
- Follow atomic design principles
- Include prop types and documentation

## Testing
- Write tests for new features
- Ensure existing tests pass
- Test across different browsers
- Check mobile responsiveness

## Documentation
- Update CHANGELOG.md for notable changes
- Document new features in README.md
- Add JSDoc comments for functions
- Keep ROADMAP.md updated with progress

## Git Workflow
```bash
# Create new branch
git checkout -b feature/your-feature

# Make commits
git add .
git commit -m "feat: your feature description"

# Push changes
git push origin feature/your-feature
```

## Commit Message Format
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks
