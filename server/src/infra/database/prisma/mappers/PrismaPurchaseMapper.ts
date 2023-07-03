import { Purchase } from '@app/entities/Purchase'
import { Purchase as RawPurchase } from '@prisma/client'

export class PrismaPurchaseMapper {
  static toPrisma(purchase: Purchase): RawPurchase {
    return {
      id: purchase.id,
      buyerId: purchase.buyerId,
      productId: purchase.productId,
      paymentMethod: purchase.paymentMethod,
      total: purchase.total,
      productsQty: purchase.productsQty,
      createdAt: purchase.createdAt,
    }
  }

  static toDomain(raw: RawPurchase): Purchase {
    return new Purchase(
      {
        total: raw.total,
        productsQty: raw.productsQty,
        productId: raw.productId,
        buyerId: raw.buyerId,
        paymentMethod: raw.paymentMethod,
        createdAt: raw.createdAt,
      },
      raw.id,
    )
  }
}
