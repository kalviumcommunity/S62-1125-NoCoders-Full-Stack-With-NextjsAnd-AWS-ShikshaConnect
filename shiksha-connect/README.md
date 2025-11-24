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

---

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

---

## Prisma Migrations & Seeding
- Run your first migration using: `npx prisma migrate dev --name init_schema`.  
- Whenever you update models, create a new migration: `npx prisma migrate dev --name <change_name>`.  
- To reset the database and re-apply all migrations, use: `npx prisma migrate reset` (dev only).  
- Seed your database using: `npx prisma db seed` after configuring `prisma/seed.ts`.  
- Use `npx prisma studio` to visually verify tables and seed data.  
- Always review generated SQL in `prisma/migrations/` before applying changes.  
- Document migration steps and ensure seeds are idempotent to prevent duplicate entries.

---

## Prisma Transactions & Optimization

This project demonstrates Prisma transactions, rollback handling, query optimization, and indexing.

### Transactions
User + Order creation is wrapped in a `$transaction` to ensure atomicity. Invalid data triggers rollback automatically.

### Optimized Queries
Uses `select` to avoid over-fetching, `createMany` for batching, and pagination with `skip` + `take`.

### Indexes
Indexes added on `userId` and `status` fields to improve query speed (`npx prisma migrate dev` applied).

### Monitoring
Enabled Prisma query logs using `DEBUG="prisma:query"`, comparing performance before and after indexes.

---

## RESTful API With Next.js App Router

### 1. File-Based Routing
Every folder inside `app/api/` becomes an API endpoint:

app/api/users/route.ts → /api/users
app/api/users/[id]/route.ts → /api/users/:id

### 2. RESTful Endpoints
- `GET /api/users` — list users (with pagination)
- `POST /api/users` — create user
- `GET /api/users/:id` — get user by ID
- `PUT /api/users/:id` — update user
- `DELETE /api/users/:id` — remove user

### 3. Pagination
`GET /api/users?page=1&limit=10` returns sliced results.

### 4. Error Handling
Meaningful status codes:
- 200 OK  
- 201 Created  
- 400 Bad Request  
- 404 Not Found  
- 500 Server Error

---

## 🎯 Standardized API Response System

### Why Standardized Responses Matter

Without a standard response format, every endpoint might return different shapes of data — making it hard for frontend developers to handle results or errors predictably.

**Inconsistent Example:**
```javascript
// /api/users
{ "data": [{ "id": 1 }], "ok": true }

// /api/tasks
{ "success": true, "payload": [] }

// /api/projects
{ "message": "Project created successfully" }
```

When every route behaves differently, your frontend logic must constantly adapt — increasing code complexity and maintenance cost.

---

### The Unified Response Envelope

We've implemented a common response format that every endpoint in our API follows.

**Recommended structure:**
```typescript
{
  "success": boolean,
  "message": string,
  "data"?: any,
  "error"?: {
    "code": string,
    "details"?: any
  },
  "timestamp": string
}
```

This structure ensures that:
- Every success response looks similar
- Every error response has a clear error code and message
- Logs and monitoring tools can easily parse and track errors

---

### Response Handler Implementation

**File: `lib/responseHandler.ts`**

```typescript
import { NextResponse } from "next/server";

export const sendSuccess = (data: any, message = "Success", status = 200) => {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    },
    { status }
  );
};

export const sendError = (message = "Something went wrong", code = "INTERNAL_ERROR", status = 500, details?: any) => {
  return NextResponse.json(
    {
      success: false,
      message,
      error: { code, details },
      timestamp: new Date().toISOString(),
    },
    { status }
  );
};
```

---

### Applied Across Multiple Routes

**Example 1 — `/api/user/route.ts` (POST - Create User with Transaction)**

```typescript
import { sendSuccess, sendError } from "@/libs/responseHandler";
import { ERROR_CODES } from "@/libs/errorCodes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, total, email } = body;

    if (!name || !email) {
      return sendError("Missing required fields", ERROR_CODES.VALIDATION_ERROR, 400);
    }

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { name, email },
      });

      const order = await (tx as any).order.create({
        data: { total, userId: user.id },
      });

      return { user, order };
    });

    return sendSuccess(result, "Transaction successful", 201);
  } catch (error) {
    return sendError("Transaction failed", ERROR_CODES.TRANSACTION_FAILED, 500, error);
  }
}
```

**Example 2 — `/api/test/route.ts` (GET - Paginated Users)**

```typescript
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 5;
  const skip = (page - 1) * limit;

  try {
    const users = await prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { id: "desc" },
      select: { id: true, name: true, email: true },
    });

    const paginationData = {
      users,
      pagination: { page, limit, total: users.length },
    };

    return sendSuccess(paginationData, "Users fetched successfully");
  } catch (error) {
    return sendError("Pagination fetch failed", ERROR_CODES.PAGINATION_FAILED, 500, error);
  }
}
```

---

### Common Error Codes

**File: `lib/errorCodes.ts`**

```typescript
export const ERROR_CODES = {
  VALIDATION_ERROR: "E001",
  NOT_FOUND: "E002",
  DATABASE_FAILURE: "E003",
  INTERNAL_ERROR: "E500",
  TRANSACTION_FAILED: "E004",
  BATCH_INSERT_FAILED: "E005",
  PAGINATION_FAILED: "E006",
};
```

Using these codes makes it easier to trace issues from logs or dashboards later.

---

### Example Response Outputs

**Success Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "user": {
      "id": 12,
      "name": "Charlie",
      "email": "charlie@example.com"
    },
    "order": {
      "id": 5,
      "total": 150,
      "userId": 12
    }
  },
  "timestamp": "2025-10-30T10:00:00Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Missing required field: name",
  "error": {
    "code": "E001",
    "details": "Validation failed"
  },
  "timestamp": "2025-10-30T10:00:00Z"
}
```

---

### Developer Experience & Observability Benefits

A global response handler helps you:

**🔍 Debug Faster:** Every error has a code and timestamp for easy tracing.

**🏗️ Build Reliable Frontends:** All responses share the same schema - no more adapting to different formats.

**📊 Enable Monitoring:** Easy to integrate with tools like Sentry, Datadog, or Postman monitors.

**👥 Improve Developer Experience:** New team members instantly understand the response format.

**⚡ Consistent API Voice:** Every endpoint speaks in the same tone, no matter who wrote it.

**📈 Better Observability:** Structured logs and error tracking become straightforward.

Think of your global response handler as your project's "API voice" — consistent, predictable, and professional.

---

### Key Takeaways

- **Consistency**: All API responses follow the same structure
- **Maintainability**: Centralized error handling reduces code duplication
- **Scalability**: Easy to extend with new error codes and response types
- **Monitoring**: Built-in timestamp and error codes for observability
- **Developer Experience**: Predictable interface for frontend integration
