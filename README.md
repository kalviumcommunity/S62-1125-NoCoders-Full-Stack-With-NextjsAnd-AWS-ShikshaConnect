
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
git clone https://github.com/<organization>/<repository-name>.git
cd <repository-name>
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

![App Screenshot](./assets/local-run.png)

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

## Final Deliverable

A **fully functional PWA** for rural schools that:

* Enables **offline learning**
* Tracks **student progress**
* Supports **multilingual content**
* Runs smoothly on **low-end devices**
