FROM node:alpine3.17

ARG DIR=backend1

WORKDIR /app

COPY ${DIR}/package.json ./

RUN npm install

COPY ${DIR} ./

CMD ["npm", "run", "start"]