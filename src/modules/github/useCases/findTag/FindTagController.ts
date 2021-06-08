import { Response, Request } from "express";

import { FindTagUseCase } from "./FindTagUseCase";

class FindTagController {
  constructor(private findTagUseCase: FindTagUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const result = await this.findTagUseCase.execute({ name });
    return response.status(200).json(result);
  }
}
export { FindTagController };
