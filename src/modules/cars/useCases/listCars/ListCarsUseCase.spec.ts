import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 60,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 60,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    await carsRepositoryInMemory.create({
      brand: "Brand2",
      category_id: "category",
      daily_rate: 60,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    const cars = await listCarsUseCase.execute({ brand: "Brand" });

    expect(cars).toEqual([car]);
  });
});
