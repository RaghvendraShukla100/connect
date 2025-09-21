# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose API Gateway port
EXPOSE 3000

# Start the gateway
CMD ["node", "src/server.js"]
