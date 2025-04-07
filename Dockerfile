# Стадія збірки
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Стадія продакшн
FROM nginx:stable-alpine AS production-stage

# Копіюємо згенеровані файли
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копіюємо SSL-сертифікати
COPY /local/path/ssl /etc/nginx/ssl

# Копіюємо кастомний файл конфігурації NGINX
COPY /local/path/conf.d/default.template.conf /etc/nginx/conf.d/default.conf

# Відкриваємо порти 8080 (HTTP) та 8443 (HTTPS)
EXPOSE 80
EXPOSE 443


CMD ["nginx", "-g", "daemon off;"]
