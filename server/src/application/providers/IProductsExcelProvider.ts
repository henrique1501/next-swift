export interface ProductData {
  name: string
  description: string
  width: number
  height: number
  quantity: number
  price: number
  weight: number
}

export interface IProductsExcelProvider {
  load(file: Express.Multer.File): Promise<ProductData[]>
}
