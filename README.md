
# ShikshaConnect  
> Empowering Rural Education through Offline-First Learning  

---

## Overview

**ShikshaConnect** is a **lightweight, offline-first Progressive Web App (PWA)** designed to make digital education accessible in rural and low-connectivity regions of India.  
It ensures continuous learning through **intelligent caching**, **local storage**, and **background sync**, enabling teachers and students to access educational content anytime, anywhere.

---

## Problem Statement

Rural schools in India face persistent challenges in adopting digital education:

- **Unreliable Internet:** Often below 2 Mbps, breaking typical e-learning tools.  
- **Device Constraints:** Low-end Android devices with limited performance.  
- **Content Gaps:** Lack of localized, culturally relevant study material.  
- **Digital Illiteracy:** Complex tools overwhelm first-time users.

---

## Proposed Solution

ShikshaConnect solves these challenges by building a **resilient, multilingual, offline-capable PWA** that:

- Caches lessons and progress locally using IndexedDB  
- Works seamlessly in low or no-internet conditions  
- Provides simple, teacher-friendly dashboards  
- Supports both English and Hindi interfaces  

---

## Project Scope

### In-Scope (This Sprint)
- Offline-first PWA with caching & background sync  
- Student dashboard for browsing and completing lessons  
- Teacher dashboard for performance tracking  
- JWT-based authentication system  
- Dockerized CI/CD deployment on AWS/Azure  
- IndexedDB for offline data storage  

### Future Enhancements
- AI-based content recommendation  
- Advanced analytics dashboards  
- Mobile native apps  
- Peer-to-peer content sharing  

---

## Team & Role Distribution

| **Focus Area / Role** | **Team Member** | **Key Responsibilities** |
| ---------------------- | --------------- | ------------------------- |
| **Frontend & PWA Focus** | Issac Antony | Build UI with Next.js + Tailwind, manage routing, dashboards, service workers & IndexedDB. |
| **Backend & Database Focus** | John Robert | Create Node.js APIs, manage PostgreSQL + Prisma schema, implement JWT auth, caching, and data sync logic. |
| **DevOps, Testing & Integration Focus** | Karandeep | Handle Docker setup, CI/CD pipelines, AWS/Azure deployment, offline & integration testing, documentation. |

All members collaborate on design, coding, and deployment to ensure shared ownership and learning.

---

## Sprint Timeline (4 Weeks)

| **Week** | **Focus Area** | **Deliverables** |
| -------- | --------------- | ---------------- |
| **1** | Foundation & Setup | Project scaffold, Docker config, DB schema, JWT auth |
| **2** | Core Features | Dashboards, lesson viewer, quiz module |
| **3** | Offline-First Architecture | Service workers, IndexedDB, background sync |
| **4** | Testing & Deployment | Integration tests, optimization, AWS/Azure deploy, documentation |

---

## Folder Structure

```

src/
├── app/          # Next.js App Router — defines routes and pages
├── components/   # Reusable UI components (buttons, cards, modals)
├── lib/          # Utility functions, API configs, constants
├── styles/       # Tailwind and global styles
├── assets/       # Static assets (images, icons, etc.)

````

### Folder Purpose & Naming Conventions

| **Folder** | **Purpose** | **Naming Convention** |
| ----------- | ----------- | ---------------------- |
| `app/` | Contains route definitions and page components. | Use **camelCase** for files (e.g., `lessonView.tsx`). |
| `components/` | Shared reusable UI elements. | Use **PascalCase** (e.g., `Navbar.tsx`, `DashboardCard.tsx`). |
| `lib/` | Utility logic, constants, API handlers. | Use **camelCase** (e.g., `fetchLessons.ts`). |
| `styles/` | Global styles and Tailwind customizations. | Use **kebab-case** (e.g., `globals.css`). |
| `assets/` | Stores icons, logos, images. | Use **kebab-case** (e.g., `logo-light.png`). |

---

## Scalability & Clarity

This modular structure ensures:
- **Separation of concerns:** UI, logic, and routing are isolated.  
- **Scalability:** Easy to add new pages, components, and APIs.  
- **Maintainability:** Team members can independently work in different folders.  
- **Reusability:** Common components avoid code duplication.  
- **Readability:** Consistent naming helps onboard new developers quickly.  

---

## Setup Instructions

### 1️.  Clone the Repository
```bash
git clone https://github.com/kalviumcommunity/S62-1125-NoCoders-Full-Stack-With-NextjsAnd-AWS-ShikshaConnect.git
cd shiksha-connect
````

### 2️.  Install Dependencies

```bash
npm install
```

### 3️.  Run the Development Server

```bash
npm run dev
```

Your app should now be live on [http://localhost:3000](http://localhost:3000).

---

## Screenshot of Local Run

> Below is the screenshot of ShikshaConnect running locally on port 3000.

![App Screenshot](./assets/image.png)

---

## Reflection

We chose this structure to promote **clarity, scalability, and collaboration**:

* Next.js App Router improves route modularity.
* TypeScript ensures type safety and easier debugging.
* Clear folder segmentation enables parallel team workflows.
* Future sprints can scale effortlessly with feature-based directories.

This foundation supports **clean architecture**, making future iterations (AI modules, analytics, native apps) easier to integrate.

---

## MVP Deliverables

* Secure login (Student / Teacher)
* Course browser & lesson viewer
* Offline mode with sync
* Progress tracking
* Multilingual support (English + Hindi)
* Cloud-deployed PWA

---

## Technology Stack

| **Layer**                | **Technologies Used**                                                |
| ------------------------ | -------------------------------------------------------------------- |
| **Frontend**             | Next.js 14 (App Router), TypeScript, Tailwind CSS, React Context API |
| **Backend**              | Node.js, PostgreSQL, Prisma ORM, JWT Auth                            |
| **PWA Features**         | Service Workers, IndexedDB, Background Sync, Web App Manifest        |
| **Infrastructure**       | Docker, AWS/Azure Cloud, GitHub Actions (CI/CD), Redis (caching)     |
| **Testing & Monitoring** | Jest, Postman, Lighthouse Audits                                     |

---

## Success Metrics

| **Category** | **Indicators**                                 |
| ------------ | ---------------------------------------------- |
| Technical    | Lighthouse ≥ 80, < 300 ms API latency          |
| Development  | Weekly commits, working CI/CD                  |
| UX           | Smooth on 2 GB RAM devices, no offline crashes |

---

## Risks & Mitigation

| **Risk**               | **Impact** | **Mitigation**                   |
| ---------------------- | ---------- | -------------------------------- |
| Team Overload          | High       | Daily stand-ups, MVP-first focus |
| Sync Conflicts         | Medium     | Manual + auto-sync logic         |
| Low Device Performance | Medium     | Lightweight assets & caching     |
| Deployment Failures    | Medium     | Staging tests & rollback CI/CD   |
| Bandwidth Testing Gaps | Low        | Simulated 2G/3G testing          |

---

## Branch Naming Convention

To keep branches consistent and easy to track, follow this pattern:

| Type | Purpose | Example |
|------|----------|----------|
| feature/ | For new features | feature/login-auth |
| fix/ | For bug fixes |    fix/navbar-alignment |
| chore/ | For maintenance tasks | chore/update-dependencies |
| docs/ | For documentation updates | docs/update-readme |

**Rules:**
- Use lowercase letters and hyphens (`-`).
- Keep branch names short and descriptive.
- Always branch off from `main` (or `dev` if your team uses one).

---

## Code Review Checklist

Each Pull Request should be verified against the following:

- [ ] Code follows naming conventions and folder structure  
- [ ] Functionality verified locally  
- [ ] No console errors or warnings  
- [ ] ESLint + Prettier checks pass  
- [ ] Comments and documentation are clear  
- [ ] No sensitive data (API keys, tokens, etc.) exposed  
- [ ] Unit tests (if applicable) are updated or added  

---

## Pull Request Template
A standardized PR template is used for all merges, located at `.github/pull_request_template.md`.

It includes:
- **Summary:** Brief overview of changes
- **Changes Made:** Key modifications or additions
- **Screenshots:** Visual evidence (if UI-related)
- **Checklist:** Pre-merge verification steps

---

## Branch Protection Rules
Main branch protection includes:
- ✅ Require pull request reviews before merging  
- ✅ Require all status checks to pass (lint/test workflows)  
- ✅ Disallow direct pushes to `main`  
- ✅ Require PRs to be up-to-date before merging  

![Branch Protection Screenshot](./assets/branch-protection.png)

---

## Final Deliverable

A **fully functional PWA** for rural schools that:

* Enables **offline learning**
* Tracks **student progress**
* Supports **multilingual content**
* Runs smoothly on **low-end devices**

---

## 🌍 Environment-Aware Builds & Secrets Management

This update adds **multi-environment configuration** and **secure secret handling** to ensure safe and consistent deployments across development, staging, and production.  
It aligns with *Kalvium Concept-2: Environment-Aware Builds & Secrets Management in Production.*

---

### 🗂️ Environment Files

| File | Purpose |
|------|----------|
| `.env.development` | Local development setup |
| `.env.staging` | Pre-deployment testing setup |
| `.env.production` | Live production setup |
| `.env.example` | Reference file with placeholders (safe to commit) |

> ✅ Only `.env.example` is tracked — all other `.env` files are ignored to protect secrets.

---

### ⚙️ Build Commands

Defined in `package.json` using **env-cmd**:

```bash
npm run dev                # Uses .env.development
npm run build:staging      # Uses .env.staging
npm run build:production   # Uses .env.production
```

---


### 🔐 Secure Secrets

Real credentials (DB URLs, API keys, tokens) are stored in GitHub Secrets:
Settings → Secrets and Variables → Actions

Secrets added:
	•	DATABASE_URL
	•	NEXT_PUBLIC_API_URL

This ensures no sensitive data is ever exposed in the repository or commits.

---

### 🧪 Verification

Commands used for testing and validation:
```bash
npm run build:staging
npm run build:production 
```

Verification Results:
	•	Staging build points to the staging API.
	
    •	Production build points to the live API.
	
    •	.env files are ignored correctly.
	
    •	Secrets load securely from GitHub during build.

---

💭 Reflection
	•	Used separate .env files for each environment.
	
    •	Ensured all sensitive info is excluded via .gitignore.
	
    •	Used GitHub Secrets for secure storage.
	
    •	Verified environment-specific builds using env-cmd.
	
    •	Multi-environment setup improved safety and reliability in CI/CD workflows.

---

# Normalized PostgreSQL Schema (Prisma + TypeScript)

## 📘 Overview
**Shiksha Connect** uses **PostgreSQL** as its main database, managed through **Prisma ORM** for a type-safe integration with Next.js and TypeScript.  
The schema follows **Third Normal Form (3NF)** to ensure consistency, no redundancy, and scalability for future features like analytics and offline sync.

---

## 🧩 Core Entities & Relationships

| Entity | Description | Key Fields |
|--------|--------------|------------|
| **User** | Represents students, teachers, or admins | `id`, `email`, `role` |
| **Course** | Created and owned by a teacher, contains multiple lessons | `id`, `title`, `ownerId` |
| **Lesson** | Belongs to a course and may have associated videos/resources | `id`, `title`, `courseId` |
| **VideoAsset** | Holds metadata for videos attached to lessons | `id`, `lessonId`, `url` |
| **Resource** | Study materials such as PDFs, slides, etc. | `id`, `lessonId`, `url` |
| **Enrollment** | Links users to courses (many-to-many relationship) | `userId`, `courseId` |
| **Progress** | Tracks each student’s lesson completion percentage | `userId`, `lessonId`, `percent` |
| **Comment** | Discussion threads or feedback under each lesson | `userId`, `lessonId`, `content` |

---

## 🔗 Relational Design

- **1:N** → A `User` owns many `Courses`
- **1:N** → A `Course` has many `Lessons`
- **1:1** → A `Lesson` has one `VideoAsset`
- **N:N** → `User` ↔ `Course` through `Enrollment`
- **1:N** → `Lesson` ↔ `Comment` (student discussions)
- **1:N** → `Lesson` ↔ `Progress` (tracking learning progress)

---

## 🧱 Keys & Constraints

- **Primary Keys:** Auto-incremented integers or UUIDs  
- **Foreign Keys:**  
  - `Course.ownerId → User.id`  
  - `Lesson.courseId → Course.id`  
  - `Enrollment.userId → User.id`  
  - `Progress.lessonId → Lesson.id`
- **Unique Constraints:**  
  - `User.email`  
  - Composite uniqueness on `Enrollment (userId, courseId)` and `Progress (userId, lessonId)`
- **Indexes:**  
  - `courseId`, `order`, and unique user-course combinations for optimized lookups

---

## 🧮 Normalization Notes

- **1NF:** Each column holds atomic values (no repeating groups).  
- **2NF:** All non-key attributes depend fully on the primary key.  
- **3NF:** No transitive dependencies; all non-key fields depend only on the primary key.  
✅ Ensures efficient storage, minimal redundancy, and easy updates.

---

## ⚙️ Setup & Migration Commands

```bash
npx prisma migrate dev --name init_schema
npx prisma generate
npx prisma studio
```

## ☁️ Understanding Cloud Deployments: Docker → CI/CD → AWS

### 🐳 1. Containerizing the Project

I used **Docker** to package my Next.js (TypeScript) app so it runs the same everywhere.  
Docker allows me to bundle all dependencies, environment files, and build outputs into one container.

**Dockerfile:**
```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

Commands to build & run:

docker build -t shikshaconnect .
docker run -p 3000:3000 shikshaconnect


2. Automating Deployment with CI/CD

I set up GitHub Actions to automate the whole process.
Whenever I push to main, it builds the app, creates a Docker image, pushes it to Docker Hub, and deploys it to AWS EC2 automatically.

GitHub Actions workflow (simplified):

name: Deploy App
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - run: docker build -t ${{ secrets.DOCKER_USERNAME }}/shikshaconnect .
      - run: |
          echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push ${{ secrets.DOCKER_USERNAME }}/shikshaconnect
      - uses: appleboy/ssh-action@v0.1.10
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            docker pull ${{ secrets.DOCKER_USERNAME }}/shikshaconnect
            docker stop shikshaconnect || true
            docker rm shikshaconnect || true
            docker run -d -p 80:3000 ${{ secrets.DOCKER_USERNAME }}/shikshaconnect

 3. Deploying on AWS EC2

I hosted the container on an AWS EC2 Ubuntu instance:

ssh -i key.pem ubuntu@<EC2_IP>
sudo apt update && sudo apt install -y docker.io
sudo systemctl start docker

The GitHub Actions workflow connects via SSH and redeploys automatically with every code push.

## 🧠 Advanced Data Fetching Demo (Next.js App Router)

### Pages Implemented
| Page Route | Rendering Type | Configuration | Description |
|-------------|----------------|----------------|--------------|
| `/static-demo` | Static (SSG) | `export const revalidate = false` | Pre-rendered once at build time for fast load speed |
| `/dynamic-demo` | Dynamic (SSR) | `export const dynamic = 'force-dynamic'` | Fetched on every request for real-time data |
| `/hybrid-demo` | Hybrid (ISR) | `export const revalidate = 60` | Cached static page that updates every 60s |

### Reflection
Each rendering mode balances **speed**, **freshness**, and **server cost** differently.  
If this app had 10x more users, I’d rely more on static and ISR pages for scalability, using SSR only when data must be live per request (like personalized dashboards).

  • http://localhost:3000/static-demo

	•	http://localhost:3000/dynamic-demo
  
	•	http://localhost:3000/hybrid-demo