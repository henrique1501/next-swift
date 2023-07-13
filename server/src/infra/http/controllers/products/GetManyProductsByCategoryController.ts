import { GetManyProductsByCategoryUseCase } from '@app/useCases/products/GetManyProductsByCategoryUseCase'
import { PrismaCategoriesRepository } from '@infra/database/prisma/repositories/PrismaCategoriesRepository'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { ProductViewModel } from '@infra/http/viewModels/ProductViewModel'
import { Request, Response } from 'express'
import { z } from 'zod'

const querySchema = z.object({
  categoryId: z.string().uuid(),
  page: z.string().optional(),
  limit: z.string().optional(),
})

export class GetManyProductsByCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { categoryId, page = 0, limit = 10 } = querySchema.parse(req.query)

    const productsRepo = new PrismaProductsRepository()
    const categoriesRepo = new PrismaCategoriesRepository()
    const getManyProductsByCategoryUseCase =
      new GetManyProductsByCategoryUseCase(productsRepo, categoriesRepo)

    const result = await getManyProductsByCategoryUseCase.execute({
      categoryId,
      page: Number(page),
      limit: Number(limit),
    })
    const products = result.products.map(ProductViewModel.toHttp)

    res.setHeader('x-total-count', String(products.length))

    return res.json(products)
  }
}
