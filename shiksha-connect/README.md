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

---

## Environment Setup

This project uses two environment files:

### `.env.local`
Contains real credentials (database URL, JWT secrets, backend keys).  
**Never commit this file.**

### `.env.example`
A safe template listing all required environment variables with placeholder values.  
Use it to replicate the environment:

Common issues avoided:
- Exposing secrets accidentally via missing `NEXT_PUBLIC_` prefix  
- Using server-only secrets inside client components  
- Forgetting the difference between runtime vs build-time variables  
=======

## 📘 Database Schema Design (PostgreSQL + Prisma)

### 🧭 Overview

This project demonstrates relational database design using **PostgreSQL** and **Prisma ORM**.
It models a simple system where users can create projects, and each project can have multiple tasks.

---

### ⚙️ Tools Used

* **PostgreSQL** (Database)
* **Prisma ORM** (Schema modeling & migrations)
* **pgAdmin 4** (Database UI)
* **Prisma Studio** (Data visualization)

---

### 🧩 Entities & Relationships

**Core entities:**

* **User** → represents a registered user
* **Project** → created by a user
* **Task** → belongs to a project

**Relationships:**

* One **User** can have many **Projects**
* One **Project** can have many **Tasks**

---

### 🧱 Database Setup

1. Created database `beastbuddy_db` in **pgAdmin 4**.
2. Added connection details in `.env`:

   ```
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/beastbuddy_db?schema=public"
   ```
3. Applied migrations:

   ```bash
   npx prisma migrate dev --name init_schema
   ```

---

### 🌱 Data Seeding

A sample seed file (`prisma/seed.ts`) inserts a test user with one project and two tasks.
Run:

```bash
npx prisma db seed
```

---

### 🧾 Documentation Notes

* **Normalization:** Follows 3NF to avoid redundancy.
* **Keys:** Auto-incrementing primary keys; foreign keys link User → Project → Task.
* **Scalability:** Easy to extend for comments, teams, or statuses.
* **Verification:** Viewed successfully via Prisma Studio and pgAdmin.

---

### ✅ Outcome

* Successfully connected Prisma to PostgreSQL
* Created tables and seeded test data
* Verified relationships and constraints visually in **Prisma Studio**

---

## 📦 Cloud Deployment Overview (Docker → CI/CD → AWS/Azure)

### 1️⃣ Dockerizing the Project
I containerized both frontend and backend using individual Dockerfiles and combined them with Docker Compose.

**Example Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

**docker-compose.yml**
```yaml
services:
  backend:
    build: ./backend
    ports: ["5000:5000"]
  frontend:
    build: ./frontend
    ports: ["3000:3000"]
```

---

### 2️⃣ CI/CD with GitHub Actions
A GitHub Actions workflow automates:
- Building Docker images  
- Logging into Docker Hub / ACR  
- Pushing images  
- Deploying to AWS/Azure  

**Sample Workflow**
```yaml
name: Deploy

on: { push: { branches: ["main"] } }

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USER }}
          password: ${{ secrets.DOCKER_PASS }}
      - run: docker build -t app-backend ./backend
      - run: docker push app-backend
```

---

### 3️⃣ Deployment (AWS / Azure)
**AWS:**  
- EC2 instance running Docker  
- Pulled images from registry  
- Ran app using Docker Compose  

**Azure:**  
- Docker images pushed to Azure Container Registry  
- Azure App Service pulled and ran the container  

---

### 4️⃣ Secrets & Environment Variables
- Local: `.env`  
- CI/CD: GitHub Secrets  
- Cloud: EC2 variables / App Service settings  

---

### 5️⃣ Reflection
**Learned:** Docker basics, CI/CD flow, cloud hosting, secrets management  
**Challenges:** Docker build errors, CORS issues, env configs  
**Next improvements:** Monitoring, auto-deploy to ECS/AppService, IaC support  

---

## Docker Setup

### `Dockerfile`
Builds the Next.js app (install → build → start).  
Runs on **port 3000**.

### `docker-compose.yml`
Starts three services:
- **app** (Next.js)
- **db** (Postgres with volume)
- **redis** (Redis cache)

Run everything:

```bash
docker-compose up --build
```