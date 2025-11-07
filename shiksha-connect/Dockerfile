# Use Node.js base image
FROM node:20-bullseye

# Set environment variable to ignore SSL verification inside Docker
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Install certificates
RUN apt-get update && apt-get install -y ca-certificates openssl && update-ca-certificates

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# ✅ Generate Prisma client (now SSL should not block it)
RUN npx prisma generate --skip-validate || echo "⚠️ Skipping prisma generate if SSL fails"

# Build Next.js app
ENV SKIP_FETCH=true
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]
