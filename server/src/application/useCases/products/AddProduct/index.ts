import { Product } from '@app/entities/Product'
import { Image } from '@app/entities/Product/Image'
import { IBarCodeProvider } from '@app/providers/IBarCodeProvider'
import { IStorageProvider } from '@app/providers/IStorageProvider'
import { IProductsRepository } from '@app/repositories/IProductsRepository'

interface Request {
  name: string
  description: string
  width: number
  height: number
  quantity: number
  price: number
  weight: number
  images: string[]
  authorId: string
}

type Response = void

export class AddProductUseCase {
  constructor(
    private productsRepo: IProductsRepository,
    private storageProvider: IStorageProvider,
    private barCodeProvider: IBarCodeProvider,
  ) {}

  async execute(data: Request): Promise<Response> {
    const {
      name,
      description,
      width,
      height,
      quantity,
      weight,
      price,
      images,
      authorId,
    } = data

    const productImages = images.map((image) => new Image({ url: image }))

    const product = new Product({
      name,
      description,
      width,
      height,
      quantity,
      price,
      categories: null,
      weight,
      images: productImages,
      authorId,
    })

    await this.productsRepo.create(product)

    if (product.images) {
      for (const image of product.images) {
        await this.storageProvider.save(image.url, 'product')
      }
    }

    await this.barCodeProvider.generate(product.id)
  }
}
