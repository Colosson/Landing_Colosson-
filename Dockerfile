# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS builder

WORKDIR /app

RUN date -u +%s > /tmp/build_start && echo "[timing] build start: $(date -u '+%H:%M:%S')"

RUN npm install -g pnpm

# Install dependencies first so this layer is cached unless the lockfile changes
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    echo "[timing] deps install start: $(date -u '+%H:%M:%S')" \
    && pnpm install --frozen-lockfile \
    && echo "[timing] deps install end: $(date -u '+%H:%M:%S')"

# Copy application source and build
COPY . .
RUN echo "[timing] app build start: $(date -u '+%H:%M:%S')" \
    && pnpm run build \
    && echo "[timing] app build end: $(date -u '+%H:%M:%S')"

RUN START=$(cat /tmp/build_start); END=$(date -u +%s); \
    echo "[timing] TOTAL BUILD TIME: $((END - START))s"

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

RUN npm install -g pnpm

# Copy built app from builder stage
COPY --from=builder /app /app

EXPOSE 3000

CMD ["pnpm", "run", "start"]
