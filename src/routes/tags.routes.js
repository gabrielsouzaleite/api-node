const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticared = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticared, tagsController.index);

module.exports = tagsRoutes;
