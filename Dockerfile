# # Stage 1: Build the React app
# FROM node:alpine3.18 AS builder
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve with NGINX
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/dist .

# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:alpine3.18 as build
# Build App
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

RUN npm run build
# Serve with Nginx
FROM nginx:1.23-alpine
# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]