FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install -g http-server

EXPOSE 8080

CMD ["sh", "-c", "http-server -p ${PORT:-8080}"]
