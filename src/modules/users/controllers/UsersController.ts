import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserServices';
import UpdateUserServices from '../services/UpdateUserServices';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      first_name,
      last_name,
      email,
      password,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { first_name, last_name, email, password } = request.body;
    const updateUserService = new UpdateUserServices();

    const user = await updateUserService.execute({
      id: Number(id),
      first_name,
      last_name,
      email,
      password,
    });

    return response.json(user);
  }
}

export default UsersController;
