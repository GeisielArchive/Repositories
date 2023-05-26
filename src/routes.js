import { Router } from "express";
import auth from "./middlewares/auth";
import UsersController from "./controllers/UsersController";
import RepositoryController from "./controllers/RepositoryController";
import SessionsController from "./controllers/SessionsController";

const routes = new Router();

routes.post("/sessions", SessionsController.create);

routes.use(auth);

// Rest
routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

// Repository
routes.get("/users/repositories/:user_id", RepositoryController.index);
routes.post("/users/repositories/:user_id", RepositoryController.create);
routes.delete("/users/repositories/:user_id", RepositoryController.destroy);

export default routes;