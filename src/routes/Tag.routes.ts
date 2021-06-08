import { Router } from "express";

import createTagController from "../modules/github/useCases/createTag";
import findTagController from "../modules/github/useCases/findTag";

const TagRepositoryRoutes = Router();

TagRepositoryRoutes.post("/update", async (request, response) => {
  return createTagController().handle(request, response);
});

TagRepositoryRoutes.get("/find", async (request, response) => {
  return findTagController().handle(request, response);
});

export { TagRepositoryRoutes };
