import { Product } from '@app/entities/Product'

export type PaginateProductParams = {
  categoryId: string
  page: number
  limit: number
}

export interface IProductsRepository {
  findById(productId: string): Promise<Product | null>
  create(product: Product): Promise<void>
  save(product: Product): Promise<void>
  paginate(params: PaginateProductParams): Promise<Product[] | null>
}
