const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.js");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 30001;

server.use(middlewares);
server.use(router)

server.listen(port)