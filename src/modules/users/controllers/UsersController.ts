import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserServices';
import UpdateUserServices from '../services/UpdateUserServices';
import ShowUserService from '../services/ShowUserService';
import ListUserService from '../services/ListUserService';
import DeleteUserService from '../services/DeleteUserService';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();
    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUserService = new ShowUserService();

    const user = await showUserService.execute({ id: Number(id) });

    return response.json(user);
  }

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute(Number(id));

    return response.status(201).send();
  }
}

export default UsersController;
