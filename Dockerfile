FROM node:16.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.development /app/.env

EXPOSE 3001

CMD ["npm", "start"]