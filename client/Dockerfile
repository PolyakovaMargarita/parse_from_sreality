ARG NODE_VERSION=18.7.0

FROM node:${NODE_VERSION}-bullseye as client

WORKDIR /app/client

COPY . .

RUN npm install && npm run build

CMD ["npm", "start"]

EXPOSE 3000

