import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCArSpecificationController {
  async handle(request: Request, response: Response): Promise<REsponse> {
    const { car_id, specifications_id } = request.body;

    const createCarSpecificatioNUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const cars = await createCarSpecificatioNUseCase.execute({
      car_id,
      specifications_id,
    });

    return response.json(cars);
  }
}

export { CreateCArSpecificationController };
