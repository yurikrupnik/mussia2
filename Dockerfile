

FROM node:10.10.0
#ENV NODE_ENV_DOCKER=true
#ARG NODE_ENV_DOCKER=true
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
