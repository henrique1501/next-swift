import { Router } from 'express'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { is } from '../middlewares/permissions'

import { BuyProductController } from '../controllers/purchases/BuyProductController'
import { GenerateExcelReportController } from '../controllers/purchases/GenerateExcelReportController'
import { GeneratePDFReportController } from '../controllers/purchases/GeneratePDFReportController'

const buyProductController = new BuyProductController()
const generatePDFReportController = new GeneratePDFReportController()
const generateExcelReportController = new GenerateExcelReportController()

const purchasesRoute = Router()

purchasesRoute.post(
  '/product/:productId',
  ensureAuthenticated,
  is(['admin', 'sub-admin']),
  buyProductController.handle,
)

purchasesRoute.post(
  '/report/pdf',
  ensureAuthenticated,
  is(['admin']),
  generatePDFReportController.handle,
)

purchasesRoute.get(
  '/report/excel',
  ensureAuthenticated,
  is(['admin']),
  generateExcelReportController.handle,
)

export { purchasesRoute as purchasesRoutes }
