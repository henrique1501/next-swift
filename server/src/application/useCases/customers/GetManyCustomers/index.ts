import { Customer } from '@app/entities/Customer'
import { ICustomersRepository } from '@app/repositories/ICustomersRepository'
import { Generate } from '@helpers/generate'
import { redis } from '@infra/database/redis'

interface Request {
  page?: number
  limit?: number
}

interface Response {
  customers: Customer[]
}

export class GetManyCustomersUseCase {
  constructor(private customersRepo: ICustomersRepository) {}

  async execute({ page = 0, limit = 10 }: Request): Promise<Response> {
    const cachedCustomers = await redis.get('customers:many')

    if (cachedCustomers) {
      const parsedCustomers = JSON.parse(cachedCustomers)

      return {
        customers: parsedCustomers.map(Generate.customer),
      }
    }

    const customers = await this.customersRepo.paginate({
      page,
      limit,
    })

    if (!customers) {
      return {
        customers: [],
      }
    }

    await redis.set(
      'customers:many',
      JSON.stringify(customers.map(Generate.redisCustomer)),
      'EX',
      20,
    )

    return {
      customers,
    }
  }
}
