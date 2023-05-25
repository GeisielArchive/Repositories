import { Router } from "express";
import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";
import RepositoryController from "./controllers/RepositoryController";

const routes = new Router();

routes.get("/hello", HelloController.index);

// Rest
routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

// Repository
routes.get("/users/:user_id/repository", RepositoryController.index);
routes.post("/users/:user_id/repository", RepositoryController.create);
routes.delete("/users/:user_id/repository", RepositoryController.destroy);

export default routes;