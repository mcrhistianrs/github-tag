import { GitHub } from "../../entities/GitHub";
import { IGitHubRepository } from "../../repositories/IGitHubRepository";

interface IRequest {
  name: string;
}

class FindTagUseCase {
  constructor(private githubrepository: IGitHubRepository) {}
  async execute({ name }: IRequest): Promise<GitHub[]> {
    return this.githubrepository.findTag(name);
  }
}

export { FindTagUseCase };
