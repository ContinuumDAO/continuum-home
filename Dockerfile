# syntax=docker/dockerfile:1

FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve@14.2.4

COPY --from=build /app/out ./out

ENV NODE_ENV=production
EXPOSE 8888
CMD ["sh", "-c", "exec serve out --listen tcp://0.0.0.0:${PORT:-8888}"]
