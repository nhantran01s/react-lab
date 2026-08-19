FROM node:22-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
FROM nginx:alpine AS deloy
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
