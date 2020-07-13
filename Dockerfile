FROM node:12.18.2

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000
ENV NODE_ENV production
CMD ["npm", "start"]
