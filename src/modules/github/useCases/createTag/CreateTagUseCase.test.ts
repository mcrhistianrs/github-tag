import { SQLiteGitHubRepository } from "../../repositories/implementations/SQLiteGitHubRepository";
import { CreateTagUseCase } from "./CreateTagUseCase";

describe("Happy Flow", () => {
  it(" should be able to add a tag", () => {
    const githubRepository = new SQLiteGitHubRepository();
    const createTagUseCase = new CreateTagUseCase(githubRepository);
  });
});
