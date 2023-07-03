import { Supplier } from '@app/entities/Supplier'

export type SupplierPaginateParams = {
  search: string
  page: number
  limit: number
}

export interface ISuppliersRepository {
  findById(supplierId: string): Promise<Supplier | null>
  findByEmail(email: string): Promise<Supplier | null>
  paginate(params: SupplierPaginateParams): Promise<Supplier[] | null>
  create(supplier: Supplier): Promise<void>
  save(supplier: Supplier): Promise<void>
}
