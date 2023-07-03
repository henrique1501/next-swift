import { Request, Response } from 'express'

import { GetAllCategoriesUseCase } from '@app/useCases/categories/GetAllCategoriesUseCase'

import { PrismaCategoriesRepository } from '@infra/database/prisma/repositories/PrismaCategoriesRepository'
import { CategoryViewModel } from '@infra/http/viewModels/CategoryViewModel'

export class GetAllCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const categoriesRepo = new PrismaCategoriesRepository()
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoriesRepo)

    const data = await getAllCategoriesUseCase.execute()

    const categories = data.categories.map(CategoryViewModel.toHttp)

    return res.json(categories)
  }
}
