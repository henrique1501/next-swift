import { Image } from '@app/entities/Product/Image'
import { ProductNotFound } from '@app/errors/ProductNotFound'
import { IStorageProvider } from '@app/providers/IStorageProvider'
import { IProductImagesRepository } from '@app/repositories/IProductImagesRepository'
import { IProductsRepository } from '@app/repositories/IProductsRepository'

interface Request {
  productId: string
  images: string[]
}

type Response = void

export class UploadProductImagesUseCase {
  constructor(
    private productsRepo: IProductsRepository,
    private productImagesRepo: IProductImagesRepository,
    private storageProvider: IStorageProvider,
  ) {}

  async execute({ productId, images }: Request): Promise<Response> {
    const productExists = await this.productsRepo.findById(productId)

    if (!productExists) {
      throw new ProductNotFound()
    }

    const productImages = images.map((image) => {
      return new Image({
        url: image,
      })
    })

    await this.productImagesRepo.create(productImages)

    for (const image of images) {
      await this.storageProvider.save(image, 'product')
    }
  }
}
