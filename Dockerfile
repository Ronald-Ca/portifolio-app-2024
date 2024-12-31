FROM node:latest AS builder
WORKDIR /app
COPY package*.json .
COPY yarn*.lock .
RUN rm -f package-lock.json && yarn install
RUN yarn
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=2048" yarn build

FROM nginx:latest AS production
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
