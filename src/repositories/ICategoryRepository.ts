import { Category } from "../models/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}

export { ICategoryRepository };
