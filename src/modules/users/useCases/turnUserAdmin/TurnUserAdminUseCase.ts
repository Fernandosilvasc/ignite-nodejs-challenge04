import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const isUserValid = this.usersRepository.findById(user_id);
    if (!isUserValid) {
      throw new Error("Sorry the user is not exists!");
    }

    const user = this.usersRepository.turnAdmin(isUserValid);

    return user;
  }
}

export { TurnUserAdminUseCase };
