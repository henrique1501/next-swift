import { ProductNotFound } from '@app/errors/ProductNotFound'
import { IProductsRepository } from '@app/repositories/IProductsRepository'

interface Request {
  productId: string
  name: string
  description: string
  width: number
  height: number
  quantity: number
  price: number
  weight: number
}

type Response = void

export class UpdateProductUseCase {
  constructor(private productsRepo: IProductsRepository) {}

  async execute(data: Request): Promise<Response> {
    const {
      productId,
      name,
      description,
      width,
      height,
      quantity,
      price,
      weight,
    } = data

    const product = await this.productsRepo.findById(productId)

    if (!product) {
      throw new ProductNotFound()
    }

    product.name = name
    product.description = description
    product.width = width
    product.height = height
    product.quantity = quantity
    product.price = price
    product.weight = weight
    product.update()

    await this.productsRepo.save(product)
  }
}
