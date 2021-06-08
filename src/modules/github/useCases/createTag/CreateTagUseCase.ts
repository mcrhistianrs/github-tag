import { IGitHubRepository } from "../../repositories/IGitHubRepository";

interface IRequest {
  name: string;
  github_id: string;
}

class CreateTagUseCase {
  constructor(private githubrepository: IGitHubRepository) {}
  async execute({ github_id, name }: IRequest): Promise<boolean> {
    return this.githubrepository.updateTag(github_id, name);
  }
}

export { CreateTagUseCase };
