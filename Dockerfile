FROM node:20-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install

COPY . .

EXPOSE 3000