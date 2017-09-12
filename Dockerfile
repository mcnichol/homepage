FROM node:8.4.0

MAINTAINER Dad and August

RUN mkdir app

COPY . app

WORKDIR app

RUN yarn install
CMD ["yarn", "run", "dev"]
