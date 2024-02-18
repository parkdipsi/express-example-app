FROM node:18-alpine
WORKDIR /opt/app
COPY . .
RUN npm install -g
EXPOSE 8080
CMD [ "npm", "start"]