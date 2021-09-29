import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists!");

    this.categoryRepository.create({ description, name });
  }
}

export { CreateCategoryUseCase };
