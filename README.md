# 📚 ShikshaConnect  
> **Empowering Rural Education through Offline-First Learning**

---

## 🌍 Overview

**ShikshaConnect** is a **lightweight, offline-first Progressive Web App (PWA)** designed to make digital education accessible in rural and low-connectivity regions of India.  
It ensures continuous learning through:

- **Intelligent caching**  
- **Local storage using IndexedDB**  
- **Background sync**  
- **PWA installability**

This allows teachers and students to access educational content **anytime, anywhere—even without internet**.

---

## 🚨 Problem Statement

Rural schools across India face persistent challenges:

- **Unreliable Internet** (often <2 Mbps)
- **Low-end Android devices** with limited RAM
- **Lack of localized study material**
- **Digital illiteracy and complex tools**

Traditional e-learning tools fail in such environments.

---

## 💡 Proposed Solution

ShikshaConnect provides a **resilient, multilingual, offline-capable learning experience**:

- Caches lessons, quizzes & progress locally (IndexedDB)
- Works even with **no internet**
- Offers clean, minimal dashboards for teachers & students
- Supports **English + Hindi**
- Uses **background sync** for automatic updates

---

## 📦 Project Scope

### ✅ In-Scope (Current Sprint)
- Offline-first PWA architecture  
- Student dashboard  
- Teacher dashboard  
- Auth system (JWT)  
- PostgreSQL + Prisma setup  
- Dockerized CI/CD pipeline  
- IndexedDB sync layer  

### 🔮 Future Enhancements
- AI-powered content recommendation  
- Analytics dashboards  
- Native mobile app  
- Peer-to-peer content sharing (WebRTC)  

---

## 👥 Team & Role Distribution

| Focus Area | Member | Responsibilities |
|------------|--------|------------------|
| **Frontend & PWA** | Issac Antony | UI, routing, PWA setup, service workers, IndexedDB |
| **Backend & Database** | John Robert | API development, Prisma schema, caching, JWT auth |
| **DevOps & Testing** | Karandeep | Docker, CI/CD, AWS/Azure deployment, integration testing |

All members collaborate on development & deployment.

---

## 🗓 Sprint Timeline (4 Weeks)

| Week | Focus | Deliverables |
|------|--------|-------------|
| **1** | Setup & Foundation | Project scaffold, Docker setup, Prisma schema, JWT auth |
| **2** | Core Features | Dashboards, lesson viewer, quiz module |
| **3** | Offline Architecture | Service worker, caching, IndexedDB, background sync |
| **4** | Testing & Deployment | Optimizations, CI/CD, AWS deployment, documentation |

---

## 📁 Folder Structure

    src/
    ├── app/ # Next.js App Router — pages & API routes
    ├── components/ # UI components
    ├── lib/ # Utilities, API helpers, response handlers
    ├── styles/ # Tailwind + global styles
    ├── assets/ # Images, icons

---


### 📌 Naming Conventions

| Folder | Convention | Example |
|--------|------------|---------|
| `app/` | camelCase | `lessonView.tsx` |
| `components/` | PascalCase | `DashboardCard.tsx` |
| `lib/` | camelCase | `fetchLessons.ts` |
| `styles/` | kebab-case | `globals.css` |
| `assets/` | kebab-case | `logo-light.png` |

---

## 🧩 Scalability & Clarity

This structure ensures:

- Clear separation of concerns  
- Easy feature expansion  
- Code reuse through shared components  
- Maintainability & readability  
- Smooth onboarding for contributors  

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kalviumcommunity/S62-1125-NoCoders-Full-Stack-With-NextjsAnd-AWS-ShikshaConnect.git
cd shiksha-connect
```

### 2️⃣ Install Dependencies
    npm install

### 3️⃣ Run Development Server
    npm run dev


Visit: http://localhost:3000

---

## 🧠 Reflection

We chose this architecture because:

- Next.js App Router provides modular routing

- TypeScript ensures type safety

- Tailwind enables rapid UI development

- Clear folder structure supports team collaboration

- Easy scaling for future AI or analytics features

---

## 🎯 MVP Deliverables : 
-  [ ] Secure login (Student/Teacher)

- [ ] Course browsing

- [ ] Lesson viewer

- [ ] Offline mode

- [ ] Progress tracking

- [ ] Cloud deployment (AWS/Azure)

---

## 🛠 Tech Stack

| Layer        | Technologies                               |
|--------------|---------------------------------------------|
| Frontend     | Next.js 14, React, TypeScript, TailwindCSS |
| Backend      | Next.js API Routes, JWT Authentication      |
| Database     | PostgreSQL, Prisma ORM                      |
| PWA          | Service Worker, IndexedDB, Background Sync  |
| DevOps       | Docker, GitHub Actions, AWS/Azure           |
| Testing      | Jest, Postman, Lighthouse                   |

---

## 📊 Sucess Metrics

| Category   | Goal                                  |
|------------|----------------------------------------|
| Technical  | Lighthouse ≥ 80, API latency < 300ms   |
| Dev        | Weekly commits, working CI/CD pipeline |
| UX         | Offline reliability; fast on 2GB RAM   |

---

## ⚠️ Risks & Mitigation 

| Risk                | Impact | Mitigation                     |
|---------------------|--------|---------------------------------|
| Team Overload       | High   | MVP-first development           |
| Sync Conflicts      | Medium | Auto + manual sync logic        |
| Device Performance  | Medium | Asset optimization & caching    |
| Deployment Issues   | Medium | Staging tests + rollback CI/CD  |
| Bandwidth Issues    | Low    | Simulated 2G/3G testing         |

---

## 🌿 Branch Naming Convention 

| Type       | Purpose        | Example               |
|------------|----------------|-----------------------|
| feature/   | New features   | feature/login-auth    |
| fix/       | Bug fixes      | fix/navbar-issue      |
| chore/     | Maintenance    | chore/update-deps     |
| docs/      | Documentation  | docs/update-readme    |

--- 

## 🔍 Code Review Checklist

 - [x] Follows naming conventions

 - [x] Works locally

 - [x] No console errors

 - [x] ESLint + Prettier pass

 - [x] No sensitive data exposed

 - [x] Documentation updated

---

## 🎉 Final Deliverable

- [ ] A fully functional offline-first PWA that:

- [ ] Enables accessible education

- [ ] Supports rural infrastructure

- [ ] Works reliably offline

- [ ] Provides seamless dashboards

- [ ] Deploys to cloud effortlessly