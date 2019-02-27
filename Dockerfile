FROM node:10
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install

#FROM yurikrupnik/mussia-static-html
#WORKDIR /usr/src/app
#COPY --from=builder /app/dist/assets/bundles-report ./bundles-report
#ENV ROOT_PATH bundles-report
#EXPOSE 80
#CMD ["npm", "start"]

