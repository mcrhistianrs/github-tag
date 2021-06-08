import { IGitHubRepository } from "../../repositories/IGitHubRepository";

interface IRequest {
  name: string;
}

class CreateGitHubUseCase {
  constructor(private githubrepository: IGitHubRepository) {}
  async execute({ name }: IRequest): Promise<void> {
    if ((await this.githubrepository.list()).length === 0) {
      this.githubrepository.create({ name });
    }
  }
}

export { CreateGitHubUseCase };
