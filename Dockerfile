# Usar una imagen base de Node
FROM node:14

# Establecer un directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Ejecutar la aplicación
CMD ["npm", "start"]
