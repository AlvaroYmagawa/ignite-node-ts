import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/inMemory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 60,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    const specificaiton = await specificationsRepositoryInMemory.create({
      description: "test",
      name: "test",
    });

    const specifications_id = [specificaiton.id];

    const specificaitonsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    console.log(specificaitonsCars);

    expect(specificaitonsCars).toHaveProperty("specifications");
    expect(specificaitonsCars.specifications.length).toBe(1);
  });

  it("should not be able to add a new specification to a unexistent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["5432"];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
