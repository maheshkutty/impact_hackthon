FROM node:12-alpine
RUN npm install
RUN npm start
CMD ["npm", "start"]
EXPOSE 3000