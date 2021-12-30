import { Customer } from './customer.model';

export class datasource {
  private customers: Customer[];

  constructor() {
    this.customers = new Array<Customer>(
      new Customer(
        'cust1',
        'projname',
        'globMaster',
        'custIndi',
        'techPerson',
        'custFor'
      ),
      new Customer(
        'cust2',
        'projname2',
        'globMaster2',
        'custIndi2',
        'techPerson2',
        'custFor2'
      )
    );
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
