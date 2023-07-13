import { Customer } from '@app/entities/Customer'

export type PaginateParams = {
  page: number
  limit: number
}

export interface ICustomersRepository {
  findById(customerId: string): Promise<Customer | null>
  findByEmail(email: string): Promise<Customer | null>
  paginate(params: PaginateParams): Promise<Customer[] | null>
  create(customer: Customer): Promise<void>
  save(customer: Customer): Promise<void>
}
