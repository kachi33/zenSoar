# Contributing to ZenSoar

First off, thank you for considering contributing to ZenSoar! 🎉

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

---

## Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow. Please be respectful and constructive in all interactions.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

When creating a bug report, include:
- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:
- A clear and descriptive title
- A detailed description of the proposed functionality
- Why this enhancement would be useful
- Examples of how it would be used

### 🔧 Contributing Code

1. Check the [Roadmap](README.md#-roadmap) for planned features
2. Comment on an existing issue or create a new one
3. Fork the repository
4. Create your feature branch
5. Make your changes
6. Submit a pull request

---

## Development Setup

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Setup Steps

```bash
# 1. Fork and clone the repository
git clone https://github.com/yourusername/zenSoar.git
cd zenSoar

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# 4. Start development server
npm run dev
```

### Useful Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # TypeScript type checking
```

---

## Coding Guidelines

### TypeScript
- Always use TypeScript (no `.js` files)
- Enable strict mode (already configured)
- Avoid using `any` type
- Define interfaces for all data structures
- Export types from `src/types/index.ts`

### React Components
- Use functional components with hooks
- Use TypeScript for prop types
- Keep components small and focused
- Use meaningful component names (PascalCase)

```typescript
// Good example
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### File Structure
```
components/
├── [feature]/
│   ├── ComponentName.tsx      # Component file
│   └── index.ts               # Export file (if needed)
```

### Styling
- Use Material-UI components when possible
- Use Tailwind CSS for utility classes
- Maintain consistent color palette:
  - Primary: `#283618`
  - Secondary: `#606c38`
  - Accent: `#bc6c25`

### State Management
- Use Context API for global state
- Use local state (`useState`) for component-specific state
- Keep state as close to where it's used as possible

---

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(dashboard): add patient search functionality

fix(auth): resolve login redirect issue

docs(readme): update installation instructions

style(components): format code with prettier

refactor(api): extract data fetching into custom hook

test(auth): add unit tests for AuthContext
```

---

## Pull Request Process

### Before Submitting

1. **Run checks locally:**
   ```bash
   npm run typecheck  # No TypeScript errors
   npm run lint       # No ESLint errors
   npm run build      # Build succeeds
   ```

2. **Update documentation:**
   - Update README.md if adding new features
   - Add JSDoc comments for new functions
   - Update type definitions

3. **Test your changes:**
   - Test all affected user flows
   - Test on different screen sizes
   - Test with all three user roles

### PR Title Format

Use conventional commit format:
```
feat: add patient search functionality
fix: resolve login redirect issue
docs: update contributing guidelines
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Tested on mobile/desktop

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #123
```

### Review Process

1. At least one maintainer must review
2. All CI checks must pass
3. No merge conflicts
4. Documentation updated (if needed)

---

## Project-Specific Guidelines

### Working with Mock Data

Currently, ZenSoar uses mock data located in `src/data/`:
- `mockData.ts` - Patient and test data
- `mockUsers.ts` - User data
- `analyticsData.ts` - Analytics data

When adding features:
- Update mock data to support new features
- Keep mock data realistic and consistent
- Document any new data structures in `src/types/index.ts`

### Firebase Integration

When working with Firebase:
- Never commit Firebase credentials
- Use environment variables (`.env`)
- Test with your own Firebase project
- Document any new Firebase features used

### Role-Based Features

When adding role-specific features:
- Ensure proper access control in routes
- Update role permissions table in README
- Test with all three user roles
- Update the appropriate dashboard component

---

## Style Guide

### Component Structure

```typescript
// 1. Imports
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// 2. Type definitions
interface MyComponentProps {
  title: string;
}

// 3. Component
const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  // 4. State and hooks
  const [count, setCount] = useState(0);

  // 5. Event handlers
  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  // 6. Render
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
};

// 7. Export
export default MyComponent;
```

### Naming Conventions

- Components: `PascalCase` (e.g., `AdminDashboard`)
- Functions: `camelCase` (e.g., `handleSubmit`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`)
- Files: Match component name (e.g., `AdminDashboard.tsx`)
- Types/Interfaces: `PascalCase` (e.g., `UserRole`, `PatientData`)

---

## Getting Help

### Resources
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Material-UI Documentation](https://mui.com/)
- [Firebase Documentation](https://firebase.google.com/docs)

### Questions?

Feel free to:
- Open an issue with the `question` label
- Check existing issues and discussions
- Reach out to the maintainer

---

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- GitHub contributors page

---

## License

By contributing to ZenSoar, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to ZenSoar! Your efforts help make this project better for everyone. 🚀

---

<div align="center">

**[⬆ Back to Top](#contributing-to-zensoar)**

</div>
