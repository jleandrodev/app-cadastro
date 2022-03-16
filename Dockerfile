FROM node:16

COPY . /usr/api

WORKDIR /usr/api

RUN npm install

ENTRYPOINT ["npm", "start"]

EXPOSE 3333
