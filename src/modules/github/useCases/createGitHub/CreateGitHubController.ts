import { Response, Request } from "express";

import { CreateGitHubUseCase } from "./CreateGitHubUseCase";

class CreateGitHubController {
  constructor(private createGitHubUseCase: CreateGitHubUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    await this.createGitHubUseCase.execute({ name });

    return response.status(200).send();
  }
}
export { CreateGitHubController };
