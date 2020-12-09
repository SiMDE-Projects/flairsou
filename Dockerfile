FROM node:15.3-buster-slim
LABEL maintainer="pro@remyhuet.fr"

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

COPY . .
RUN npx tsc

ENV SERVER_PORT 3000

CMD ["node", "dist/index.js"]