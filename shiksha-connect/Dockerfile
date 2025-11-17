# ==========================
# 1️⃣ BUILD STAGE
# ==========================
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy project
COPY . .

# Prisma ENV for generate
ENV DATABASE_URL="postgresql://postgres:password@db:5432/shiksha?schema=public"

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
RUN npm run build



# ==========================
# 2️⃣ RUNNER (PRODUCTION)
# ==========================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HUSKY=0   

# Copy files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# 🔥 Disable husky completely for Docker
RUN rm -rf .husky
RUN npm pkg delete scripts.prepare

# Install only production deps
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]