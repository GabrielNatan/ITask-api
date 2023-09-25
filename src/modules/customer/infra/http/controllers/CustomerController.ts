import CreateCustomerService from '@modules/customer/services/CreateCustomerService';
import CustomerListService from '@modules/customer/services/CustomerListService';
import CustomerShowService from '@modules/customer/services/CustomerShowService';
import DeleteCustomerService from '@modules/customer/services/DeleteCustomerService';
import UpdateCustomerService from '@modules/customer/services/UpdateCustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CustomerController {
  public async index(_: Request, response: Response): Promise<Response> {
    const customerListServices = container.resolve(CustomerListService);

    const customer = await customerListServices.execute();

    return response.json(customer);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const customerShowServices = container.resolve(CustomerShowService);

    const customer = await customerShowServices.execute(Number(id));

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;

    const customerCreateService = container.resolve(CreateCustomerService);

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

    const customerUpdateService = container.resolve(UpdateCustomerService);

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

    const customerDeleteService = container.resolve(DeleteCustomerService);

    const customer = await customerDeleteService.execute({
      id,
    });

    return response.json(customer);
  }
}

export default CustomerController;
