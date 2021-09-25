import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find((cateogry) => cateogry.name === name);
  }
}

export { CategoryRepository };
