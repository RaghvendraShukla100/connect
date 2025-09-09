# Use Node.js LTS (Alpine for smaller image)
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies first (better caching)
COPY package*.json ./

RUN npm install --production

# Copy source code
COPY . .

# Expose gateway port
EXPOSE 3000

# Start gateway
CMD ["node", "src/index.js"]
