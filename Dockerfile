# Use uma imagem base do Node.js para construir a aplicação
FROM node:20 AS builder
# Defina o diretório de trabalho no contêiner
WORKDIR /app
# Copie os arquivos de configuração e dependências do projeto
COPY package.json yarn.lock ./
# Instale as dependências usando Yarn
RUN yarn install
# Copie o restante do código do projeto
COPY . .
# Compile o projeto (gera os arquivos estáticos na pasta dist)
RUN NODE_OPTIONS="--max-old-space-size=2048" yarn build

# Use uma imagem mais leve para servir os arquivos estáticos
FROM nginx:stable-alpine
# Copie os arquivos estáticos para o diretório de publicação do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Exponha a porta 80 para servir o frontend
EXPOSE 80
# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]