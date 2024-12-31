# Realizar o build localmente
FROM node:latest AS builder
WORKDIR /app
COPY package*.json ./
COPY yarn*.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# Usar apenas os arquivos gerados em produção
FROM nginx:latest AS production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
