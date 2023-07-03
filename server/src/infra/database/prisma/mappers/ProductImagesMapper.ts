import { Image } from '@app/entities/Product/Image'
import { ProductImage } from '@prisma/client'

export class ProductImagesMapper {
  static toPrisma(images: Image[]): ProductImage[] {
    const productImages: ProductImage[] = images.map((image) => {
      return {
        id: image.id,
        url: image.url,
        productId: image.productId,
        createdAt: image.createdAt,
      }
    })

    return productImages
  }

  static toDomain(image: ProductImage): Image {
    return new Image(
      {
        url: image.url,
        productId: image.productId!!,
        createdAt: image.createdAt,
      },
      image.id,
    )
  }
}
