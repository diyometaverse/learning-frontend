FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install -g http-server

EXPOSE 8000

CMD ["http-server", "-p", "8000"]
