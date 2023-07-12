import { GetManySuppliersUseCase } from '@app/useCases/suppliers/GetManySuppliers'
import { PrismaSuppliersRepository } from '@infra/database/prisma/repositories/PrismaSuppliersRepository'
import { SupplierViewModel } from '@infra/http/viewModels/SupplierViewModel'
import { Request, Response } from 'express'
import { z } from 'zod'

const querySchema = z.object({
  query: z.string().min(3, 'search must have 3 characters or more!'),
  page: z.string().optional(),
  limit: z.string().optional(),
})

export class GetManySuppliersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { query, page = 0, limit = 10 } = querySchema.parse(req.query)

    const suppliersRepo = new PrismaSuppliersRepository()
    const getManySuppliersUseCase = new GetManySuppliersUseCase(suppliersRepo)

    const result = await getManySuppliersUseCase.execute({
      search: String(query),
      page: Number(page),
      limit: Number(limit),
    })

    const suppliers = result.suppliers.map(SupplierViewModel.toHttp)

    res.setHeader('x-total-count', String(suppliers.length))

    return res.json(suppliers)
  }
}
