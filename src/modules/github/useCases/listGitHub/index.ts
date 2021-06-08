import { SQLiteGitHubRepository } from "../../repositories/implementations/SQLiteGitHubRepository";
import { ListGitHubController } from "./ListGitHubController";
import { ListGitHubUseCase } from "./ListGitHubUseCase";

export default (): ListGitHubController => {
  const githubRepository = new SQLiteGitHubRepository();

  const listGitHubUseCase = new ListGitHubUseCase(githubRepository);

  const listGitHubController = new ListGitHubController(listGitHubUseCase);

  return listGitHubController;
};
