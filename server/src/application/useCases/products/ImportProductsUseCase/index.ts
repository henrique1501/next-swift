import { Product } from '@app/entities/Product'
import { IProductsExcelProvider } from '@app/providers/IProductsExcelProvider'
import { IProductsRepository } from '@app/repositories/IProductsRepository'

interface Request {
  file: Express.Multer.File
  authorId: string
}

type Response = void

export class ImportProductUseCase {
  constructor(
    private productsRepo: IProductsRepository,
    private productsExcelProvider: IProductsExcelProvider,
  ) {}

  async execute({ file, authorId }: Request): Promise<Response> {
    const products = await this.productsExcelProvider.load(file)

    products.forEach(async (productData) => {
      const { name, description, width, height, quantity, price, weight } =
        productData

      const product = new Product({
        name,
        description,
        width,
        height,
        quantity,
        price,
        weight,
        authorId,
        images: null,
        categories: null,
      })

      await this.productsRepo.create(product)
    })
  }
}
