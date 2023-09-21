import { Request, Response } from 'express';
import CustomerListService from '../services/CustomerListService';
import CustomerShowService from '../services/CustomerShowService';
import CreateCustomerService from '../services/CreateCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

class CustomerController {
  public async index(_: Request, response: Response): Promise<Response> {
    const customerListServices = new CustomerListService();

    const customer = await customerListServices.execute();

    return response.json(customer);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const customerShowServices = new CustomerShowService();

    const customer = await customerShowServices.execute(Number(id));

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;

    const customerCreateService = new CreateCustomerService();

    const customer = await customerCreateService.execute({
      first_name,
      last_name,
      email,
      password,
    });

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { first_name, last_name, email, password } = request.body;

    const customerUpdateService = new UpdateCustomerService();

    const customer = await customerUpdateService.execute({
      id,
      first_name,
      last_name,
      email,
      password,
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const customerDeleteService = new DeleteCustomerService();

    const customer = await customerDeleteService.execute({
      id,
    });

    return response.json(customer);
  }
}

export default CustomerController;
