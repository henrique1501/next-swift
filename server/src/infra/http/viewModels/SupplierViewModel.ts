import { Supplier } from '@app/entities/Supplier'

export class SupplierViewModel {
  static toHttp(supplier: Supplier) {
    return {
      id: supplier.id,
      name: supplier.name,
      email: supplier.email,
      ddd: supplier.ddd,
      phone: supplier.phone,
    }
  }
}
