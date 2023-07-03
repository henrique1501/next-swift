import { Supplier } from '@app/entities/Supplier'
import { ISuppliersRepository } from '@app/repositories/ISuppliersRepository'
import { Generate } from '@helpers/generate'
import { redis } from '@infra/database/redis'

interface Request {
  search: string
  page?: number
  limit?: number
}

interface Response {
  suppliers: Supplier[] | []
}

export class GetManySuppliersUseCase {
  constructor(private SuppliersRepo: ISuppliersRepository) {}

  async execute({ search, page = 0, limit = 10 }: Request): Promise<Response> {
    const cachedSuppliers = await redis.get('suppliers:many')

    if (cachedSuppliers) {
      const parsedSuppliers = JSON.parse(cachedSuppliers)

      return {
        suppliers: parsedSuppliers.map(Generate.supplier),
      }
    }

    const suppliers = await this.SuppliersRepo.paginate({
      search,
      page,
      limit,
    })

    if (!suppliers) {
      return {
        suppliers: [],
      }
    }

    await redis.set(
      'suppliers:many',
      JSON.stringify(suppliers.map(Generate.redisSupplier)),
      'EX',
      '20',
    )

    return {
      suppliers,
    }
  }
}
