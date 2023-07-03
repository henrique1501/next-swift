import { Request, Response } from 'express'

import { ImportProductUseCase } from '@app/useCases/products/ImportProductsUseCase'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { FastCsvProductsExcelProvider } from '@infra/providers/excel/FastCsvProductsExcelProvider'

export class ImportProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const authorId = req.employee.id
    const file = req.file as Express.Multer.File

    const productsRepo = new PrismaProductsRepository()
    const productsExcelProvider = new FastCsvProductsExcelProvider()
    const importProductUseCase = new ImportProductUseCase(
      productsRepo,
      productsExcelProvider,
    )

    await importProductUseCase.execute({ file, authorId })

    return res.status(201).json({ message: 'product added succesfuly!' })
  }
}
