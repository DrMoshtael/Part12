FROM node:20 AS setup-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci


FROM setup-stage AS build-stage

WORKDIR /usr/src/app

RUN npm run build


FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html