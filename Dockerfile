FROM node:16-alpine

WORKDIR /src

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD ["yarn", "dev"]