import { GitHub } from "../entities/GitHub";

interface ICreateGitHubDTO {
  name: string;
}

interface IGitHubRepository {
  list(): Promise<GitHub[]>;
  create({ name }: ICreateGitHubDTO): void;
  updateTag(github_id: string, name: string): Promise<boolean>;
  findTag(name: string): Promise<GitHub[]>;
}

export { IGitHubRepository, ICreateGitHubDTO };
