FROM node:alpine3.16 as builder

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:alpine3.16 

ARG PORT

WORKDIR /app

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json .

ENV PORT=$PORT

CMD ["npm", "run", "start"]
