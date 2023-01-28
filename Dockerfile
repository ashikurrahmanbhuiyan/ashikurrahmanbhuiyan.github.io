FROM node:alpine
copy . /app
CMD ["node", "/app/index.js"]
