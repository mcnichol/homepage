FROM node:8.6.0

RUN yarn global add serve
CMD serve -s build -p 80
EXPOSE 80

RUN git clone https://github.com/mcnichol/homepage.git
WORKDIR homepage
RUN yarn 

RUN yarn build
