import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ description, name }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoryRepository };
