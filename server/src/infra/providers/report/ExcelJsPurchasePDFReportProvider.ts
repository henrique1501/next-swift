import { Workbook } from 'exceljs'

import {
  ExcelPurchaseInfo,
  IPurchasesExcelReportProvider,
  PurchasesExcelReportData,
} from '@app/providers/IPurchasesExcelReportProvider'
import { randomBytes } from 'node:crypto'
import { resolve } from 'node:path'

export class ExcelJsPurchaseReportProvider
  implements IPurchasesExcelReportProvider
{
  async generateExcel(
    purchases: ExcelPurchaseInfo[],
  ): Promise<PurchasesExcelReportData> {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('Vendas')

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Produto', key: 'productName', width: 30 },
      { header: 'Quantidade', key: 'productQuantity', width: 15 },
      { header: 'Preço', key: 'productPrice', width: 15 },
      { header: 'Total', key: 'total', width: 20 },
    ]

    for (const purchase of purchases) {
      worksheet.addRow({
        id: purchase.id,
        productName: purchase.productName,
        productQuantity: purchase.productQty,
        productPrice: purchase.productPrice,
        total: purchase.total,
      })
    }

    const hash = randomBytes(6).toString('hex')
    const dir = resolve(__dirname, '..', '..', 'uploads', 'report')
    const filename = `${hash}.xlsx`
    const fullFilePath = `${dir}/${filename}`

    await workbook.xlsx.writeFile(fullFilePath, { filename })

    return {
      filename,
      fullFilePath,
    }
  }
}
