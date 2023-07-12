import { Product } from '@app/entities/Product'
import {
  IProductsRepository,
  PaginateProductParams,
  SearchProductParams,
} from '@app/repositories/IProductsRepository'
import { prisma } from '..'
import { PrismaProductMapper } from '../mappers/PrismaProductMapper'

export class PrismaProductsRepository implements IProductsRepository {
  async findById(productId: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        images: true,
        categories: true,
      },
    })

    if (!product) {
      return null
    }

    const result = PrismaProductMapper.toDomain({
      product,
      images: product.images,
      categories: product.categories,
    })

    return result
  }

  async findManyByIds(productsIds: string[]): Promise<Product[] | null> {
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productsIds,
        },
      },
      include: {
        images: true,
        categories: true,
      },
    })

    if (products.length === 0) {
      return null
    }

    const result = products.map((product) =>
      PrismaProductMapper.toDomain({
        product,
        images: product.images,
        categories: product.categories,
      }),
    )

    return result
  }

  async create(product: Product): Promise<void> {
    const raw = PrismaProductMapper.toPrisma(product)

    await prisma.product.create({
      data: raw,
    })

    if (product.images) {
      const images = product.images.map((image) => {
        return {
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
          productId: product.id,
        }
      })

      await prisma.productImage.createMany({
        data: images,
      })
    }
  }

  async save(product: Product): Promise<void> {
    const raw = PrismaProductMapper.toPrisma(product)

    await prisma.product.update({
      data: {
        ...raw,
        categories: {
          connect: product.categories?.map((category) => ({ id: category.id })),
        },
      },
      where: {
        id: product.id,
      },
    })
  }

  async paginate({
    categoryId,
    limit,
    page,
  }: PaginateProductParams): Promise<Product[] | null> {
    const result = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            id: { contains: categoryId },
          },
        },
      },
      take: limit,
      skip: page,
      include: {
        images: true,
        categories: true,
      },
    })

    if (!result) {
      return null
    }

    return result.map((product) =>
      PrismaProductMapper.toDomain({
        product,
        images: product.images,
        categories: product.categories,
      }),
    )
  }

  async search({
    startDate,
    endDate,
    search,
    page,
  }: SearchProductParams): Promise<Product[] | null> {
    const result = await prisma.product.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: search } },
              { description: { contains: search } },
            ],
          },
          {
            createdAt: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        ],
      },
      take: 6,
      skip: page,
      include: {
        images: true,
        categories: true,
      },
    })

    if (!result) {
      return null
    }

    return result.map((product) =>
      PrismaProductMapper.toDomain({
        product,
        images: product.images,
        categories: product.categories,
      }),
    )
  }
}
