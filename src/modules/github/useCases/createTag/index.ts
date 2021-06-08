import { SQLiteGitHubRepository } from "../../repositories/implementations/SQLiteGitHubRepository";
import { CreateTagController } from "./CreateTagController";
import { CreateTagUseCase } from "./CreateTagUseCase";

export default (): CreateTagController => {
  const githubRepository = new SQLiteGitHubRepository();

  const createGitHubUseCase = new CreateTagUseCase(githubRepository);

  const createGitHubController = new CreateTagController(createGitHubUseCase);

  return createGitHubController;
};
