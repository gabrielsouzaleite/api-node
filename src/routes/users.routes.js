const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenticared = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router();

function myMiddleware(request, response, next) {
  next();
}

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticared, usersController.update);

module.exports = usersRoutes;
