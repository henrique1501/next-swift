import { Category } from '@app/entities/Category'
import { ICategoriesRepository } from '@app/repositories/ICategoriesRepository'
import { prisma } from '..'
import { PrismaCategoriesMapper } from '../mappers/PrismaCategoriesMapper'

export class PrismaCategoriesRepository implements ICategoriesRepository {
  async findById(categoryId: string): Promise<Category | null> {
    const result = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    if (!result) {
      return null
    }

    return PrismaCategoriesMapper.toDomain(result)
  }

  async findManyByIds(categoriesIds: string[]): Promise<Category[] | null> {
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: categoriesIds,
        },
      },
    })

    if (!categories) {
      return null
    }

    return categories.map(PrismaCategoriesMapper.toDomain)
  }

  async findAll(): Promise<Category[]> {
    const categories = await prisma.category.findMany()

    return categories.map(PrismaCategoriesMapper.toDomain)
  }

  async findByName(name: string): Promise<Category | null> {
    const result = await prisma.category.findUnique({
      where: {
        name,
      },
    })

    if (!result) {
      return null
    }

    return PrismaCategoriesMapper.toDomain(result)
  }

  async create(category: Category): Promise<void> {
    const raw = PrismaCategoriesMapper.toPrisma(category)

    await prisma.category.create({
      data: raw,
    })
  }

  async delete(categoryId: string): Promise<void> {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    })
  }
}
