import { Category } from '@app/entities/Category'
import { Category as RawCategory } from '@prisma/client'

export class PrismaCategoriesMapper {
  static toPrisma(category: Category): RawCategory {
    return {
      id: category.id,
      name: category.name,
      productId: category.productId,
      createdAt: category.createdAt,
    }
  }

  static toDomain(raw: RawCategory): Category {
    return new Category(
      {
        name: raw.name,
        productId: raw.productId,
        createdAt: raw.createdAt,
      },
      raw.id,
    )
  }
}
