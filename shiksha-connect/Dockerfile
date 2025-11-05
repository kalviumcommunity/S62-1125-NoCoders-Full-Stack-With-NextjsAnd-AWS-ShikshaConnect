# Step 1: Use official Node.js image
FROM node:22-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all files
COPY . .

# Step 5: Build the Next.js app
RUN npm run build

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Start the app
CMD ["npm", "start"]
