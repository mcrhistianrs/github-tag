import { GitHub } from "../../entities/GitHub";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";

class ListGitHubUseCase {
  constructor(private githubrepository: IGitHubRepository) {}
  async execute(): Promise<GitHub[]> {
    const categories = await this.githubrepository.list();
    return categories;
  }
}

export { ListGitHubUseCase };
