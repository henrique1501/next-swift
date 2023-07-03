import { Image } from '@app/entities/Product/Image'
import { IProductImagesRepository } from '@app/repositories/IProductImagesRepository'
import { prisma } from '..'
import { ProductImagesMapper } from '../mappers/ProductImagesMapper'

export class PrismaProductImagesRepository implements IProductImagesRepository {
  async findManyById(imageIds: string[]): Promise<Image[] | null> {
    const images = await prisma.productImage.findMany({
      where: {
        id: {
          in: imageIds,
        },
      },
    })

    if (!images) {
      return null
    }

    return images.map((image) => ProductImagesMapper.toDomain(image))
  }

  async create(images: Image[]): Promise<void> {
    const raw = ProductImagesMapper.toPrisma(images)

    await prisma.productImage.createMany({
      data: raw,
    })
  }

  async delete(imagesIds: string[], productId: string): Promise<void> {
    await prisma.productImage.deleteMany({
      where: {
        id: {
          in: imagesIds,
        },
        AND: {
          productId,
        },
      },
    })
  }
}
