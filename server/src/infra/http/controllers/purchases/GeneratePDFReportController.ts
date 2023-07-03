import { GeneratePDFReportUseCase } from '@app/useCases/purchases/GeneratePDFReportUseCase'
import { PrismaProductsRepository } from '@infra/database/prisma/repositories/PrismaProductsRepository'
import { PrismaPurchasesRepository } from '@infra/database/prisma/repositories/PrismaPurchasesRepository'
import { PDFKitPurchaseReportProvider } from '@infra/providers/report/PDFKitPurchasePDFReportProvider'
import { randomBytes } from 'crypto'
import { Request, Response } from 'express'
import { z } from 'zod'

const querySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
})

const bodySchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
})

export class GeneratePDFReportController {
  async handle(req: Request, res: Response): Promise<void> {
    const { page = 0, limit = 10 } = querySchema.parse(req.query)
    const { startDate, endDate } = bodySchema.parse(req.body)

    const purchasesRepo = new PrismaPurchasesRepository()
    const productsRepo = new PrismaProductsRepository()
    const purchasesPdfReportProvider = new PDFKitPurchaseReportProvider()
    const generatePDFReportUseCase = new GeneratePDFReportUseCase(
      purchasesRepo,
      productsRepo,
      purchasesPdfReportProvider,
    )

    const { buffer } = await generatePDFReportUseCase.execute({
      startDate,
      endDate,
      page: Number(page),
      limit: Number(limit),
    })

    const hash = randomBytes(6).toString('hex')
    const filename = `${hash}-report.pdf`

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`)

    res.send(buffer)
  }
}
