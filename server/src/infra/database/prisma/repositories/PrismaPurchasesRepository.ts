import { Purchase } from '@app/entities/Purchase'
import {
  IPurchasesRepository,
  PaginateParams,
} from '@app/repositories/IPurchasesRepository'
import { prisma } from '..'
import { PrismaPurchaseMapper } from '../mappers/PrismaPurchaseMapper'

export class PrismaPurchasesRepository implements IPurchasesRepository {
  async paginate(params: PaginateParams): Promise<Purchase[] | null> {
    const result = await prisma.purchase.findMany({
      where: {
        createdAt: {
          gte: new Date(params.startDate),
          lte: new Date(params.endDate),
        },
      },
      take: params.limit,
      skip: params.page,
    })

    if (!result) {
      return null
    }

    return result.map(PrismaPurchaseMapper.toDomain)
  }

  async create(purchase: Purchase): Promise<void> {
    const raw = PrismaPurchaseMapper.toPrisma(purchase)

    await prisma.purchase.create({
      data: raw,
    })
  }
}
