ARG NODE_VERSION=18.7.0

FROM node:${NODE_VERSION} as client

WORKDIR app/client

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest
COPY --from=client /app/client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]