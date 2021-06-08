import { Response, Request } from "express";

import { CreateTagUseCase } from "./CreateTagUseCase";

class CreateTagController {
  constructor(private createTagUseCase: CreateTagUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, github_id } = request.body;
    const result = await this.createTagUseCase.execute({ github_id, name });
    if (result) {
      return response.status(200).json(true);
    }
    return response.status(401).json(false);
  }
}
export { CreateTagController };
