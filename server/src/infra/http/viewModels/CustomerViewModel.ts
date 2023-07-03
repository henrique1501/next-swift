import { Customer } from '@app/entities/Customer'

export class CustomerViewModel {
  static toHttp(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      ddd: customer.ddd,
      phone: customer.phone,
    }
  }
}
