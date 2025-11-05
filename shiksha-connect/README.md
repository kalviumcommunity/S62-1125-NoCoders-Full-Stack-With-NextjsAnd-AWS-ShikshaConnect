# ShikshaConnect — Developer Guide

This README contains technical documentation for running, maintaining, and extending the ShikshaConnect application.
For high-level project overview, refer to the root README.


## Understanding Rendering Modes in ShikshaConnect (SSG → SSR → ISR)

ShikshaConnect uses different rendering strategies in Next.js to balance **performance**, **offline reliability**, and **real-time accuracy** depending on the page purpose.

### Rendering Strategy Overview

| Rendering Mode | Page | Why It’s Used | Benefit |
|---|---|---|---|
| **Static Rendering (SSG)** | `/about` | Content does not change often | Fastest load time, no server overhead |
| **Dynamic Rendering (SSR)** | `/dashboard` | Must display real-time progress and statistics | Always fresh data every time the page is loaded |
| **Hybrid Rendering (ISR)** | `/lessons` | Lessons update occasionally | Static speed, updates automatically every 60 seconds |

---

### 1. Static Rendering (SSG)

```export const revalidate = false;```
- Page is pre-rendered at build time
- No need to fetch updated content frequently
- Ideal for About, Help, Landing Pages

### 2. Dynamic Rendering (SSR)
``` export const dynamic = "force-dynamic"; ```
- Page is generated on each request
- Used where live or current data is required
- Ideal for Dashboards, Reports, Student Progress View

### 3. Incremental Static Regeneration (ISR)
``` export const revalidate = 60;```
- Page is served as static HTML
- Next.js regenerates the page in the background every 60 seconds
- Ideal for Lesson lists, Announcements, Timetables, etc.

### Reflection
- SSG enables lightning-fast load speeds for pages that rarely change.
- SSR ensures the dashboard always displays real-time progress, which is crucial for teachers and administrators.
- ISR offers the best balance for lesson content that updates sometimes, but not constantly.

**If ShikshaConnect scaled to 10x more users:**
- We would continue relying heavily on SSG and ISR to minimize backend load and bandwidth usage.
- We would only use SSR for pages where real-time information is essential (e.g., teacher dashboard updates, exam status, live attendance).

