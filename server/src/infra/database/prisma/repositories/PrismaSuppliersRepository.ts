import { Supplier } from '@app/entities/Supplier'
import {
  ISuppliersRepository,
  SupplierPaginateParams,
} from '@app/repositories/ISuppliersRepository'
import { prisma } from '..'
import { PrismaSuppliersMapper } from '../mappers/PrismaSuppliersMapper'

export class PrismaSuppliersRepository implements ISuppliersRepository {
  async findById(SupplierId: string): Promise<Supplier | null> {
    const Supplier = await prisma.supplier.findUnique({
      where: {
        id: SupplierId,
      },
    })

    if (!Supplier) {
      return null
    }

    return PrismaSuppliersMapper.toDomain(Supplier)
  }

  async findByEmail(email: string): Promise<Supplier | null> {
    const Supplier = await prisma.supplier.findUnique({
      where: {
        email,
      },
    })

    if (!Supplier) {
      return null
    }

    return PrismaSuppliersMapper.toDomain(Supplier)
  }

  async paginate({
    search,
    page,
    limit,
  }: SupplierPaginateParams): Promise<Supplier[] | null> {
    const result = await prisma.supplier.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      skip: page,
      take: limit,
    })

    if (!result) {
      return null
    }

    return result.map(PrismaSuppliersMapper.toDomain)
  }

  async create(Supplier: Supplier): Promise<void> {
    const raw = PrismaSuppliersMapper.toPrisma(Supplier)

    await prisma.supplier.create({
      data: {
        ...raw,
      },
    })
  }

  async save(Supplier: Supplier): Promise<void> {
    const raw = PrismaSuppliersMapper.toPrisma(Supplier)

    await prisma.supplier.update({
      data: raw,
      where: {
        id: Supplier.id,
      },
    })
  }
}
