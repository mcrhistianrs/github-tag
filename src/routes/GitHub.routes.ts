import { Router } from "express";

import createGitHubController from "../modules/github/useCases/createGitHub";
import listGitHubController from "../modules/github/useCases/listGitHub";

const GitHubRepositoryRoutes = Router();

GitHubRepositoryRoutes.post("/create", async (request, response) => {
  return createGitHubController().handle(request, response);
});

GitHubRepositoryRoutes.get("/list", (request, response) => {
  return listGitHubController().handle(request, response);
});

export { GitHubRepositoryRoutes };
