import axios from "axios";
import { getRepository, Like } from "typeorm";
import { Repository } from "typeorm/repository/Repository";

import { GitHub } from "../../entities/GitHub";
import { ICreateGitHubDTO, IGitHubRepository } from "../IGitHubRepository";

class SQLiteGitHubRepository implements IGitHubRepository {
  private repository: Repository<GitHub>;

  constructor() {
    this.repository = getRepository(GitHub);
  }
  async findTag(name: string): Promise<GitHub[]> {
    const all = await this.repository.find({
      where: {
        tag: Like(`%${name}%`),
      },
    });
    return all;
  }

  async updateTag(github_id: string, name: string): Promise<boolean> {
    const repository = await this.repository.findOne({
      id: github_id,
    });
    if (repository !== undefined) {
      const list_of_tags = name
        .toLocaleLowerCase()
        .split(" ")
        .join("")
        .split(",");

      // eslint-disable-next-line no-plusplus
      const result = list_of_tags.reduce(function (obj, item) {
        // eslint-disable-next-line no-param-reassign
        obj[item] = (obj[item] || 0) + 1;
        return obj;
      }, {});

      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < list_of_tags.length; index++) {
        if (result[list_of_tags[index]] > 1) {
          return false;
        }
      }

      repository.tag = name.toLocaleLowerCase();
      await this.repository.save(repository);
      return true;
    }
    return false;
  }

  async list(): Promise<GitHub[]> {
    const all = await this.repository.find();
    return all;
  }

  async create({ name }: ICreateGitHubDTO): Promise<void> {
    const repositories_list = await axios.get(
      `https://api.github.com/users/${name}/repos`
    );

    const starred_repositories_list = repositories_list.data.filter(
      (repository) => repository.stargazers_count > 0
    );

    starred_repositories_list.map(async (repository) => {
      const {
        id,
        name: repository_name,
        description,
        html_url,
        language,
      } = repository;
      const GitHubModel = new GitHub();

      const github = Object.assign(GitHubModel, {
        name,
        repository_id: id,
        repository_name,
        repository_description: description,
        repository_html_url: html_url,
        repository_language: language,
        tag: "",
      });

      await this.repository.save(github);
    });
  }
}

export { SQLiteGitHubRepository };
