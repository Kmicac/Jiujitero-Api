FROM node:20-alpine3.19

# Set working directory
RUN mkdir -p /var/www/jiujitero
WORKDIR /var/www/jiujitero

# Copiar el directorio y su contenido
COPY . ./var/www/jiujitero
COPY package.json tsconfig.json tsconfig.build.json /var/www/jiujitero/
RUN npm install
RUN npm build 

# Dar permiso para ejecutar la app 
RUN adduser --disabled password jiujitsuser
RUN chown -R jiujitsuser:jiujitsuser var/www/jiujitero
USER jiujitsuser

# Limpiar el caché 
RUN npm cache clean --force

EXPOSE 3000

CMD [ "node", "dist/main"]