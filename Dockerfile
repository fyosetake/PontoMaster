# Usa a imagem oficial do nodejs
FROM node:16.20.2

# Cria e define o diretório de trabalho
WORKDIR ./app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY ./app .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "index.js"]
