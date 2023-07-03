import { Category } from '@app/entities/Category'
import { Product } from '@app/entities/Product'
import { Image } from '@app/entities/Product/Image'
import {
  ProductImage,
  Category as RawCategory,
  Product as RawProduct,
} from '@prisma/client'

interface ProductData {
  product: RawProduct
  images: ProductImage[]
  categories: RawCategory[]
}

export class PrismaProductMapper {
  static toPrisma(product: Product): RawProduct {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      width: product.width,
      height: product.height,
      price: product.price,
      quantity: product.quantity,
      weight: product.weight,
      authorId: product.authorId,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt ?? null,
      removedAt: product.removedAt ?? null,
    }
  }

  static toDomain(data: ProductData): Product {
    const images = data.images.map(
      (image) =>
        new Image(
          {
            url: image.url,
            createdAt: image.createdAt,
          },
          image.id,
        ),
    )

    const categories = data.categories.map(
      (category) =>
        new Category(
          {
            name: category.name,
            productId: category.productId,
            createdAt: category.createdAt,
          },
          category.id,
        ),
    )

    return new Product(
      {
        name: data.product.name,
        description: data.product.description,
        width: data.product.width,
        height: data.product.height,
        weight: data.product.weight,
        price: data.product.price,
        quantity: data.product.quantity,
        authorId: data.product.authorId,
        images,
        categories,
        createdAt: data.product.createdAt,
        updatedAt: data.product.updatedAt,
        removedAt: data.product.removedAt,
      },
      data.product.id,
    )
  }
}
