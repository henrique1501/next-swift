/* eslint-disable prefer-const */
import { AppError } from '@app/errors/AppError'
import {
  IPurchasesPDFReportProvider,
  PDFPurchaseInfo,
} from '@app/providers/IPurchasesPDFReportProvider'
import { IProductsRepository } from '@app/repositories/IProductsRepository'
import { IPurchasesRepository } from '@app/repositories/IPurchasesRepository'

interface Request {
  startDate: string
  endDate: string
  page?: number
  limit?: number
}

interface Response {
  buffer: Buffer
}

export class GeneratePDFReportUseCase {
  constructor(
    private purchasesRepo: IPurchasesRepository,
    private productsRepo: IProductsRepository,
    private purchasesPdfReportProvider: IPurchasesPDFReportProvider,
  ) {}

  async execute({
    startDate,
    endDate,
    page = 0,
    limit = 10,
  }: Request): Promise<Response> {
    const purchases = await this.purchasesRepo.paginate({
      startDate,
      endDate,
      page,
      limit,
    })

    if (!purchases) {
      throw new AppError(
        'Report generation is not possible. not enough shopping!',
      )
    }

    let purchasesInfo: PDFPurchaseInfo[] = []

    for (const purchase of purchases) {
      const product = await this.productsRepo.findById(purchase.productId!)

      if (product) {
        purchasesInfo.push({
          productName: product.name,
          productQty: purchase.productsQty,
          productPrice: product.price,
        })
      }
    }

    const buffer = await this.purchasesPdfReportProvider.generatePDF(
      purchasesInfo,
    )

    return {
      buffer,
    }
  }
}
