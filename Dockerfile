# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
# Instalar git para clonar o repositório
RUN apk add --no-cache git openssh
# Clonar o repositório (substitua pela branch desejada se necessário)
RUN git clone git@github.com:diogoqz/landingv2.git .
RUN npm install && npm run build

# Etapa 2: Produção
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/index.html ./index.html
EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"] 