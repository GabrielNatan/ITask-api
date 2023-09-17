import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserServices';

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
}

export default UsersController;
