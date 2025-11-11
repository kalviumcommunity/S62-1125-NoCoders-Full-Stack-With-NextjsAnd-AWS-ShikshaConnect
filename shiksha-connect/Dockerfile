# ===== Stage 1: Build =====
FROM node:20-alpine AS base
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the Next.js project
RUN npm run build

# ===== Stage 2: Production Runner =====
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only what’s needed for production
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules

EXPOSE 3000

# Start the app
CMD ["npm", "start"]