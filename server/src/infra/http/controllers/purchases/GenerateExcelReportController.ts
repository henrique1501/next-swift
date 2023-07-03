import { Request, Response } from 'express'
import fs from 'node:fs'
import { z } from 'zod'

import { GenerateExcelReportUseCase } from '@app/useCases/purchases/GenerateExcelReportUseCase'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { PrismaPurchasesRepository } from '@infra/database/prisma/repositories/PrismaPurchasesRepository'
import { ExcelJsPurchaseReportProvider } from '@infra/providers/report/ExcelJsPurchasePDFReportProvider'

const querySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
})

const bodySchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
})

export class GenerateExcelReportController {
  async handle(req: Request, res: Response): Promise<void> {
    const { page = 0, limit = 10 } = querySchema.parse(req.query)
    const { startDate, endDate } = bodySchema.parse(req.body)

    const purchasesRepo = new PrismaPurchasesRepository()
    const productsRepo = new PrismaProductsRepository()
    const purchasesExcelReportProvider = new ExcelJsPurchaseReportProvider()
    const generateExcelReportUseCase = new GenerateExcelReportUseCase(
      purchasesRepo,
      productsRepo,
      purchasesExcelReportProvider,
    )

    const { filename, fullFilePath } = await generateExcelReportUseCase.execute(
      {
        startDate,
        endDate,
        page: Number(page),
        limit: Number(limit),
      },
    )

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    )
    res.setHeader('Content-Disposition', `${filename}`)

    res.download(fullFilePath)

    await fs.promises.unlink(fullFilePath)
  }
}
