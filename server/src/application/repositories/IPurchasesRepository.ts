import { Purchase } from '@app/entities/Purchase'

export interface PaginateParams {
  startDate: string
  endDate: string
  page: number
  limit: number
}

export interface IPurchasesRepository {
  paginate(params: PaginateParams): Promise<Purchase[] | null>
  create(purchase: Purchase): Promise<void>
}
