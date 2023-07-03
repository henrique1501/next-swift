import { Customer } from '@app/entities/Customer'
import {
  ICustomersRepository,
  PaginateParams,
} from '@app/repositories/ICustomersRepository'
import { prisma } from '..'
import { PrismaCustomersMapper } from '../mappers/PrismaCustomersMapper'

export class PrismaCustomersRepository implements ICustomersRepository {
  async findById(customerId: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    })

    if (!customer) {
      return null
    }

    return PrismaCustomersMapper.toDomain(customer)
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({
      where: {
        email,
      },
    })

    if (!customer) {
      return null
    }

    return PrismaCustomersMapper.toDomain(customer)
  }

  async paginate({
    search,
    page,
    limit,
  }: PaginateParams): Promise<Customer[] | null> {
    const result = await prisma.customer.findMany({
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

    return result.map(PrismaCustomersMapper.toDomain)
  }

  async create(customer: Customer): Promise<void> {
    const raw = PrismaCustomersMapper.toPrisma(customer)

    await prisma.customer.create({
      data: raw,
    })
  }

  async save(customer: Customer): Promise<void> {
    const raw = PrismaCustomersMapper.toPrisma(customer)

    await prisma.customer.update({
      data: raw,
      where: {
        id: customer.id,
      },
    })
  }
}
