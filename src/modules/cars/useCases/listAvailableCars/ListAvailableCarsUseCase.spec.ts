import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 110.0,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 110,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "Brand" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "category",
      daily_rate: 110.0,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name1",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Car name1" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Brand",
      category_id: "12345",
      daily_rate: 110.0,
      description: "Car descriptuion",
      fine_amount: 60,
      license_plate: "ABC-123",
      name: "Car name1",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
