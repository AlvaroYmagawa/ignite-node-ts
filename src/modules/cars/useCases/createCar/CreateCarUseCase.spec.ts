import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Brand",
      category_id: "category",
      daily_rate: 60,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Brand",
        category_id: "category",
        daily_rate: 60,
        description: "Car descriptuion",
        fine_amount: 60,
        license_plate: "ABC-123",
        name: "Car name 1",
      });

      await createCarUseCase.execute({
        brand: "Brand",
        category_id: "category",
        daily_rate: 60,
        description: "Car descriptuion",
        fine_amount: 60,
        license_plate: "ABC-123",
        name: "Car name 2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABCD-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
