# ShikshaConnect – Implementation Documentation  
A structured documentation of all assignments completed during the development of the project.

---

# 📌 1. Project Setup

The project was initialized using **Next.js 14 (App Router)** with **TypeScript** and **TailwindCSS**.  
This setup forms the foundation for scalability, offline capability, and maintainable development.

---

# 📌 2. TypeScript & ESLint Configuration

To ensure consistent, error-free, and clean code, the following tools were configured:

## ✅ TypeScript Strict Mode  
- Strict mode enabled in `tsconfig.json`
- Prevents hidden runtime errors  
- Catches unused variables, type mismatches, and unsafe operations

## ✅ ESLint + Prettier  
- `.eslintrc.json` + `.prettierrc` added  
- Enforces consistent formatting  
- Auto-fixes styling issues on save  

## ✅ Husky + lint-staged  
- Pre-commit hooks run ESLint & Prettier  
- Ensures only clean, formatted code enters the repo

### 📎 Helpful Links
- [Next.js Docs](https://nextjs.org/docs)  
- [Learn Next.js](https://nextjs.org/learn)  

---

# 📌 3. GitHub Workflow Setup

## Branch Naming Convention  
| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/<name>` | `feature/login-auth` |
| Fix | `fix/<bug>` | `fix/navbar-alignment` |
| Docs | `docs/<update>` | `docs/update-readme` |
| Chore | `chore/<task>` | `chore/update-deps` |

## Pull Request Template  
Located at: `.github/pull_request_template.md`

## Code Review Checklist  
- Naming conventions followed  
- No console errors  
- ESLint + Prettier pass  
- No sensitive data exposed  
- Functionality verified

## Branch Protection Rules  
- PR reviews required  
- Status checks must pass  
- No direct pushes to `main`  
- Branch must be up-to-date before merging  

---

# 📌 4. Environment Setup

Two environment files were introduced:

## `.env.local`  
Contains REAL credentials (DB URL, JWT secrets).  
🚫 **Never committed.**

## `.env.example`  
A safe template used by other developers.

### Common Issues Avoided
- Using server-only secrets in client components  
- Exposing secrets accidentally  
- Confusion between runtime vs build-time variables  

---

# 📌 5. Database Schema Design (PostgreSQL + Prisma)

## 🧭 Overview  
The project uses **PostgreSQL + Prisma ORM** with a normalized schema suitable for educational platforms.

## 🔗 Core Entities  
- **User** (student/teacher)
- **Course**
- **Lesson**
- **VideoAsset**
- **Resource**
- **Enrollment**
- **Progress**
- **Comment**

Each table is normalized to **3NF**.

## 🧱 Migration Commands  
```bash
npx prisma migrate dev --name init_schema
npx prisma studio
