import { Request, Response } from 'express';
import UpdateUserServices from '@modules/users/services/UpdateUserServices';
import ShowUserService from '@modules/users/services/ShowUserService';
import ListUserService from '@modules/users/services/ListUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import CreateUserService from '@modules/users/services/CreateUserServices';
import { container } from 'tsyringe';

class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUserService);
    const users = await listUserService.execute();
    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUserService = container.resolve(ShowUserService);

    const user = await showUserService.execute({ id: Number(id) });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;
    const createUserService = container.resolve(CreateUserService);

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
    const updateUserService = container.resolve(UpdateUserServices);

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

    const deleteUserService = container.resolve(DeleteUserService);

    await deleteUserService.execute(Number(id));

    return response.status(201).send();
  }
}

export default UsersController;
