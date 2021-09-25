import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ description, name }: IRequest) {
    const categoryAdlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAdlreadyExists) throw new Error("Category already exists!");

    this.categoryRepository.create({ description, name });
  }
}

export { CreateCategoryService };
