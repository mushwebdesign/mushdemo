import { Customer } from './customer.model';
import { datasource } from './datasource.model';

export class CustomerRepository {
  private customers: Customer[];
  private datasource: datasource;

  constructor() {
    this.customers = new Array<Customer>();
    this.datasource = new datasource();
    this.datasource.getCustomers().forEach((cust) => this.customers.push(cust));
  }

  getJSONCustomers(city: String): any {
    console.log('Hello Mushadha');
    console.log(JSON.stringify(this.customers));
    return JSON.stringify(this.customers);
  }
}
