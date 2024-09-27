FROM node:14

# directorio de la aplicacion
WORKDIR /usr/src/app

COPY package*.json ./

# isntalación de las dependecias
RUN npm install

COPY . .

# Puerto que al cual se dio uso
EXPOSE 8082

# comadno para iniciar la app
CMD ["node", "index.js"]
