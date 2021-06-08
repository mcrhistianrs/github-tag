import { SQLiteGitHubRepository } from "../../repositories/implementations/SQLiteGitHubRepository";
import { CreateGitHubController } from "./CreateGitHubController";
import { CreateGitHubUseCase } from "./CreateGitHubUseCase";

export default (): CreateGitHubController => {
  const githubRepository = new SQLiteGitHubRepository();

  const createGitHubUseCase = new CreateGitHubUseCase(githubRepository);

  const createGitHubController = new CreateGitHubController(
    createGitHubUseCase
  );

  return createGitHubController;
};
