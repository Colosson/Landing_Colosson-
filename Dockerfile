FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build application
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy built app from builder stage
COPY --from=builder /app /app

EXPOSE 3000

CMD ["npm", "run", "start"]
