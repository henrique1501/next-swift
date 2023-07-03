export interface PDFPurchaseInfo {
  productName: string
  productQty: number
  productPrice: number
}

export interface IPurchasesPDFReportProvider {
  generatePDF(data: PDFPurchaseInfo[]): Promise<Buffer>
}
