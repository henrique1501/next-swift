import { GetAllProductsUseCase } from '@app/useCases/products/GetAllProductsUseCase'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { Request, Response } from 'express'

export class GetAllProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const productsRepo = new PrismaProductsRepository()
    const getAllProductsUseCase = new GetAllProductsUseCase(productsRepo)

    const result = await getAllProductsUseCase.execute()

    return res.json(result.products)
  }
}
