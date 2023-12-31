import { INFEProvider, NFEProviderProps } from '@app/providers/INFEProvider'
import PDFDocument from 'pdfkit'

export class PDFKitNfeProvider implements INFEProvider {
  async generateNFE({
    customerName,
    product,
    total,
  }: NFEProviderProps): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument()

      doc.fontSize(20).text('Nota Fiscal', { align: 'center' })

      doc.fontSize(12).text(`Cliente: ${customerName}`)
      doc.moveDown()

      doc.fontSize(12).text('Itens:')
      doc.moveDown()

      doc.fontSize(10).text(`- ${product.name}: ${product.price}`)
      doc.moveDown()

      doc.fontSize(10).text(`${product.quantity} Unidades`)
      doc.moveDown()

      doc.fontSize(12).text(`Total: R$${total.toFixed(2)}`, { align: 'right' })

      const chunks: Buffer[] = []

      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))

      doc.end()
    })
  }
}
