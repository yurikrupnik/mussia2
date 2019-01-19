

FROM node:10
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY .babelrc .
COPY .env .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY sassHelper.js .
COPY src ./src

RUN npm run build:client
#EXPOSE 5000 5001
