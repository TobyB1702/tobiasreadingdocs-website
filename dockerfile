FROM node:20-alpine AS build-stage
WORKDIR /app

# ensure build-time VITE_BACKEND_URL becomes a placeholder in dist
ENV VITE_BACKEND_URL="__VITE_BACKEND_URL__"

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with nginx and do runtime injection
FROM nginx:alpine AS production
WORKDIR /app

# copy built files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist /usr/share/nginx/html

# copy entrypoint that will replace placeholder with actual runtime env var
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]