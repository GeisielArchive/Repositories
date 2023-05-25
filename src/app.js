const express = require("express");
const cors = require("cors");
const { Router } = require("express");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    const routes = Router();

    routes.get("/hello", (req, res) => {
      res.json({ hello: "Hello World!" });
    });

    this.server.use(routes);
  }
}

module.exports = new App().server;
