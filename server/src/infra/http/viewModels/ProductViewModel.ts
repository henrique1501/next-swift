import { Product } from '@app/entities/Product'
import { env } from '@infra/env'

export class ProductViewModel {
  static toHttp(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      width: product.width,
      height: product.height,
      quantity: product.quantity,
      weight: product.weight,
      categories: product.categories?.map((category) => {
        return {
          id: category.id,
          name: category.name,
        }
      }),
      images: product.images?.map((image) => {
        return {
          id: image.id,
          url: `${env.APP_BASE_URL}/images/product/${image.url}`,
        }
      }),
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  }
}
