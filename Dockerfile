FROM node:21-alpine3.20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#FROM busybox:1.30 AS runner
#WORKDIR /app
#COPY --from=builder /app/dist .
#CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]