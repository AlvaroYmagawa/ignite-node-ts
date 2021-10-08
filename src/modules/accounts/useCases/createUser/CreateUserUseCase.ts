import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      driver_license,
      email,
      name,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };