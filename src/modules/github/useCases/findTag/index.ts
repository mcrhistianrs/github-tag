import { SQLiteGitHubRepository } from "../../repositories/implementations/SQLiteGitHubRepository";
import { FindTagController } from "./FindTagController";
import { FindTagUseCase } from "./FindTagUseCase";

export default (): FindTagController => {
  const githubRepository = new SQLiteGitHubRepository();

  const findTagUseCase = new FindTagUseCase(githubRepository);

  const findTagController = new FindTagController(findTagUseCase);

  return findTagController;
};
