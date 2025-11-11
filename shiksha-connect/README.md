# ShikshaConnect - Implementation Documentation

## 2.9 - TypeScript & ESLint Configuration

This project is configured for consistent and safe code using Strict TypeScript, ESLint + Prettier, and Husky + lint-staged.

✅ TypeScript Strict Mode 
    
- Enabled strict rules in tsconfig.json to prevent hidden runtime errors and unused variables.

✅ ESLint + Prettier Formatting 

- Added .eslintrc.json and .prettierrc to enforce consistent code style and automatic formatting.

✅ Pre-Commit Hooks 
- Set up Husky and lint-staged to run ESLint and Prettier on staged files before every commit.
- This ensures only clean and formatted code is committed.

### Result

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🧩 GitHub Workflow Setup

### Branch Naming Convention
- `feature/<feature-name>`
- `fix/<bug-name>`
- `docs/<update-name>`
- `chore/<task-name>`

### Pull Request Template
Available in `.github/pull_request_template.md`

### Code Review Checklist
Included above to ensure consistent and secure code reviews.

### Branch Protection
- PR review required before merging
- Status checks must pass
- No direct pushes to main
- PRs must be up to date before merge

### Reflection
This setup helps maintain collaboration, prevent code conflicts, and ensure high-quality deployments — similar to workflows used by professional engineering teams.
=======
- Codebase stays consistent
- Errors are caught early
- Formatting happens automatically
- Every commit is cleaner
