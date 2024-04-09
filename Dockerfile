# Instalar dependencia solo cuando sea necesario.
FROM node:20-alpine3.19 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Build la app solo con dependencia del cache
FROM node:20-alpine3.19 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build 

# Imagen de produccion, copia todas las carpetas y corre
FROM node:20-alpine3.19 AS runner

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --password

COPY --from=builder /app/dist ./dist 

CMD [ "node", "dist/main"]

# Copiar el directorio y su contenido
# COPY . ./var/www/jiujitero
# COPY package.json tsconfig.json tsconfig.build.json /var/www/jiujitero/
# RUN npm install
# RUN npm build 

# Dar permiso para ejecutar la app 
# RUN adduser --disabled password jiujitsuser
# RUN chown -R jiujitsuser:jiujitsuser var/www/jiujitero
# USER jiujitsuser

# Limpiar el caché 
# RUN npm cache clean --force

# EXPOSE 3000
