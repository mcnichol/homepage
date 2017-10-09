FROM node:8.6.0

RUN yarn global add serve
CMD serve -s build
EXPOSE 5000

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn 

COPY . .

RUN yarn build
