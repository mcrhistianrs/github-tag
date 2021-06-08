import { Request, Response } from "express";

import { ListGitHubUseCase } from "./ListGitHubUseCase";

class ListGitHubController {
  constructor(private listGitHubUseCase: ListGitHubUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listGitHubUseCase.execute();
    return response.status(200).json(all);
  }
}

export { ListGitHubController };
