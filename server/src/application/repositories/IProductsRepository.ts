import { Product } from '@app/entities/Product'

export type PaginateProductParams = {
  categoryId: string
  page: number
  limit: number
}

export type SearchProductParams = {
  startDate: string
  endDate: string
  search: string
  page: number
}

export interface IProductsRepository {
  findById(productId: string): Promise<Product | null>
  create(product: Product): Promise<void>
  save(product: Product): Promise<void>
  paginate(params: PaginateProductParams): Promise<Product[] | null>
  search(params: SearchProductParams): Promise<Product[] | null>
}
