FROM node:20 AS builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install

FROM node:20
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app /usr/src/app/
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]